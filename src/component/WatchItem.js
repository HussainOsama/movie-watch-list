import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import movieList from "../stores/moviesList";
import { observer } from "mobx-react";

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

  // movieList.movies.map((movie) => console.log(movie.name));
  return (
    <>
      {movieList.movies.map((movie) => {
        return (
          <List>
            <ListItem>
              <h3 className={classes.text}>{movie.name}</h3>
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
                <button>Watched</button>
                <button>Delet</button>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        );
      })}
    </>
  );
}

export default observer(WatchItem);
