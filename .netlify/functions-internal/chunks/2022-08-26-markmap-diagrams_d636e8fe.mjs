import { b as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro_2532d380.mjs';
import './pages/404_d15c26e9.mjs';
import 'clsx';
import 'html-escaper';
/* empty css                        */import 'svgo';
import 'exifr';
/* empty css                               *//* empty css                                                      *//* empty css                                                                 */
const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="([^"]+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<h2 id=\"mindmap\">Mindmap</h2>\n<p>Sample mindmap diagram rendered by <a href=\"https://markmap.js.org\">markmap</a></p>\n<div class=\"markmap\"># markmap\n- beautiful\n- useful\n- easy\n- interactive</div>");

				const frontmatter = {"title":"Mind Map Diagram","description":"MDX post illustrating the use of Markmap component to generate mind map diagrams.","author":"chris-tham","publishDate":"2022-08-26T00:00:00.000Z","coverSVG":"../../assets/svg/undraw/undraw_mind_map.svg","socialImage":"../../assets/undraw/undraw_mind_map.png","categories":["information"],"tags":["mdx","markmap","diagram","mindmap"],"minutesRead":"1 min read","extra":["markmap"]};
				const file = "/home/bibi/booboo/vrc_site/src/content/blog/2022-08-26-markmap-diagrams.md";
				const url = undefined;
				function rawContent() {
					return "\n## Mindmap\n\nSample mindmap diagram rendered by [markmap](https://markmap.js.org)\n\n```markmap\n# markmap\n- beautiful\n- useful\n- easy\n- interactive\n```\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"mindmap","text":"Mindmap"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
