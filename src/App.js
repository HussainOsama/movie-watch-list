import "./App.css";
import WatchList from "./component/WatchList";
import WatchedList from "./component/WatchedList";
import Grid from "@material-ui/core/Grid";

function App() {
  return (
    <Grid container spacing={3} justify="center">
      <Grid container item xs={12} justify="center">
        <h1>Movie Watch List App</h1>
      </Grid>
      <Grid container justify="center" item xs={6}>
        <WatchList />
      </Grid>
      <Grid container justify="center" item xs={6}>
        <WatchedList />
      </Grid>
    </Grid>
  );
}

export default App;
