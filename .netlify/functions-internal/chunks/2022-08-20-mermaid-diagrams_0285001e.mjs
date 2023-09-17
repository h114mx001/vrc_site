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

				const html = updateImageReferences("<h2 id=\"simple-example\">Simple Example</h2>\n<div class=\"mermaid\">graph LR\n    Start --> Stop</div>\n<h2 id=\"flowchart\">flowchart</h2>\n<div class=\"mermaid\">flowchart LR\n    A[Hard edge] -->|Link text| B(Round edge)\n    B --> C{Decision}\n    C -->|One| D[Result one]\n    C -->|Two| E[Result two]</div>\n<h2 id=\"sequence-diagram\">Sequence Diagram</h2>\n<div class=\"mermaid\">sequenceDiagram\n    participant Alice\n    participant Bob\n    Alice->>John: Hello John, how are you?\n    loop Healthcheck\n        John->>John: Fight against hypochondria\n    end\n    Note right of John: Rational thoughts <br>prevail!\n    John-->>Alice: Great!\n    John->>Bob: How about you?\n    Bob-->>John: Jolly good!</div>\n<h2 id=\"class-diagram\">Class Diagram</h2>\n<div class=\"mermaid\">classDiagram\nClass01 &#x3C;|-- AveryLongClass : Cool\nClass03 *-- Class04\nClass05 o-- Class06\nClass07 .. Class08\nClass09 --> C2 : Where am i?\nClass09 --* C3\nClass09 --|> Class07\nClass07 : equals()\nClass07 : Object[] elementData\nClass01 : size()\nClass01 : int chimp\nClass01 : int gorilla\nClass08 &#x3C;--> C2: Cool label</div>\n<h2 id=\"entity-relationship-diagram\">Entity Relationship Diagram</h2>\n<div class=\"mermaid\">erDiagram\n    CUSTOMER ||--o{ ORDER : places\n    ORDER ||--|{ LINE-ITEM : contains\n    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses</div>\n<h2 id=\"state-diagram\">State Diagram</h2>\n<div class=\"mermaid\">stateDiagram-v2\n    [*] --> Still\n    Still --> [*]\n    Still --> Moving\n    Moving --> Still\n    Moving --> Crash\n    Crash --> [*]</div>\n<h2 id=\"gantt-chart\">Gantt Chart</h2>\n<div class=\"mermaid\">gantt\ndateFormat  YYYY-MM-DD\ntitle Adding GANTT diagram to mermaid\nexcludes weekdays 2014-01-10\nsection A section\nCompleted task            :done,    des1, 2014-01-06,2014-01-08\nActive task               :active,  des2, 2014-01-09, 3d\nFuture task               :         des3, after des2, 5d\nFuture task2               :         des4, after des3, 5d</div>");

				const frontmatter = {"title":"Mermaid Diagrams","description":"Generate mermaid diagrams in blog posts.","author":"chris-tham","publishDate":"2022-08-20T00:00:00.000Z","coverSVG":"../../assets/svg/undraw/undraw_timeline.svg","socialImage":"../../assets/undraw/undraw_timeline.png","categories":["information"],"tags":["mermaid","diagram","flowchart","sequence","class","ER"],"minutesRead":"1 min read","extra":["mermaid"]};
				const file = "/home/bibi/booboo/vrc_site/src/content/blog/2022-08-20-mermaid-diagrams.md";
				const url = undefined;
				function rawContent() {
					return "\n## Simple Example\n\n```mermaid\ngraph LR\n    Start --> Stop\n```\n\n## flowchart\n\n```mermaid\nflowchart LR\n    A[Hard edge] -->|Link text| B(Round edge)\n    B --> C{Decision}\n    C -->|One| D[Result one]\n    C -->|Two| E[Result two]\n```\n\n## Sequence Diagram\n\n```mermaid\nsequenceDiagram\n    participant Alice\n    participant Bob\n    Alice->>John: Hello John, how are you?\n    loop Healthcheck\n        John->>John: Fight against hypochondria\n    end\n    Note right of John: Rational thoughts <br/>prevail!\n    John-->>Alice: Great!\n    John->>Bob: How about you?\n    Bob-->>John: Jolly good!\n```\n\n## Class Diagram\n\n```mermaid\nclassDiagram\nClass01 <|-- AveryLongClass : Cool\nClass03 *-- Class04\nClass05 o-- Class06\nClass07 .. Class08\nClass09 --> C2 : Where am i?\nClass09 --* C3\nClass09 --|> Class07\nClass07 : equals()\nClass07 : Object[] elementData\nClass01 : size()\nClass01 : int chimp\nClass01 : int gorilla\nClass08 <--> C2: Cool label\n```\n\n## Entity Relationship Diagram\n\n```mermaid\nerDiagram\n    CUSTOMER ||--o{ ORDER : places\n    ORDER ||--|{ LINE-ITEM : contains\n    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses\n```\n\n## State Diagram\n\n```mermaid\nstateDiagram-v2\n    [*] --> Still\n    Still --> [*]\n    Still --> Moving\n    Moving --> Still\n    Moving --> Crash\n    Crash --> [*]\n```\n\n## Gantt Chart\n\n```mermaid\ngantt\ndateFormat  YYYY-MM-DD\ntitle Adding GANTT diagram to mermaid\nexcludes weekdays 2014-01-10\nsection A section\nCompleted task            :done,    des1, 2014-01-06,2014-01-08\nActive task               :active,  des2, 2014-01-09, 3d\nFuture task               :         des3, after des2, 5d\nFuture task2               :         des4, after des3, 5d\n```\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"simple-example","text":"Simple Example"},{"depth":2,"slug":"flowchart","text":"flowchart"},{"depth":2,"slug":"sequence-diagram","text":"Sequence Diagram"},{"depth":2,"slug":"class-diagram","text":"Class Diagram"},{"depth":2,"slug":"entity-relationship-diagram","text":"Entity Relationship Diagram"},{"depth":2,"slug":"state-diagram","text":"State Diagram"},{"depth":2,"slug":"gantt-chart","text":"Gantt Chart"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
