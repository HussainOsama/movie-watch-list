import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  text: {
    color: "black",
  },
}));

function MovieItem() {
  const classes = useStyles();

  return (
    <List>
      <ListItem>
        <h3 className={classes.text}>The Dark Night</h3>
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
}

export default MovieItem;
