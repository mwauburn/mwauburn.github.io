import { useState, ReactNode, Fragment } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Eye,
  Check,
  Send,
  BookOpen
} from 'lucide-react';
import { TranslationDict } from '../types';
import { blogPostsData } from '../data/portfolioData';

interface BlogPostPageProps {
  t: TranslationDict;
  language: 'en' | 'ur';
  setCurrentPage: (page: any) => void;
  setActiveSection: (sec: string) => void;
}

type Block =
  | { kind: 'h2'; text: string }
  | { kind: 'h3'; text: string }
  | { kind: 'p'; text: string }
  | { kind: 'code'; lang: string; code: string }
  | { kind: 'ul'; items: string[] }
  | { kind: 'ol'; items: string[] }
  | { kind: 'quote'; text: string }
  | { kind: 'table'; rows: string[][] };

function parseMarkdown(md: string): Block[] {
  const lines = md.split('\n');
  const blocks: Block[] = [];
  let i = 0;

  const isTableRow = (line: string) => /^\s*\|.*\|\s*$/.test(line);
  const splitRow = (line: string) =>
    line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim());

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) {
      i++;
      continue;
    }

    if (line.startsWith('### ')) {
      blocks.push({ kind: 'h3', text: line.slice(4).trim() });
      i++;
      continue;
    }

    if (line.startsWith('## ')) {
      blocks.push({ kind: 'h2', text: line.slice(3).trim() });
      i++;
      continue;
    }

    if (line.startsWith('```')) {
      const lang = line.replace(/`/g, '').trim() || 'code';
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      i++;
      blocks.push({ kind: 'code', lang, code: codeLines.join('\n') });
      continue;
    }

    if (line.startsWith('> ')) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].startsWith('> ')) {
        quoteLines.push(lines[i].slice(2).trim());
        i++;
      }
      blocks.push({ kind: 'quote', text: quoteLines.join(' ') });
      continue;
    }

    if (isTableRow(line)) {
      const rows: string[][] = [];
      while (i < lines.length && isTableRow(lines[i])) {
        if (!/^\s*\|[\s\-:|]+\|\s*$/.test(lines[i])) {
          rows.push(splitRow(lines[i]));
        }
        i++;
      }
      blocks.push({ kind: 'table', rows });
      continue;
    }

    if (/^- /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^- /.test(lines[i])) {
        items.push(lines[i].slice(2).trim());
        i++;
      }
      blocks.push({ kind: 'ul', items });
      continue;
    }

    if (/^\d+\. /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\. /, '').trim());
        i++;
      }
      blocks.push({ kind: 'ol', items });
      continue;
    }

    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].startsWith('#') &&
      !lines[i].startsWith('```') &&
      !lines[i].startsWith('> ') &&
      !/^-\s/.test(lines[i]) &&
      !/^\d+\.\s/.test(lines[i]) &&
      !isTableRow(lines[i])
    ) {
      paraLines.push(lines[i].trim());
      i++;
    }
    blocks.push({ kind: 'p', text: paraLines.join(' ') });
  }

  return blocks;
}

function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, idx) => {
    if (/^\*\*[^*]+\*\*$/.test(part)) {
      return (
        <strong key={idx} className="font-bold text-slate-900 dark:text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (/^`[^`]+`$/.test(part)) {
      return (
        <code
          key={idx}
          className="mx-0.5 rounded-md bg-pink-500/10 px-1.5 py-0.5 font-mono text-[0.85em] text-pink-600 dark:text-pink-400"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      const external = href.startsWith('http');
      return (
        <a
          key={idx}
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className="font-semibold text-pink-500 hover:underline"
        >
          {label}
        </a>
      );
    }
    return part;
  });
}

