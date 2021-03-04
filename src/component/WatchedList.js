import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import WatchedItem from "./WatchedItem";
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

export default function WatchedList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className={classes.demo}>
            <SearchBar
              onChange={(newValue) => movieList.SearchedWatch(newValue)}
            />
            <WatchedItem />
            <Divider />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
