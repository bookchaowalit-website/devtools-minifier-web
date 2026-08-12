"use client";

import { useState, type ReactNode } from "react";

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

function Shell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <header className="mb-8">
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Client-side utility · no server required
          </p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight">{title}</h1>
          <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">{subtitle}</p>
        </header>
        {children}
        <footer className="mt-10 border-t border-zinc-200 pt-4 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
          Data stays in your browser. Part of the Bookchaowalit developer tools portfolio.
        </footer>
      </div>
    </div>
  );
}

function Button({
  children,
  onClick,
  variant = "primary",
  disabled,
  type = "button",
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  disabled?: boolean;
  type?: "button" | "submit";
}) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm font-medium transition disabled:opacity-50";
  const styles =
    variant === "primary"
      ? "bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
      : variant === "secondary"
        ? "bg-white text-zinc-900 ring-1 ring-zinc-200 hover:bg-zinc-100 dark:bg-zinc-900 dark:text-zinc-100 dark:ring-zinc-700 dark:hover:bg-zinc-800"
        : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900";
  return (
    <button type={type} disabled={disabled} onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  );
}

function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: ReactNode;
  hint?: string;
}) {
  return (
    <label className="block space-y-1.5">
      <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{label}</span>
      {children}
      {hint ? <span className="block text-xs text-zinc-500">{hint}</span> : null}
    </label>
  );
}

const inputClass =
  "w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 font-mono text-sm text-zinc-900 outline-none ring-zinc-400 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100";
const areaClass = `${inputClass} min-h-[160px] resize-y`;

type Mode = "json" | "css" | "html" | "js";

function minify(mode: Mode, input: string): string {
  if (mode === "json") return JSON.stringify(JSON.parse(input));
  if (mode === "css") {
    return input
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/\s+/g, " ")
      .replace(/\s*([{}:;,])\s*/g, "$1")
      .trim();
  }
  if (mode === "html") {
    return input
      .replace(/<!--[\s\S]*?-->/g, "")
      .replace(/>\s+</g, "><")
      .replace(/\s{2,}/g, " ")
      .trim();
  }
  // js: strip // and /* */ comments then collapse space outside strings (simple)
  let out = input.replace(/\/\*[\s\S]*?\*\//g, "").replace(/(^|[^:])\/\/.*$/gm, "$1");
  out = out.replace(/\s+/g, " ").replace(/\s*([{};,=+\-*/%<>!&|?:])\s*/g, "$1").trim();
  return out;
}

export default function Home() {
  const [mode, setMode] = useState<Mode>("json");
  const [input, setInput] = useState('{\n  "a": 1,\n  "b": [2, 3]\n}');
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const run = () => {
    setError("");
    try {
      setOutput(minify(mode, input));
    } catch (e) {
      setOutput("");
      setError(e instanceof Error ? e.message : "Minify failed");
    }
  };

  const saved =
    input.length && output.length ? Math.max(0, Math.round((1 - output.length / input.length) * 100)) : 0;

  return (
    <Shell title="Code Minifier" subtitle="Collapse whitespace for snippets. Handy for demos — not a production pipeline.">
      <div className="mb-4 flex flex-wrap gap-2">
        {(["json", "css", "html", "js"] as Mode[]).map((m) => (
          <Button key={m} variant={mode === m ? "primary" : "secondary"} onClick={() => setMode(m)}>
            {m.toUpperCase()}
          </Button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label={`Input (${input.length} chars)`}>
          <textarea className={areaClass} value={input} onChange={(e) => setInput(e.target.value)} />
        </Field>
        <Field label={`Output (${output.length} chars)${output ? ` · ~${saved}% smaller` : ""}`}>
          <textarea className={areaClass} value={output} readOnly />
        </Field>
      </div>
      {error ? <p className="mt-3 text-sm text-red-600 dark:text-red-400">{error}</p> : null}
      <div className="mt-4 flex gap-2">
        <Button onClick={run}>Minify</Button>
        <Button
          variant="secondary"
          disabled={!output}
          onClick={async () => {
            if (await copyText(output)) {
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            }
          }}
        >
          {copied ? "Copied" : "Copy"}
        </Button>
      </div>
    </Shell>
  );
}
