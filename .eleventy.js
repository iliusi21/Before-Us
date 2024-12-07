module.exports = function(eleventyConfig) {
  // Archivos que pasas directamente sin procesar
  eleventyConfig.addPassthroughCopy("code/css");
  eleventyConfig.addPassthroughCopy("code/images");
  eleventyConfig.addPassthroughCopy("code/js");
  eleventyConfig.addPassthroughCopy("code/json"); // Si "search-index.json" está aquí

  

  return {
    dir: {
      input: "code",          // Carpeta de entrada con tus archivos .njk
      output: "docs",         // Carpeta de salida para los archivos generados
       includes: "_includes"
    },
  };
};