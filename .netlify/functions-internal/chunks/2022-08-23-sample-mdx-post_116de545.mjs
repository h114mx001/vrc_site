import { _ as __astro_tag_component__, F as Fragment, p as createVNode } from './astro_2532d380.mjs';
import { $ as $$Image } from './pages/404_d15c26e9.mjs';
import { $ as $$Map } from './pages/contact_b9dea518.mjs';
import 'clsx';
import 'html-escaper';
/* empty css                        */import 'svgo';
import 'exifr';
/* empty css                               *//* empty css                                                      *//* empty css                                                                 */
const frontmatter = {
  "title": "Sample MDX post",
  "description": "Test post illustrating the use of MDX.",
  "author": "chris-tham",
  "publishDate": "2022-08-23T00:00:00.000Z",
  "coverSVG": "../../assets/svg/undraw/undraw_portfolio_update.svg",
  "socialImage": "../../assets/undraw/undraw_portfolio_update.png",
  "categories": ["information"],
  "tags": ["mdx", "sample"],
  "minutesRead": "1 min read",
  "extra": []
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "hello",
    "text": "hello"
  }, {
    "depth": 2,
    "slug": "embedded-map-component",
    "text": "Embedded Map Component"
  }];
}
const hello = "Hello World";
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = Object.assign({
    h2: "h2",
    p: "p"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "hello",
      children: hello
    }), "\n", createVNode(_components.p, {
      children: "The above title is a variable declared in MDX."
    }), "\n", createVNode(_components.h2, {
      id: "embedded-map-component",
      children: "Embedded Map Component"
    }), "\n", createVNode(_components.p, {
      children: "The following is the Map component defined in this starter"
    }), "\n", createVNode($$Map, {
      loc: [37.33214, -122.02992],
      zoom: 17
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
const url = "src/content/blog/2022-08-23-sample-mdx-post.mdx";
const file = "/home/bibi/booboo/vrc_site/src/content/blog/2022-08-23-sample-mdx-post.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/bibi/booboo/vrc_site/src/content/blog/2022-08-23-sample-mdx-post.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, hello, url };
