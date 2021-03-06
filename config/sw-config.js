module.exports = {
  cache: {
    cacheId: "electrode-maggie",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "electrode-maggie",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
