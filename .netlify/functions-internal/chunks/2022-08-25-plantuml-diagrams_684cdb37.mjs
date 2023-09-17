const id = "2022-08-25-plantuml-diagrams.md";
						const collection = "blog";
						const slug = "2022-08-25-plantuml-diagrams";
						const body = "\n## Simple PlantUML Diagram\n\n```plantuml Simple Example\nclass SimplePlantUMLPlugin {\n    + transform(syntaxTree: AST): AST\n}\n```\n\n## Sequence Diagram\n\n```plantuml Declaring participant\n@startuml\nparticipant Participant as Foo\nactor       Actor       as Foo1\nboundary    Boundary    as Foo2\ncontrol     Control     as Foo3\nentity      Entity      as Foo4\ndatabase    Database    as Foo5\ncollections Collections as Foo6\nqueue       Queue       as Foo7\nFoo -> Foo1 : To actor\nFoo -> Foo2 : To boundary\nFoo -> Foo3 : To control\nFoo -> Foo4 : To entity\nFoo -> Foo5 : To database\nFoo -> Foo6 : To collections\nFoo -> Foo7: To queue\n@enduml\n```\n";
						const data = {title:"PlantUML Diagrams",description:"Generate PlantUML diagrams in blog posts.",author:{slug:"chris-tham",collection:"author"},publishDate:new Date(1661385600000),coverSVG:{src:"/hello-astro/_astro/undraw_process.26a63c8e.svg",width:601.6,height:630,format:"svg",orientation:void 0},socialImage:{src:"/hello-astro/_astro/undraw_process.9a1d9085.png",width:842,height:790,format:"png",orientation:void 0},categories:[{slug:"information",collection:"category"}],tags:["plantuml","diagram"]};
						const _internal = {
							type: 'content',
							filePath: "/home/bibi/booboo/vrc_site/src/content/blog/2022-08-25-plantuml-diagrams.md",
							rawData: "\ntitle: PlantUML Diagrams\ndescription: Generate PlantUML diagrams in blog posts.\nauthor: chris-tham\npublishDate: 2022-08-25T00:00:00.000Z\ncoverSVG: ../../assets/svg/undraw/undraw_process.svg\nsocialImage: ../../assets/undraw/undraw_process.png\ncategories:\n  - information\ntags:\n  - plantuml\n  - diagram",
						};

export { _internal, body, collection, data, id, slug };
