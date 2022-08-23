const { description } = require('../../package');
import { defineConfig } from 'vitepress';

const sidebar: any = {
  '/': [
    {
      text: 'Introduction',
      collapsible: true,
      items: [
          {
          text: 'You Don\'t Know JS Yet',
          link: '/ydkjs/README.md',
        },
      ],
    },
    {
      text: 'Get Started',
      collapsible: true,
      items: [
        {
          text: 'Intro',
          link: '/ydkjs/get-started/README.md',
        },
        {
          text: 'Table of Contents',
          link: '/ydkjs/get-started/toc.md',
        },
        {
          text: 'Foreword',
          link: '/ydkjs/get-started/foreword.md',
        },
        {
          text: 'Preface',
          link: '/ydkjs/preface.md',
        },
        {
          text: 'Chapter 1: What Is JavaScript?',
          link: '/ydkjs/get-started/ch1.md',
        },
        {
          text: 'Chapter 2: Surveying JS',
          link: '/ydkjs/get-started/ch2.md',
        },
        {
          text: 'Chapter 3: Digging to the Roots of JS',
          link: '/ydkjs/get-started/ch3.md',
        },
        {
          text: 'Chapter 4: The Bigger Picture',
          link: '/ydkjs/get-started/ch4.md',
        },
        {
          text: 'Appendix A: Exploring Further',
          link: '/ydkjs/get-started/apA.md',
        },
        {
          text: 'Appendix B: Practice, Practice, Practice!',
          link: '/ydkjs/get-started/apB.md',
        },
      ]
    },
    {
      text: 'Scope & Closures',
      collapsible: true,
      items: [
        { text: 'Intro', link: '/ydkjs/scope-closures/README.md' },
        { text: 'Table of Contents', link: '/ydkjs/scope-closures/toc.md' },
        { text: 'Foreword', link: '/ydkjs/scope-closures/foreword.md' },
        { text: 'Preface', link: '/ydkjs/preface.md' },
        { text: 'Chapter 1: What\'s the Scope?', link: '/ydkjs/scope-closures/ch1.md' },
        { text: 'Chapter 2: Illustrating Lexical Scope', link: '/ydkjs/scope-closures/ch2.md' },
        { text: 'Chapter 3: The Scope Chain', link: '/ydkjs/scope-closures/ch3.md' },
        { text: 'Chapter 4: Around the Global Scope', link: '/ydkjs/scope-closures/ch4.md' },
        {
          text: 'Chapter 5: The (Not So) Secret Lifecycle of Variables',
          link: '/ydkjs/scope-closures/ch5.md',
        },
        {
          text: 'Chapter 6: Limiting Scope Exposure',
          link: '/ydkjs/scope-closures/ch6.md',
        },
        {
          text: 'Chapter 7: Using Closures',
          link: '/ydkjs/scope-closures/ch7.md',
        },
        {
          text: 'Chapter 8: The Module Pattern',
          link: '/ydkjs/scope-closures/ch8.md',
        },
        {
          text: 'Appendix A: Exploring Further',
          link: '/ydkjs/scope-closures/apA.md',
        },
        {
          text: 'Appendix B: Practice',
          link: '/ydkjs/scope-closures/apB.md',
        },
      ]
    },
    {
      text: 'Objects & Classes',
      collapsible: true,
      items: [
        {
          text: 'Intro',
          link: '/ydkjs/objects-classes/README.md',
        },
        {
          text: 'Table of Contents',
          link: '/ydkjs/objects-classes/toc.md',
        },
        {
          text: 'Foreword',
          link: '/ydkjs/objects-classes/foreword.md',
        },
        {
          text: 'Preface',
          link: '/ydkjs/preface.md',
        },
        {
          text: 'Chapter 1: Object Foundations',
          link: '/ydkjs/objects-classes/ch1.md',
        },
        {
          text: 'Chapter 2: How Objects Work',
          link: '/ydkjs/objects-classes/ch2.md',
        },
        {
          text: 'Chapter 3: Classy Objects',
          link: '/ydkjs/objects-classes/ch3.md',
        },
        {
          text: 'Chapter 4: This Works',
          link: '/ydkjs/objects-classes/ch4.md',
        },
        {
          text: 'Chapter 5: Delegation',
          link: '/ydkjs/objects-classes/ch5.md',
        },
      ]
    },
    {
      text: 'Types & Grammar',
      collapsible: true,
      items: [
        {
          text: 'Intro',
          link: '/ydkjs/types-grammar/README.md',
        },
        {
          text: 'Table of Contents',
          link: '/ydkjs/types-grammar/toc.md',
        },
        {
          text: 'Foreword',
          link: '/ydkjs/types-grammar/foreword.md',
        },
        {
          text: 'Preface',
          link: '/ydkjs/preface.md',
        },
        {
          text: 'Chapter 1: Primitives',
          link: '/ydkjs/types-grammar/ch1.md',
        },
        {
          text: 'Chapter 2: Value Behaviors',
          link: '/ydkjs/types-grammar/ch2.md',
        },
        {
          text: 'Chapter 3: Object Values',
          link: '/ydkjs/types-grammar/ch3.md',
        },
        {
          text: 'Chapter 4: Coercing Values',
          link: '/ydkjs/types-grammar/ch4.md',
        },
        {
          text: 'Chapter 5: Work In Progress',
        },
      ]
    },
    {
      text: 'Async & Performance',
      collapsible: true,
      items: [
        {
          text: 'Intro',
          link: '/ydkjs/sync-async/README.md',
        },
        {
          text: 'Table of Contents',
          link: '/ydkjs/sync-async/toc.md',
        },
        {
          text: 'Foreword',
          link: '/ydkjs/sync-async/foreword.md',
        },
        {
          text: 'Preface',
          link: '/ydkjs/preface.md',
        },
        {
          text: 'Chapter 1: Work In Progress',
          link: '/ydkjs/sync-async/ch1.md',
        },
      ]
    },
    {
      text: 'ES.Next & Beyond',
      collapsible: true,
      items: [
        {
          text: 'Intro',
          link: '/ydkjs/es-next-beyond/README.md',
        },
        {
          text: 'Table of Contents',
          link: '/ydkjs/es-next-beyond/toc.md',
        },
        {
          text: 'Foreword',
          link: '/ydkjs/es-next-beyond/foreword.md',
        },
        {
          text: 'Preface',
          link: '/ydkjs/preface.md',
        },
        {
          text: 'Chapter 1: Work In Progress',
          link: '/ydkjs/es-next-beyond/ch1.md',
        },
      ]
    },
  ]
};

