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
}

export const posts: Post[] = [
  {
    id: "1",
    slug: "mastering-nextjs-app-router",
    title: "Mastering the Next.js 14 App Router",
    excerpt:
      "A deep dive into Next.js 14's App Router — layouts, server components, streaming, and the mental model shift from Pages Router.",
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
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
