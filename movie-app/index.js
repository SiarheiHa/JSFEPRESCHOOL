const apiKey = "a7ddf6c4d37b99ca568494fbefdbd7aa";
const popular = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;
// &language=ru

async function getData(url) {
  const res = await fetch(url);
  const data = await res.json();
  showData(data);
}
getData(popular);

function showData(data) {
  const movies = document.querySelector(".movies");
  movies.innerHTML = "";
  data.results.forEach((element) => {
    const posterUrl = `https://image.tmdb.org/t/p/w1280${element.poster_path}`;
    const title = element.original_title;
    const rating = element.vote_average;
    const overview = element.overview;
    const movieItem = document.createElement("div");
    movieItem.classList.add("movie-item");
    movieItem.innerHTML = `
        <img src="${posterUrl}" alt="poster"  class="poster">
        <div class="movie-info">
            <h2 class="movie-title">${title}</h2>
            <span class="rating">${rating}</span>
        </div>
        <p class="overview">${overview}</p>
        `;
    movies.appendChild(movieItem);
  });
}

const form = document.querySelector(".form");
const search = document.querySelector(".search");
search.focus();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchRequest = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search.value}&page=1`;
  console.log(search.value);
  console.log(searchRequest);
  if (search.value) {
    getData(searchRequest);
  }
});
