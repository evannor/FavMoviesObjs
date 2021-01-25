const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

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
  console.log(newMovie);
}

addMovieBtn.addEventListener("click", addMovieHandler);
