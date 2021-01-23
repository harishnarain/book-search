import React from "react";
import Link from "@material-ui/core/Link";

import { makeStyles } from "@material-ui/core/styles";

import Aux from "../../../hoc/Aux/Aux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  item: {
    marginRight: theme.spacing(2),
  },
}));

const AppBarItems = (props) => {
  const classes = useStyles();

  return (
    <Aux>
      <Link variant="h6" className={classes.title} href="/" color="inherit">
        Yet Another Book Search
      </Link>
      <Link
        variant="subtitle1"
        className={classes.item}
        href="/"
        color="inherit"
      >
        Search
      </Link>
      <Link
        variant="subtitle1"
        className={classes.item}
        href="/saved-search"
        color="inherit"
      >
        Saved Search
      </Link>
    </Aux>
  );
};

export default AppBarItems;
