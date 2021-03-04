import "./App.css";
import WatchList from "./component/WatchList";
import WatchedList from "./component/WatchedList";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

import React, { useState } from "react";
import { observer } from "mobx-react";
import movieList from "./stores/moviesList";

function App() {
  const [state, setState] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setState(event.target.value);
    console.log(state);
  }

  function handleSubmit(event) {
    event.preventDefault();
    movieList.AddMovie(state);
    console.log(state);
  }

  return (
    <Grid container spacing={3} justify="center">
      <Grid container item xs={12} justify="center">
        <h1>Movie Watch List App</h1>
      </Grid>
      <Grid container xs={12} justify="center">
        <form onSubmit={handleSubmit}>
          <label>
            Add Movie
            <input name="name" onChange={handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {/* <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <Input type="submit" />
        </FormControl> */}
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

export default observer(App);
