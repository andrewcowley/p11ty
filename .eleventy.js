module.exports = function(eleventyConfig) {
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src/",
      output: "dist",
      includes: "_includes",
      layouts: "_includes/layouts"
    }
  };
};
