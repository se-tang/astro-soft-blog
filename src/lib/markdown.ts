import { Marked } from 'marked';

export interface PostHeading {
  depth: number;
  slug: string;
  text: string;
}

const ALERT_META: Record<string, { label: string; icon: string; cls: string }> = {
  NOTE: { label: '注意 · NOTE', icon: 'ℹ️', cls: 'note' },
  TIP: { label: '技巧 · TIP', icon: '💡', cls: 'tip' },
  IMPORTANT: { label: '重要 · IMPORTANT', icon: '❗', cls: 'important' },
  WARNING: { label: '警告 · WARNING', icon: '⚠️', cls: 'warning' },
  CAUTION: { label: '危险 · CAUTION', icon: '🛑', cls: 'caution' },
};

function createMarkedInstance(headings: PostHeading[]) {
  const usedSlugs = new Map<string, number>();
  const marked = new Marked({
    gfm: true,
    breaks: false,
  });

  marked.use({
    renderer: {
      heading({ tokens, depth }) {
        const text = this.parser.parseInline(tokens).replace(/<[^>]+>/g, '');
        let baseSlug = text
          .trim()
          .toLowerCase()
          .replace(/[^\w\u4e00-\u9fa5-]+/g, '-')
          .replace(/^-+|-+$/g, '');
        if (!baseSlug) baseSlug = `section-${headings.length + 1}`;
        const count = usedSlugs.get(baseSlug) ?? 0;
        usedSlugs.set(baseSlug, count + 1);
        const slug = count > 0 ? `${baseSlug}-${count}` : baseSlug;

        headings.push({ depth, slug, text });
        const inner = this.parser.parseInline(tokens);
        return `<h${depth} id="${slug}">${inner}</h${depth}>\n`;
      },
      blockquote({ tokens }) {
        const innerHtml = this.parser.parse(tokens);
        const alertMatch = innerHtml.match(/^\s*<p>\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\](?:<br\s*\/?>|\s)*([\s\S]*)/i);
        if (alertMatch) {
          const typeKey = alertMatch[1].toUpperCase();
          const meta = ALERT_META[typeKey] || ALERT_META.NOTE;
          const rest = alertMatch[2] ? `<p>${alertMatch[2]}` : '';
          return `<div class="md-alert md-alert--${meta.cls}"><div class="md-alert-title"><span>${meta.icon}</span><span>${meta.label}</span></div><div class="md-alert-body">${rest}</div></div>\n`;
        }
        return `<blockquote>\n${innerHtml}</blockquote>\n`;
      },
    },
  });

  return marked;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function preprocessTabs(md: string, marked: Marked): string {
  // 匹配 :::: tabs ... :::: 块
  return md.replace(/^::::\s*tabs\s*\r?\n([\s\S]*?)^::::\s*$/gm, (_full, inner: string) => {
    const items: { title: string; body: string }[] = [];
    const itemRegex = /^:::\s*tab-item\s+([^\r\n]+)\r?\n([\s\S]*?)^:::\s*$/gm;
    let m: RegExpExecArray | null;
    while ((m = itemRegex.exec(inner)) !== null) {
      items.push({
        title: m[1].trim(),
        body: m[2].trim(),
      });
    }
    if (items.length === 0) return _full;

    const buttons = items
      .map(
        (item, idx) =>
          `<button type="button" class="md-tab-btn${idx === 0 ? ' active' : ''}" data-tab-idx="${idx}">${escapeHtml(item.title)}</button>`
      )
      .join('');

    const panels = items
      .map(
        (item, idx) =>
          `<div class="md-tab-panel${idx === 0 ? ' active' : ''}" data-tab-idx="${idx}">${marked.parse(item.body) as string}</div>`
      )
      .join('');

    return `\n<div class="md-tabs"><div class="md-tabs-nav">${buttons}</div><div class="md-tabs-body">${panels}</div></div>\n`;
  });
}

function preprocessDetails(md: string, marked: Marked): string {
  // 支持 <details><summary>标题</summary> 内部的 Markdown 语法解析
  return md.replace(
    /<details>\s*<summary>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/gi,
    (_full, summary: string, body: string) => {
      const renderedBody = marked.parse(body.trim()) as string;
      return `\n<details class="md-details"><summary>${summary.trim()}</summary><div class="md-details-body">${renderedBody}</div></details>\n`;
    }
  );
}

export function renderMarkdown(md: string): { html: string; headings: PostHeading[] } {
  const headings: PostHeading[] = [];
  const marked = createMarkedInstance(headings);

  let source = md || '';
  source = preprocessTabs(source, marked);
  source = preprocessDetails(source, marked);

  const html = marked.parse(source) as string;
  return { html, headings };
}
