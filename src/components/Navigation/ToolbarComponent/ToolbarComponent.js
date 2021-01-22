import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseLine from "@material-ui/core/CssBaseline";

import AppBarItems from "../AppBarItems/AppBarItems";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    background: "#05668D",
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  title: {
    flexGrow: 1,
  },
  navItems: {
    flexGrow: 1,
  },
}));

const ToolbarComponent = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseLine />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <AppBarItems />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ToolbarComponent;
