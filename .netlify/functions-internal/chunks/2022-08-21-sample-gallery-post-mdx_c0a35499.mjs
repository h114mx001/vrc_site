import { _ as __astro_tag_component__, F as Fragment, p as createVNode } from './astro_2532d380.mjs';
import { $ as $$Image, x as $$Gallery } from './pages/404_d15c26e9.mjs';
import 'clsx';
import 'html-escaper';
/* empty css                        */import 'svgo';
import 'exifr';
/* empty css                               *//* empty css                                                      *//* empty css                                                                 */
const frontmatter = {
  "title": "Sample Gallery post (MDX)",
  "description": "Test post with a photo gallery and lightbox (using PhotoSwipe)",
  "author": "chris-tham",
  "publishDate": "2022-08-21T00:00:00.000Z",
  "coverSVG": "../../assets/svg/undraw/undraw_portfolio.svg",
  "socialImage": "../../assets/undraw/undraw_portfolio.png",
  "categories": ["information"],
  "tags": ["mdx", "sample"],
  "minutesRead": "1 min read",
  "extra": []
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "gallery-with-lightbox",
    "text": "Gallery with Lightbox"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = Object.assign({
    h2: "h2",
    p: "p"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "gallery-with-lightbox",
      children: "Gallery with Lightbox"
    }), "\n", createVNode(_components.p, {
      children: "The following is a gallery of photos taken from the event Apollo 11 at Barangaroo, displayed in conjunction with the Sydney Festival 2019."
    }), "\n", createVNode(_components.p, {
      children: "The collective adventure that is space travel has many more heroes than the two men who walked on the moon in 1969."
    }), "\n", createVNode(_components.p, {
      children: "Apollo 11 at Barangaroo pays tribute to the diverse and under-appreciated heroes of space travel, from astronauts to mathematicians and beyond."
    }), "\n", createVNode(_components.p, {
      children: "Sydney Festival has commissioned artworks and participatory experiences, free for the public to explore around Barangaroo, as part of a city-wide commemoration of Apollo 11, the 1969 space flight that first landed people on the moon."
    }), "\n", createVNode($$Gallery, {
      folder: "apollo11"
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/blog/2022-08-21-sample-gallery-post-mdx.mdx";
const file = "/home/bibi/booboo/vrc_site/src/content/blog/2022-08-21-sample-gallery-post-mdx.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/bibi/booboo/vrc_site/src/content/blog/2022-08-21-sample-gallery-post-mdx.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
