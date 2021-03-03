import "./App.css";
import moviesList from "./stores/moviesList";
import WatchList from "./component/WatchList";
import WatchedList from "./component/WatchedList";

function App() {
  return (
    <div className="App">
      <h1>Movie Watch List App</h1>
      <WatchList />
      <WatchedList />
    </div>
  );
}

export default App;
