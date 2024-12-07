document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const searchResults = document.getElementById("search-results"); // Div o sección donde mostrarás los resultados.
  const searchIndexUrl = "/search-index.json"; // Cambia según la ubicación de tu archivo JSON.

  // Cargar el índice de búsqueda
  let searchIndex = [];
  fetch(searchIndexUrl)
    .then(response => response.json())
    .then(data => {
      searchIndex = data;
    })
    .catch(error => console.error("Error al cargar el índice de búsqueda:", error));

  // Función para realizar la búsqueda
  function performSearch(query) {
    searchResults.innerHTML = ""; // Limpiar resultados previos
    if (!query) return; // Si no hay consulta, salir

    const results = searchIndex.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.content.toLowerCase().includes(query.toLowerCase())
    );

    if (results.length > 0) {
      results.forEach(item => {
        const resultItem = document.createElement("div");
        resultItem.innerHTML = `<a href="${item.url}" class="text-decoration-none">${item.title}</a>`;
        searchResults.appendChild(resultItem);
      });
    } else {
      searchResults.innerHTML = "<p>No se encontraron resultados.</p>";
    }
  }

  // Detectar entrada en el buscador
  searchInput.addEventListener("input", function () {
    performSearch(searchInput.value.trim());
  });

  // Detectar clic en el botón de buscar
  searchButton.addEventListener("click", function () {
    performSearch(searchInput.value.trim());
  });
});
<div id="search-results" class="container mt-3"></div>
