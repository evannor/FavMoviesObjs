const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

function renderMovies(filter = "") {
  // this is not the most ideal method to complete this task
  const movieList = document.getElementById("movie-list");

  // below is bad for performance as the movieList will be cleared each time function is called
  // going this route for practice with working with objects
  if (movies.length === 0) {
    movieList.classList.remove("visible");
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";

  // only search through the filtered movies
  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement("li");
    let text = movie.info.title + " - ";
    // go through all key-value pairs in an object with for-in loop
    for (const key in movie.info) {
      if (key !== "title") {
        text += `${key}: ${movie.info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
}

function addMovieHandler() {
  // gather all user input and add that to the movie(create a new movie object)
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  // validation
  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    info: {
      // if key name and value are the same (value is a dynamic variable), simply write that value once
      // JS will understand and break it into  title: title,
      title,
      [extraName]: extraValue,
    },
    id: Math.random(),
  };
  movies.push(newMovie);
  // console.log(newMovie);
  renderMovies();
}

function searchMovieHandler() {
  const searchTerm = document.getElementById("filter-title").value;
  renderMovies(searchTerm);
}

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);
