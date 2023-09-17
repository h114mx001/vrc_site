import rss from '@astrojs/rss';
import { c as getCollection, S as SiteMetadata } from './404_eb2d6791.mjs';
/* empty css                         */import '../astro_2532d380.mjs';
import 'clsx';
import 'html-escaper';
import 'svgo';
import 'exifr';
/* empty css                                *//* empty css                                                       *//* empty css                                                                  */
async function GET() {
  const posts = await getCollection('blog', ({ data }) => {
    return data.draft !== true
  });
  return rss({
    // `<title>` field in output xml
    title: SiteMetadata.title,
    // `<description>` field in output xml
    description: SiteMetadata.description,
    // base URL for RSS <item> links
    // SITE will use "site" from your project's astro.config.
    site: "https://hellotham.github.io",
    // list of `<item>`s in output xml
    // simple example: generate items for every md file in /src/pages
    // see "Generating items" section for required data and advanced use cases
    items: posts.map((post) => ({
      link: "/hello-astro/" + '/blog/' + post.slug,
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate.toString()
    })),
    // (optional) inject custom xml
    customData: `<language>en</language>`
  })
}

export { GET };
