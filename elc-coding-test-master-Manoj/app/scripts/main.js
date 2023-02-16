const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", (event) => {
  const searchTerm = event.target.value;
  fetch(`/search?term=${searchTerm}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
});
