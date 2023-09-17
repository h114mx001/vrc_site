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

				const html = updateImageReferences("<h2 id=\"simple-plantuml-diagram\">Simple PlantUML Diagram</h2>\n<img src=\"https://www.plantuml.com/plantuml/png/Iyv9B2vM2CxCBSX93SX9p2i9zVK9o2bDpynJgEPI009jXPAYnBpYjFoYN8tYohoIn8gGejHKAmN7u11DCCbL2m00\" alt=\"Simple Example\">\n<h2 id=\"sequence-diagram\">Sequence Diagram</h2>\n<img src=\"https://www.plantuml.com/plantuml/png/JP4v3iCW44NxEGKNI16lKeh8MUj4oWKmfa1om86XyEs36JiP2dZwJupueWieFSRt25CwZJAJj2WUZ6KGT-T0AdHUq3en9hs7taKxI3ylsPan-GAKi-ZTcEzS69ClGLiqEDFC6sFo5GmIPI-3Nh8hO_9rcZ-EMg5nDgJvVoRVm2VggDStFncJRo5jOdVCNSH1l9p8XLbSKBprPAOaipPaeY91rLXUKxvLOgRPHlqACDbcbuj0f-sGVkqB\" alt=\"Declaring participant\">");

				const frontmatter = {"title":"PlantUML Diagrams","description":"Generate PlantUML diagrams in blog posts.","author":"chris-tham","publishDate":"2022-08-25T00:00:00.000Z","coverSVG":"../../assets/svg/undraw/undraw_process.svg","socialImage":"../../assets/undraw/undraw_process.png","categories":["information"],"tags":["plantuml","diagram"],"minutesRead":"1 min read","extra":[]};
				const file = "/home/bibi/booboo/vrc_site/src/content/blog/2022-08-25-plantuml-diagrams.md";
				const url = undefined;
				function rawContent() {
					return "\n## Simple PlantUML Diagram\n\n```plantuml Simple Example\nclass SimplePlantUMLPlugin {\n    + transform(syntaxTree: AST): AST\n}\n```\n\n## Sequence Diagram\n\n```plantuml Declaring participant\n@startuml\nparticipant Participant as Foo\nactor       Actor       as Foo1\nboundary    Boundary    as Foo2\ncontrol     Control     as Foo3\nentity      Entity      as Foo4\ndatabase    Database    as Foo5\ncollections Collections as Foo6\nqueue       Queue       as Foo7\nFoo -> Foo1 : To actor\nFoo -> Foo2 : To boundary\nFoo -> Foo3 : To control\nFoo -> Foo4 : To entity\nFoo -> Foo5 : To database\nFoo -> Foo6 : To collections\nFoo -> Foo7: To queue\n@enduml\n```\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"simple-plantuml-diagram","text":"Simple PlantUML Diagram"},{"depth":2,"slug":"sequence-diagram","text":"Sequence Diagram"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