const nav: any = [
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'YDKJS',
    items: [
      {
        text: 'Introduction',
        link: '/ydkjs/README.md',
        activeMatch: '^/ydkjs/$',
      },
      {
        text: 'Get Started',
        link: '/ydkjs/get-started/README.md',
      },
      {
        text: 'Scope & Closures',
        link: '/ydkjs/scope-closures/README.md',
      },
      {
        text: 'Objects & Classes',
        link: '/ydkjs/objects-classes/README.md',
      },
      {
        text: 'Types & Grammar',
        link: '/ydkjs/types-grammar/README.md',
      },
      {
        text: 'Sync & Async',
        link: '/ydkjs/sync-async/README.md',
      },
      {
        text: 'ES.Next & Beyond',
        link: '/ydkjs/es-next-beyond/README.md',
      },
    ],
  },
  {
    text: 'Book Repo',
    link: 'https://github.com/getify/You-Dont-Know-JS',
  },
];

export default defineConfig({
  lang: 'en-US',
  title: 'You Don\'t Know JS Yet',
  description: description,

  lastUpdated: true,
  cleanUrls: 'without-subfolders',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'author', content: 'Mohsen Fallahnejad' }],
    ['meta', { name: 'twitter:title', content: 'You Don\'t Know JS Yet' }],
    ['meta', { name: 'twitter:description', content: description }],
    ['meta', { name: 'twitter:creator', content: '@mohsenfallahnjd' }],
    ['meta', { name: 'twitter:image', content: 'https://ydkjs.ir/javascript.svg' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:url', content: 'https://ydkjs.ir/' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: 'https://ydkjs.ir/javascript.svg' }],
    ['meta', { property: 'og:site_name', content: 'https://ydkjs.ir/' }],
    ['meta', { property: 'og:url', content: 'https://ydkjs.ir/' }],
    ['meta', { property: 'og:title', content: 'You Don\'t Know JS Yet' }],
    ['meta', { property: 'og:description', content: description }],
    ['link', { rel: 'icon', href: '/javascript.svg' }],
    ['link', { rel: 'canonical', href: 'https://ydkjs.ir/' }],
  ],

  themeConfig: {
    siteTitle: 'You Don\'t Know JS Yet',
    logo: '/javascript.svg',
    nav,
    sidebar,

    // editLink: {
    //   pattern: 'https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/:path',
    //   text: 'Edit this page on GitHub'
    // },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mohsenfallahnjd/ydkjs-vuepress' },
      { icon: 'twitter', link: 'https://twitter.com/mohsenfallahnjd' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/mohsenfallahnjd' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present | by <a href="https://theMohsen.me" target="_blank">Mohsen Fallahnejad</a> with ❤️ \n<p><a href="mailto:info@themohsen.me">Contact</a> | Generate by <a href="https://vitepress.vuejs.org/" target="_blank">vitepress</a></p>'
    },

    // algolia: {
    //   appId: '8J64VVRP8K',
    //   apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
    //   indexName: 'vitepress'
    // },
  },

  outDir: '../dist',
})
