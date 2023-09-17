import { c as getCollection, S as SiteMetadata } from './404_d15c26e9.mjs';
/* empty css                         */import '../astro_2532d380.mjs';
import 'clsx';
import 'html-escaper';
import 'svgo';
import 'exifr';
/* empty css                                *//* empty css                                                       *//* empty css                                                                  */
const docs = await getCollection('doc', (p) => {
  return !p.data.draft
});
const posts = await getCollection('blog', (p) => {
  return !p.data.draft
});
const documents = posts
  .map((post) => ({
    url: "/hello-astro/" + 'blog/' + post.slug,
    title: post.data.title,
    description: post.data.description,
    author: post.data.author,
    publishDate: post.data.publishDate,
    categories: post.data.categories,
    tags: post.data.tags
  }))
  .concat(
    docs.map((doc) => ({
      url: "/hello-astro/" + 'doc/' + doc.slug,
      title: doc.data.title,
      description: doc.data.description,
      author: SiteMetadata.author.name,
      publishDate: SiteMetadata.buildTime,
      categories: 'documentation',
      tags: ['documentation']
    }))
  );

async function GET() {
  const body = JSON.stringify(documents);
  return {
    body
  }
}

export { GET };
