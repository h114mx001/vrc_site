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

				const html = updateImageReferences("<ol>\n<li>Clone your own version of the starter template or fork the repository. Run <code>yarn</code> then <code>yarn build</code> or <code>yarn dev</code>.</li>\n<li>The default colour scheme is purple (<code>#663399</code>). Change to your preferred hue by doing a global search and replace of ‘-purple-’ to your favourite colour.</li>\n<li>The home (landing) page consists of a number of components (Hero, Feature, CTA, …) - edit these components in <code>src/components</code> to customise.</li>\n<li>The <code>/contact</code> page displays an OpenStreetMaps map via Leaflet - customise by changing to your preferred set of coordinates.</li>\n<li><code>src/config.ts</code> has all the site parameters and navigation links - edit to suit.</li>\n<li>Create new Markdown or MDX pages in <code>src/content/blog</code> (using either <code>.md</code> or <code>.mdx</code> extension).</li>\n<li>Any content created in the <code>src/content/blog</code> subdirectory will automatically be a blog post. Use <code>src/content/blog/2000-01-01-template.md</code> as a base for creating a new blog post. Remember to set the <code>draft</code> property in the frontmatter to <code>false</code> when you want to publish the page.</li>\n<li>Documentation pages are also supported by creating content in <code>src/content/doc</code> subdirectory (use sample pages as guideline - remember to set <code>section</code> in frontmatter to create different sections and use <code>weight</code> in frontmatter to change ordering of pages)</li>\n<li>Photo galleries are supported in Markdown posts without using MDX! Only one gallery (displayed at bottom of post) is supported. Specify the gallery using the <code>gallery</code> frontmatter (must name a subdirectory under <code>src/assets/gallery</code>)</li>\n<li>Multiple images at beginning of blog post (with lightbox support) is specified using <code>images</code> frontmatter - this is an array of relative image file names in <code>src/images</code>. The first image will be used as cover image (if <code>coverImage</code> is not separately set)</li>\n<li>If you create a new tag (eg. <code>newtag</code>) a new tag page will be created ie. <code>/tag/newtag</code>. The <code>/tags</code> page will enumerate all tags.</li>\n<li>Similarly, a new category (eg. <code>newcat</code>) will create a page in <code>/category/newcat</code>. The <code>/categories</code> page will enumerate all categories. You can further customise categories to include an SVG cover image, social image and description by adding your new category in <code>CategoryDetail</code> in <code>src/config.ts</code>.</li>\n<li>Blog, category, tag index pages support pagination. You can set the number of posts per page by changing <code>PAGE_SIZE</code> in <code>src/config.ts</code>.</li>\n<li>If you want to change the header, edit <code>src/components/header.astro</code>. Similarly, edit <code>src/components/footer.astro</code> to customise the footer.</li>\n<li>If you make a lot of changes, use <code>yarn lint</code> to check everything is okay.</li>\n<li><code>yarn format</code> will pretty-print all code in the <code>src</code> folder.</li>\n</ol>");

				const frontmatter = {"title":"How to Use","description":"Some suggestions for how to use this starter.","author":"chris-tham","publishDate":"2023-06-11T00:00:00.000Z","categories":["instructions"],"tags":["astro","help","starter"],"minutesRead":"2 min read","extra":[]};
				const file = "/home/bibi/booboo/vrc_site/src/content/blog/2023-06-11-how-to-use.md";
				const url = undefined;
				function rawContent() {
					return "\n1. Clone your own version of the starter template or fork the repository. Run `yarn` then `yarn build` or `yarn dev`.\n2. The default colour scheme is purple (`#663399`). Change to your preferred hue by doing a global search and replace of '-purple-' to your favourite colour.\n3. The home (landing) page consists of a number of components (Hero, Feature, CTA, ...) - edit these components in `src/components` to customise.\n4. The `/contact` page displays an OpenStreetMaps map via Leaflet - customise by changing to your preferred set of coordinates.\n5. `src/config.ts` has all the site parameters and navigation links - edit to suit.\n6. Create new Markdown or MDX pages in `src/content/blog` (using either `.md` or `.mdx` extension).\n7. Any content created in the `src/content/blog` subdirectory will automatically be a blog post. Use `src/content/blog/2000-01-01-template.md` as a base for creating a new blog post. Remember to set the `draft` property in the frontmatter to `false` when you want to publish the page.\n8. Documentation pages are also supported by creating content in `src/content/doc` subdirectory (use sample pages as guideline - remember to set `section` in frontmatter to create different sections and use `weight` in frontmatter to change ordering of pages)\n9. Photo galleries are supported in Markdown posts without using MDX! Only one gallery (displayed at bottom of post) is supported. Specify the gallery using the `gallery` frontmatter (must name a subdirectory under `src/assets/gallery`)\n10. Multiple images at beginning of blog post (with lightbox support) is specified using `images` frontmatter - this is an array of relative image file names in `src/images`. The first image will be used as cover image (if `coverImage` is not separately set)\n11. If you create a new tag (eg. `newtag`) a new tag page will be created ie. `/tag/newtag`. The `/tags` page will enumerate all tags.\n12. Similarly, a new category (eg. `newcat`) will create a page in `/category/newcat`. The `/categories` page will enumerate all categories. You can further customise categories to include an SVG cover image, social image and description by adding your new category in `CategoryDetail` in `src/config.ts`.\n13. Blog, category, tag index pages support pagination. You can set the number of posts per page by changing `PAGE_SIZE` in `src/config.ts`.\n14. If you want to change the header, edit `src/components/header.astro`. Similarly, edit `src/components/footer.astro` to customise the footer.\n15. If you make a lot of changes, use `yarn lint` to check everything is okay.\n16. `yarn format` will pretty-print all code in the `src` folder.\n";
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
