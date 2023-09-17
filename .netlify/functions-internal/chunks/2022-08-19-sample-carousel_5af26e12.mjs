import { _ as __astro_tag_component__, F as Fragment, p as createVNode } from './astro_2532d380.mjs';
import { $ as $$Image } from './pages/404_eb2d6791.mjs';
import { d as $$Carousel } from './pages/carousel_461e2e2e.mjs';
import 'clsx';
import 'html-escaper';
/* empty css                        */import 'svgo';
import 'exifr';
/* empty css                               *//* empty css                                                      *//* empty css                                                                 *//* empty css                                  */import './pages/__b4340032.mjs';

const frontmatter = {
  "title": "Sample Carousel",
  "description": "Test post with a carousel",
  "author": "chris-tham",
  "publishDate": "2022-08-19T00:00:00.000Z",
  "coverSVG": "../../assets/svg/undraw/undraw_images.svg",
  "socialImage": "../../assets/undraw/undraw_images.png",
  "categories": ["information"],
  "tags": ["mdx", "sample"],
  "extra": ["gallery"],
  "minutesRead": "1 min read"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "carousel",
    "text": "Carousel"
  }];
}
const carouselPages = [{
  name: "Cowarra Dam",
  image: "../assets/gallery/carousel/Cowarra-Dam.jpeg",
  title: "Cowarra Dam",
  description: "Off creek water storage dam near Port Macquarie"
}, {
  name: "Mayfield Garden",
  image: "../assets/gallery/carousel/Mayfield-Garden.jpeg",
  title: "Mayfield Garden",
  description: "Water Garden and Bluestone Bridge in autumn"
}, {
  name: "Mt Tomah",
  image: "../assets/gallery/carousel/Mt-Tomah.jpeg",
  title: "Mt Tomah",
  description: "Fountain terrace"
}, {
  name: "Oberon Dam",
  image: "../assets/gallery/carousel/Oberon-Dam.jpeg",
  title: "Oberon Dam",
  description: "Concrete slab and butress across Fish River"
}];
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = Object.assign({
    h2: "h2"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "carousel",
      children: "Carousel"
    }), "\n", createVNode($$Carousel, {
      pages: carouselPages
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
const url = "src/content/blog/2022-08-19-sample-carousel.mdx";
const file = "/home/bibi/booboo/vrc_site/src/content/blog/2022-08-19-sample-carousel.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/bibi/booboo/vrc_site/src/content/blog/2022-08-19-sample-carousel.mdx";

export { Content, __usesAstroImage, carouselPages, Content as default, file, frontmatter, getHeadings, url };
