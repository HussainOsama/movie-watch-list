import movies from "./data";
import { action, makeObservable, observable } from "mobx";

class MoviesList {
  movies = movies;

  watched = [
    {
      name: "Superman",
      watched: false,
      id: 1,
    },
  ];

  constructor() {
    makeObservable(this, {
      movies: observable,
      watched: observable,
      onClick: action,
      DeleteWatch: action,
      DeleteWatched: action,
    });
  }

  onClick = () => {
    this.movies.map((movie) => console.log(movie.name));
  };

  DeleteWatch = (movieNme) => {
    this.movies = this.movies.filter((movie) => movie.name !== movieNme);
  };

  DeleteWatched = (movieNme) => {
    this.watched = this.watched.filter((movie) => movie.name !== movieNme);
  };
}

const moviesList = new MoviesList();

export default moviesList;
