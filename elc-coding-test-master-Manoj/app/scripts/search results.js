const searchResults = document.getElementById("search-results");

searchInput.addEventListener("input", (event) => {
  const searchTerm = event.target.value;
  fetch(`/search?term=${searchTerm}`)
    .then((response) => response.json())
    .then((data) => {
      searchResults.innerHTML = "";
      data.forEach((result) => {
        const resultElement = document.createElement("div");
        resultElement.innerText = result.name;
        searchResults.appendChild(resultElement);
      });
    });
});
