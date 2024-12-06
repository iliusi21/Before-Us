module.exports = function(eleventyConfig) {
  // Archivos que pasas directamente sin procesar
  eleventyConfig.addPassthroughCopy("code/css");
  eleventyConfig.addPassthroughCopy("code/images");
  eleventyConfig.addPassthroughCopy("code/js");
  eleventyConfig.addPassthroughCopy("code/json");

  return {
    dir: {
      input: "code",          // Carpeta de entrada con tus archivos .njk
      output: "docs",         // Carpeta de salida para los archivos generados
      includes: "_includes",  // Carpeta donde se encuentran los layouts (asegúrate que esté dentro de "code")
      data: "_data",          // Si tienes datos globales o archivos JSON, configúralos aquí
    },
  };
};
