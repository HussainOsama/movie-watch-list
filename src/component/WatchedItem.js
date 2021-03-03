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

function WatchedItem() {
  const classes = useStyles();

  return (
    <>
      {movieList.watched.map((movie) => {
        return (
          <List>
            <ListItem>
              <h3 className={classes.text}>{movie.name}</h3>
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
                <button>Unwatch</button>
                <button>Delet</button>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        );
      })}
    </>
  );
}

export default observer(WatchedItem);
