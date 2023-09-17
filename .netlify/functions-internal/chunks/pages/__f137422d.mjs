/* empty css                         */import { c as createAstro, b as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, j as renderComponent } from '../astro_2532d380.mjs';
import 'clsx';
import { g as getEntries, a as getEntry, $ as $$Image, b as $$Icon, c as getCollection, P as PAGE_SIZE, S as SiteMetadata, d as $$Pagehero, e as $$Base, f as coverSVG$2, s as socialImage$2 } from './404_d15c26e9.mjs';

const $$Astro$8 = createAstro("https://hellotham.github.io");
const $$Categories = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Categories;
  const { categories } = Astro2.props;
  const cats = await getEntries(categories);
  return renderTemplate`${categories && renderTemplate`${maybeRenderHead()}<div class="flex flex-row flex-wrap items-start gap-2 pb-2">${cats.map((category) => renderTemplate`<a${addAttribute(`${"/hello-astro/"}category/${encodeURIComponent(category.slug)}/`, "href")} class="inline-block rounded bg-purple-600 px-3 py-1 text-xs font-medium uppercase tracking-tight text-white hover:bg-pink-600">${category.data.title}<span class="sr-only">category</span></a>`)}</div>`}`;
}, "/home/bibi/booboo/vrc_site/src/components/categories.astro", void 0);

const $$Astro$7 = createAstro("https://hellotham.github.io");
const $$Tags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Tags;
  const { tags } = Astro2.props;
  return renderTemplate`${tags && renderTemplate`${maybeRenderHead()}<div class="mt-2 flex flex-row flex-wrap items-start gap-4 lg:gap-2">${tags.map((tag) => renderTemplate`<a${addAttribute(`${"/hello-astro/"}tag/${encodeURIComponent(tag)}/`, "href")} class="inline-block rounded bg-pink-100 px-2 py-2 text-xs font-semibold text-purple-900 hover:bg-purple-300 hover:text-black lg:py-1">
#${tag}</a>`)}</div>`}`;
}, "/home/bibi/booboo/vrc_site/src/components/tags.astro", void 0);

const $$Astro$6 = createAstro("https://hellotham.github.io");
const $$Blogcard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Blogcard;
  const { post } = Astro2.props;
  let cat = await getEntry("category", "general");
  if (post.data.categories) {
    cat = await getEntry(post.data.categories[0]);
  }
  const image = post.data.coverSVG || post.data.coverImage || post.data.images && post.data.images[0] || post.data.socialImage || cat.data.coverSVG;
  let author = await getEntry("author", "default");
  if (post.data.author) {
    author = await getEntry(post.data.author);
  }
  return renderTemplate`${maybeRenderHead()}<section class="p-4 md:w-1/2 lg:w-1/3"><div class="border-1 h-full overflow-hidden rounded-lg border-gray-200 bg-white p-2 shadow-xl dark:border-gray-700 dark:bg-gray-800"><a${addAttribute("/hello-astro/" + "blog/" + post.slug, "href")}>${renderComponent($$result, "Image", $$Image, { "src": image, "alt": post.data.title + " featured image", "class": "relative w-full h-64 bg-purple-100 dark:bg-purple-800 rounded-lg overflow-hidden group-hover:opacity-75 object-center object-cover" })}<p class="sr-only">${post.data.title}</p></a><div class="p-6">${post.data.categories && renderTemplate`${renderComponent($$result, "Categories", $$Categories, { "categories": post.data.categories })}`}<a${addAttribute("/hello-astro/" + "blog/" + post.slug, "href")}><h1 class="title-font mt-2 text-xl font-bold text-purple-600 hover:text-pink-600 dark:text-purple-300 dark:hover:text-pink-300">${post.data.title}</h1></a><div class="flex flex-wrap items-center"><span class="mr-3 inline-flex items-center border-r-2 border-purple-200 py-1 pr-3 text-xs leading-none text-gray-500 dark:border-purple-600 dark:text-gray-400">${renderComponent($$result, "Icon", $$Icon, { "class": "mr-1 h-4 w-4", "pack": "heroicons-outline", "name": "calendar" })}${post.data.publishDate.toDateString()}</span>${post.data.minutesRead && renderTemplate`<span class="mr-3 inline-flex items-center border-r-2 border-purple-200 py-1 pr-3 text-xs leading-none text-gray-500 dark:border-purple-600 dark:text-gray-400">${renderComponent($$result, "Icon", $$Icon, { "class": "mr-1 h-4 w-4", "pack": "heroicons-outline", "name": "clock" })}${post.data.minutesRead}</span>`}${post.data.author && renderTemplate`<span class="text-rosely1 dark:text-rosely7 inline-flex items-center text-xs leading-none">${renderComponent($$result, "Icon", $$Icon, { "class": "mr-1 h-4 w-4", "pack": "heroicons-outline", "name": "user-circle" })}${author.data.title}</span>`}</div><p class="mt-3 text-sm italic text-gray-600 dark:text-gray-300">${post.data.description}</p>${renderComponent($$result, "Tags", $$Tags, { "tags": post.data.tags })}</div></div></section>`;
}, "/home/bibi/booboo/vrc_site/src/components/blogcard.astro", void 0);

