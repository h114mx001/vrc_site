/* empty css                         */import { c as createAstro, b as createComponent, r as renderTemplate, m as maybeRenderHead, j as renderComponent, e as addAttribute, k as renderSlot } from '../astro_2532d380.mjs';
import 'clsx';
import { b as $$Icon, s as socialImage$1, $ as $$Image, S as SiteMetadata, _ as __vite_glob_0_0, j as __vite_glob_0_1, k as __vite_glob_0_2, l as __vite_glob_0_3, m as __vite_glob_0_4, n as __vite_glob_0_5, o as __vite_glob_0_6, c as getCollection, e as $$Base, p as coverSVG } from './404_eb2d6791.mjs';
/* empty css                                   */import { $ as $$Categories } from './__b4340032.mjs';

const $$Astro$5 = createAstro("https://hellotham.github.io");
const $$Features = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Features;
  const features = [
    {
      name: "Easy to Create Content",
      description: "Create pages, documentation pages and blog posts using MDX, Markdoc and Markdown. Includes support for photo galleries, maps, math equations (KaTeX) and diagrams (mermaid, plantuml and markmap).",
      icon: "sparkles"
    },
    {
      name: "Customisable Design",
      description: "Built using the TailwindCSS ecosystem (including HeroIcons and Hero Patterns). Very easy to customise and change design. Template illustrations by unDraw.",
      icon: "puzzle"
    },
    {
      name: "SEO Ready",
      description: "Full support for Facebook (Open Graph), Twitter Cards, Schema/JSON-LD metadata. Automatically generated robots.txt, RSS feed and sitemap.",
      icon: "presentation-chart-bar"
    },
    {
      name: "Blazing Performance",
      description: "Achieve great web vitals scores. Static site using Jamstack architecture. Built using Astro and Typescript for ultimate performance and type safety.",
      icon: "clock"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="bg-gray-100 py-12 dark:bg-gray-800"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="lg:text-center"><h2 class="text-base font-semibold uppercase tracking-wide text-purple-800 dark:text-purple-300">
Features
</h2><p class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
Comprehensive Astro Starter
</p><p class="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 lg:mx-auto">
This is a good starting point for a multi-purpose website, including support for
        documentation and blog pages, photo galleries, diagrams, math equations and more.
</p></div><div class="mt-10"><dl class="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">${features.map((feature) => renderTemplate`<div class="relative"><dt><div class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-purple-500 text-white dark:bg-purple-400 dark:text-black">${renderComponent($$result, "Icon", $$Icon, { "class": "h-6 w-6", "aria-hidden": "true", "pack": "heroicons-outline", "name": feature.icon })}</div><p class="ml-16 text-lg font-medium leading-6 text-gray-900 dark:text-gray-200">${feature.name}</p></dt><dd class="ml-16 mt-2 text-base text-gray-600 dark:text-gray-400">${feature.description}</dd></div>`)}</dl></div></div></div>`;
}, "/home/bibi/booboo/vrc_site/src/components/features.astro", void 0);

const AstroSVG = {"src":"/hello-astro/_astro/astro-cover.2f69e680.png","width":1500,"height":643,"format":"png"};

const astroCover = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: AstroSVG
}, Symbol.toStringTag, { value: 'Module' }));

const TailwindSVG = {"src":"/hello-astro/_astro/undraw_tailwind_css.307ead04.svg","width":884.32978,"height":497.5726,"format":"svg"};

const undraw_tailwind_css = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: TailwindSVG
}, Symbol.toStringTag, { value: 'Module' }));

const HTMLSVG = {"src":"/hello-astro/_astro/undraw_static_assets.c185b89d.svg","width":1030.01,"height":729.86,"format":"svg"};

const undraw_static_assets = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: HTMLSVG
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro("https://hellotham.github.io");
const $$Findoutmore = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Findoutmore;
  const callouts = [
    {
      name: "Astro",
      description: "Build faster websites with less client-side Javascript",
      imageSrc: AstroSVG.src,
      imageAlt: "Astro logo",
      href: "https://astro.build"
    },
    {
      name: "TailwindCSS",
      description: "A utility-first CSS framework that can be composed to build any design, directly in your markup",
      imageSrc: TailwindSVG.src,
      imageAlt: "TailwindCSS drawing",
      href: "https://tailwindcss.com"
    },
    {
      name: "HTML/CSS/Javascript",
      description: "The core building blocks of the web",
      imageSrc: HTMLSVG.src,
      imageAlt: "Core Web",
      href: "https://w3.org"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="bg-purple-100 dark:bg-purple-900"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32"><h2 class="text-4xl font-extrabold text-purple-800 dark:text-purple-100">Find Out More</h2><div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">${callouts.map((callout) => renderTemplate`<div class="group relative"><div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 dark:bg-purple-600 sm:h-64"><img${addAttribute(callout.imageSrc, "src")}${addAttribute(callout.imageAlt, "alt")} class="h-full w-full object-contain object-center" loading="lazy"></div><h3 class="mt-6 text-2xl text-purple-500 dark:text-purple-300"><a${addAttribute(callout.href, "href")}><span class="absolute inset-0"></span>${callout.name}</a></h3><p class="text-base text-gray-900 dark:text-gray-100">${callout.description}</p></div>`)}</div></div></div></div>`;
}, "/home/bibi/booboo/vrc_site/src/components/findoutmore.astro", void 0);

