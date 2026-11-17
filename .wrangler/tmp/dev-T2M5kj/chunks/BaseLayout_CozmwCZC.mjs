globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createAstro, f as createComponent, k as renderComponent, m as maybeRenderHead, r as renderTemplate, n as renderSlot, h as addAttribute, l as renderHead } from './astro/server_D9ASRNIz.mjs';
/* empty css                          */
import { a as getAllPosts } from './posts_eqsJ4eKJ.mjs';
import { g as getSiteSettings } from './site_BdBnYs6r.mjs';
/* empty css                         */
import { $ as $$, a as $$Sparkles } from './Sparkles_CzhTbA5n.mjs';
import { $ as $$Moon, a as $$Sun, b as $$Settings } from './Sun_BWE14Tg8.mjs';

const $$Astro$3 = createAstro("https://__site_origin__");
const $$ChevronDown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ChevronDown;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "chevron-down", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m6 9 6 6 6-6"></path> ` })}`;
}, "E:/\u5DE5\u4F5C\u76EE\u5F553/soft-blog/node_modules/lucide-astro/dist/ChevronDown.astro", void 0);

const $$Astro$2 = createAstro("https://__site_origin__");
const $$Rss = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Rss;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "rss", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M4 11a9 9 0 0 1 9 9"></path> <path d="M4 4a16 16 0 0 1 16 16"></path> <circle cx="5" cy="19" r="1"></circle> ` })}`;
}, "E:/\u5DE5\u4F5C\u76EE\u5F553/soft-blog/node_modules/lucide-astro/dist/Rss.astro", void 0);

