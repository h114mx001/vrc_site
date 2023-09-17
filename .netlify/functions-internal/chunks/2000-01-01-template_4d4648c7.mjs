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

				const html = updateImageReferences("<p>Hello World</p>");

				const frontmatter = {"draft":true,"title":"Template","description":"Copy to create a new post","author":"chris-tham","publishDate":"2000-01-01T00:00:00.000Z","coverSVG":"../../assets/svg/undraw/undraw_building_websites.svg","socialImage":"../../assets/undraw/undraw_building_websites.png","categories":["general"],"tags":["template","hello"],"minutesRead":"1 min read","extra":[]};
				const file = "/home/bibi/booboo/vrc_site/src/content/blog/2000-01-01-template.md";
				const url = undefined;
				function rawContent() {
					return "\nHello World\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
