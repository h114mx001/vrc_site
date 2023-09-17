/* empty css                         */import { c as createAstro, b as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_2532d380.mjs';
import { c as getCollection, d as $$Pagehero, e as $$Base, S as SiteMetadata } from './404_eb2d6791.mjs';
import { c as coverSVG, s as socialImage } from './__b4340032.mjs';
import { steelBeams, jupiter, cutout, pianoMan, pieFactory, graphPaper, charlieBrown, autumn, temple, deathStar, churchOnSunday, overlappingHexagons, bamboo, bathroomFloor, corkScrew, happyIntersection, kiwi, lips, lisbon, tinyCheckers, fancyRectangles, heavyRain, cage, connections, flippedDiamonds, houndstooth, morphingDiamonds, zigZag, aztec, bankNote, boxes, diagonalLines, endlessClouds, eyes, groovy, melt, parkayFloor, pixelDots, signal, wallpaper } from 'hero-patterns';
import 'clsx';
import 'html-escaper';
import 'svgo';
import 'exifr';
/* empty css                                *//* empty css                                                       *//* empty css                                                                  */
const $$Astro = createAstro("https://hellotham.github.io");
const $$Tags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tags;
  const patterns = [
    steelBeams("#9c92ac", 0.5),
    jupiter("#9c92ac", 0.5),
    cutout("#9c92ac", 0.5),
    pianoMan("#9c92ac", 0.5),
    pieFactory("#9c92ac", 0.5),
    graphPaper("#9c92ac", 0.5),
    charlieBrown("#9c92ac", 0.5),
    autumn("#9c92ac", 0.5),
    temple("#9c92ac", 0.5),
    deathStar("#9c92ac", 0.5),
    churchOnSunday("#9c92ac", 0.5),
    overlappingHexagons("#9c92ac", 0.5),
    bamboo("#9c92ac", 0.5),
    bathroomFloor("#9c92ac", 0.5),
    corkScrew("#9c92ac", 0.5),
    happyIntersection("#9c92ac", 0.5),
    kiwi("#9c92ac", 0.5),
    lips("#9c92ac", 0.5),
    lisbon("#9c92ac", 0.5),
    tinyCheckers("#9c92ac", 0.5),
    fancyRectangles("#9c92ac", 0.5),
    heavyRain("#9c92ac", 0.5),
    cage("#9c92ac", 0.5),
    connections("#9c92ac", 0.5),
    flippedDiamonds("#9c92ac", 0.5),
    houndstooth("#9c92ac", 0.5),
    morphingDiamonds("#9c92ac", 0.5),
    zigZag("#9c92ac", 0.5),
    aztec("#9c92ac", 0.5),
    bankNote("#9c92ac", 0.5),
    boxes("#9c92ac", 0.5),
    diagonalLines("#9c92ac", 0.5),
    endlessClouds("#9c92ac", 0.5),
    eyes("#9c92ac", 0.5),
    groovy("#9c92ac", 0.5),
    melt("#9c92ac", 0.5),
    parkayFloor("#9c92ac", 0.5),
    pixelDots("#9c92ac", 0.5),
    signal("#9c92ac", 0.5),
    wallpaper("#9c92ac", 0.5)
  ];
  const frontmatter = {
    title: "Tags",
    description: "Articles by tags",
    coverSVG,
    socialImage,
    publishDate: SiteMetadata.buildTime
  };
  const posts = await getCollection("blog", ({ data }) => {
    return data.draft !== true;
  });
  const latestPosts = posts.sort((a, b) => +b.data.publishDate - +a.data.publishDate);
  const tagmap = /* @__PURE__ */ new Map();
  latestPosts.forEach((post) => {
    post.data.tags?.forEach((tag) => {
      let utag = tagmap.get(tag);
      if (utag) {
        utag.count += 1;
        utag.pages.push(post);
      } else {
        utag = { tag, count: 1, pages: [post] };
      }
      tagmap.set(tag, utag);
    });
  });
  const tags = Array.from(tagmap.values());
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "frontmatter": frontmatter }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<header>${renderComponent($$result2, "PageHero", $$Pagehero, { "title": frontmatter.title, "description": frontmatter.description, "coverSVG": frontmatter.coverSVG, "socialImage": frontmatter.socialImage })}</header><main class="mt-10 dark:bg-gray-900"><div class="mx-4 mb-24 mt-6 grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 xl:gap-x-6 xl:gap-y-6">${tags.sort((a, b) => b.count - a.count).map((tag, i) => renderTemplate`<a${addAttribute(`${"/hello-astro/"}tag/${tag.tag}/`, "href")} class="group"><section class="group relative h-24 w-full overflow-hidden rounded-lg bg-cover bg-center shadow-lg transition  duration-300 ease-in-out hover:shadow-2xl"${addAttribute({
    backgroundColor: "#dfdbe5",
    // backgroundImage: `url(${OGImage})`,
    backgroundImage: patterns[i % patterns.length]
  }, "style")}><div class="absolute inset-0 bg-black bg-opacity-50 transition duration-300 ease-in-out group-hover:opacity-75"></div><div class="relative flex h-full w-full items-center justify-center px-4 sm:px-6 lg:px-4"><h3 class="text-center text-2xl font-bold text-white"><span class="absolute inset-0"></span>${tag.tag}</h3><p class="text-center text-sm font-medium text-gray-200">&nbsp;(${tag.count})</p></div></section></a>`)}</div></main>` })}`;
}, "/home/bibi/booboo/vrc_site/src/pages/tags.astro", void 0);

const $$file = "/home/bibi/booboo/vrc_site/src/pages/tags.astro";
const $$url = "/hello-astro/tags";

export { $$Tags as default, $$file as file, $$url as url };