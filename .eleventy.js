export default function(eleventyConfig) {
  // Kopiera igenom statiska filer (CSS/JS/bilder)
  eleventyConfig.addPassthroughCopy({ "public": "/" });

  // Litet filter för att hämta årtal ur ISO-datum
  eleventyConfig.addFilter("year", (iso) => {
    try {
      return new Date(iso).getFullYear();
    } catch (e) {
      return "";
    }
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    htmlTemplateEngine: "njk"
  };
}
