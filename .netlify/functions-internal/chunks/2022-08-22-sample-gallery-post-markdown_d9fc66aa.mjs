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

				const html = updateImageReferences("<h2 id=\"gallery-with-lightbox\">Gallery with Lightbox</h2>\n<p>The following is a gallery of photos taken from the event Apollo 11 at Barangaroo, displayed in conjunction with the Sydney Festival 2019.</p>\n<p>The collective adventure that is space travel has many more heroes than the two men who walked on the moon in 1969.</p>\n<p>Apollo 11 at Barangaroo pays tribute to the diverse and under-appreciated heroes of space travel, from astronauts to mathematicians and beyond.</p>\n<p>Sydney Festival has commissioned artworks and participatory experiences, free for the public to explore around Barangaroo, as part of a city-wide commemoration of Apollo 11, the 1969 space flight that first landed people on the moon.</p>");

				const frontmatter = {"title":"Sample Gallery post (Markdown!)","description":"Test post with a photo gallery and lightbox (using PhotoSwipe)","author":"chris-tham","publishDate":"2022-08-22T00:00:00.000Z","coverImage":"../../assets/gallery/apollo11/Ferry.jpeg","gallery":"apollo11","categories":["information"],"tags":["mdx","sample"],"minutesRead":"1 min read","extra":[]};
				const file = "/home/bibi/booboo/vrc_site/src/content/blog/2022-08-22-sample-gallery-post-markdown.md";
				const url = undefined;
				function rawContent() {
					return "\n## Gallery with Lightbox\n\nThe following is a gallery of photos taken from the event Apollo 11 at Barangaroo, displayed in conjunction with the Sydney Festival 2019.\n\nThe collective adventure that is space travel has many more heroes than the two men who walked on the moon in 1969.\n\nApollo 11 at Barangaroo pays tribute to the diverse and under-appreciated heroes of space travel, from astronauts to mathematicians and beyond.\n\nSydney Festival has commissioned artworks and participatory experiences, free for the public to explore around Barangaroo, as part of a city-wide commemoration of Apollo 11, the 1969 space flight that first landed people on the moon.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"gallery-with-lightbox","text":"Gallery with Lightbox"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
