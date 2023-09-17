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

				const html = updateImageReferences("<p><strong>Welcome to Astro!</strong></p>\n<p>This is the <code>docs</code> starter template. It contains all of the features that you need to build a Markdown-powered documentation site, including:</p>\n<ul>\n<li>✅ <strong>Full Markdown support</strong></li>\n<li>✅ <strong>Responsive mobile-friendly design</strong></li>\n<li>✅ <strong>Sidebar navigation</strong></li>\n<li>✅ <strong>Search (powered by Algolia)</strong></li>\n<li>✅ <strong>Multi-language i18n</strong></li>\n<li>✅ <strong>Automatic table of contents</strong></li>\n<li>✅ <strong>Automatic list of contributors</strong></li>\n<li>✅ (and, best of all) <strong>dark mode</strong></li>\n</ul>\n<h2 id=\"getting-started\">Getting Started</h2>\n<p>To get started with this theme, check out the <code>README.md</code> in your new project directory. It provides documentation on how to use and customize this template for your own project. Keep the README around so that you can always refer back to it as you build.</p>\n<p>Found a missing feature that you can’t live without? Please suggest it on Discord <a href=\"https://astro.build/chat\">(#ideas-and-suggestions channel)</a> and even consider adding it yourself on GitHub! Astro is an open source project and contributions from developers like you are how we grow!</p>\n<p>Good luck out there, Astronaut. 🧑‍🚀</p>");

				const frontmatter = {"section":"Section Header","title":"Introduction","description":"Docs intro","minutesRead":"1 min read","extra":[]};
				const file = "/home/bibi/booboo/vrc_site/src/content/doc/introduction.md";
				const url = undefined;
				function rawContent() {
					return "\n**Welcome to Astro!**\n\nThis is the `docs` starter template. It contains all of the features that you need to build a Markdown-powered documentation site, including:\n\n- ✅ **Full Markdown support**\n- ✅ **Responsive mobile-friendly design**\n- ✅ **Sidebar navigation**\n- ✅ **Search (powered by Algolia)**\n- ✅ **Multi-language i18n**\n- ✅ **Automatic table of contents**\n- ✅ **Automatic list of contributors**\n- ✅ (and, best of all) **dark mode**\n\n## Getting Started\n\nTo get started with this theme, check out the `README.md` in your new project directory. It provides documentation on how to use and customize this template for your own project. Keep the README around so that you can always refer back to it as you build.\n\nFound a missing feature that you can't live without? Please suggest it on Discord [(#ideas-and-suggestions channel)](https://astro.build/chat) and even consider adding it yourself on GitHub! Astro is an open source project and contributions from developers like you are how we grow!\n\nGood luck out there, Astronaut. 🧑‍🚀\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"getting-started","text":"Getting Started"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
