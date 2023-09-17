const id = "2022-08-23-sample-mdx-post.mdx";
						const collection = "blog";
						const slug = "2022-08-23-sample-mdx-post";
						const body = "\nimport Map from '../../components/map.astro'\n\nexport const hello = 'Hello World'\n\n## {hello}\n\nThe above title is a variable declared in MDX.\n\n## Embedded Map Component\n\nThe following is the Map component defined in this starter\n\n<Map loc={[37.33214, -122.02992]} zoom={17} />\n";
						const data = {title:"Sample MDX post",description:"Test post illustrating the use of MDX.",author:{slug:"chris-tham",collection:"author"},publishDate:new Date(1661212800000),coverSVG:{src:"/hello-astro/_astro/undraw_portfolio_update.4f7cee20.svg",width:794.1218,height:505.34514,format:"svg",orientation:void 0},socialImage:{src:"/hello-astro/_astro/undraw_portfolio_update.aedbe70c.png",width:1034,height:665,format:"png",orientation:void 0},categories:[{slug:"information",collection:"category"}],tags:["mdx","sample"]};
						const _internal = {
							type: 'content',
							filePath: "/home/bibi/booboo/vrc_site/src/content/blog/2022-08-23-sample-mdx-post.mdx",
							rawData: "\ntitle: Sample MDX post\ndescription: Test post illustrating the use of MDX.\nauthor: chris-tham\npublishDate: 2022-08-23T00:00:00.000Z\ncoverSVG: ../../assets/svg/undraw/undraw_portfolio_update.svg\nsocialImage: ../../assets/undraw/undraw_portfolio_update.png\ncategories:\n  - information\ntags:\n  - mdx\n  - sample",
						};

export { _internal, body, collection, data, id, slug };
