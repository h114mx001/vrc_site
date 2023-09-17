/* empty css                         */import { c as createAstro, b as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_2532d380.mjs';
import { c as getCollection, d as $$Pagehero, $ as $$Image, e as $$Base, S as SiteMetadata } from './404_d15c26e9.mjs';

const coverSVG = {"src":"/hello-astro/_astro/undraw_windows.ece47d54.svg","width":848.71285,"height":634,"format":"svg"};

const undraw_windows$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: coverSVG
}, Symbol.toStringTag, { value: 'Module' }));

const socialImage = {"src":"/hello-astro/_astro/undraw_windows.a333f376.png","width":1089,"height":794,"format":"png"};

const undraw_windows = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: socialImage
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://hellotham.github.io");
const $$Authors = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Authors;
  const frontmatter = {
    title: "Authors",
    description: "Contributors to this website",
    coverSVG,
    socialImage,
    publishDate: SiteMetadata.buildTime
  };
  const authors = await getCollection("author");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "frontmatter": frontmatter }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<header>${renderComponent($$result2, "PageHero", $$Pagehero, { "title": frontmatter.title, "description": frontmatter.description, "coverSVG": frontmatter.coverSVG, "socialImage": frontmatter.socialImage })}</header><main class="mt-8 bg-white dark:bg-gray-900"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-2xl pb-72 sm:pb-32 lg:max-w-none lg:pb-24"><div class="mt-6 grid grid-cols-2 gap-x-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">${authors.map((author) => renderTemplate`<div class="group relative flex flex-col justify-center text-center"><div class="aspect-h-1 aspect-w-1 relative mb-4 h-full w-full overflow-hidden rounded-full group-hover:opacity-75">${renderComponent($$result2, "Image", $$Image, { "src": author.data.image, "alt": author.data.title, "class": "h-full w-full object-cover object-center" })}</div><h3 class="inline-block rounded bg-purple-600 px-3 py-1 text-xs font-medium uppercase tracking-tight text-white hover:bg-pink-600"><a${addAttribute(`${"/hello-astro/"}author/${author.slug}/`, "href")}><span class="absolute inset-0"></span>${author.data.title}</a></h3><p class="text-base text-gray-900 dark:text-gray-400">${author.data.description}</p></div>`)}</div></div></div></main>` })}`;
}, "/home/bibi/booboo/vrc_site/src/pages/authors.astro", void 0);

const $$file = "/home/bibi/booboo/vrc_site/src/pages/authors.astro";
const $$url = "/hello-astro/authors";

const authors = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Authors,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { undraw_windows as a, authors as b, coverSVG as c, socialImage as s, undraw_windows$1 as u };
