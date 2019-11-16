module.exports = {
  siteTitle: 'Tristan DeAugustine Portfolio', // <title>
  manifestName: 'Identity',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/gatsby-starter-identity/`, // This path is subpath of your hosting https://domain/portfolio
  authorName: 'Tristan DeAugustine',
  heading: 'Full-Stack Software Developer',
  // social
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/TristanDeAugustine',
    },
    // {
    //   icon: 'fas fa-file',
    //   name: 'Resume',
    //   url: 'https://twitter.com/onlyanubhav',
    // },
    {
      icon: 'fa-linkedin',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/tristan-deaugustine-514939191/',
    },
    {
      icon: 'fa-envelope-o',
      name: 'Email',
      url: 'mailto:deaugustinetristan@gmail.com',
    },
  ],
};
