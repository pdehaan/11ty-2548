const { EleventyHtmlBasePlugin, EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(EleventyRenderPlugin);

  eleventyConfig.addFilter("inspect", require("node:util").inspect);

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};
