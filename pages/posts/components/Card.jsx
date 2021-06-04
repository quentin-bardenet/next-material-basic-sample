import { makeStyles } from "@material-ui/core";
import React from "react";

import MuiCard from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

function Card({ title, body, id }) {
  const classes = useStyles();
  return (
    <MuiCard className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={"a"} href={`/posts/${id}`}>
          Voir le détail
        </Button>
      </CardActions>
    </MuiCard>
  );
}

export default Card;