const $$Astro$5 = createAstro("https://hellotham.github.io");
const $$Blogroll = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Blogroll;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap space-y-12 dark:bg-gray-900 lg:space-y-0">${posts.map((post) => renderTemplate`${renderComponent($$result, "BlogCard", $$Blogcard, { "post": post })}`)}</div>`;
}, "/home/bibi/booboo/vrc_site/src/components/blogroll.astro", void 0);

const $$Astro$4 = createAstro("https://hellotham.github.io");
const $$Paginatecontrol = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Paginatecontrol;
  const { base, page } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mt-4 flex items-center"><a${addAttribute("/hello-astro/" + "categories", "href")} class="inline-block rounded-md bg-purple-600 px-2 py-1 text-base text-white hover:bg-pink-600 md:text-lg">
Categories
</a><a${addAttribute("/hello-astro/" + "tags", "href")} class="ml-4 inline-block rounded-md bg-purple-600 px-2 py-1 text-base text-white hover:bg-pink-600 md:text-lg">
Tags
</a><a${addAttribute("/hello-astro/" + "authors", "href")} class="ml-4 inline-block rounded-md bg-purple-600 px-2 py-1 text-base text-white hover:bg-pink-600 md:text-lg">
Authors
</a>${page.size < page.total && renderTemplate`<div class="ml-4"><nav class="relative z-0 inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination"><a${addAttribute(page.url.prev ? "/hello-astro/" + page.url.prev.slice(1) : "#", "href")}${addAttribute([
    "relative inline-flex items-center px-2 py-2 rounded-l-md border text-sm font-medium",
    page.url.prev ? "border-purple-300 bg-white text-gray-500 hover:bg-purple-100 dark:border-purple-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-purple-900" : "border-gray-300 bg-gray-300 text-gray-400 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-500"
  ], "class:list")}><span class="sr-only">Previous</span>${renderComponent($$result, "Icon", $$Icon, { "class": "h-5 w-5", "pack": "heroicons-solid", "name": "chevron-left" })}</a>${Array.from({ length: page.lastPage }, (_, index) => index + 1).map((i) => renderTemplate`<a${addAttribute(base + "/" + (i > 1 ? i : ""), "href")} aria-current="page"${addAttribute([
    i == page.currentPage ? "z-10 bg-pink-100 border-purple-500 text-purple-600 dark:bg-pink-900 dark:border-pink-500 dark:text-purple-200" : "bg-white border-purple-300 text-gray-500 hover:bg-purple-100 dark:bg-gray-900 dark:border-purple-700 dark:text-gray-300 dark:hover:bg-purple-900",
    "relative inline-flex items-center px-4 py-2 border text-sm font-medium"
  ], "class:list")}>${i}</a>`)}<a${addAttribute(page.url.next ? "/hello-astro/" + page.url.next.slice(1) : "#", "href")}${addAttribute([
    "relative inline-flex items-center px-2 py-2 rounded-r-md border text-sm font-medium",
    page.url.next ? "border-purple-300 bg-white text-gray-500 hover:bg-purple-100 dark:border-purple-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-purple-900" : "border-gray-300 bg-gray-300 text-gray-400 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-500"
  ], "class:list")}><span class="sr-only">Next</span>${renderComponent($$result, "Icon", $$Icon, { "class": "h-5 w-5", "pack": "heroicons-solid", "name": "chevron-right" })}</a></nav></div>`}<p class="ml-4 italic text-white">
