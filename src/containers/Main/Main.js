import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    color: theme.palette.text.secondary,
  },
  body: {
    padding: theme.spacing(2),
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <Container>
      <Grid item md={12}>
        <Paper className={classes.paper}>
          <Typography variant="h4" gutterBottom>
            Welcome to Yet Another Book Search
          </Typography>
          <Divider />
        </Paper>
      </Grid>
    </Container>
  );
};

export default Main;
