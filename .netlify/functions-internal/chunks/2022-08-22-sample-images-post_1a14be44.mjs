import { b as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro_2532d380.mjs';
import './pages/404_eb2d6791.mjs';
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

				const html = updateImageReferences("<h2 id=\"images-with-lightbox\">Images with Lightbox</h2>\n<p>The above photos can be viewed in a lightbox by clicking on each image.</p>");

				const frontmatter = {"title":"Sample Images post","description":"Test post with lightbox (using PhotoSwipe) on a set of images","author":"chris-tham","publishDate":"2022-08-22T00:00:00.000Z","coverSVG":"../../assets/svg/undraw/undraw_portfolio.svg","socialImage":"../../assets/undraw/undraw_portfolio.png","images":["../../assets/gallery/apollo11/Astronaut.jpeg","../../assets/gallery/apollo11/Ferry.jpeg","../../assets/gallery/apollo11/Walk.jpeg"],"categories":["information"],"tags":["mdx","sample"],"minutesRead":"1 min read","extra":[]};
				const file = "/home/bibi/booboo/vrc_site/src/content/blog/2022-08-22-sample-images-post.md";
				const url = undefined;
				function rawContent() {
					return "\n## Images with Lightbox\n\nThe above photos can be viewed in a lightbox by clicking on each image.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"images-with-lightbox","text":"Images with Lightbox"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