Articles ${page.start + 1}-${page.end + 1} (total ${page.total})
</p></div>`;
}, "/home/bibi/booboo/vrc_site/src/components/paginatecontrol.astro", void 0);

const $$Astro$3 = createAstro("https://hellotham.github.io");
async function getStaticPaths$3({ paginate }) {
  const categories = await getCollection("category");
  const allPosts = await getCollection("blog", (post) => !post.data.draft);
  const posts = allPosts.sort((a, b) => +b.data.publishDate - +a.data.publishDate);
  return categories.flatMap((category) => {
    return paginate(
      posts.filter(
        (post) => category && post.data.categories.map((category2) => category2.slug).includes(category.slug)
      ),
      {
        params: { category: category.slug },
        pageSize: PAGE_SIZE
      }
    );
  });
}
const $$$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$$3;
  const { category } = Astro2.params;
  const { page } = Astro2.props;
  const detail = await getEntry("category", category);
  const frontmatter = {
    title: "Category: " + category + (page.size < page.total ? " (page " + page.currentPage + " of " + page.lastPage + ")" : ""),
    description: detail.data.description,
    coverSVG: detail.data.coverSVG,
    socialImage: detail.data.socialImage,
    publishDate: SiteMetadata.buildTime
  };
  const currentPage = Astro2.url.pathname.replace(/(\/\d*)?\/$/, "");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "frontmatter": frontmatter }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<header>${renderComponent($$result2, "PageHero", $$Pagehero, { "title": frontmatter.title, "description": frontmatter.description, "coverSVG": frontmatter.coverSVG, "socialImage": frontmatter.socialImage }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "PaginateControl", $$Paginatecontrol, { "base": currentPage, "page": page })}` })}</header><main class="mt-10 bg-gray-100 dark:bg-gray-900">${renderComponent($$result2, "BlogRoll", $$Blogroll, { "posts": page.data })}</main>` })}`;
}, "/home/bibi/booboo/vrc_site/src/pages/category/[category]/[...page].astro", void 0);

const $$file$3 = "/home/bibi/booboo/vrc_site/src/pages/category/[category]/[...page].astro";
const $$url$3 = "/hello-astro/category/[category]/[...page]";

const ____page_$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$$3,
  file: $$file$3,
  getStaticPaths: getStaticPaths$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const coverSVG$1 = {"src":"/hello-astro/_astro/undraw_short_bio.5864b3f8.svg","width":625.64494,"height":417.05929,"format":"svg"};

const undraw_short_bio$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: coverSVG$1
}, Symbol.toStringTag, { value: 'Module' }));

const socialImage$1 = {"src":"/hello-astro/_astro/undraw_short_bio.1ed42b44.png","width":866,"height":577,"format":"png"};

const undraw_short_bio = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: socialImage$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("https://hellotham.github.io");
async function getStaticPaths$2({ paginate }) {
  const authors = await getCollection("author");
  const allPosts = await getCollection("blog", (post) => !post.data.draft);
  const posts = allPosts.sort((a, b) => +b.data.publishDate - +a.data.publishDate);
  return authors.flatMap((author) => {
    return paginate(
      posts.filter((post) => post.data.author.slug == author.slug),
      {
        params: { author: author.slug },
        pageSize: PAGE_SIZE
      }
    );
  });
}
const $$$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$$2;
  const { author } = Astro2.params;
  const { page } = Astro2.props;
  const detail = await getEntry("author", author);
  const frontmatter = {
    title: "Author: " + detail.data.title + (page.size < page.total ? " (page " + page.currentPage + " of " + page.lastPage + ")" : ""),
    description: detail.data.description + ". Showing articles " + (page.start + 1) + "-" + (page.end + 1) + " (total " + page.total + ")",
    coverSVG: coverSVG$1,
    socialImage: socialImage$1,
    publishDate: SiteMetadata.buildTime
  };
  const currentPage = Astro2.url.pathname.replace(/(\/\d*)?\/$/, "");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "frontmatter": frontmatter }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<header>${renderComponent($$result2, "PageHero", $$Pagehero, { "title": frontmatter.title, "description": frontmatter.description, "coverSVG": frontmatter.coverSVG, "socialImage": frontmatter.socialImage }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Image", $$Image, { "src": detail.data.image, "alt": detail.data.title, "class": "mt-4 h-32 w-32 rounded-full object-cover object-center" })}${renderComponent($$result3, "PaginateControl", $$Paginatecontrol, { "base": currentPage, "page": page })}` })}</header><main class="mt-10 bg-gray-100 dark:bg-gray-900">${renderComponent($$result2, "BlogRoll", $$Blogroll, { "posts": page.data })}</main>` })}`;
}, "/home/bibi/booboo/vrc_site/src/pages/author/[author]/[...page].astro", void 0);

const $$file$2 = "/home/bibi/booboo/vrc_site/src/pages/author/[author]/[...page].astro";
const $$url$2 = "/hello-astro/author/[author]/[...page]";

