/* empty css                         */import { c as createAstro, b as createComponent, r as renderTemplate, m as maybeRenderHead, j as renderComponent, e as addAttribute, k as renderSlot, F as Fragment } from '../astro_2532d380.mjs';
import 'clsx';
import { a as getEntry, $ as $$Image, b as $$Icon, h as $$Lightbox, e as $$Base, c as getCollection, C as COMMUNITY_INVITE_URL, i as SIDEBAR, G as GITHUB_EDIT_URL } from './404_d15c26e9.mjs';
import { $ as $$Categories, a as $$Tags } from './__f137422d.mjs';

const $$Astro$b = createAstro("https://hellotham.github.io");
const $$Bloghero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Bloghero;
  const { frontmatter } = Astro2.props;
  let cat = await getEntry("category", "general");
  if (frontmatter.categories) {
    cat = await getEntry(frontmatter.categories[0]);
  }
  const image = frontmatter.coverSVG || frontmatter.coverImage || frontmatter.images && frontmatter.images[0] || frontmatter.socialImage || cat.data.coverSVG;
  let author = await getEntry("author", "default");
  if (frontmatter.author) {
    author = await getEntry(frontmatter.author);
  }
  return renderTemplate`${maybeRenderHead()}<div class="relative mx-auto my-4 h-96 w-full max-w-screen-xl md:mb-0"><div class="absolute bottom-0 left-0 z-10 h-full w-full bg-gradient-to-t from-gray-700 xl:rounded-lg"></div>${renderComponent($$result, "Image", $$Image, { "src": image, "alt": "featured image", "class": "absolute left-0 w-full h-full top-0 z-0 object-cover" })}<div class="absolute bottom-0 left-0 z-20 p-4">${frontmatter.categories && renderTemplate`${renderComponent($$result, "Categories", $$Categories, { "categories": frontmatter.categories })}`}<h2 class="text-4xl font-bold leading-tight text-white">${frontmatter.title}</h2><h2 class="text-xl font-medium italic text-purple-200">${frontmatter.description}</h2><span class="mt-3 flex">${frontmatter.author && renderTemplate`<span class="mr-6 flex items-center">${renderComponent($$result, "Image", $$Image, { "src": author.data.image, "alt": author.data.title, "class": "h-10 w-10 rounded-full mr-2 object-cover" })}<span class="font-semibold text-purple-200">${author.data.title}</span></span>`}<span class="mr-6 flex items-center">${renderComponent($$result, "Icon", $$Icon, { "class": "mr-1 h-6 w-6 text-purple-200", "pack": "heroicons-outline", "name": "calendar" })}<span class="ml-1 font-semibold text-purple-200">${new Date(frontmatter.publishDate).toString()}</span></span>${frontmatter.minutesRead && renderTemplate`<span class="flex items-center">${renderComponent($$result, "Icon", $$Icon, { "class": "mr-1 h-6 w-6 text-purple-200", "pack": "heroicons-outline", "name": "clock" })}<span class="ml-1 font-semibold text-purple-200">${frontmatter.minutesRead}</span></span>`}</span>${renderComponent($$result, "Tags", $$Tags, { "tags": frontmatter.tags })}</div></div>`;
}, "/home/bibi/booboo/vrc_site/src/components/bloghero.astro", void 0);

const $$Astro$a = createAstro("https://hellotham.github.io");
const $$Nextprev = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Nextprev;
  const { base, prev, next } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<dl class="mt-12 flex border-t border-purple-300 pt-6 dark:border-purple-700">${prev && renderTemplate`<div class="mr-auto text-left"><dt class="font-display text-sm font-medium text-gray-800 dark:text-gray-200">Prev</dt><dd class="mt-1"><a class="text-base font-semibold text-purple-600 hover:bg-purple-200 hover:text-pink-600 dark:text-purple-300"${addAttribute(base + prev.slug, "href")}><span aria-hidden="true">←</span>${prev.data.title}</a></dd></div>`}${next && renderTemplate`<div class="ml-auto text-right"><dt class="font-display text-sm font-medium text-gray-800 dark:text-gray-200">Next</dt><dd class="mt-1"><a class="text-base font-semibold text-purple-600 hover:bg-purple-200 hover:text-pink-600 dark:text-purple-300"${addAttribute(base + next.slug, "href")}>${next.data.title}<span aria-hidden="true">→</span></a></dd></div>`}</dl>`;
}, "/home/bibi/booboo/vrc_site/src/components/nextprev.astro", void 0);

const $$Astro$9 = createAstro("https://hellotham.github.io");
const $$Images = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Images;
  const { images } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p class="text-sm italic text-gray-500">
Please click on any photo to view in a lightbox. Use arrow keys or swipe to navigate.
</p><div id="images" class="not-prose block w-full" itemscope itemtype="http://schema.org/ImageGallery">${renderComponent($$result, "Lightbox", $$Lightbox, { "id": "images", "images": images })}</div>`;
}, "/home/bibi/booboo/vrc_site/src/components/images.astro", void 0);

