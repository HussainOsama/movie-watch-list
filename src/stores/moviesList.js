import movies from "./data";
import { action, makeObservable, observable } from "mobx";
import movieList from "./data";

class MoviesList {
  movies = movies;

  watched = [
    {
      name: "Superman",
      watched: false,
      id: 1,
    },
    {
      name: "Spiderman",
      watched: false,
      id: 2,
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
      SearchWatch: action,
      SearchedWatch: action,
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

  SearchWatch = (movieName) => {
    // console.log("This is Data", movieName);
    this.movies = this.movies.filter((movie) => movie.name.includes(movieName));
    // this.movies.map((movie) => console.log("test"));
    // console.log(this.movies);
  };

  SearchedWatch = (movieName) => {
    this.watched = this.watched.filter((movie) =>
      movie.name.includes(movieName)
    );
  };
}

const moviesList = new MoviesList();

export default moviesList;