const ____page_$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$$2,
  file: $$file$2,
  getStaticPaths: getStaticPaths$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://hellotham.github.io");
async function getStaticPaths$1({ paginate }) {
  const allPosts = await getCollection("blog", ({ data }) => {
    return data.draft !== true;
  });
  const posts = allPosts.sort((a, b) => +b.data.publishDate - +a.data.publishDate);
  return paginate(posts, { pageSize: PAGE_SIZE });
}
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$$1;
  const { page } = Astro2.props;
  const frontmatter = {
    title: "Blog" + (page.size < page.total ? " (page " + page.currentPage + " of " + page.lastPage + ")" : ""),
    description: "View our articles.",
    coverSVG: coverSVG$2,
    socialImage: socialImage$2,
    publishDate: SiteMetadata.buildTime
  };
  const currentPage = Astro2.url.pathname.replace(/(\/\d*)?\/$/, "");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "frontmatter": frontmatter }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<header>${renderComponent($$result2, "PageHero", $$Pagehero, { "title": frontmatter.title, "description": frontmatter.description, "coverSVG": frontmatter.coverSVG, "socialImage": frontmatter.socialImage }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "PaginateControl", $$Paginatecontrol, { "base": currentPage, "page": page })}` })}</header><main class="mt-10 bg-gray-100 dark:bg-gray-900">${renderComponent($$result2, "BlogRoll", $$Blogroll, { "posts": page.data })}</main>` })}`;
}, "/home/bibi/booboo/vrc_site/src/pages/blog/[...page].astro", void 0);

const $$file$1 = "/home/bibi/booboo/vrc_site/src/pages/blog/[...page].astro";
const $$url$1 = "/hello-astro/blog/[...page]";

const ____page_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$$1,
  file: $$file$1,
  getStaticPaths: getStaticPaths$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const coverSVG = {"src":"/hello-astro/_astro/undraw_add_notes.7da5b97b.svg","width":485.83373,"height":483.5,"format":"svg"};

const undraw_add_notes$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: coverSVG
}, Symbol.toStringTag, { value: 'Module' }));

const socialImage = {"src":"/hello-astro/_astro/undraw_add_notes.7d4ca0f6.png","width":726,"height":644,"format":"png"};

const undraw_add_notes = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: socialImage
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://hellotham.github.io");
async function getStaticPaths({ paginate }) {
  const allPosts = await getCollection("blog", ({ data }) => {
    return data.draft !== true;
  });
  const posts = allPosts.sort((a, b) => +b.data.publishDate - +a.data.publishDate);
  const tags = Array.from(new Set(posts.flatMap((post) => post.data.tags)));
  return tags.flatMap((tag) => {
    return paginate(
      posts.filter((post) => tag && post.data.tags?.includes(tag)),
      {
        params: { tag },
        pageSize: PAGE_SIZE
      }
    );
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { tag } = Astro2.params;
  const { page } = Astro2.props;
  const frontmatter = {
    title: "Tag: " + tag + (page.size < page.total ? " (page " + page.currentPage + " of " + page.lastPage + ")" : ""),
    description: "Showing articles " + (page.start + 1) + "-" + (page.end + 1) + " (total " + page.total + ")",
    coverSVG,
    socialImage,
    publishDate: SiteMetadata.buildTime
  };
  const currentPage = Astro2.url.pathname.replace(/(\/\d*)?\/$/, "");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "frontmatter": frontmatter }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<header>${renderComponent($$result2, "PageHero", $$Pagehero, { "title": frontmatter.title, "description": frontmatter.description, "coverSVG": frontmatter.coverSVG, "socialImage": frontmatter.socialImage }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "PaginateControl", $$Paginatecontrol, { "base": currentPage, "page": page })}` })}</header><main class="mt-10 bg-gray-100 dark:bg-gray-900">${renderComponent($$result2, "BlogRoll", $$Blogroll, { "posts": page.data })}</main>` })}`;
}, "/home/bibi/booboo/vrc_site/src/pages/tag/[tag]/[...page].astro", void 0);

const $$file = "/home/bibi/booboo/vrc_site/src/pages/tag/[tag]/[...page].astro";
const $$url = "/hello-astro/tag/[tag]/[...page]";

const ____page_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Categories as $, ____page_$3 as _, $$Tags as a, undraw_short_bio as b, coverSVG as c, ____page_$2 as d, ____page_$1 as e, undraw_add_notes$1 as f, undraw_add_notes as g, ____page_ as h, socialImage as s, undraw_short_bio$1 as u };
