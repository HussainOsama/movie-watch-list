import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import movieList from "../stores/moviesList";
import { observer } from "mobx-react";
import WatchedButton from "./Buttons/WatchedButton";
import DeleteButton from "./Buttons/DeleteButton";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  text: {
    color: "black",
  },
}));

function WatchItem() {
  const classes = useStyles();

  return (
    <>
      {movieList.movies.map((movie) => {
        return (
          <List key={movie.id}>
            <ListItem>
              <h3 className={classes.text}>{movie.name}</h3>
              <ListItemSecondaryAction>
                {/* <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton> */}
                <span onClick={() => movieList.Watched(movie)}>
                  <WatchedButton />
                </span>
                <span onClick={() => movieList.DeleteWatch(movie.name)}>
                  <DeleteButton />
                </span>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        );
      })}
    </>
  );
}

export default observer(WatchItem);
