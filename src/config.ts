import type { CollectionEntry } from 'astro:content'

export type Frontmatter = CollectionEntry<'blog'>['data']

export interface TagType {
  tag: string
  count: number
  pages: CollectionEntry<'blog'>[]
}

export const SiteMetadata = {
  title: 'VinUni Research Club',
  description: 'A student-led academic club aiming to create a close-knit community interested in research.',
  author: {
    name: '',
    twitter: '',
    url: '',
    email: '',
    summary: ''
  },
  org: {
    name: '',
    twitter: '',
    url: '',
    email: '',
    summary:
      ''
  },
  location: 'VinUniversity, Đa Tốn, Gia Lâm, Hà Nội',
  latlng: [20.98816810203993, 105.94433479774092] as [number, number],
  repository: 'https://github.com/hellotham/hello-astro',
  buildTime: new Date()
}

export { default as Logo } from './assets/svg/astro/astro-icon-dark.svg'
export { default as LogoImage } from './assets/astro/astro-logo-dark.png'
export { default as FeaturedSVG } from './assets/svg/undraw/undraw_design_inspiration.svg'
export { default as DefaultSVG } from './assets/svg/undraw/undraw_my_feed.svg'
export { default as DefaultImage } from './assets/undraw/undraw_my_feed.png'

export const NavigationLinks = [
  { name: "Home", href: '' },
  { name: 'About', href: 'about' },
  { name: 'Activities', href: '' },
  { name: 'News', href: 'blog' },
  { name: 'Research Projects', href: '' },
  { name: 'Contact', href: 'contact' },
]

export const PAGE_SIZE = 6

export const GITHUB_EDIT_URL = `https://github.com/h114mx001/vrc-site`

export const COMMUNITY_INVITE_URL = `https://facebook.com/vinuniresearchclub`

export type Sidebar = Record<string, { text: string; link: string }[]>

export const SIDEBAR: Sidebar = {
  'Section Header': [
    { text: 'Introduction', link: 'doc/introduction' },
    { text: 'Page 2', link: 'doc/page-2' },
    { text: 'Page 3', link: 'doc/page-3' }
  ],
  'Another Section': [{ text: 'Page 4', link: 'doc/page-4' }]
}
