/* empty css                         */import { c as createAstro, b as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_2532d380.mjs';
import { c as getCollection, d as $$Pagehero, e as $$Base, S as SiteMetadata } from './404_eb2d6791.mjs';
import { c as coverSVG, s as socialImage } from './authors_f05b4849.mjs';
import 'clsx';
import 'html-escaper';
import 'svgo';
import 'exifr';
/* empty css                                *//* empty css                                                       *//* empty css                                                                  */
const $$Astro = createAstro("https://hellotham.github.io");
const $$Categories = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Categories;
  const frontmatter = {
    title: "Categories",
    description: "Categories for articles",
    coverSVG,
    socialImage,
    publishDate: SiteMetadata.buildTime
  };
  const categories = await getCollection("category");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "frontmatter": frontmatter }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<header>${renderComponent($$result2, "PageHero", $$Pagehero, { "title": frontmatter.title, "description": frontmatter.description, "coverSVG": frontmatter.coverSVG, "socialImage": frontmatter.socialImage })}</header><main class="mt-8 bg-gray-100 dark:bg-gray-900"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-2xl pb-72 sm:pb-32 lg:max-w-none lg:pb-24"><div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">${categories.map((category) => renderTemplate`<div class="group relative"><div class="relative mb-4 h-80 w-full overflow-hidden rounded-lg bg-purple-100 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 dark:bg-purple-600 sm:h-64"><img${addAttribute(category.data.coverSVG.src, "src")}${addAttribute(category.data.description, "alt")} class="h-full w-full object-cover object-center" loading="lazy"></div><h3 class="inline-block rounded bg-purple-600 px-3 py-1 text-xs font-medium uppercase tracking-tight text-white hover:bg-pink-600"><a${addAttribute(`${"/hello-astro/"}category/${category.slug}/`, "href")}><span class="absolute inset-0"></span>${category.data.title}</a></h3><p class="text-base text-gray-900 dark:text-gray-400">${category.data.description}</p></div>`)}</div></div></div></main>` })}`;
}, "/home/bibi/booboo/vrc_site/src/pages/categories.astro", void 0);

const $$file = "/home/bibi/booboo/vrc_site/src/pages/categories.astro";
const $$url = "/hello-astro/categories";

export { $$Categories as default, $$file as file, $$url as url };
