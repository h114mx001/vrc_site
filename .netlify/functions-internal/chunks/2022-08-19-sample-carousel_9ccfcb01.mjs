const id = "2022-08-19-sample-carousel.mdx";
						const collection = "blog";
						const slug = "2022-08-19-sample-carousel";
						const body = "\nimport Carousel from '../../components/carousel.astro'\nexport const carouselPages = [\n  {\n    name: 'Cowarra Dam',\n    image: '../assets/gallery/carousel/Cowarra-Dam.jpeg',\n    title: 'Cowarra Dam',\n    description: 'Off creek water storage dam near Port Macquarie'\n  },\n  {\n    name: 'Mayfield Garden',\n    image: '../assets/gallery/carousel/Mayfield-Garden.jpeg',\n    title: 'Mayfield Garden',\n    description: 'Water Garden and Bluestone Bridge in autumn'\n  },\n  {\n    name: 'Mt Tomah',\n    image: '../assets/gallery/carousel/Mt-Tomah.jpeg',\n    title: 'Mt Tomah',\n    description: 'Fountain terrace'\n  },\n  {\n    name: 'Oberon Dam',\n    image: '../assets/gallery/carousel/Oberon-Dam.jpeg',\n    title: 'Oberon Dam',\n    description: 'Concrete slab and butress across Fish River'\n  }\n]\n\n## Carousel\n\n<Carousel pages={carouselPages} />\n";
						const data = {title:"Sample Carousel",description:"Test post with a carousel",author:{slug:"chris-tham",collection:"author"},publishDate:new Date(1660867200000),coverSVG:{src:"/hello-astro/_astro/undraw_images.2902a948.svg",width:764.17285,height:572.568,format:"svg",orientation:void 0},socialImage:{src:"/hello-astro/_astro/undraw_images.cc8b514e.png",width:1004,height:733,format:"png",orientation:void 0},categories:[{slug:"information",collection:"category"}],tags:["mdx","sample"],extra:["gallery"]};
						const _internal = {
							type: 'content',
							filePath: "/home/bibi/booboo/vrc_site/src/content/blog/2022-08-19-sample-carousel.mdx",
							rawData: "\ntitle: Sample Carousel\ndescription: Test post with a carousel\nauthor: chris-tham\npublishDate: 2022-08-19T00:00:00.000Z\ncoverSVG: ../../assets/svg/undraw/undraw_images.svg\nsocialImage: ../../assets/undraw/undraw_images.png\ncategories:\n  - information\ntags:\n  - mdx\n  - sample\nextra: ['gallery']",
						};

export { _internal, body, collection, data, id, slug };
