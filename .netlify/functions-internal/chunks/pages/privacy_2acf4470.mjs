/* empty css                         */import { b as createComponent, s as spreadAttributes, r as renderTemplate, j as renderComponent, u as unescapeHTML } from '../astro_2532d380.mjs';
import { $ as $$Page } from './about_fe4ea872.mjs';
import './404_eb2d6791.mjs';
import 'clsx';
import 'html-escaper';
import 'svgo';
import 'exifr';
/* empty css                                *//* empty css                                                       *//* empty css                                                                  */
const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="([^"]+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>We are committed to maintaining the trust of visitors to this website. We promise to handle and store your data fairly and legally at all times.</p>\n<p>You have the right to view, amend, or delete the personal information that we hold. If you have any questions about what data we collect or how we use it, please let us know by emailing: <a href=\"mailto:info@hellotham.com\">info@hellotham.com</a>.</p>\n<h2 id=\"personal-information-that-we-collect-and-why-we-collect-it\">Personal information that we collect and why we collect it</h2>\n<p>We do not collect personally identifiable information from you.</p>\n<h3 id=\"information-collected-by-others\">Information collected by others</h3>\n<p>When you load this website, our hosting provider may collect the following information in the form of server logs:</p>\n<ul>\n<li>Your IP address</li>\n<li>Date and time of the request for the page load</li>\n<li>Size of the data package being transmitted within the connection</li>\n<li>Type and version of your web browser</li>\n<li>Request information like HTTP method, host name, URI, referrer, etc</li>\n</ul>\n<p>This website does not use cookies.</p>");

				const frontmatter = {"layout":"../layouts/page.astro","title":"Privacy","description":"Our policy regarding information collection and use","publishDate":"2022-08-08T00:00:00.000Z","coverSVG":"../assets/svg/undraw/undraw_privacy_protection.svg","socialImage":"../assets/undraw/undraw_privacy_protection.png","minutesRead":"1 min read","extra":[]};
				const file = "/home/bibi/booboo/vrc_site/src/pages/privacy.md";
				const url = "/hello-astro/privacy";
				function rawContent() {
					return "\nWe are committed to maintaining the trust of visitors to this website. We promise to handle and store your data fairly and legally at all times.\n\nYou have the right to view, amend, or delete the personal information that we hold. If you have any questions about what data we collect or how we use it, please let us know by emailing: info@hellotham.com.\n\n## Personal information that we collect and why we collect it\n\nWe do not collect personally identifiable information from you.\n\n### Information collected by others\n\nWhen you load this website, our hosting provider may collect the following information in the form of server logs:\n\n- Your IP address\n- Date and time of the request for the page load\n- Size of the data package being transmitted within the connection\n- Type and version of your web browser\n- Request information like HTTP method, host name, URI, referrer, etc\n\nThis website does not use cookies.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"personal-information-that-we-collect-and-why-we-collect-it","text":"Personal information that we collect and why we collect it"},{"depth":3,"slug":"information-collected-by-others","text":"Information collected by others"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$Page, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
