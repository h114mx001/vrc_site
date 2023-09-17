import { c as getCollection, S as SiteMetadata } from './404_eb2d6791.mjs';
import lunr from 'lunr';
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
    categories: post.data.categories && post.data.categories.join(' '),
    tags: post.data.tags && post.data.tags.join(' '),
    content: post.body
  }))
  .concat(
    docs.map((doc) => ({
      url: "/hello-astro/" + 'doc/' + doc.slug,
      title: doc.data.title,
      description: doc.data.description,
      author: SiteMetadata.author.name,
      categories: 'documentation',
      tags: ['documentation'],
      content: doc.body
    }))
  );

const idx = lunr(function () {
  this.ref('url');
  this.field('title');
  this.field('description');
  this.field('author');
  this.field('categories');
  this.field('tags');
  this.field('content');

  documents.forEach(function (doc) {
    this.add(doc);
  }, this);
});

async function GET() {
  const body = JSON.stringify(idx);
  return {
    body
  }
}

export { GET };
