/* empty css                         */import { c as createAstro, b as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_2532d380.mjs';
import { c as getCollection, d as $$Pagehero, S as SiteMetadata, b as $$Icon, e as $$Base } from './404_eb2d6791.mjs';
import 'clsx';

const $$Astro$1 = createAstro("https://hellotham.github.io");
const $$Map = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Map;
  const { loc, zoom } = Astro2.props;
  return renderTemplate`<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css" integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=" crossorigin="">${renderComponent($$result, "map-inner", "map-inner", { "data-lat": loc[0], "data-lng": loc[1], "data-zoom": zoom })}${maybeRenderHead()}<div id="map" class="mb-3 h-96"></div>`;
}, "/home/bibi/booboo/vrc_site/src/components/map.astro", void 0);

const coverSVG = {"src":"/hello-astro/_astro/undraw_contact_us.080347ba.svg","width":1096,"height":574.74,"format":"svg"};

const undraw_contact_us$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: coverSVG
}, Symbol.toStringTag, { value: 'Module' }));

const socialImage = {"src":"/hello-astro/_astro/undraw_contact_us.2cc518a5.png","width":1336,"height":735,"format":"png"};

const undraw_contact_us = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: socialImage
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://hellotham.github.io");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const frontmatter = {
    title: "Contact",
    description: "Our presence is real and digital. Contact us through the following ways.",
    coverSVG,
    socialImage,
    publishDate: SiteMetadata.buildTime
  };
  const social = await getCollection("social");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "frontmatter": frontmatter }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<header>${renderComponent($$result2, "PageHero", $$Pagehero, { "title": frontmatter.title, "description": frontmatter.description, "coverSVG": coverSVG, "socialImage": socialImage })}</header><main><section class="mx-auto mb-20 max-w-7xl text-gray-800 dark:text-gray-100"><div class="block bg-white dark:bg-gray-900 lg:my-8"><div class="flex flex-wrap items-start"><div class="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12"><div class="w-full">${renderComponent($$result2, "Map", $$Map, { "loc": SiteMetadata.latlng, "zoom": 11 })}</div></div><div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12"><div class="flex flex-wrap pt-8 lg:pt-0">${social.map(
    (method) => method.data.link && renderTemplate`<div class="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12"><div class="flex items-start"><div class="shrink-0">${renderComponent($$result2, "Icon", $$Icon, { "pack": "bi", "name": method.data.icon, "class": "flex h-14 w-14 items-center justify-center rounded-md bg-purple-600 p-4 text-white shadow-md" })}</div><div class="ml-6 grow"><p class="mb-1 font-bold">${method.data.name}</p><p>${" "}<a${addAttribute(method.data.link, "href")} class="text-purple-600 hover:text-pink-600 dark:text-purple-300 dark:hover:text-pink-300">${method.data.link}</a></p></div></div></div>`
  )}</div></div></div></div></section></main>` })}`;
}, "/home/bibi/booboo/vrc_site/src/pages/contact.astro", void 0);

const $$file = "/home/bibi/booboo/vrc_site/src/pages/contact.astro";
const $$url = "/hello-astro/contact";

const contact = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Map as $, undraw_contact_us as a, contact as c, undraw_contact_us$1 as u };
