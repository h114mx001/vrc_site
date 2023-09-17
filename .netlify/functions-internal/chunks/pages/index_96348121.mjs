/* empty css                         */import { c as createAstro, b as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, j as renderComponent } from '../astro_2532d380.mjs';
import 'clsx';
import { p as coverSVG, c as getCollection, e as $$Base, S as SiteMetadata } from './404_eb2d6791.mjs';
import { $ as $$Features, a as $$Findoutmore, b as $$Latestarticles, c as $$Cta, s as socialImage } from './carousel_461e2e2e.mjs';
import 'html-escaper';
import 'svgo';
import 'exifr';
/* empty css                                *//* empty css                                                       *//* empty css                                                                  *//* empty css                                   */import './__b4340032.mjs';

const $$Astro$1 = createAstro("https://hellotham.github.io");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<div class="relative overflow-hidden bg-white dark:bg-gray-900"><div class="mx-auto max-w-7xl"><div class="relative z-10 bg-white pb-8 dark:bg-gray-900 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32"><svg class="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white dark:text-gray-900 lg:block" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><polygon points="50,0 100,0 50,100 0,100"></polygon></svg><main class="mx-auto max-w-7xl px-4 pt-10 sm:px-6 sm:pt-12 md:pt-16 lg:px-8 lg:pt-20 xl:pt-28"><div class="text-center sm:text-left"><h1 class="text-left text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl"><span class="block xl:inline">hello</span>${" "}<span class="block text-purple-700 dark:text-purple-300 xl:inline">Astro</span></h1><p class="mt-3 text-base text-gray-600 dark:text-gray-300 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
Hello Astro is a multi-purpose starter theme written in Typescript, TailwindCSS,
            AlpineJS and Astro. It supports Markdown, Markdoc and MDX based pages, documentation
            pages and blog posts (including math and diagrams), plus full text search.
</p><p class="mt-3 text-base text-gray-600 dark:text-gray-300 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
Hello Astro can be used for creating corporate/marketing sites, blogs, documentation
            sites, portfolio sites (supporting photo galleries) or any combination of the above!
</p><p class="mt-3 text-base text-gray-600 dark:text-gray-300 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
It has full SEO support for Facebook (Open Graph) tags, Twitter Cards and Schema/JSON-LD
            metadata. It also features fully auto generated RSS feed and sitemap for search engine
            indexing.
</p><div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"><div class="rounded-md shadow"><a href="/about" class="flex w-full items-center justify-center rounded-md border border-transparent bg-purple-600 px-8 py-3 text-base font-medium text-white hover:bg-pink-600 dark:bg-purple-300 dark:text-black dark:hover:bg-pink-300 md:px-10 md:py-4 md:text-lg">
About
</a></div><div class="mt-3 sm:ml-3 sm:mt-0"><a href="https://github.com/sponsors/hellotham" class="flex w-full items-center justify-center rounded-md border border-transparent bg-purple-100 px-8 py-3 text-base font-medium text-purple-800 hover:bg-pink-200 dark:bg-purple-900 dark:text-purple-100 dark:hover:bg-pink-900 md:px-10 md:py-4 md:text-lg" rel="noopener noreferrer" target="_blank">
Sponsor Us
</a></div></div></div></main></div></div><div class="bg-purple-100 dark:bg-purple-500 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"><img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"${addAttribute(coverSVG.src, "src")} alt="featured"></div></div>`;
}, "/home/bibi/booboo/vrc_site/src/components/hero.astro", void 0);

const $$Astro = createAstro("https://hellotham.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const frontmatter = {
    title: SiteMetadata.title,
    description: SiteMetadata.description,
    coverSVG,
    socialImage,
    publishDate: SiteMetadata.buildTime
  };
  const posts = await getCollection("blog", ({ data }) => {
    return data.draft !== true;
  });
  const latestPosts = posts.sort((a, b) => +b.data.publishDate - +a.data.publishDate);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "frontmatter": frontmatter }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Hero", $$Hero, {})}${renderComponent($$result2, "Features", $$Features, {})}${renderComponent($$result2, "FindOutMore", $$Findoutmore, {})}${renderComponent($$result2, "LatestArticles", $$Latestarticles, { "posts": latestPosts })}${renderComponent($$result2, "CTA", $$Cta, {})}${maybeRenderHead()}<div class="bg-white p-24 dark:bg-black md:p-12"></div>` })}`;
}, "/home/bibi/booboo/vrc_site/src/pages/index.astro", void 0);

const $$file = "/home/bibi/booboo/vrc_site/src/pages/index.astro";
const $$url = "/hello-astro";

export { $$Index as default, $$file as file, $$url as url };
