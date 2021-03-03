import movies from "./data";
import { action, makeObservable, observable } from "mobx";

class MoviesList {
  movies = movies;

  watched = [
    {
      name: "Superman",
    },
  ];

  constructor() {
    makeObservable(this, {
      movies: observable,
      onClick: action,
    });
  }

  onClick = () => {
    this.movies.map((movie) => console.log(movie.name));
  };
}

const moviesList = new MoviesList();

export default moviesList;