const $$Astro$8 = createAstro("https://hellotham.github.io");
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Blog;
  const { frontmatter, prev, next } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "frontmatter": frontmatter }, { "before-footer": ($$result2) => renderTemplate`${renderComponent($$result2, "NextPrev", $$Nextprev, { "slot": "before-footer", "base": "/hello-astro/" + "blog/", "prev": prev, "next": next })}`, "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="dark:bg-black"><article class="post"><header>${renderComponent($$result2, "BlogHero", $$Bloghero, { "frontmatter": frontmatter })}</header><section class="prose prose-purple mx-auto my-8 max-w-screen-lg px-4 dark:prose-invert lg:prose-xl lg:px-0">${frontmatter.images && renderTemplate`${renderComponent($$result2, "Images", $$Images, { "images": frontmatter.images })}`}${renderSlot($$result2, $$slots["default"])}</section></article></main>` })}`;
}, "/home/bibi/booboo/vrc_site/src/layouts/blog.astro", void 0);

const $$Astro$7 = createAstro("https://hellotham.github.io");
async function getStaticPaths$1() {
  let posts = await getCollection("blog", ({ data }) => {
    return data.draft !== true;
  });
  posts = posts.sort((a, b) => +b.data.publishDate - +a.data.publishDate);
  return posts.map((post, i) => ({
    params: { slug: post.slug },
    props: {
      post,
      prev: i > 0 && posts[i - 1],
      next: i < posts.length - 1 && posts[i + 1]
    }
  }));
}
const $$slug$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$slug$1;
  const { post, prev, next } = Astro2.props;
  const { Content, remarkPluginFrontmatter } = await post.render();
  let fm = post.data;
  const rfm = remarkPluginFrontmatter;
  if (rfm) {
    fm.minutesRead = rfm.minutesRead;
    fm.extra = rfm.extra;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Blog, { "frontmatter": fm, "prev": prev, "next": next }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Content", Content, {})}` })}`;
}, "/home/bibi/booboo/vrc_site/src/pages/blog/[slug].astro", void 0);

const $$file$1 = "/home/bibi/booboo/vrc_site/src/pages/blog/[slug].astro";
const $$url$1 = "/hello-astro/blog/[slug]";

const _slug_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug$1,
  file: $$file$1,
  getStaticPaths: getStaticPaths$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$6 = createAstro("https://hellotham.github.io");
const $$Moremenu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Moremenu;
  const { editHref } = Astro2.props;
  return renderTemplate`${renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<h2 id="more-title" class="font-display mt-4 space-y-3 text-sm font-medium text-gray-900 dark:text-white">
More
</h2><ol role="list" class="mt-4 flex flex-col space-y-3 text-sm">${editHref && renderTemplate`<li class="flex items-center py-1 text-gray-500 dark:text-gray-400">${renderComponent($$result2, "Icon", $$Icon, { "pack": "heroicons-outline", "name": "pencil", "class": "mr-2 h-6 w-6" })}<a class="hover:text-purple-600 dark:hover:text-purple-300"${addAttribute(editHref, "href")} target="_blank"><span>Edit this page</span></a></li>`}${renderTemplate`<li class="flex items-center py-1 text-gray-500 dark:text-gray-400">${renderComponent($$result2, "Icon", $$Icon, { "pack": "heroicons-outline", "name": "chat-alt-2", "class": "mr-2 h-6 w-6" })}<a class="hover:text-purple-600 dark:hover:text-purple-300"${addAttribute(COMMUNITY_INVITE_URL, "href")} target="_blank"><span>Join our community</span></a></li>`}</ol>` })}`}`;
}, "/home/bibi/booboo/vrc_site/src/components/moremenu.astro", void 0);