const $$Astro$3 = createAstro("https://hellotham.github.io");
const $$Latestarticles = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Latestarticles;
  const { posts } = Astro2.props;
  const newestPost = posts[0];
  const otherPosts = posts.slice(1, 5);
  return renderTemplate`${maybeRenderHead()}<div class="bg-white dark:bg-gray-900"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-2xl py-8 sm:py-12 lg:max-w-none lg:py-16"><div class="flex flex-row items-center"><h2 class="text-2xl font-extrabold text-purple-800 dark:text-purple-200 md:text-4xl">
Our Latest Articles
</h2><a${addAttribute("/hello-astro/" + "blog", "href")} class="ml-4 mt-2 inline-block rounded-md bg-purple-600 px-2 py-2 text-base font-bold text-white hover:bg-pink-600 dark:bg-purple-300 dark:text-black dark:hover:bg-pink-300 md:px-6 md:py-3 md:text-lg">
All Articles
</a><a${addAttribute("/hello-astro/" + "categories", "href")} class="ml-4 mt-2 inline-block rounded-md bg-purple-100 px-2 py-2 text-base font-bold text-purple-800 hover:bg-pink-200 dark:bg-purple-900 dark:text-purple-100 dark:hover:bg-pink-900 md:px-6 md:py-3 md:text-lg">
Categories
</a><a${addAttribute("/hello-astro/" + "tags", "href")} class="ml-4 mt-2 inline-block rounded-md bg-purple-100 px-2 py-2 text-base font-bold text-purple-800 hover:bg-pink-200 dark:bg-purple-900 dark:text-purple-100 dark:hover:bg-pink-900 md:px-6 md:py-3 md:text-lg">
Tags
</a></div><div class="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0 xl:grid-cols-3"><div class="relative mb-4 block rounded p-4 lg:mb-0 lg:p-0 xl:col-span-2"><a${addAttribute("/hello-astro/" + "blog/" + newestPost.slug, "href")}><span class="sr-only">${newestPost.data.title}</span>${newestPost.data.coverSVG ? renderTemplate`<img${addAttribute(newestPost.data.coverSVG.src, "src")}${addAttribute(newestPost.data.title + " featured image", "alt")} class="h-64 w-full rounded-md bg-purple-100 object-cover dark:bg-purple-800 md:h-80" loading="lazy">` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": newestPost.data.coverImage || newestPost.data.socialImage || socialImage$1, "alt": newestPost.data.title + " featured image", "class": "h-64 w-full rounded-md bg-purple-100 object-cover dark:bg-purple-800 md:h-80", "loading": "lazy" })}`}</a><div class="mt-4">${newestPost.data.categories && renderTemplate`${renderComponent($$result, "Categories", $$Categories, { "categories": newestPost.data.categories })}`}</div><a${addAttribute("/hello-astro/" + "blog/" + newestPost.slug, "href")}><h1 class="mt-2 text-4xl font-bold leading-tight text-purple-600 hover:text-pink-600 dark:text-purple-300 dark:hover:text-pink-300">${newestPost.data.title}</h1></a><p class="mb-4 text-gray-600 dark:text-gray-400">${newestPost.data.publishDate?.toDateString()}</p><p class="mb-4 text-gray-600 dark:text-gray-400">${newestPost.data.description}</p><a${addAttribute("/hello-astro/" + "blog/" + newestPost.slug, "href")} class="mt-2 inline-block rounded-md bg-purple-600 px-6 py-3 text-white hover:bg-pink-600 dark:bg-purple-300 dark:text-black dark:hover:bg-pink-300">
Read more
<span class="sr-only">${newestPost.data.title}</span></a></div><div class="w-full">${otherPosts.map((post) => renderTemplate`<div class="mb-10 w-full rounded md:grid md:grid-cols-3"><a${addAttribute(new URL("/hello-astro/" + "blog/" + post.slug, Astro2.url), "href")}>${post.data.coverSVG ? renderTemplate`<img${addAttribute(post.data.coverSVG.src, "src")}${addAttribute(post.data.title + " featured image", "alt")} class="block h-64 w-full rounded-md bg-purple-100 object-cover p-4 dark:bg-purple-800 md:h-32 md:p-0 lg:block" loading="lazy">` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": post.data.coverImage || post.data.socialImage || socialImage$1, "alt": post.data.title + " featured image", "class": "block h-64 w-full rounded-md bg-purple-100 object-cover p-4 dark:bg-purple-800 md:h-32 md:p-0 lg:block", "loading": "lazy" })}`}</a><div class="rounded bg-white px-4 dark:bg-gray-800 md:col-span-2">${post.data.categories && renderTemplate`${renderComponent($$result, "Categories", $$Categories, { "categories": post.data.categories })}`}<a${addAttribute("/hello-astro/" + "blog/" + post.slug, "href")}><div class="text-xl font-semibold text-gray-800 dark:text-gray-100 md:mt-1">${post.data.title}</div></a><p class="block text-sm text-gray-600 dark:text-gray-300">${post.data.publishDate?.toDateString()}</p><p class="block text-sm text-gray-600 dark:text-gray-300 md:hidden">${post.data.description}</p></div></div>`)}</div></div></div></div></div>`;
}, "/home/bibi/booboo/vrc_site/src/components/latestarticles.astro", void 0);

