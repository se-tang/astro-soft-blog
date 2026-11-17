import { Marked } from 'marked';

export interface PostHeading {
  depth: number;
  slug: string;
  text: string;
}

export function renderMarkdown(md: string): { html: string; headings: PostHeading[] } {
  const headings: PostHeading[] = [];
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
    },
  });

  const html = marked.parse(md || '') as string;
  return { html, headings };
}