const $$Astro$5 = createAstro("https://hellotham.github.io");
const $$Tableofcontents = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Tableofcontents;
  const { headings } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h2 id="table-of-contents-title" class="font-display text-sm font-medium text-gray-900 dark:text-white">
On this page
</h2><ol role="list" class="mt-4 py-1 text-sm">${headings.filter(({ depth }) => depth > 1 && depth < 4).map((heading) => renderTemplate`<li${addAttribute(
    heading.depth == 2 ? "text-gray-500 dark:text-gray-400" : "mt-2 py-1 pl-5 text-gray-500 dark:text-gray-400",
    "class"
  )}><a class="hover:text-purple-600 dark:hover:text-purple-300"${addAttribute(`#${heading.slug}`, "href")}>${heading.text}</a></li>`)}</ol>`;
}, "/home/bibi/booboo/vrc_site/src/components/tableofcontents.astro", void 0);

const $$Astro$4 = createAstro("https://hellotham.github.io");
const $$Pagecontent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Pagecontent;
  const { frontmatter, headings, githubEditUrl } = Astro2.props;
  const title = frontmatter.title;
  return renderTemplate`${maybeRenderHead()}<article id="article" class="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16"><section class="mb-9 space-y-1"><p class="font-display text-sm font-medium text-purple-600 dark:text-purple-300">${frontmatter.section}</p><h1 class="font-display text-3xl tracking-tight text-slate-900 dark:text-white">${title}</h1><nav class="block sm:hidden">${renderComponent($$result, "TableOfContents", $$Tableofcontents, { "headings": headings })}</nav>${renderSlot($$result, $$slots["default"])}</section><nav class="block sm:hidden">${renderComponent($$result, "MoreMenu", $$Moremenu, { "editHref": githubEditUrl })}</nav></article>`;
}, "/home/bibi/booboo/vrc_site/src/components/pagecontent.astro", void 0);

const $$Astro$3 = createAstro("https://hellotham.github.io");
const $$Leftsidebar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Leftsidebar;
  const { currentPage } = Astro2.props;
  const currentPageMatch = currentPage.slice(1);
  return renderTemplate`${maybeRenderHead()}<div class="hidden bg-purple-50 dark:bg-gray-800 lg:sticky lg:top-16 lg:-ml-6 lg:block lg:h-[calc(100vh-4rem)] lg:flex-none lg:overflow-y-auto lg:py-16 lg:pl-6"><nav aria-labelledby="grid-left" class="w-64 pr-8 text-base lg:text-sm xl:w-72 xl:pr-16"><ul role="list" class="space-y-9">${Object.entries(SIDEBAR).map(([header, children]) => renderTemplate`<li><div class="nav-group"><h2 class="font-display font-medium text-purple-800 dark:text-white">${header}</h2><ul role="list" class="mt-2 space-y-1 border-l-2 border-purple-200 dark:border-purple-700 lg:mt-4 lg:space-y-2 lg:border-purple-300">${children.map((child) => {
    const url = "/hello-astro/" + child.link;
    return renderTemplate`<li class="relative"><a${addAttribute(url, "href")}${addAttribute(currentPageMatch.search(child.link) >= 0 ? "page" : false, "aria-current")}${addAttribute(
      currentPageMatch.search(child.link) >= 0 ? "block w-full pl-3.5 font-semibold text-pink-500 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-pink-500" : "block w-full pl-3.5 text-gray-500 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:hidden before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-purple-400 hover:text-purple-700 hover:before:block dark:text-gray-400 dark:before:bg-purple-500 dark:hover:text-purple-300",
      "class"
    )}>${child.text}</a></li>`;
  })}</ul></div></li>`)}</ul></nav></div>`;
}, "/home/bibi/booboo/vrc_site/src/components/leftsidebar.astro", void 0);

