import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_bf132152.mjs';
import './chunks/astro_2532d380.mjs';
import 'clsx';
import 'html-escaper';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/image-endpoint_eaf70b90.mjs');
const _page1  = () => import('./chunks/index_09797c7a.mjs');
const _page2  = () => import('./chunks/search-index_b1c4eb69.mjs');
const _page3  = () => import('./chunks/search-docs_7da48fa6.mjs');
const _page4  = () => import('./chunks/categories_cc94f309.mjs');
const _page5  = () => import('./chunks/carousel_f9d554db.mjs');
const _page6  = () => import('./chunks/_.._a24a93d8.mjs');
const _page7  = () => import('./chunks/authors_af9ff0fc.mjs');
const _page8  = () => import('./chunks/contact_f81dd3c7.mjs');
const _page9  = () => import('./chunks/privacy_7a6b1b64.mjs');
const _page10  = () => import('./chunks/rss_591496b8.mjs');
const _page11  = () => import('./chunks/_.._564d0807.mjs');
const _page12  = () => import('./chunks/about_5a92ca9c.mjs');
const _page13  = () => import('./chunks/_slug__2fef4807.mjs');
const _page14  = () => import('./chunks/_.._674d182b.mjs');
const _page15  = () => import('./chunks/tags_cf55acd2.mjs');
const _page16  = () => import('./chunks/404_710e8b3b.mjs');
const _page17  = () => import('./chunks/_slug__96a5b658.mjs');
const _page18  = () => import('./chunks/_.._8d568fd2.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@3.1.0/node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/search-index.json.js", _page2],["src/pages/search-docs.json.js", _page3],["src/pages/categories.astro", _page4],["src/pages/carousel.astro", _page5],["src/pages/category/[category]/[...page].astro", _page6],["src/pages/authors.astro", _page7],["src/pages/contact.astro", _page8],["src/pages/privacy.md", _page9],["src/pages/rss.xml.js", _page10],["src/pages/author/[author]/[...page].astro", _page11],["src/pages/about.md", _page12],["src/pages/blog/[slug].astro", _page13],["src/pages/blog/[...page].astro", _page14],["src/pages/tags.astro", _page15],["src/pages/404.astro", _page16],["src/pages/doc/[slug].astro", _page17],["src/pages/tag/[tag]/[...page].astro", _page18]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
