export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  coverColor: string;
  image?: string;
}

export const posts: Post[] = [
  {
    id: "1",
    slug: "mastering-nextjs-app-router",
    title: "Mastering the Next.js 14 App Router",
    excerpt:
      "A deep dive into Next.js 14's App Router — layouts, server components, streaming, and the mental model shift from Pages Router.",
    image: "/blog/nextjs-app-router.svg",
    content: `
# Mastering the Next.js 14 App Router

The App Router represents the biggest paradigm shift in Next.js since the framework was created. Let's break down everything you need to know.

## What Changed?

The App Router moves from a file-system based pages directory to an \`app\` directory with a fundamentally different mental model. Every component is a **Server Component by default**.

## Server vs Client Components

\`\`\`tsx
// Server Component (default)
async function BlogList() {
  const posts = await db.posts.findMany();
  return <ul>{posts.map(p => <li key={p.id}>{p.title}</li>)}</ul>;
}

// Client Component
'use client';
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
\`\`\`

## Layouts and Nested Routing

Layouts in the App Router persist across navigations — they don't remount. This is a massive performance win for sidebars, headers, and other persistent UI.

## Streaming with Suspense

With the App Router, you get streaming out of the box. Wrap slow data fetches in \`<Suspense>\` and Next.js will stream the UI progressively.

## Conclusion

The App Router takes some adjustment but delivers serious performance and developer experience improvements. Embrace Server Components, lean on streaming, and think in terms of data + UI co-location.
    `,
    date: "2024-07-10",
    readTime: "8 min read",
    tags: ["Next.js", "React", "TypeScript"],
    coverColor: "from-[#41b883] to-[#2d9768]",
  },
  {
    id: "2",
    slug: "advanced-framer-motion-patterns",
    title: "Advanced Framer Motion Animation Patterns",
    excerpt:
      "Level up your React animations with shared layout animations, AnimatePresence, and gesture-driven interactions using Framer Motion.",
    image: "/blog/framer-motion-patterns.svg",
    content: `
# Advanced Framer Motion Animation Patterns

Framer Motion is the go-to animation library for React. Beyond the basics, there are powerful patterns that can make your UI feel truly polished.

## Shared Layout Animations

The \`layoutId\` prop is magic — it allows components to animate seamlessly between positions even when they're in completely different parts of the tree.

\`\`\`tsx
<motion.div layoutId="active-pill" className="active-tab-indicator" />
\`\`\`

## AnimatePresence for Exit Animations

React doesn't support exit animations out of the box. \`AnimatePresence\` solves this by keeping components mounted until their exit animation completes.

## Gesture Animations

Combine \`whileHover\`, \`whileTap\`, and \`whileDrag\` for delightful interactions:

\`\`\`tsx
<motion.button
  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(65,184,131,0.5)" }}
  whileTap={{ scale: 0.98 }}
>
  Click me
</motion.button>
\`\`\`

## Stagger Children

Use \`staggerChildren\` in a parent \`variants\` object to create cascade animations without wiring up delay manually.

## Conclusion

These patterns turn ordinary React UIs into experiences. Master \`layoutId\`, \`AnimatePresence\`, and variants, and you'll have all the tools you need.
    `,
    date: "2024-06-22",
    readTime: "6 min read",
    tags: ["React", "Animation", "Framer Motion"],
    coverColor: "from-[#3dd68c] to-[#00c9ff]",
  },
  {
    id: "3",
    slug: "building-design-systems-tailwind",
    title: "Building a Design System with Tailwind CSS",
    excerpt:
      "How to architect a scalable design system using Tailwind CSS — tokens, component variants with CVA, and dark mode strategy.",
    image: "/blog/tailwind-design-system.svg",
    content: `
# Building a Design System with Tailwind CSS

A good design system is a force multiplier. Here's how to build one that scales using Tailwind CSS.

## Design Tokens First

Start with your design tokens — colors, spacing, typography, shadows. In Tailwind, these live in \`tailwind.config.ts\`:

\`\`\`ts
theme: {
  extend: {
    colors: {
      brand: {
        DEFAULT: '#41b883',
        dark: '#2d9768',
      }
    }
  }
}
\`\`\`

## Component Variants with CVA

Class Variance Authority (CVA) is the best way to manage component variants:

\`\`\`ts
const button = cva('base-styles', {
  variants: {
    intent: {
      primary: 'btn-primary',
      outline: 'btn-outline',
    },
    size: {
      sm: 'px-3 py-1.5 text-xs',
      md: 'px-6 py-3 text-sm',
    }
  }
});
\`\`\`

## Dark Mode Strategy

Use CSS custom properties (variables) for colors that change between themes, and drive them from your \`.dark\` class.

## Conclusion

Tailwind's utility-first approach actually encourages good design system thinking — you're forced to define tokens, stay consistent, and co-locate styles with components.
    `,
    date: "2024-05-18",
    readTime: "7 min read",
    tags: ["Tailwind", "Design Systems", "CSS"],
    coverColor: "from-[#41b883] to-[#1a6e4a]",
  },
  {
    id: "4",
    slug: "nodejs-performance-at-scale",
    title: "Node.js Performance Patterns at Scale",
    excerpt:
      "From event loop optimization to clustering, caching strategies, and profiling — how to squeeze every millisecond out of a Node.js service.",
    image: "/blog/nodejs-performance.svg",
    content: `
# Node.js Performance Patterns at Scale

Performance isn't an afterthought — it's a design decision. Here are the patterns that matter most in production Node.js services.

## Understanding the Event Loop

Node.js is single-threaded, but non-blocking I/O makes it incredibly efficient. The key is never blocking the event loop with CPU-intensive work.

## Worker Threads for CPU Work

For CPU-bound tasks, offload to worker threads:

\`\`\`ts
import { Worker } from 'worker_threads';

function runHeavyTask(data: any) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./heavy-task.js', { workerData: data });
    worker.on('message', resolve);
    worker.on('error', reject);
  });
}
\`\`\`

## Redis Caching Strategy

Cache aggressively. Use a cache-aside pattern with TTL:

\`\`\`ts
async function getUser(id: string) {
  const cached = await redis.get(\`user:\${id}\`);
  if (cached) return JSON.parse(cached);

  const user = await db.users.findById(id);
  await redis.setex(\`user:\${id}\`, 3600, JSON.stringify(user));
  return user;
}
\`\`\`

## Connection Pooling

Always use connection pools for databases. A single PostgreSQL connection is a bottleneck; a pool of 20 is a server.

## Conclusion

Profile first, optimize second. Node.js is fast by default — the bottlenecks are usually I/O, blocking code, or poor caching strategy.
    `,
    date: "2024-04-05",
    readTime: "10 min read",
    tags: ["Node.js", "Performance", "Backend"],
    coverColor: "from-[#2d9768] to-[#41b883]",
  },
  {
    id: "5",
    slug: "css-grid-mastery",
    title: "CSS Grid Mastery: Build Any Layout",
    excerpt:
      "CSS Grid is the most powerful layout system ever added to CSS. Learn named areas, subgrid, auto-fill/minmax, and alignment to build any layout without media queries.",
    image: "/blog/css-grid-mastery.svg",
    content: `
# CSS Grid Mastery: Build Any Layout

CSS Grid is the most powerful layout system ever added to CSS. It's not just for simple grids — it's a two-dimensional system that can handle virtually any layout you can imagine.

## The Mental Model

Think of CSS Grid as defining a coordinate system on a container, then placing items within that system. You work in two dimensions simultaneously: rows and columns.

## Defining a Grid

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 1.5rem;
}
\`\`\`

The \`fr\` unit (fraction) is one of Grid's killer features — it distributes available space proportionally after fixed sizes are accounted for.

## The repeat() and minmax() Combo

\`\`\`css
grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
\`\`\`

This single line creates a fully responsive grid with no media queries. Cards wrap when they can't fit at their minimum size, and expand to fill available space.

## Spanning Across Tracks

\`\`\`css
.hero-card {
  grid-column: 1 / -1;  /* span full width */
}

.wide-card {
  grid-column: span 2;
}

.tall-card {
  grid-row: span 2;
}
\`\`\`

Using \`-1\` means "the last line" — you don't need to know how many columns exist.

## Named Grid Areas

Named areas transform CSS Grid into a self-documenting layout system:

\`\`\`css
.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-columns: 240px 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }
\`\`\`

The ASCII art in your CSS is now your layout documentation.

## Alignment Deep Dive

Grid gives you full control over alignment in both dimensions:

\`\`\`css
.container {
  align-items: center;
  justify-items: start;
  align-content: space-between;
  justify-content: center;
}

.special-item {
  align-self: end;
  justify-self: stretch;
}
\`\`\`

## Implicit vs Explicit Grid

The explicit grid is what you define. The implicit grid is what the browser creates automatically for overflow items:

\`\`\`css
.container {
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 200px;
  grid-auto-flow: dense; /* pack items to fill holes */
}
\`\`\`

\`grid-auto-flow: dense\` is a powerful tool for masonry-like layouts where you want to fill gaps left by spanning items.

## Subgrid: The Game Changer

CSS Subgrid (now supported in all modern browsers) solves the "align across cards" problem:

\`\`\`css
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.card {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3; /* header, body, footer */
}
\`\`\`

Now all card headers, bodies, and footers align across the row — previously impossible without JavaScript.

## Real-World Layout: Magazine Layout

\`\`\`css
.magazine {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
}

.featured    { grid-column: 1 / 4; grid-row: 1 / 3; }
.secondary-1 { grid-column: 4 / 6; }
.secondary-2 { grid-column: 6 / 7; }
.full-width  { grid-column: 1 / -1; }
\`\`\`

## Grid vs Flexbox

Use **Grid** when:
- You're working in two dimensions
- The layout drives the content (grid-first design)
- You need precise placement of items

Use **Flexbox** when:
- You're working in one dimension
- Content drives the layout (content-first)
- You need flexible wrapping and distribution

They work beautifully together — Grid for macro layout, Flexbox for component-level alignment.

## Conclusion

CSS Grid has transformed how we build layouts. The auto-fill/minmax pattern eliminates most media queries for grid layouts. Named areas make layouts readable. Subgrid finally makes cross-card alignment trivial. Invest the time to truly understand Grid and you'll find yourself writing significantly less layout code.
    `,
    date: "2024-03-20",
    readTime: "9 min read",
    tags: ["CSS", "Layout", "Frontend"],
    coverColor: "from-[#41b883] to-[#0a4d35]",
  },
  {
    id: "6",
    slug: "react-performance-deep-dive",
    title: "React Performance Deep Dive",
    excerpt:
      "From React.memo and useMemo to virtualization, bundle splitting, and the Profiler — a complete guide to finding and fixing React performance bottlenecks.",
    image: "/blog/react-performance.svg",
    content: `
# React Performance Deep Dive

React is fast by default, but as your app grows, knowing where and how to optimize becomes essential. Let's dig into the tools and patterns that make a real difference.

## Understanding Re-renders

The root cause of most React performance issues is unnecessary re-renders. A component re-renders when:

1. Its state changes
2. Its parent re-renders
3. Its context changes

The key insight: not all re-renders are bad — only the ones doing expensive work.

## React.memo: The Boundary

\`\`\`tsx
const ProductCard = React.memo(function ProductCard({ product }: Props) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>\${product.price}</p>
    </div>
  );
});
\`\`\`

\`React.memo\` performs a shallow comparison of props. If nothing changed, the component skips re-rendering. Use it on components that render frequently, receive stable props, and have expensive render work.

## useMemo for Expensive Computations

\`\`\`tsx
const expensiveResult = useMemo(() => {
  return products
    .filter(p => p.category === activeCategory)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 20);
}, [products, activeCategory]);
\`\`\`

The dependency array is the contract: React only recomputes when these values change. Don't over-use \`useMemo\` — the memoization itself has a cost.

## useCallback for Stable References

\`\`\`tsx
const handleAddToCart = useCallback((productId: string) => {
  setCart(prev => ({
    ...prev,
    [productId]: (prev[productId] ?? 0) + 1
  }));
}, []); // stable reference — empty deps because setCart is stable
\`\`\`

This matters because functions created in render are new references every time. If you pass \`handleAddToCart\` to a \`React.memo\`-wrapped child, it will re-render on every parent render unless the callback is stable.

## The Profiler: Measure First

Always profile before optimizing. React DevTools Profiler shows:
- Which components rendered
- How long each render took
- Why each component rendered

Use it with the "Record why each component rendered" option enabled. You'll often find the bottleneck is not where you thought.

## Code Splitting with lazy()

\`\`\`tsx
const HeavyDashboard = lazy(() => import('./HeavyDashboard'));

function App() {
  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <HeavyDashboard />
    </Suspense>
  );
}
\`\`\`

Next.js handles this automatically for pages, but within pages you can still manually split large components.

## Virtualization for Long Lists

\`\`\`tsx
import { FixedSizeList as List } from 'react-window';

function ProductList({ products }: { products: Product[] }) {
  return (
    <List
      height={600}
      itemCount={products.length}
      itemSize={80}
      width="100%"
    >
      {({ index, style }) => (
        <div style={style}>
          <ProductRow product={products[index]} />
        </div>
      )}
    </List>
  );
}
\`\`\`

Rendering 10,000 DOM nodes is always slow. \`react-window\` renders only what's visible, making huge lists instant.

## Context: The Hidden Culprit

Every consumer of a context re-renders when that context changes. Split contexts by update frequency:

\`\`\`tsx
// Instead of one context with everything — split them:
const UserContext  = createContext(user);   // rarely changes
const ThemeContext = createContext(theme);  // changes on toggle
const CartContext  = createContext(cart);   // changes on add/remove
\`\`\`

## The Bundle Size Impact

Lighthouse measures Total Blocking Time — large bundles block the main thread. Target initial JS under 200KB gzipped. Use \`next/bundle-analyzer\` to visualize your bundle:

\`\`\`bash
ANALYZE=true next build
\`\`\`

## Conclusion

Performance optimization in React follows a simple order: measure, identify, optimize, measure again. The biggest wins come from preventing unnecessary re-renders at component boundaries, splitting large bundles, and virtualizing long lists. These three techniques will handle 95% of real-world performance problems.
    `,
    date: "2024-03-01",
    readTime: "10 min read",
    tags: ["React", "Performance", "Frontend"],
    coverColor: "from-[#41b883] to-[#3dd68c]",
  },
  {
    id: "7",
    slug: "css-animations-transitions",
    title: "CSS Animations & Transitions: The Complete Guide",
    excerpt:
      "Master @keyframes, cubic-bezier easing, GPU-composited properties, and the new scroll-driven animations API to build buttery-smooth UI motion.",
    image: "/blog/css-animations.svg",
    content: `
# CSS Animations & Transitions: The Complete Guide

Animations make interfaces feel alive. Done right, they guide attention, provide feedback, and make your UI feel polished. Done wrong, they're distracting and slow. Here's everything you need to know.

## Transitions: The Simple Path

CSS transitions animate between two defined states:

\`\`\`css
.button {
  background: #41b883;
  transform: translateY(0);
  box-shadow: 0 4px 12px transparent;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.button:hover {
  background: #3dd68c;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(65, 184, 131, 0.4);
}
\`\`\`

Always specify exactly which properties to transition rather than \`transition: all\` — \`all\` can catch expensive properties like \`width\` and \`height\` that trigger layout.

## Easing Functions: The Soul of Animation

\`\`\`css
transition: transform 0.3s ease;          /* slow → fast → slow */
transition: transform 0.3s ease-out;      /* fast → slow (most natural) */
transition: transform 0.3s ease-in;       /* slow → fast (enter animations) */
transition: transform 0.3s linear;        /* constant speed (loaders) */

/* Custom cubic-bezier */
transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
\`\`\`

\`ease-out\` is your workhorse. It feels natural because it mimics how physical objects decelerate.

## @keyframes: Full Control

When you need more than two states, reach for \`@keyframes\`:

\`\`\`css
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  animation: fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
}
\`\`\`

The \`both\` fill mode means the animation's start state applies before it runs and the end state applies after it finishes.

## Staggered Animations with Custom Properties

\`\`\`css
.item {
  animation: fadeUp 0.5s ease-out both;
  animation-delay: calc(var(--i) * 0.1s);
}
\`\`\`

\`\`\`html
<li class="item" style="--i: 0">First</li>
<li class="item" style="--i: 1">Second</li>
<li class="item" style="--i: 2">Third</li>
\`\`\`

CSS custom properties make stagger animations trivial without JavaScript.

## GPU-Accelerated Properties

Some CSS properties are cheap, others are expensive. The GPU-composited properties are:

- \`transform\` (translate, rotate, scale)
- \`opacity\`
- \`filter\`

Everything else — \`width\`, \`height\`, \`top\`, \`left\`, \`margin\` — triggers layout recalculation. Always animate \`transform\` instead of positional properties:

\`\`\`css
/* ❌ Slow — triggers layout */
.bad  { transition: left 0.3s ease; }

/* ✅ Fast — GPU composited */
.good { transition: transform 0.3s ease; }
\`\`\`

## The will-change Hint

\`\`\`css
.animated-element {
  will-change: transform;
}
\`\`\`

This tells the browser to promote the element to its own compositor layer in advance. Use it sparingly — every promoted layer consumes GPU memory.

## Scroll-Driven Animations (CSS-Native)

The new \`animation-timeline\` property enables scroll-driven animations without JavaScript:

\`\`\`css
@keyframes fadeInSlide {
  from { opacity: 0; translate: 0 40px; }
  to   { opacity: 1; translate: 0 0; }
}

.section {
  animation: fadeInSlide linear both;
  animation-timeline: view();
  animation-range: entry 0% entry 40%;
}
\`\`\`

\`view()\` ties the animation to the element's position in the viewport.

## Respecting User Preferences

Always respect the \`prefers-reduced-motion\` media query:

\`\`\`css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
\`\`\`

Some users experience vestibular disorders where motion causes physical discomfort. This is an accessibility requirement, not optional.

## Animation Performance Checklist

1. Only animate \`transform\` and \`opacity\` for composited animations
2. Use \`will-change: transform\` on elements that animate frequently
3. Test on low-end devices — animations that run at 60fps on a MacBook may drop frames on budget phones
4. Use the browser's Performance tab to identify dropped frames
5. Keep UI animation durations between 150ms and 500ms

## Conclusion

CSS animations are one of the most powerful tools in the frontend toolkit. The key principles: use \`ease-out\` for UI feedback, always animate composited properties, stagger with custom properties, and always provide a \`prefers-reduced-motion\` fallback. Master these fundamentals and you'll write animations that feel effortless.
    `,
    date: "2024-02-14",
    readTime: "8 min read",
    tags: ["CSS", "Animation", "Frontend"],
    coverColor: "from-[#3dd68c] to-[#41b883]",
  },
  {
    id: "8",
    slug: "typescript-generics-frontend",
    title: "TypeScript Generics for Frontend Devs",
    excerpt:
      "Generics are the feature that turns TypeScript from type annotations into a real type system. Learn generic functions, constrained types, generic React components, hooks, and utility types.",
    image: "/blog/typescript-generics.svg",
    content: `
# TypeScript Generics for Frontend Devs

Generics are the feature that takes TypeScript from "type annotations" to a true type system. They let you write functions and types that work over a variety of types while maintaining full type safety.

## The Problem Generics Solve

Without generics, you'd write this:

\`\`\`ts
function getFirstNumber(arr: number[]): number { return arr[0]; }
function getFirstString(arr: string[]): string { return arr[0]; }
\`\`\`

With generics, one function handles any type:

\`\`\`ts
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

const num = getFirst([1, 2, 3]);        // TypeScript infers T = number
const str = getFirst(['a', 'b', 'c']);  // TypeScript infers T = string
\`\`\`

TypeScript infers \`T\` from the argument — you rarely need to specify it explicitly.

## Generic Interfaces

\`\`\`ts
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
  timestamp: string;
}

type UserResponse      = ApiResponse<User>;
type PostsResponse     = ApiResponse<Post[]>;
type PaginatedResponse<T> = ApiResponse<{ items: T[]; total: number; page: number }>;
\`\`\`

This pattern eliminates the need for \`any\` in API response typing — one of the most common sources of type safety leaks.

## Constraints with extends

Constrain what types can be used as a generic parameter:

\`\`\`ts
interface HasId {
  id: string | number;
}

function findById<T extends HasId>(items: T[], id: string | number): T | undefined {
  return items.find(item => item.id === id);
}
\`\`\`

\`\`\`ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: 'Mehran', age: 28, role: 'admin' };
const name = getProperty(user, 'name');   // type: string ✓
const age  = getProperty(user, 'age');    // type: number ✓
// getProperty(user, 'email');            // Error: not in User ✓
\`\`\`

## Generic React Components

\`\`\`tsx
interface SelectProps<T> {
  options: T[];
  value: T | null;
  onChange: (value: T) => void;
  getLabel: (option: T) => string;
  getValue: (option: T) => string | number;
}

function Select<T>({ options, value, onChange, getLabel, getValue }: SelectProps<T>) {
  return (
    <select
      value={value ? String(getValue(value)) : ''}
      onChange={e => {
        const selected = options.find(o => String(getValue(o)) === e.target.value);
        if (selected) onChange(selected);
      }}
    >
      {options.map(option => (
        <option key={String(getValue(option))} value={String(getValue(option))}>
          {getLabel(option)}
        </option>
      ))}
    </select>
  );
}

// Usage — fully typed, no casting
<Select
  options={users}
  value={selectedUser}
  onChange={setSelectedUser}
  getLabel={u => u.name}
  getValue={u => u.id}
/>
\`\`\`

## Generic Custom Hooks

\`\`\`ts
function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [stored, setStored] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    setStored(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [stored, setValue];
}

// Usage
const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('theme', 'light');
const [cart,  setCart]  = useLocalStorage<CartItem[]>('cart', []);
\`\`\`

## Utility Types: Your Daily Toolkit

TypeScript ships with generic utility types that transform existing types:

\`\`\`ts
interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  createdAt: Date;
}

type CreateUserDTO  = Omit<User, 'id' | 'createdAt'>;
// { name: string; email: string; role: 'admin' | 'user' }

type UpdateUserDTO  = Partial<Pick<User, 'name' | 'email' | 'role'>>;
// { name?: string; email?: string; role?: 'admin' | 'user' }

type ReadonlyUser   = Readonly<User>;
// All properties become readonly

type UserRole = User['role'];  // 'admin' | 'user'
type UserKeys = keyof User;    // 'id' | 'name' | 'email' | 'role' | 'createdAt'
\`\`\`

## Conditional Types

\`\`\`ts
type IsArray<T> = T extends any[] ? true : false;
type Test1 = IsArray<string[]>;  // true
type Test2 = IsArray<string>;    // false

// Unwrap array element type
type Unpack<T> = T extends (infer U)[] ? U : T;
type StringFromArray = Unpack<string[]>;  // string
\`\`\`

## Conclusion

Generics are not an advanced TypeScript feature to defer — they're the key to writing reusable, type-safe utilities. Master generic functions (\`T\`), constrained generics (\`T extends Something\`), and utility types (\`Partial\`, \`Pick\`, \`Omit\`) and you'll eliminate 90% of \`any\` usage from your codebase. The investment pays dividends on every large TypeScript project.
    `,
    date: "2024-01-28",
    readTime: "11 min read",
    tags: ["TypeScript", "React", "Frontend"],
    coverColor: "from-[#41b883] to-[#00c9ff]",
  },
  {
    id: "9",
    slug: "web-accessibility-react",
    title: "Web Accessibility in React: Building for Everyone",
    excerpt:
      "A practical guide to semantic HTML, ARIA roles, keyboard navigation, focus management in SPAs, and screen reader testing — making your React app work for everyone.",
    image: "/blog/web-accessibility.svg",
    content: `
# Web Accessibility in React: Building for Everyone

Accessibility (a11y) isn't a checklist item — it's a commitment to ensuring your app works for everyone, regardless of ability or assistive technology.

## Why Accessibility Matters

1.5 billion people globally have some form of disability. In many jurisdictions, web accessibility is a legal requirement (ADA, WCAG, EN 301 549). But beyond compliance: accessible code is better code. Better semantics, better keyboard navigation, and better screen reader support all lead to better SEO and overall user experience.

## Semantic HTML: The Foundation

Semantic HTML is the best accessibility tool you have. Before reaching for ARIA, use the right HTML element:

\`\`\`tsx
// ❌ Non-semantic
<div onClick={handleSubmit} className="btn">Submit</div>

// ✅ Semantic — keyboard accessible, announced as button, focusable
<button type="submit">Submit</button>
\`\`\`

\`\`\`tsx
// ❌ Generic container
<div className="article">
  <div className="title">Blog Post Title</div>
</div>

// ✅ Semantic structure, navigable by screen reader
<article>
  <h1>Blog Post Title</h1>
</article>
\`\`\`

The rule: if a native HTML element does what you need, use it.

## ARIA: When Semantics Aren't Enough

ARIA (Accessible Rich Internet Applications) attributes extend HTML semantics for complex interactive patterns:

\`\`\`tsx
<div role="tablist" aria-label="Content tabs">
  <button
    role="tab"
    aria-selected={activeTab === 'overview'}
    aria-controls="tab-overview"
    id="tab-btn-overview"
    onClick={() => setActiveTab('overview')}
  >
    Overview
  </button>
</div>

<div
  role="tabpanel"
  id="tab-overview"
  aria-labelledby="tab-btn-overview"
  hidden={activeTab !== 'overview'}
>
  {/* content */}
</div>
\`\`\`

Key ARIA attributes:
- \`aria-label\` / \`aria-labelledby\` — name an element
- \`aria-describedby\` — associate longer descriptions
- \`aria-expanded\` — indicate open/closed state
- \`aria-live\` — announce dynamic content updates
- \`aria-hidden\` — hide from assistive technology

## Keyboard Navigation

Every interactive element must be keyboard accessible. A complete custom dropdown:

\`\`\`tsx
const handleKeyDown = (e: React.KeyboardEvent) => {
  switch (e.key) {
    case 'ArrowDown':
      e.preventDefault();
      setFocused(f => Math.min(f + 1, options.length - 1));
      break;
    case 'ArrowUp':
      e.preventDefault();
      setFocused(f => Math.max(f - 1, 0));
      break;
    case 'Enter':
      onChange(options[focused]);
      setOpen(false);
      break;
    case 'Escape':
      setOpen(false);
      break;
  }
};
\`\`\`

## Focus Management in SPAs

Single-page applications can confuse screen reader users — page transitions don't announce new content:

\`\`\`tsx
function RouteAnnouncer() {
  const pathname = usePathname();
  const [announcement, setAnnouncement] = useState('');

  useEffect(() => {
    const title = document.title || pathname;
    setAnnouncement(\`Navigated to \${title}\`);
  }, [pathname]);

  return (
    <div aria-live="polite" aria-atomic="true" className="sr-only">
      {announcement}
    </div>
  );
}
\`\`\`

When a modal opens, move focus into it. When it closes, return focus to the trigger:

\`\`\`tsx
useEffect(() => {
  if (isOpen) {
    const firstFocusable = dialogRef.current?.querySelector<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    firstFocusable?.focus();
  } else {
    triggerRef.current?.focus();
  }
}, [isOpen]);
\`\`\`

## Color Contrast and Visual Design

WCAG AA requires:
- Normal text: 4.5:1 contrast ratio
- Large text (18px+ or 14px+ bold): 3:1 contrast ratio
- UI components (inputs, buttons): 3:1 against background

Never rely solely on color to convey information:

\`\`\`tsx
// ❌ Color alone
<span style={{ color: 'red' }}>Error in field</span>

// ✅ Icon + color + text
<span className="text-red-500 flex items-center gap-1">
  <AlertCircle size={14} aria-hidden="true" />
  <span>Email address is required</span>
</span>
\`\`\`

## Accessible Forms

\`\`\`tsx
<div className="field">
  <label htmlFor="email">
    Email address
    <span aria-hidden="true"> *</span>
    <span className="sr-only"> (required)</span>
  </label>
  <input
    id="email"
    type="email"
    aria-describedby="email-hint email-error"
    aria-invalid={!!errors.email}
    aria-required="true"
  />
  <p id="email-hint" className="hint">We'll never share your email.</p>
  {errors.email && (
    <p id="email-error" role="alert" className="error">
      {errors.email.message}
    </p>
  )}
</div>
\`\`\`

## Screen Reader Testing

Use real screen readers to test your UI:
- **NVDA** (Windows, free) with Firefox
- **VoiceOver** (Mac/iOS, built-in) with Safari
- **TalkBack** (Android, built-in) for mobile

Key test scenarios:
1. Can you navigate the page using only Tab/Shift+Tab?
2. Are all form fields labeled?
3. Are modal dialogs trap-focused?
4. Are dynamic content changes announced?
5. Do images have meaningful alt text?

## Conclusion

Accessibility is a craft, not a checklist. Start with semantic HTML, layer ARIA where needed, ensure complete keyboard navigation, manage focus in SPAs, and test with real screen readers. Building accessibly from the start is significantly cheaper than retrofitting it later — and it makes your product genuinely better for everyone who uses it.
    `,
    date: "2023-12-10",
    readTime: "12 min read",
    tags: ["Accessibility", "React", "Frontend"],
    coverColor: "from-[#41b883] to-[#3dd68c]",
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
