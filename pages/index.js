import { Button, makeStyles, Paper, Typography } from "@material-ui/core";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: theme.spacing(8),
  },
  block: {
    padding: theme.spacing(5),
  },
}));

export default function Home() {
  const style = useStyles();
  return (
    <div className={style.container}>
      <Paper className={style.block} elevation={3}>
        <Typography variant="h3" component="h1">
          Bienvenue
        </Typography>
        <Button
          variant="contained"
          size="large"
          component={"a"}
          href="/posts"
          color="primary"
        >
          Se rendre sur la liste des posts
        </Button>
      </Paper>
    </div>
  );
}
