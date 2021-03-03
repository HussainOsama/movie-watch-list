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
      Watched: action,
    });
  }

  onClick = () => {
    this.movies.map((movie) => console.log(movie.name));
  };

  DeleteWatch = (movieName) => {
    this.movies = this.movies.filter((movie) => movie.name !== movieName);
  };

  DeleteWatched = (movieName) => {
    this.watched = this.watched.filter((movie) => movie.name !== movieName);
  };

  Watched = (movieName) => {
    this.movies = this.movies.filter((movie) => movie.name !== movieName.name);
    this.watched.push(movieName);
  };

  UnWatched = (movieName) => {
    this.watched = this.watched.filter(
      (movie) => movie.name !== movieName.name
    );
    this.movies.push(movieName);
  };
}

const moviesList = new MoviesList();

export default moviesList;
