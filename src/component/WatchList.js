import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import WatchItem from "./WatchItem";
import SearchBar from "material-ui-search-bar";
import movieList from "../stores/moviesList";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function WatchList() {
  const classes = useStyles();

  const [state, setState] = useState("");

  // const handleChange = (newValue) => {
  //   console.log(newValue);
  //   setState(newValue);
  //   console.log(state);
  // };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className={classes.demo}>
            <SearchBar
              // value={state}
              onChange={(newValue) => {
                // setState(newValue);
                movieList.SearchWatch(newValue);
                // console.log(state);
              }}
              // onRequestSearch={() => doSomethingWith(this.state.value)}
            />
            <WatchItem />
            <Divider />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