const $$Astro$1 = createAstro("https://__site_origin__");
const $$Search = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Search;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "search", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<circle cx="11" cy="11" r="8"></circle> <path d="m21 21-4.3-4.3"></path> ` })}`;
}, "E:/\u5DE5\u4F5C\u76EE\u5F553/soft-blog/node_modules/lucide-astro/dist/Search.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://__site_origin__");
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const env = Astro2.locals.runtime?.env;
  const siteSettings = await getSiteSettings(env);
  const {
    title,
    description = siteSettings.description,
    wide = false
  } = Astro2.props;
  const pathname = Astro2.url.pathname;
  const allPosts = await getAllPosts(env, false);
  const categoryCounts = /* @__PURE__ */ new Map();
  for (const post of allPosts) {
    const cat = post.category;
    categoryCounts.set(cat, (categoryCounts.get(cat) ?? 0) + 1);
  }
  const categories = Array.from(categoryCounts.entries());
  return renderTemplate(_a || (_a = __template(['<html lang="zh-CN" data-astro-cid-37fxchfa> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>', '</title><meta name="description"', '><meta name="theme-color" content="#f8fafc"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="alternate" type="application/rss+xml"', ` href="/rss.xml"><script>
      (function () {
        try {
          var saved = localStorage.getItem('soft-blog-theme');
          var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
          if (saved === 'dark' || (!saved && prefersDark)) {
            document.documentElement.dataset.theme = 'dark';
          }
        } catch (e) {}
      })();
    <\/script>`, `</head> <body data-astro-cid-37fxchfa> <script>
      if (document.documentElement.dataset.theme === 'dark') {
        document.body.classList.add('dark-theme');
      }
    <\/script> <!-- \u67D4\u548C\u6E10\u53D8\u6C1B\u56F4\u80CC\u666F --> <div class="ambient-bg" aria-hidden="true" data-astro-cid-37fxchfa> <div class="ambient-grid" data-astro-cid-37fxchfa></div> <div class="blob blob-cyan" data-astro-cid-37fxchfa></div> <div class="blob blob-purple" data-astro-cid-37fxchfa></div> </div> <!-- \u9876\u90E8\u6BDB\u73BB\u7483\u5BFC\u822A\u680F --> <header class="app-header" data-astro-cid-37fxchfa> <div class="header-inner" data-astro-cid-37fxchfa> <a href="/" class="logo-section" data-astro-cid-37fxchfa> `, ' <span class="logo-text" data-astro-cid-37fxchfa>', '</span> </a> <nav class="header-nav" aria-label="\u4E3B\u5BFC\u822A" data-astro-cid-37fxchfa> <a href="/"', " data-astro-cid-37fxchfa>\u9996\u9875</a> <!-- \u81EA\u52A8\u5C55\u5F00\u7684\u6587\u7AE0\u5206\u7C7B\u4E0B\u62C9\u83DC\u5355 --> <div", ' id="category-dropdown" data-astro-cid-37fxchfa> <button type="button"', ' aria-expanded="false" aria-haspopup="true" data-astro-cid-37fxchfa>\n\u5206\u7C7B ', ' </button> <div class="nav-dropdown-menu" role="menu" data-astro-cid-37fxchfa> ', ' </div> </div> <a href="/tags/"', ' data-astro-cid-37fxchfa>\u6807\u7B7E</a> <a href="/archive/"', ' data-astro-cid-37fxchfa>\u5F52\u6863</a> <a href="/about/"', ' data-astro-cid-37fxchfa>\u5173\u4E8E</a> </nav> <div class="header-controls" data-astro-cid-37fxchfa> <button type="button" id="search-trigger" class="btn-search" aria-label="\u641C\u7D22\u6587\u7AE0" title="\u641C\u7D22\u6587\u7AE0 (Ctrl + K)" data-astro-cid-37fxchfa> <span class="btn-search-left" data-astro-cid-37fxchfa> ', ' <span class="btn-search-text" data-astro-cid-37fxchfa>\u641C\u7D22</span> </span> <span class="btn-search-kbd" data-astro-cid-37fxchfa>Ctrl K</span> </button> <a href="/rss.xml" class="theme-toggle-btn" title="RSS \u8BA2\u9605" aria-label="RSS \u8BA2\u9605" data-astro-cid-37fxchfa> ', ' </a> <a href="/admin/" class="theme-toggle-btn" title="\u540E\u53F0\u7BA1\u7406" aria-label="\u540E\u53F0\u7BA1\u7406" data-astro-cid-37fxchfa> ', ' </a> <button type="button" id="theme-toggle" class="theme-toggle-btn" title="\u5207\u6362\u6D45\u8272 / \u6DF1\u8272\u6A21\u5F0F" aria-label="\u5207\u6362\u6D45\u8272\u6216\u6DF1\u8272\u6A21\u5F0F" data-astro-cid-37fxchfa> ', " ", ' </button> </div> </div> </header> <!-- \u5168\u5C40\u641C\u7D22\u5F39\u7A97 (Ctrl + K) --> <div id="search-backdrop" class="search-backdrop" role="dialog" aria-modal="true" aria-label="\u7AD9\u5185\u6587\u7AE0\u641C\u7D22" data-astro-cid-37fxchfa> <div class="search-modal" data-astro-cid-37fxchfa> <div class="search-input-wrap" data-astro-cid-37fxchfa> ', ' <input type="text" id="search-input" class="search-input" placeholder="\u641C\u7D22\u6587\u7AE0..." autocomplete="off" data-astro-cid-37fxchfa> <button type="button" id="search-close" class="search-esc-btn" data-astro-cid-37fxchfa>ESC</button> </div> <div id="search-results" class="search-results" data-astro-cid-37fxchfa> <div class="search-empty" data-astro-cid-37fxchfa>\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22</div> </div> </div> </div> <main', " data-astro-cid-37fxchfa> ", ' </main> <footer class="app-footer" data-astro-cid-37fxchfa> <p data-astro-cid-37fxchfa> ', ` \xB7 <a href="/admin/" data-astro-cid-37fxchfa>\u7BA1\u7406\u540E\u53F0</a> </p> </footer>  <script>
      (function () {
        var btn = document.getElementById('theme-toggle');
        if (btn) {
          btn.addEventListener('click', function () {
            var isDark = document.body.classList.toggle('dark-theme');
            try {
              localStorage.setItem('soft-blog-theme', isDark ? 'dark' : 'light');
            } catch (e) {}
          });
        }

        var dropdown = document.getElementById('category-dropdown');
        if (dropdown) {
          var trigger = dropdown.querySelector('.nav-dropdown-trigger');
          var closeTimer = null;

          function openMenu() {
            if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; }
            dropdown.classList.add('open');
            if (trigger) trigger.setAttribute('aria-expanded', 'true');
          }

          function closeMenu() {
            dropdown.classList.remove('open');
            if (trigger) trigger.setAttribute('aria-expanded', 'false');
          }

          dropdown.addEventListener('mouseenter', openMenu);
          dropdown.addEventListener('mouseleave', function () {
            closeTimer = setTimeout(closeMenu, 140);
          });

          if (trigger) {
            trigger.addEventListener('click', function (e) {
              e.stopPropagation();
              if (dropdown.classList.contains('open')) {
                closeMenu();
              } else {
                openMenu();
              }
            });
          }

          document.addEventListener('click', function (e) {
            if (!dropdown.contains(e.target)) closeMenu();
          });
        }

        var backdrop = document.getElementById('search-backdrop');
        var searchTrigger = document.getElementById('search-trigger');
        var searchInput = document.getElementById('search-input');
        var searchClose = document.getElementById('search-close');
        var searchResults = document.getElementById('search-results');
        var searchIndex = null;
        var activeIdx = -1;

        function escapeHtml(str) {
          return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
        }

        function fuzzySubseqScore(query, target) {
          var qi = 0;
          var score = 0;
          var consecutive = 0;
          for (var ti = 0; ti < target.length && qi < query.length; ti++) {
            if (target[ti] === query[qi]) {
              qi++;
              consecutive++;
              score += 1 + consecutive * 2;
            } else {
              consecutive = 0;
            }
          }
          return qi === query.length ? score : 0;
        }

        function scorePost(post, rawQuery) {
          var q = rawQuery.trim().toLowerCase();
          if (!q) return 1;
          var tokens = q.split(/\\s+/).filter(Boolean);
          var title = post.title.toLowerCase();
          var cat = post.category.toLowerCase();
          var tags = (post.tags || []).join(' ').toLowerCase();
          var desc = post.description.toLowerCase();
          var body = (post.body || '').toLowerCase();

          var total = 0;
          for (var i = 0; i < tokens.length; i++) {
            var tok = tokens[i];
            var tokScore = 0;
            if (title.indexOf(tok) !== -1) tokScore += 100;
            if (tags.indexOf(tok) !== -1 || cat.indexOf(tok) !== -1) tokScore += 60;
            if (desc.indexOf(tok) !== -1) tokScore += 40;
            if (body.indexOf(tok) !== -1) tokScore += 20;
            if (tokScore === 0) {
              var subTitle = fuzzySubseqScore(tok, title);
              var subTags = fuzzySubseqScore(tok, tags + ' ' + cat);
              var subDesc = fuzzySubseqScore(tok, desc);
              tokScore = subTitle * 2 + subTags + Math.floor(subDesc * 0.5);
            }
            if (tokScore === 0) return 0;
            total += tokScore;
          }
          return total;
        }

        function highlightText(text, query) {
          var safe = escapeHtml(text);
          var tokens = query.trim().split(/\\s+/).filter(Boolean);
          if (!tokens.length) return safe;
          tokens.forEach(function (tok) {
            var esc = tok.replace(/[.*+?^\${}()|[\\]\\\\]/g, '\\\\$&');
            safe = safe.replace(new RegExp('(' + esc + ')', 'gi'), '<mark class="search-highlight">$1</mark>');
          });
          return safe;
        }

        function renderResults(query) {
          if (!searchIndex || !searchResults) return;
          var q = query.trim();
          var list = searchIndex
            .map(function (item) { return { item: item, score: scorePost(item, q) }; })
            .filter(function (entry) { return entry.score > 0; })
            .sort(function (a, b) { return b.score - a.score; })
            .slice(0, 12);

          activeIdx = list.length > 0 ? 0 : -1;

          if (!list.length) {
            searchResults.innerHTML = '<div class="search-empty">\u6CA1\u6709\u627E\u5230\u4E0E \u201C' + escapeHtml(q) + '\u201D \u76F8\u5173\u7684\u6587\u7AE0</div>';
            return;
          }

          searchResults.innerHTML = list.map(function (entry, idx) {
            var p = entry.item;
            return (
              '<a href="' + p.url + '" class="search-result-item' + (idx === 0 ? ' selected' : '') + '">' +
                '<div class="search-result-meta">' + escapeHtml(p.category) + ' \xB7 ' + escapeHtml(p.date) + '</div>' +
                '<div class="search-result-title">' + highlightText(p.title, q) + '</div>' +
                '<div class="search-result-desc">' + highlightText(p.description, q) + '</div>' +
              '</a>'
            );
          }).join('');
        }

        function loadIndexAndRender() {
          fetch('/search-index.json')
            .then(function (r) { return r.json(); })
            .then(function (data) {
              searchIndex = data;
              renderResults(searchInput ? searchInput.value : '');
            })
            .catch(function () {
              if (searchResults) searchResults.innerHTML = '<div class="search-empty">\u641C\u7D22\u7D22\u5F15\u52A0\u8F7D\u5931\u8D25</div>';
            });
        }

        function openSearch() {
          if (!backdrop) return;
          backdrop.classList.add('open');
          loadIndexAndRender();
          setTimeout(function () {
            if (searchInput) searchInput.focus();
          }, 20);
        }

        function closeSearch() {
          if (!backdrop) return;
          backdrop.classList.remove('open');
        }

        if (searchTrigger) searchTrigger.addEventListener('click', openSearch);
        if (searchClose) searchClose.addEventListener('click', closeSearch);
        if (backdrop) {
          backdrop.addEventListener('click', function (e) {
            if (e.target === backdrop) closeSearch();
          });
        }
        if (searchInput) {
          searchInput.addEventListener('input', function () {
            renderResults(searchInput.value);
          });
          searchInput.addEventListener('keydown', function (e) {
            var items = searchResults ? searchResults.querySelectorAll('.search-result-item') : [];
            if (!items.length) return;
            if (e.key === 'ArrowDown') {
              e.preventDefault();
              activeIdx = (activeIdx + 1) % items.length;
            } else if (e.key === 'ArrowUp') {
              e.preventDefault();
              activeIdx = (activeIdx - 1 + items.length) % items.length;
            } else if (e.key === 'Enter' && activeIdx >= 0) {
              e.preventDefault();
              items[activeIdx].click();
              return;
            } else {
              return;
            }
            items.forEach(function (el, i) {
              el.classList.toggle('selected', i === activeIdx);
            });
            items[activeIdx].scrollIntoView({ block: 'nearest' });
          });
        }

        document.addEventListener('keydown', function (e) {
          if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            if (backdrop && backdrop.classList.contains('open')) {
              closeSearch();
            } else {
              openSearch();
            }
          } else if (e.key === 'Escape' && backdrop && backdrop.classList.contains('open')) {
            closeSearch();
          }
        });
      })();
    <\/script> </body> </html>`], ['<html lang="zh-CN" data-astro-cid-37fxchfa> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>', '</title><meta name="description"', '><meta name="theme-color" content="#f8fafc"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="alternate" type="application/rss+xml"', ` href="/rss.xml"><script>
      (function () {
        try {
          var saved = localStorage.getItem('soft-blog-theme');
          var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
          if (saved === 'dark' || (!saved && prefersDark)) {
            document.documentElement.dataset.theme = 'dark';
          }
        } catch (e) {}
      })();
    <\/script>`, `</head> <body data-astro-cid-37fxchfa> <script>
      if (document.documentElement.dataset.theme === 'dark') {
        document.body.classList.add('dark-theme');
      }
    <\/script> <!-- \u67D4\u548C\u6E10\u53D8\u6C1B\u56F4\u80CC\u666F --> <div class="ambient-bg" aria-hidden="true" data-astro-cid-37fxchfa> <div class="ambient-grid" data-astro-cid-37fxchfa></div> <div class="blob blob-cyan" data-astro-cid-37fxchfa></div> <div class="blob blob-purple" data-astro-cid-37fxchfa></div> </div> <!-- \u9876\u90E8\u6BDB\u73BB\u7483\u5BFC\u822A\u680F --> <header class="app-header" data-astro-cid-37fxchfa> <div class="header-inner" data-astro-cid-37fxchfa> <a href="/" class="logo-section" data-astro-cid-37fxchfa> `, ' <span class="logo-text" data-astro-cid-37fxchfa>', '</span> </a> <nav class="header-nav" aria-label="\u4E3B\u5BFC\u822A" data-astro-cid-37fxchfa> <a href="/"', " data-astro-cid-37fxchfa>\u9996\u9875</a> <!-- \u81EA\u52A8\u5C55\u5F00\u7684\u6587\u7AE0\u5206\u7C7B\u4E0B\u62C9\u83DC\u5355 --> <div", ' id="category-dropdown" data-astro-cid-37fxchfa> <button type="button"', ' aria-expanded="false" aria-haspopup="true" data-astro-cid-37fxchfa>\n\u5206\u7C7B ', ' </button> <div class="nav-dropdown-menu" role="menu" data-astro-cid-37fxchfa> ', ' </div> </div> <a href="/tags/"', ' data-astro-cid-37fxchfa>\u6807\u7B7E</a> <a href="/archive/"', ' data-astro-cid-37fxchfa>\u5F52\u6863</a> <a href="/about/"', ' data-astro-cid-37fxchfa>\u5173\u4E8E</a> </nav> <div class="header-controls" data-astro-cid-37fxchfa> <button type="button" id="search-trigger" class="btn-search" aria-label="\u641C\u7D22\u6587\u7AE0" title="\u641C\u7D22\u6587\u7AE0 (Ctrl + K)" data-astro-cid-37fxchfa> <span class="btn-search-left" data-astro-cid-37fxchfa> ', ' <span class="btn-search-text" data-astro-cid-37fxchfa>\u641C\u7D22</span> </span> <span class="btn-search-kbd" data-astro-cid-37fxchfa>Ctrl K</span> </button> <a href="/rss.xml" class="theme-toggle-btn" title="RSS \u8BA2\u9605" aria-label="RSS \u8BA2\u9605" data-astro-cid-37fxchfa> ', ' </a> <a href="/admin/" class="theme-toggle-btn" title="\u540E\u53F0\u7BA1\u7406" aria-label="\u540E\u53F0\u7BA1\u7406" data-astro-cid-37fxchfa> ', ' </a> <button type="button" id="theme-toggle" class="theme-toggle-btn" title="\u5207\u6362\u6D45\u8272 / \u6DF1\u8272\u6A21\u5F0F" aria-label="\u5207\u6362\u6D45\u8272\u6216\u6DF1\u8272\u6A21\u5F0F" data-astro-cid-37fxchfa> ', " ", ' </button> </div> </div> </header> <!-- \u5168\u5C40\u641C\u7D22\u5F39\u7A97 (Ctrl + K) --> <div id="search-backdrop" class="search-backdrop" role="dialog" aria-modal="true" aria-label="\u7AD9\u5185\u6587\u7AE0\u641C\u7D22" data-astro-cid-37fxchfa> <div class="search-modal" data-astro-cid-37fxchfa> <div class="search-input-wrap" data-astro-cid-37fxchfa> ', ' <input type="text" id="search-input" class="search-input" placeholder="\u641C\u7D22\u6587\u7AE0..." autocomplete="off" data-astro-cid-37fxchfa> <button type="button" id="search-close" class="search-esc-btn" data-astro-cid-37fxchfa>ESC</button> </div> <div id="search-results" class="search-results" data-astro-cid-37fxchfa> <div class="search-empty" data-astro-cid-37fxchfa>\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22</div> </div> </div> </div> <main', " data-astro-cid-37fxchfa> ", ' </main> <footer class="app-footer" data-astro-cid-37fxchfa> <p data-astro-cid-37fxchfa> ', ` \xB7 <a href="/admin/" data-astro-cid-37fxchfa>\u7BA1\u7406\u540E\u53F0</a> </p> </footer>  <script>
      (function () {
        var btn = document.getElementById('theme-toggle');
        if (btn) {
          btn.addEventListener('click', function () {
            var isDark = document.body.classList.toggle('dark-theme');
            try {
              localStorage.setItem('soft-blog-theme', isDark ? 'dark' : 'light');
            } catch (e) {}
          });
        }

        var dropdown = document.getElementById('category-dropdown');
        if (dropdown) {
          var trigger = dropdown.querySelector('.nav-dropdown-trigger');
          var closeTimer = null;

          function openMenu() {
            if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; }
            dropdown.classList.add('open');
            if (trigger) trigger.setAttribute('aria-expanded', 'true');
          }

          function closeMenu() {
            dropdown.classList.remove('open');
            if (trigger) trigger.setAttribute('aria-expanded', 'false');
          }

          dropdown.addEventListener('mouseenter', openMenu);
          dropdown.addEventListener('mouseleave', function () {
            closeTimer = setTimeout(closeMenu, 140);
          });

          if (trigger) {
            trigger.addEventListener('click', function (e) {
              e.stopPropagation();
              if (dropdown.classList.contains('open')) {
                closeMenu();
              } else {
                openMenu();
              }
            });
          }

          document.addEventListener('click', function (e) {
            if (!dropdown.contains(e.target)) closeMenu();
          });
        }

        var backdrop = document.getElementById('search-backdrop');
        var searchTrigger = document.getElementById('search-trigger');
        var searchInput = document.getElementById('search-input');
        var searchClose = document.getElementById('search-close');
        var searchResults = document.getElementById('search-results');
        var searchIndex = null;
        var activeIdx = -1;

        function escapeHtml(str) {
          return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
        }

        function fuzzySubseqScore(query, target) {
          var qi = 0;
          var score = 0;
          var consecutive = 0;
          for (var ti = 0; ti < target.length && qi < query.length; ti++) {
            if (target[ti] === query[qi]) {
              qi++;
              consecutive++;
              score += 1 + consecutive * 2;
            } else {
              consecutive = 0;
            }
          }
          return qi === query.length ? score : 0;
        }

        function scorePost(post, rawQuery) {
          var q = rawQuery.trim().toLowerCase();
          if (!q) return 1;
          var tokens = q.split(/\\\\s+/).filter(Boolean);
          var title = post.title.toLowerCase();
          var cat = post.category.toLowerCase();
          var tags = (post.tags || []).join(' ').toLowerCase();
          var desc = post.description.toLowerCase();
          var body = (post.body || '').toLowerCase();

          var total = 0;
          for (var i = 0; i < tokens.length; i++) {
            var tok = tokens[i];
            var tokScore = 0;
            if (title.indexOf(tok) !== -1) tokScore += 100;
            if (tags.indexOf(tok) !== -1 || cat.indexOf(tok) !== -1) tokScore += 60;
            if (desc.indexOf(tok) !== -1) tokScore += 40;
            if (body.indexOf(tok) !== -1) tokScore += 20;
            if (tokScore === 0) {
              var subTitle = fuzzySubseqScore(tok, title);
              var subTags = fuzzySubseqScore(tok, tags + ' ' + cat);
              var subDesc = fuzzySubseqScore(tok, desc);
              tokScore = subTitle * 2 + subTags + Math.floor(subDesc * 0.5);
            }
            if (tokScore === 0) return 0;
            total += tokScore;
          }
          return total;
        }

        function highlightText(text, query) {
          var safe = escapeHtml(text);
          var tokens = query.trim().split(/\\\\s+/).filter(Boolean);
          if (!tokens.length) return safe;
          tokens.forEach(function (tok) {
            var esc = tok.replace(/[.*+?^\\\${}()|[\\\\]\\\\\\\\]/g, '\\\\\\\\$&');
            safe = safe.replace(new RegExp('(' + esc + ')', 'gi'), '<mark class="search-highlight">$1</mark>');
          });
          return safe;
        }

        function renderResults(query) {
          if (!searchIndex || !searchResults) return;
          var q = query.trim();
          var list = searchIndex
            .map(function (item) { return { item: item, score: scorePost(item, q) }; })
            .filter(function (entry) { return entry.score > 0; })
            .sort(function (a, b) { return b.score - a.score; })
            .slice(0, 12);

          activeIdx = list.length > 0 ? 0 : -1;

          if (!list.length) {
            searchResults.innerHTML = '<div class="search-empty">\u6CA1\u6709\u627E\u5230\u4E0E \u201C' + escapeHtml(q) + '\u201D \u76F8\u5173\u7684\u6587\u7AE0</div>';
            return;
          }

          searchResults.innerHTML = list.map(function (entry, idx) {
            var p = entry.item;
            return (
              '<a href="' + p.url + '" class="search-result-item' + (idx === 0 ? ' selected' : '') + '">' +
                '<div class="search-result-meta">' + escapeHtml(p.category) + ' \xB7 ' + escapeHtml(p.date) + '</div>' +
                '<div class="search-result-title">' + highlightText(p.title, q) + '</div>' +
                '<div class="search-result-desc">' + highlightText(p.description, q) + '</div>' +
              '</a>'
            );
          }).join('');
        }

        function loadIndexAndRender() {
          fetch('/search-index.json')
            .then(function (r) { return r.json(); })
            .then(function (data) {
              searchIndex = data;
              renderResults(searchInput ? searchInput.value : '');
            })
            .catch(function () {
              if (searchResults) searchResults.innerHTML = '<div class="search-empty">\u641C\u7D22\u7D22\u5F15\u52A0\u8F7D\u5931\u8D25</div>';
            });
        }

        function openSearch() {
          if (!backdrop) return;
          backdrop.classList.add('open');
          loadIndexAndRender();
          setTimeout(function () {
            if (searchInput) searchInput.focus();
          }, 20);
        }

        function closeSearch() {
          if (!backdrop) return;
          backdrop.classList.remove('open');
        }

        if (searchTrigger) searchTrigger.addEventListener('click', openSearch);
        if (searchClose) searchClose.addEventListener('click', closeSearch);
        if (backdrop) {
          backdrop.addEventListener('click', function (e) {
            if (e.target === backdrop) closeSearch();
          });
        }
        if (searchInput) {
          searchInput.addEventListener('input', function () {
            renderResults(searchInput.value);
          });
          searchInput.addEventListener('keydown', function (e) {
            var items = searchResults ? searchResults.querySelectorAll('.search-result-item') : [];
            if (!items.length) return;
            if (e.key === 'ArrowDown') {
              e.preventDefault();
              activeIdx = (activeIdx + 1) % items.length;
            } else if (e.key === 'ArrowUp') {
              e.preventDefault();
              activeIdx = (activeIdx - 1 + items.length) % items.length;
            } else if (e.key === 'Enter' && activeIdx >= 0) {
              e.preventDefault();
              items[activeIdx].click();
              return;
            } else {
              return;
            }
            items.forEach(function (el, i) {
              el.classList.toggle('selected', i === activeIdx);
            });
            items[activeIdx].scrollIntoView({ block: 'nearest' });
          });
        }

        document.addEventListener('keydown', function (e) {
          if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            if (backdrop && backdrop.classList.contains('open')) {
              closeSearch();
            } else {
              openSearch();
            }
          } else if (e.key === 'Escape' && backdrop && backdrop.classList.contains('open')) {
            closeSearch();
          }
        });
      })();
    <\/script> </body> </html>`])), title, addAttribute(description, "content"), addAttribute(`${siteSettings.title} RSS`, "title"), renderHead(), renderComponent($$result, "Sparkles", $$Sparkles, { "class": "logo-icon", "data-astro-cid-37fxchfa": true }), siteSettings.title, addAttribute(["nav-link", { active: pathname === "/" }], "class:list"), addAttribute(["nav-dropdown", { active: pathname.startsWith("/category") }], "class:list"), addAttribute(["nav-link nav-dropdown-trigger", { active: pathname.startsWith("/category") }], "class:list"), renderComponent($$result, "ChevronDown", $$ChevronDown, { "size": 13, "class": "nav-caret", "data-astro-cid-37fxchfa": true }), categories.map(([cat, count]) => {
    const href = `/category/${encodeURIComponent(cat)}/`;
    const isActive = decodeURIComponent(pathname) === `/category/${cat}/`;
    return renderTemplate`<a${addAttribute(href, "href")}${addAttribute(["nav-dropdown-item", { active: isActive }], "class:list")} role="menuitem" data-astro-cid-37fxchfa> <span data-astro-cid-37fxchfa>${cat}</span> <span class="nav-count" data-astro-cid-37fxchfa>${count}</span> </a>`;
  }), addAttribute(["nav-link", { active: pathname.startsWith("/tags") }], "class:list"), addAttribute(["nav-link", { active: pathname.startsWith("/archive") }], "class:list"), addAttribute(["nav-link", { active: pathname.startsWith("/about") }], "class:list"), renderComponent($$result, "Search", $$Search, { "size": 14, "data-astro-cid-37fxchfa": true }), renderComponent($$result, "Rss", $$Rss, { "size": 15, "data-astro-cid-37fxchfa": true }), renderComponent($$result, "Settings", $$Settings, { "size": 15, "data-astro-cid-37fxchfa": true }), renderComponent($$result, "Sun", $$Sun, { "size": 16, "class": "icon-sun", "data-astro-cid-37fxchfa": true }), renderComponent($$result, "Moon", $$Moon, { "size": 16, "class": "icon-moon", "data-astro-cid-37fxchfa": true }), renderComponent($$result, "Search", $$Search, { "size": 18, "style": "color: var(--neon-cyan); flex-shrink: 0;", "data-astro-cid-37fxchfa": true }), addAttribute(["main-container", { "main-container--wide": wide }], "class:list"), renderSlot($$result, $$slots["default"]), siteSettings.footerText);
}, "E:/\u5DE5\u4F5C\u76EE\u5F553/soft-blog/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
