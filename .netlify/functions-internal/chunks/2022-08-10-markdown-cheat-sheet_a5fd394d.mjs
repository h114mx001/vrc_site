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

				const html = updateImageReferences("<h2 id=\"introduction\">Introduction</h2>\n<p>This blog post is adapted from the cheat sheet in <a href=\"https://www.markdownguide.org/cheat-sheet/\">Markdown Guide</a> written by Matt Cone.</p>\n<p>This Markdown cheat sheet provides a quick overview of all the Markdown syntax elements. It can’t cover every edge case, so if you need more information about any of these elements, refer to the reference guides for <a href=\"https://www.markdownguide.org/basic-syntax\">basic syntax</a> and <a href=\"https://www.markdownguide.org/extended-syntax\">extended syntax</a>.</p>\n<h2 id=\"basic-syntax\">Basic Syntax</h2>\n<p>These are the elements outlined in John Gruber’s original design document. All Markdown applications support these elements.</p>\n<h3 id=\"heading\">Heading</h3>\n<h1 id=\"h1\">H1</h1>\n<h2 id=\"h2\">H2</h2>\n<h3 id=\"h3\">H3</h3>\n<h3 id=\"bold\">Bold</h3>\n<p><strong>bold text</strong></p>\n<h3 id=\"italic\">Italic</h3>\n<p><em>italicized text</em></p>\n<h3 id=\"blockquote\">Blockquote</h3>\n<blockquote>\n<p>blockquote</p>\n</blockquote>\n<h3 id=\"ordered-list\">Ordered List</h3>\n<ol>\n<li>First item</li>\n<li>Second item</li>\n<li>Third item</li>\n</ol>\n<h3 id=\"unordered-list\">Unordered List</h3>\n<ul>\n<li>First item</li>\n<li>Second item</li>\n<li>Third item</li>\n</ul>\n<h3 id=\"code\">Code</h3>\n<p><code>code</code></p>\n<h3 id=\"horizontal-rule\">Horizontal Rule</h3>\n<hr>\n<h3 id=\"link\">Link</h3>\n<p><a href=\"https://www.markdownguide.org\">Markdown Guide</a></p>\n<h3 id=\"image\">Image</h3>\n<p><img src=\"https://astro.build/assets/press/astro-logo-dark.png\" alt=\"alt text\"></p>\n<h2 id=\"extended-syntax\">Extended Syntax</h2>\n<p>These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.</p>\n<h3 id=\"table\">Table</h3>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Syntax</th><th>Description</th></tr></thead><tbody><tr><td>Header</td><td>Title</td></tr><tr><td>Paragraph</td><td>Text</td></tr></tbody></table>\n<h3 id=\"fenced-code-block\">Fenced Code Block</h3>\n<pre is:raw=\"\" class=\"astro-code github-light\" style=\"background-color: #fff; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #24292e\">{</span></span>\n<span class=\"line\"><span style=\"color: #24292e\">  \"firstName\": \"John\",</span></span>\n<span class=\"line\"><span style=\"color: #24292e\">  \"lastName\": \"Smith\",</span></span>\n<span class=\"line\"><span style=\"color: #24292e\">  \"age\": 25</span></span>\n<span class=\"line\"><span style=\"color: #24292e\">}</span></span></code></pre>\n<h3 id=\"footnote\">Footnote</h3>\n<p>Here’s a sentence with a footnote. <sup><a href=\"#user-content-fn-1\" id=\"user-content-fnref-1\" data-footnote-ref=\"\" aria-describedby=\"footnote-label\">1</a></sup></p>\n<h3 id=\"heading-id\">Heading ID</h3>\n<h3 id=\"my-great-heading-custom-id\">My Great Heading {#custom-id}</h3>\n<h3 id=\"definition-list\">Definition List</h3>\n<p>term\n: definition</p>\n<h3 id=\"strikethrough\">Strikethrough</h3>\n<p><del>The world is flat.</del></p>\n<h3 id=\"task-list\">Task List</h3>\n<ul class=\"contains-task-list\">\n<li class=\"task-list-item\"><input type=\"checkbox\" checked disabled> Write the press release</li>\n<li class=\"task-list-item\"><input type=\"checkbox\" disabled> Update the website</li>\n<li class=\"task-list-item\"><input type=\"checkbox\" disabled> Contact the media</li>\n</ul>\n<section data-footnotes=\"\" class=\"footnotes\"><h2 class=\"sr-only\" id=\"footnote-label\">Footnotes</h2>\n<ol>\n<li id=\"user-content-fn-1\">\n<p>This is the footnote. <a href=\"#user-content-fnref-1\" data-footnote-backref=\"\" class=\"data-footnote-backref\" aria-label=\"Back to content\">↩</a></p>\n</li>\n</ol>\n</section>");

				const frontmatter = {"title":"Markdown Cheat Sheet","description":"A quick reference to the Markdown syntax.","author":"matt-cone","publishDate":"2022-08-10T00:00:00.000Z","coverSVG":"../../assets/svg/undraw/undraw_design_components.svg","socialImage":"../../assets/undraw/undraw_design_components.png","categories":["information"],"tags":["markdown","reference"],"minutesRead":"1 min read","extra":[]};
				const file = "/home/bibi/booboo/vrc_site/src/content/blog/2022-08-10-markdown-cheat-sheet.md";
				const url = undefined;
				function rawContent() {
					return "\n## Introduction\n\nThis blog post is adapted from the cheat sheet in [Markdown Guide](https://www.markdownguide.org/cheat-sheet/) written by Matt Cone.\n\nThis Markdown cheat sheet provides a quick overview of all the Markdown syntax elements. It can’t cover every edge case, so if you need more information about any of these elements, refer to the reference guides for [basic syntax](https://www.markdownguide.org/basic-syntax) and [extended syntax](https://www.markdownguide.org/extended-syntax).\n\n## Basic Syntax\n\nThese are the elements outlined in John Gruber’s original design document. All Markdown applications support these elements.\n\n### Heading\n\n# H1\n\n## H2\n\n### H3\n\n### Bold\n\n**bold text**\n\n### Italic\n\n_italicized text_\n\n### Blockquote\n\n> blockquote\n\n### Ordered List\n\n1. First item\n2. Second item\n3. Third item\n\n### Unordered List\n\n- First item\n- Second item\n- Third item\n\n### Code\n\n`code`\n\n### Horizontal Rule\n\n---\n\n### Link\n\n[Markdown Guide](https://www.markdownguide.org)\n\n### Image\n\n![alt text](https://astro.build/assets/press/astro-logo-dark.png)\n\n## Extended Syntax\n\nThese elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.\n\n### Table\n\n| Syntax    | Description |\n| --------- | ----------- |\n| Header    | Title       |\n| Paragraph | Text        |\n\n### Fenced Code Block\n\n```\n{\n  \"firstName\": \"John\",\n  \"lastName\": \"Smith\",\n  \"age\": 25\n}\n```\n\n### Footnote\n\nHere's a sentence with a footnote. [^1]\n\n[^1]: This is the footnote.\n\n### Heading ID\n\n### My Great Heading {#custom-id}\n\n### Definition List\n\nterm\n: definition\n\n### Strikethrough\n\n~~The world is flat.~~\n\n### Task List\n\n- [x] Write the press release\n- [ ] Update the website\n- [ ] Contact the media\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"introduction","text":"Introduction"},{"depth":2,"slug":"basic-syntax","text":"Basic Syntax"},{"depth":3,"slug":"heading","text":"Heading"},{"depth":1,"slug":"h1","text":"H1"},{"depth":2,"slug":"h2","text":"H2"},{"depth":3,"slug":"h3","text":"H3"},{"depth":3,"slug":"bold","text":"Bold"},{"depth":3,"slug":"italic","text":"Italic"},{"depth":3,"slug":"blockquote","text":"Blockquote"},{"depth":3,"slug":"ordered-list","text":"Ordered List"},{"depth":3,"slug":"unordered-list","text":"Unordered List"},{"depth":3,"slug":"code","text":"Code"},{"depth":3,"slug":"horizontal-rule","text":"Horizontal Rule"},{"depth":3,"slug":"link","text":"Link"},{"depth":3,"slug":"image","text":"Image"},{"depth":2,"slug":"extended-syntax","text":"Extended Syntax"},{"depth":3,"slug":"table","text":"Table"},{"depth":3,"slug":"fenced-code-block","text":"Fenced Code Block"},{"depth":3,"slug":"footnote","text":"Footnote"},{"depth":3,"slug":"heading-id","text":"Heading ID"},{"depth":3,"slug":"my-great-heading-custom-id","text":"My Great Heading ${#custom-id}"},{"depth":3,"slug":"definition-list","text":"Definition List"},{"depth":3,"slug":"strikethrough","text":"Strikethrough"},{"depth":3,"slug":"task-list","text":"Task List"},{"depth":2,"slug":"footnote-label","text":"Footnotes"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };