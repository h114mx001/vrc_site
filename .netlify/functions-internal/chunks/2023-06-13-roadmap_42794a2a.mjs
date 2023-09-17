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

				const html = updateImageReferences("<p>The following are some potential features that are being considered as enhancements to this starter. Please consider <a href=\"https://github.com/sponsors/hellotham\">sponsoring</a> us if these features are important to you and you would like them to be implemented sooner. Alternately, if you want to implement any of these features, please let us know and we will be happy to support you!</p>\n<ul>\n<li>✅ <del>searching within website</del></li>\n<li>✅ <del>support for SVG featured images in posts and pages</del></li>\n<li>✅ <del>Light vs Dark themes</del></li>\n<li>✅ <del>KaTeX support in MDX</del></li>\n<li>✅ <del>post and tag pagination</del></li>\n<li>✅ <del>full support for authors (with author profiles and avatars)</del></li>\n<li>✅ <del>photo gallery support (as an MDX component)</del></li>\n<li>✅ <del>Support for diagrams eg. mermaidjs, plantuml, etc.</del></li>\n<li>✅ <del>Automatic optimization of images in Markdown/MDX posts</del></li>\n<li>✅ <del>Use Astro collections</del></li>\n<li>✅ <del>Convert from using yarn to pnpm</del></li>\n<li>✅ <del>Include Markdoc support</del></li>\n<li>✅ <del>Lazyload images</del></li>\n<li>✅ <del>Github Emoji support</del></li>\n<li>Convert from Tailwind to UnoCSS</li>\n<li>Generate richer RSS and JSON Feed by avoiding <code>@astrojs/rss</code></li>\n<li>Integration to popular headless CMS (eg. Sanity, Strapi)</li>\n<li>Integration to mailing list providers (eg. MailChimp)</li>\n<li>Integration to Git based CMS (eg. TinaCMS or NetlifyCMS)</li>\n<li>NextJS version of starter</li>\n</ul>\n<p>Current issues:</p>\n<ul>\n<li>remark/rehype plugins are not processed on Markdoc documents. So reading time, diagrams, math are\nnot supported. Use Markdoc only if you are not using any of these features.</li>\n<li>Better support for Mermaid (awaiting possible official integration by Astro)</li>\n<li>Should really use load Mermaid and Markmap scripts from packages rather than external CDN.</li>\n</ul>");

				const frontmatter = {"title":"Roadmap","description":"List of features to be considered for future versions of this starter.","author":"chris-tham","publishDate":"2023-06-13T00:00:00.000Z","coverSVG":"../../assets/svg/undraw/undraw_scrum_board.svg","socialImage":"../../assets/undraw/undraw_scrum_board.png","categories":["information"],"tags":["roadmap","astro","sponsor"],"minutesRead":"2 min read","extra":[]};
				const file = "/home/bibi/booboo/vrc_site/src/content/blog/2023-06-13-roadmap.md";
				const url = undefined;
				function rawContent() {
					return "\nThe following are some potential features that are being considered as enhancements to this starter. Please consider [sponsoring](https://github.com/sponsors/hellotham) us if these features are important to you and you would like them to be implemented sooner. Alternately, if you want to implement any of these features, please let us know and we will be happy to support you!\n\n- :white_check_mark: ~~searching within website~~\n- :white_check_mark: ~~support for SVG featured images in posts and pages~~\n- :white_check_mark: ~~Light vs Dark themes~~\n- :white_check_mark: ~~KaTeX support in MDX~~\n- :white_check_mark: ~~post and tag pagination~~\n- :white_check_mark: ~~full support for authors (with author profiles and avatars)~~\n- :white_check_mark: ~~photo gallery support (as an MDX component)~~\n- :white_check_mark: ~~Support for diagrams eg. mermaidjs, plantuml, etc.~~\n- :white_check_mark: ~~Automatic optimization of images in Markdown/MDX posts~~\n- :white_check_mark: ~~Use Astro collections~~\n- :white_check_mark: ~~Convert from using yarn to pnpm~~\n- :white_check_mark: ~~Include Markdoc support~~\n- :white_check_mark: ~~Lazyload images~~\n- :white_check_mark: ~~Github Emoji support~~\n- Convert from Tailwind to UnoCSS\n- Generate richer RSS and JSON Feed by avoiding `@astrojs/rss`\n- Integration to popular headless CMS (eg. Sanity, Strapi)\n- Integration to mailing list providers (eg. MailChimp)\n- Integration to Git based CMS (eg. TinaCMS or NetlifyCMS)\n- NextJS version of starter\n\nCurrent issues:\n\n- remark/rehype plugins are not processed on Markdoc documents. So reading time, diagrams, math are\n  not supported. Use Markdoc only if you are not using any of these features.\n- Better support for Mermaid (awaiting possible official integration by Astro)\n- Should really use load Mermaid and Markmap scripts from packages rather than external CDN.\n";
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
