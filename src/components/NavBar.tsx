import {
  AppBar,
  Avatar, makeStyles,
  Toolbar
} from "@material-ui/core";
import React from "react";
import LangSelect from "./LangSelect";
import ThemeSwitch from "./ThemeSwitch";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: theme.palette.background.default,
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = (props: any) => {
  const classes = useStyles();
  const { theme, toggleTheme } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" variant="outlined" className={classes.root}>
        <Toolbar variant="dense">
          <div className={classes.title}>
            <Avatar variant="rounded" src="logo192.png"></Avatar>
          </div>
          <ThemeSwitch
            theme={theme}
            toggleTheme={() => toggleTheme()}
          />
          {/* <Divider orientation="vertical" flexItem /> */}
          <LangSelect />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
