import "./App.css";
import moviesList from "./stores/moviesList";
import WatchList from "./component/WatchList";

function App() {
  return (
    <div className="App">
      <h1>Movie Watch List App</h1>
      <button onClick={moviesList.onClick}>Click Me</button>
      <WatchList />
    </div>
  );
}

export default App;