const $$Astro$2 = createAstro("https://hellotham.github.io");
const $$Rightsidebar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Rightsidebar;
  const { headings, githubEditUrl } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="hidden xl:sticky xl:top-16 xl:-mr-6 xl:block xl:h-[calc(100vh-4rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6"><nav aria-labelledby="on-this-page-title" class="w-56"><div>${renderComponent($$result, "TableOfContents", $$Tableofcontents, { "headings": headings })}${renderComponent($$result, "MoreMenu", $$Moremenu, { "editHref": githubEditUrl })}</div></nav></div>`;
}, "/home/bibi/booboo/vrc_site/src/components/rightsidebar.astro", void 0);

const $$Astro$1 = createAstro("https://hellotham.github.io");
const $$Doc = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Doc;
  const { frontmatter, headings } = Astro2.props;
  const currentPage = Astro2.url.toString();
  const currentFile = `src/content/${Astro2.url.pathname.replace("/hello-astro/", "").replace(/\/$/, "")}.md`;
  const githubEditUrl = `${GITHUB_EDIT_URL}/${currentFile}`;
  const allDocs = await getCollection("doc");
  const docs = allDocs.sort((a, b) => a.data.weight - b.data.weight).filter((p) => !p.data.draft);
  const sections = Array.from(new Set(docs.map((doc) => doc.data.section)));
  sections.forEach(
    (section) => docs.filter((doc) => doc.data.section == section).map((doc) => ({
      text: doc.data.title,
      link: "/hello-astro/" + "bio/" + doc.slug
    }))
  );
  let prev;
  let next;
  docs.forEach((doc, i) => {
    if (currentPage.search(doc.slug) >= 0) {
      if (i > 0) {
        prev = docs[i - 1];
      }
      if (i < docs.length - 1) {
        next = docs[i + 1];
      }
    }
  });
  const basefm = {
    draft: frontmatter.draft,
    title: frontmatter.title,
    description: frontmatter.description,
    publishDate: /* @__PURE__ */ new Date()
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "frontmatter": basefm }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="max-w-8xl relative mx-auto flex justify-center bg-white dark:bg-slate-900 sm:px-2 lg:px-8 xl:px-12"><aside id="grid-left" class="grid-sidebar" title="Site Navigation">${renderComponent($$result2, "LeftSidebar", $$Leftsidebar, { "currentPage": currentPage })}</aside><div id="grid-main">${renderComponent($$result2, "PageContent", $$Pagecontent, { "frontmatter": frontmatter, "headings": headings, "githubEditUrl": githubEditUrl }, { "default": ($$result3) => renderTemplate`<section class="prose-headings:font-display prose prose-slate max-w-none dark:prose-invert prose-headings:scroll-mt-28 prose-headings:font-normal prose-a:font-semibold prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,4px)+2px))_0_0_var(--tw-prose-underline,theme(colors.sky.300))] hover:prose-a:[--tw-prose-underline-size:6px] prose-pre:rounded-xl prose-pre:bg-slate-900 prose-pre:shadow-lg prose-lead:text-slate-500 dark:text-slate-400 dark:[--tw-prose-background:theme(colors.slate.900)] dark:prose-a:text-sky-400 dark:prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,theme(colors.sky.800))] dark:hover:prose-a:[--tw-prose-underline-size:6px] dark:prose-pre:bg-slate-800/60 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-slate-300/10 dark:prose-hr:border-slate-800 dark:prose-lead:text-slate-400 lg:prose-headings:scroll-mt-[8.5rem]">${renderSlot($$result3, $$slots["default"])}</section>${renderComponent($$result3, "NextPrev", $$Nextprev, { "base": "/hello-astro/" + "doc/", "prev": prev, "next": next })}` })}</div><aside id="grid-right" class="grid-sidebar" title="Table of Contents">${renderComponent($$result2, "RightSidebar", $$Rightsidebar, { "headings": headings, "githubEditUrl": githubEditUrl })}</aside></main>` })}`;
}, "/home/bibi/booboo/vrc_site/src/layouts/doc.astro", void 0);

const $$Astro = createAstro("https://hellotham.github.io");
async function getStaticPaths() {
  const docEntries = await getCollection("doc", ({ data }) => {
    return data.draft !== true;
  });
  return docEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  const { Content, headings, remarkPluginFrontmatter } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Doc, { "frontmatter": remarkPluginFrontmatter, "headings": headings }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Content", Content, {})}` })}`;
}, "/home/bibi/booboo/vrc_site/src/pages/doc/[slug].astro", void 0);

const $$file = "/home/bibi/booboo/vrc_site/src/pages/doc/[slug].astro";
const $$url = "/hello-astro/doc/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _slug_$1 as _, _slug_ as a };
