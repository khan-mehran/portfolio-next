"use client";

import { motion } from "framer-motion";

interface PostContentProps {
  content: string;
}

export default function PostContent({ content }: PostContentProps) {
  // Convert simple markdown to formatted output
  const lines = content.trim().split("\n");

  const renderLine = (line: string, i: number) => {
    const trimmed = line.trim();

    if (trimmed.startsWith("# ")) {
      return (
        <h1 key={i} className="text-3xl font-extrabold mt-10 mb-5" style={{ color: "var(--text-primary)" }}>
          {trimmed.slice(2)}
        </h1>
      );
    }
    if (trimmed.startsWith("## ")) {
      return (
        <h2 key={i} className="text-2xl font-bold mt-8 mb-4 gradient-text-brand" >
          {trimmed.slice(3)}
        </h2>
      );
    }
    if (trimmed.startsWith("### ")) {
      return (
        <h3 key={i} className="text-xl font-semibold mt-6 mb-3" style={{ color: "var(--text-primary)" }}>
          {trimmed.slice(4)}
        </h3>
      );
    }
    if (trimmed.startsWith("```")) {
      return null; // handled in block pass
    }
    if (trimmed === "") {
      return <div key={i} className="h-3" />;
    }

    // Inline code + bold + italic
    const rendered = trimmed
      .replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>');

    return (
      <p
        key={i}
        className="text-base leading-8 mb-1"
        style={{ color: "var(--text-secondary)" }}
        dangerouslySetInnerHTML={{ __html: rendered }}
      />
    );
  };

  // Block-level pass: extract code blocks
  const blocks: React.ReactNode[] = [];
  let i = 0;
  let inCodeBlock = false;
  let codeLines: string[] = [];

  while (i < lines.length) {
    const line = lines[i];
    if (line.trim().startsWith("```")) {
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeLines = [];
      } else {
        inCodeBlock = false;
        const code = codeLines.join("\n");
        blocks.push(
          <div
            key={`code-${i}`}
            className="my-6 rounded-xl overflow-hidden"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            <div
              className="flex items-center gap-1.5 px-4 py-2.5 border-b"
              style={{ borderColor: "var(--border)" }}
            >
              {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                <span key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
              ))}
            </div>
            <pre
              className="p-4 text-sm overflow-x-auto font-mono leading-7"
              style={{ color: "var(--text-primary)" }}
            >
              <code>{code}</code>
            </pre>
          </div>
        );
      }
      i++;
      continue;
    }

    if (inCodeBlock) {
      codeLines.push(line);
    } else {
      const node = renderLine(line, i);
      if (node) blocks.push(node);
    }
    i++;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="prose-custom"
    >
      <style>{`
        .inline-code {
          font-family: monospace;
          font-size: 0.85em;
          padding: 2px 6px;
          border-radius: 4px;
          background: rgba(65,184,131,0.12);
          color: var(--brand);
          border: 1px solid rgba(65,184,131,0.2);
        }
      `}</style>
      {blocks}
    </motion.div>
  );
}