function CodeBlock({ lang, code }: { lang: string; code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative my-7 overflow-hidden rounded-xl border border-slate-200 shadow-sm dark:border-zinc-800">
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-100 px-4 py-2 dark:border-zinc-800 dark:bg-zinc-950">
        <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500 dark:text-zinc-500">
          {lang}
        </span>
        <button
          onClick={handleCopy}
          className="flex cursor-pointer items-center gap-1 font-mono text-[10px] font-bold text-pink-600 hover:underline dark:text-pink-400"
        >
          {copied ? <Check className="h-3 w-3 text-emerald-500" /> : null}
          <span>{copied ? 'COPIED!' : 'COPY'}</span>
        </button>
      </div>
      <pre className="overflow-x-auto bg-slate-50 p-4 font-mono text-xs leading-relaxed text-slate-700 dark:bg-zinc-950/40 dark:text-zinc-300">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function BlogPostPage({
  language,
  setCurrentPage,
  setActiveSection
}: BlogPostPageProps) {
  const isUrdu = language === 'ur';
  const post = blogPostsData.find((p) => p.id === 'flutter-state-management-2026');

  const goBackToBlog = () => {
    setCurrentPage('blog');
    setActiveSection('blog');
    window.history.pushState(null, '', '/blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goHome = () => {
    setCurrentPage('portfolio');
    setActiveSection('home');
    window.history.pushState(null, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 pb-24 pt-28 text-slate-900 transition-colors duration-300 dark:bg-[#030303] dark:text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <BookOpen className="mx-auto mb-4 h-10 w-10 text-slate-300 dark:text-zinc-700" />
          <p className="text-sm text-slate-500">Article not found.</p>
          <button
            onClick={goBackToBlog}
            className="mt-6 cursor-pointer rounded-xl bg-pink-500 px-5 py-2.5 text-xs font-bold text-white transition-colors hover:bg-pink-600"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const blocks = parseMarkdown(post.content);

  return (
    <div
      id="blog-post-page"
      className="min-h-screen overflow-hidden bg-slate-50 pb-24 pt-28 text-slate-900 transition-colors duration-300 dark:bg-[#030303] dark:text-white"
    >
      <div className="relative z-10 mx-auto max-w-3xl px-4 md:px-8">
        {/* Back navigation */}
        <button
          onClick={goBackToBlog}
          className="group mb-10 inline-flex cursor-pointer items-center gap-2 font-mono text-xs text-slate-500 transition-colors hover:text-pink-500 dark:text-zinc-500 dark:hover:text-pink-400"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Blog</span>
        </button>

        {/* Blog cover image */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="relative mb-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg dark:border-zinc-900 dark:bg-black"
        >
          <img
            src="/assets/blog-flutter-state-management-2026.png"
            alt="Flutter State Management in 2026: setState vs Provider vs Riverpod vs BLoC"
            className="h-auto w-full object-cover"
          />
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="mb-12"
        >
          <span className="rounded-full border border-pink-500/20 bg-pink-500/10 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-pink-500 dark:text-pink-400">
            {post.category}
          </span>

          <h1 className="mt-6 font-serif text-4xl font-black leading-tight tracking-tight md:text-5xl">
            Flutter State Management in 2026:{' '}
            <span className="italic text-pink-500">4 Options Compared</span>
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-4 font-mono text-xs font-semibold text-slate-500 dark:text-zinc-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-pink-500" /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-pink-500" /> {post.readTime}
            </span>
            <span className="flex items-center gap-1.5">
              <Eye className="h-3.5 w-3.5 text-emerald-500" /> {post.views} views
            </span>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-white px-2.5 py-1 font-mono text-[10px] text-slate-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400"
              >
                #{tag.toLowerCase().replace(/\s+/g, '-')}
              </span>
            ))}
          </div>

          <div className="mt-8 h-1 w-20 rounded-full bg-gradient-to-r from-pink-500 to-emerald-500" />
        </motion.header>

        {/* Article body */}
        <motion.article
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.16 }}
          className={`space-y-1 ${isUrdu ? 'text-right' : ''}`}
        >
          {blocks.map((block, idx) => {
            switch (block.kind) {
              case 'h2':
                return (
                  <h2
                    key={idx}
                    className="mb-4 mt-14 text-2xl font-black tracking-tight text-slate-900 first:mt-0 dark:text-white md:text-3xl"
                  >
                    {block.text}
                  </h2>
                );
              case 'h3':
                return (
                  <h3
                    key={idx}
                    className="mb-3 mt-8 text-lg font-bold text-slate-800 dark:text-slate-100 md:text-xl"
                  >
                    {renderInline(block.text)}
                  </h3>
                );
              case 'p':
                return (
                  <p
                    key={idx}
                    className="mb-5 text-sm leading-relaxed text-slate-600 dark:text-zinc-300 md:text-base"
                  >
                    {renderInline(block.text)}
                  </p>
                );
              case 'code':
                return (
                  <Fragment key={idx}>
                    <CodeBlock lang={block.lang} code={block.code} />
                  </Fragment>
                );
              case 'ul':
                return (
                  <ul
                    key={idx}
                    className="mb-6 list-disc space-y-2 pl-6 text-sm leading-relaxed text-slate-600 dark:text-zinc-300 md:text-base"
                  >
                    {block.items.map((item, itemIdx) => (
                      <li key={itemIdx}>{renderInline(item)}</li>
                    ))}
                  </ul>
                );
              case 'ol':
                return (
                  <ol
                    key={idx}
                    className="mb-6 list-decimal space-y-2 pl-6 text-sm leading-relaxed text-slate-600 dark:text-zinc-300 md:text-base"
                  >
                    {block.items.map((item, itemIdx) => (
                      <li key={itemIdx}>{renderInline(item)}</li>
                    ))}
                  </ol>
                );
              case 'quote':
                return (
                  <blockquote
                    key={idx}
                    className="my-8 rounded-r-2xl border-l-4 border-pink-500 bg-pink-500/5 p-5 dark:bg-pink-500/10"
                  >
                    <p className="text-sm font-medium leading-relaxed text-slate-700 dark:text-zinc-200 md:text-base">
                      {renderInline(block.text)}
                    </p>
                  </blockquote>
                );
              case 'table':
                return (
                  <div
                    key={idx}
                    className="my-8 overflow-x-auto rounded-2xl border border-slate-200 dark:border-zinc-800"
                  >
                    <table className="w-full text-left text-xs md:text-sm">
                      <thead>
                        <tr className="border-b border-slate-200 bg-slate-100 dark:border-zinc-800 dark:bg-zinc-900">
                          {block.rows[0]?.map((cell, cellIdx) => (
                            <th
                              key={cellIdx}
                              className="whitespace-nowrap px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-zinc-400"
                            >
                              {renderInline(cell)}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {block.rows.slice(1).map((row, rowIdx) => (
                          <tr
                            key={rowIdx}
                            className="border-b border-slate-100 last:border-0 dark:border-zinc-900"
                          >
                            {row.map((cell, cellIdx) => (
                              <td
                                key={cellIdx}
                                className="px-4 py-3 align-top text-slate-600 dark:text-zinc-300"
                              >
                                {renderInline(cell)}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              default:
                return null;
            }
          })}
        </motion.article>

        {/* End CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="relative mt-16 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50/60 to-white p-8 text-center shadow-sm dark:border-zinc-900 dark:from-zinc-950/60 dark:to-black"
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-pink-500/10 blur-3xl" />
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-pink-500">
            Planning a Flutter app?
          </p>
          <h3 className="mt-3 text-xl font-black tracking-tight text-slate-900 dark:text-white md:text-2xl">
            Let's design your architecture for{' '}
            <span className="italic text-pink-500">MVP and beyond</span>
          </h3>
          <button
            onClick={() => {
              setCurrentPage('contact');
              setActiveSection('contact');
              window.history.pushState(null, '', '/contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group mx-auto mt-6 inline-flex cursor-pointer items-center gap-2 rounded-full bg-slate-900 px-7 py-3 font-sans text-sm font-extrabold text-white shadow-md transition-all hover:scale-105 hover:bg-pink-500 active:scale-95 dark:bg-white dark:text-slate-900 dark:hover:bg-pink-500 dark:hover:text-white"
          >
            <span>Get in Touch</span>
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Author footer */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-100 pt-6 font-mono text-xs text-slate-400 dark:border-zinc-900 dark:text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <span>
            Written by{' '}
            <span className="font-semibold text-slate-600 dark:text-zinc-300">Awais Ahmad</span>
          </span>
          <span>{post.category}</span>
        </div>

        {/* Bottom nav */}
        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={goBackToBlog}
            className="group inline-flex cursor-pointer items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 font-sans text-xs font-semibold text-slate-700 shadow-sm transition-all hover:scale-102 hover:border-pink-500/30 hover:text-pink-600 dark:border-zinc-800/80 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-pink-500/30 dark:hover:text-pink-400"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>More Articles</span>
          </button>

          <button
            onClick={goHome}
            className="group inline-flex cursor-pointer items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 font-sans text-xs font-semibold text-slate-700 shadow-sm transition-all hover:scale-102 hover:border-pink-500/30 hover:text-pink-600 dark:border-zinc-800/80 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-pink-500/30 dark:hover:text-pink-400"
          >
            <span>Back to Home</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
