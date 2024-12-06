// search.js
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("searchForm");
  const input = document.getElementById("searchInput");
  const content = document.getElementById("content");

  // Function to escape special characters for regex
  function escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // Function to highlight text
  function highlightText(query) {
      // Remove previous highlights
      const text = content.innerHTML; // Get the inner HTML
      content.innerHTML = text.replace(/<span class="highlight">.*?<\/span>/g, (match) => {
          return match.replace(/<span class="highlight">|<\/span>/g, ''); // Remove existing highlights
      });

      const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi'); // Regex to search for the text
      content.innerHTML = content.innerHTML.replace(regex, (match) => {
          return `<span class="highlight">${match}</span>`; // Highlight the found text
      });
  }

  // Event listener for form submission
  form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent page reload
      const query = input.value.trim(); // Get the search value
      if (query) {
          highlightText(query); // Call the function to highlight words
      } else {
          // Optionally, you can clear highlights if the input is empty
          const text = content.innerHTML; // Get the inner HTML
          content.innerHTML = text.replace(/<span class="highlight">.*?<\/span>/g, (match) => {
              return match.replace(/<span class="highlight">|<\/span>/g, ''); // Remove existing highlights
          });
      }
  });
});
