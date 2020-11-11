module.exports = {
  siteMetadata: {
    description: "Personal page of Emil Karlsson",
    locale: "se",
    title: "Emil Karlsson",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: false,
        theme: "bright-green",
      },
    },
  ],
}
