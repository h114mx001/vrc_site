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

				const html = updateImageReferences("<h2 id=\"introduction\">Introduction</h2>\n<p>According to <a href=\"https://en.wikipedia.org/wiki/MIT_License\">Wikipedia</a>:</p>\n<blockquote>\n<p>The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology in the late 1980s. As a permissive license, it puts only very limited restriction on reuse and has, therefore, high license compatibility.</p>\n<p>The MIT License is compatible with many copyleft licenses, such as the GNU General Public License (GNU GPL). Any software licensed under the terms of the MIT License can be integrated with software licensed under the terms of the GNU GPL. Unlike copyleft software licenses, the MIT License also permits reuse within proprietary software, provided that all copies of the software or its substantial portions include a copy of the terms of the MIT License and also a copyright notice. As of 2020, the MIT License was the most popular software license found in one analysis,[12] continuing from reports in 2015 that the MIT License was the most popular software license on GitHub.</p>\n</blockquote>\n<h2 id=\"license-for-this-starter\">License for this starter</h2>\n<pre is:raw=\"\" class=\"astro-code github-light\" style=\"background-color: #fff; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #24292E\">MIT License</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #24292E\">Copyright (c) 2022 Hello Tham Pty Ltd</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #24292E\">Permission is hereby granted, free of charge, to any person obtaining a copy</span></span>\n<span class=\"line\"><span style=\"color: #24292E\">of this software and associated documentation files (the \"Software\"), to deal</span></span>\n<span class=\"line\"><span style=\"color: #24292E\">in the Software without restriction, including without limitation the rights</span></span>\n<span class=\"line\"><span style=\"color: #24292E\">to use, copy, modify, merge, publish, distribute, sublicense, and/or sell</span></span>\n<span class=\"line\"><span style=\"color: #24292E\">copies of the Software, and to permit persons to whom the Software is</span></span>\n<span class=\"line\"><span style=\"color: #24292E\">furnished to do so, subject to the following conditions:</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #24292E\">The above copyright notice and this permission notice shall be included in all</span></span>\n<span class=\"line\"><span style=\"color: #24292E\">copies or substantial portions of the Software.</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #24292E\">THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR</span></span>\n<span class=\"line\"><span style=\"color: #24292E\">IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,</span></span>\n<span class=\"line\"><span style=\"color: #24292E\">FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE</span></span>\n<span class=\"line\"><span style=\"color: #24292E\">AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER</span></span>\n<span class=\"line\"><span style=\"color: #24292E\">LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,</span></span>\n<span class=\"line\"><span style=\"color: #24292E\">OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE</span></span>\n<span class=\"line\"><span style=\"color: #24292E\">SOFTWARE.</span></span></code></pre>");

				const frontmatter = {"title":"MIT Licence","description":"The MIT License, explained.","author":"chris-tham","publishDate":"2022-08-09T00:00:00.000Z","coverSVG":"../../assets/svg/undraw/undraw_open_source.svg","socialImage":"../../assets/undraw/undraw_open_source.png","categories":["information"],"tags":["mit","licence"],"minutesRead":"2 min read","extra":[]};
				const file = "/home/bibi/booboo/vrc_site/src/content/blog/2022-08-09-mit-licence.md";
				const url = undefined;
				function rawContent() {
					return "\n## Introduction\n\nAccording to [Wikipedia](https://en.wikipedia.org/wiki/MIT_License):\n\n> The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology in the late 1980s. As a permissive license, it puts only very limited restriction on reuse and has, therefore, high license compatibility.\n>\n> The MIT License is compatible with many copyleft licenses, such as the GNU General Public License (GNU GPL). Any software licensed under the terms of the MIT License can be integrated with software licensed under the terms of the GNU GPL. Unlike copyleft software licenses, the MIT License also permits reuse within proprietary software, provided that all copies of the software or its substantial portions include a copy of the terms of the MIT License and also a copyright notice. As of 2020, the MIT License was the most popular software license found in one analysis,[12] continuing from reports in 2015 that the MIT License was the most popular software license on GitHub.\n\n## License for this starter\n\n```markdown\nMIT License\n\nCopyright (c) 2022 Hello Tham Pty Ltd\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n```\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"introduction","text":"Introduction"},{"depth":2,"slug":"license-for-this-starter","text":"License for this starter"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