const $$Astro$2 = createAstro("https://hellotham.github.io");
const $$Cta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Cta;
  return renderTemplate`${maybeRenderHead()}<div class="bg-gray-50 dark:bg-black"><div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:px-8 lg:py-16"><h2 class="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl"><span class="block dark:text-white">Ready to give it a try?</span><span class="block text-purple-600 dark:text-purple-300">Use the starter on Github today.
</span></h2><div class="mt-8 flex lg:mt-0 lg:flex-shrink-0"><div class="inline-flex rounded-md shadow"><a${addAttribute(SiteMetadata.repository + "/generate", "href")} class="inline-flex items-center justify-center rounded-md border border-transparent bg-purple-600 px-5 py-3 text-base font-medium text-white hover:bg-pink-600">
Use Template
</a></div><div class="ml-4 inline-flex rounded-md shadow lg:ml-3"><a${addAttribute(SiteMetadata.repository, "href")} rel="noopener noreferrer" target="_blank" class="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-purple-600 hover:bg-purple-100">
Github Repo
</a></div></div></div></div>`;
}, "/home/bibi/booboo/vrc_site/src/components/cta.astro", void 0);

const socialImage = {"src":"/hello-astro/_astro/undraw_design_inspiration.e8bfa712.png","width":1219,"height":950,"format":"png"};

const undraw_design_inspiration = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: socialImage
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://hellotham.github.io");
const $$Carousel$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Carousel$1;
  const { pages } = Astro2.props;
  const imagepaths = pages.map((page) => page.image);
  const imageFiles = /* #__PURE__ */ Object.assign({"../assets/gallery/apollo11/Astronaut.jpeg": __vite_glob_0_0,"../assets/gallery/apollo11/Ferry.jpeg": __vite_glob_0_1,"../assets/gallery/apollo11/Walk.jpeg": __vite_glob_0_2,"../assets/gallery/carousel/Cowarra-Dam.jpeg": __vite_glob_0_3,"../assets/gallery/carousel/Mayfield-Garden.jpeg": __vite_glob_0_4,"../assets/gallery/carousel/Mt-Tomah.jpeg": __vite_glob_0_5,"../assets/gallery/carousel/Oberon-Dam.jpeg": __vite_glob_0_6


});
  const folderFiles = Object.keys(imageFiles).filter((image) => imagepaths.includes(image));
  const images = folderFiles.map((image) => imageFiles[image]);
  return renderTemplate`${maybeRenderHead()}<div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff"${addAttribute(["swiper mySwiper not-prose max-w-screen-xl mx-auto rounded-lg w-full", `h-[500px]`], "class:list")}><div class="swiper-wrapper">${pages.map((page, i) => renderTemplate`<div class="swiper-slide relative"><div class="absolute bottom-0 left-0 z-10 h-full w-full bg-gradient-to-t from-gray-800 opacity-25 xl:rounded-lg"></div><img${addAttribute(images[i].src, "src")}${addAttribute(page.name, "alt")} class="absolute left-0 top-0 z-0 m-0 h-full w-full object-cover"><div class="absolute bottom-0 left-0 z-20 mb-4 ml-8 bg-transparent p-4 text-white">${page.title && renderTemplate`<h4 class="text-lg font-bold">${page.title}</h4>`}${page.description && renderTemplate`<p class="text-base italic text-gray-300">${page.description}</p>`}${renderSlot($$result, $$slots["default"])}</div></div>`)}</div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div><div class="swiper-pagination"></div></div><!-- Swiper JS -->`;
}, "/home/bibi/booboo/vrc_site/src/components/carousel.astro", void 0);

const $$Astro = createAstro("https://hellotham.github.io");
const $$Carousel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Carousel;
  const frontmatter = {
    title: SiteMetadata.title,
    description: SiteMetadata.description,
    coverSVG,
    socialImage,
    publishDate: SiteMetadata.buildTime
  };
  const carouselPages = [
    { name: "Cowarra Dam", image: "../assets/gallery/carousel/Cowarra-Dam.jpeg" },
    {
      name: "Mayfield Garden",
      image: "../assets/gallery/carousel/Mayfield-Garden.jpeg"
    },
    { name: "Mt Tomah", image: "../assets/gallery/carousel/Mt-Tomah.jpeg" },
    { name: "Oberon Dam", image: "../assets/gallery/carousel/Oberon-Dam.jpeg" }
  ];
  const posts = await getCollection("blog", ({ data }) => {
    return data.draft !== true;
  });
  const latestPosts = posts.sort((a, b) => +b.data.publishDate - +a.data.publishDate);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "frontmatter": frontmatter }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Carousel", $$Carousel$1, { "pages": carouselPages }, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<h1 class="text-left text-4xl font-extrabold tracking-tight text-gray-100 sm:text-5xl md:text-6xl"><span class="block xl:inline">hello</span>${" "}<span class="block text-purple-500 xl:inline">Astro</span></h1><p class="mt-3 text-base text-gray-300 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 lg:mx-0">
Hello Astro is a full featured corporate/marketing/blog starter theme written in Typescript,
      TailwindCSS and Astro. It supports Markdown and MDX based pages and blog posts (including math
      and diagrams), plus full text search on blog pages.
</p><p class="mt-3 text-base text-gray-300 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 lg:mx-0">
It has full SEO support for Facebook (Open Graph) tags, Twitter Cards and Schema/JSON-LD
      metadata. It also features fully auto generated RSS feed and sitemap for search engine
      indexing.
</p><div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"><div class="rounded-md shadow"><a href="/about" class="flex w-full items-center justify-center rounded-md border border-transparent bg-purple-600 px-8 py-2 text-base font-medium text-white hover:bg-pink-600 dark:bg-purple-300 dark:text-black dark:hover:bg-pink-300 md:px-10 md:py-3 md:text-lg">
About
</a></div><div class="mt-3 sm:ml-3 sm:mt-0"><a href="https://github.com/sponsors/hellotham" class="flex w-full items-center justify-center rounded-md border border-transparent bg-purple-100 px-8 py-2 text-base font-medium text-purple-800 hover:bg-pink-200 dark:bg-purple-900 dark:text-purple-100 dark:hover:bg-pink-900 md:px-10 md:py-3 md:text-lg" rel="noopener noreferrer" target="_blank">
Sponsor Us
</a></div></div>` })}${renderComponent($$result2, "Features", $$Features, {})}${renderComponent($$result2, "FindOutMore", $$Findoutmore, {})}${renderComponent($$result2, "LatestArticles", $$Latestarticles, { "posts": latestPosts })}${renderComponent($$result2, "CTA", $$Cta, {})}<div class="bg-white p-24 dark:bg-black md:p-12"></div>` })}`;
}, "/home/bibi/booboo/vrc_site/src/pages/carousel.astro", void 0);

const $$file = "/home/bibi/booboo/vrc_site/src/pages/carousel.astro";
const $$url = "/hello-astro/carousel";

const carousel = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Carousel,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Features as $, $$Findoutmore as a, $$Latestarticles as b, $$Cta as c, $$Carousel$1 as d, astroCover as e, undraw_static_assets as f, undraw_design_inspiration as g, carousel as h, socialImage as s, undraw_tailwind_css as u };
