const siteUrl = 'https://dmitripavlutin.com'

const IS_PRODUCTION_MODE = process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod'

module.exports = {
  siteUrl, // ensure compatibility with plugins that require `siteUrl`
  siteInfo: {
    title: 'Dmitri Pavlutin',
    description: 'I help developers understand Frontend technologies',
    metaTitle: 'Dmitri Pavlutin Blog',
    metaDescription:
      'Dmitri Pavlutin Blog is a place to learn about JavaScript, CSS, React, Vue and more on Frontend development',
    url: siteUrl,
    repositoryUrl: 'https://github.com/panzerdp/dmitripavlutin.com',
    githubCommentsRepository: 'panzerdp/dmitripavlutin.com-comments',
    googleCustomSearchId: '004443697379288327791:1zr8pgnumxn'
  },
  authorInfo: {
    name: 'Dmitri Pavlutin',
    description:
      'Software developer and sometimes writer. My daily routine consists of (but not limited to) drinking coffee, coding, writing, overcoming boredom 😉. Living in the sunny Barcelona. 🇪🇸',
    job: '',
    email: 'dmitripavlutin@gmail.com',
    jobTitle: 'Software Developer',
    profiles: {
      stackoverflow: 'https://stackoverflow.com/users/1894471/dmitri-pavlutin',
      twitter: 'https://twitter.com/panzerdp',
      linkedin: 'https://www.linkedin.com/in/dmitri-pavlutin/',
      github: 'https://github.com/panzerdp',
      facebook: 'https://www.facebook.com/dmitripavlutin.dev',
    },
    nicknames: {
      twitter: 'panzerdp',
    },
  },
  emailSubscriptionService: {
    embedFormEndpoint: 'https://assets.mailerlite.com/jsonp/386197/forms/84180324159849472/subscribe',
    pageFormUrl: 'https://dashboard.mailerlite.com/forms/386197/84180324159849472/share',
    isFormEmbed: true
  },
  carbonAds: {
    scriptSrc: '//cdn.carbonads.com/carbon.js?serve=CE7DT2QI&placement=dmitripavlutincom',
    isEnabled: true,
    isProductionMode: IS_PRODUCTION_MODE
  },
  featured: {
    popularPostsByCategory: [{
      category: 'JavaScript',
      slugs: [
        'javascript-closure',
        'gentle-explanation-of-this-in-javascript',
        'differences-between-arrow-and-regular-functions'
      ]
    }, {
      category: 'React',
      slugs: [
        'react-useeffect-explanation',
        'react-usecallback',
        'use-react-memo-wisely',
      ]
    }]
  },
  affiliates: [{
    tags: ['javascript'],
    text: `
        <p>
          Before I go on, let me recommend something to you.
        </p>
        <p>
          The path to becoming good at JavaScript isn't easy... but fortunately with a good course you can shortcut.
        </p>
        <p>
        Take <a href="__URL__" target="_blank" rel="noopener">"Modern JavaScript: ES6 and beyond!"</a> course by Vueschool to become proficient in JavaScript in just a few weeks. Use the coupon code DMITRI and get your 20% discount!
        </p>`,
    url: 'https://vueschool.io/courses/modern-javascript-es6-and-beyond?friend=dmitripavlutin'
  }, {
    tags: ['vue'],
    text: `
      <p>
        Before I go on, let me recommend something to you.
      </p>
      <p>
        Using Vue composition API is fun... but sometimes challenging. Take <a href="__URL__" target="_blank" rel="noopener">"Vue 3 Composition API"</a> course by Vueschool to become proficient in Vue composition and reactivity in just a weekend.
      </p>`,
    url: 'https://vueschool.io/courses/vue-3-composition-api?friend=dmitripavlutin'
  }]
}
