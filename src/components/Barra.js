import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

const Barra = ({ classes, handleDrawerToggle }) => {
  const styles = {
    navLink: {
      textDecoration: "none",
      backgroundColor: "inherit",
      color: "inherit",
    },
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          onClick={handleDrawerToggle}
          color="inherit"
          aria-label="open drawer"
          edge="start"
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant="h6" noWrap>
          AceWeb
        </Typography>
        <NavLink to="/login" style={styles.navLink}>
          <Button color="inherit">Login</Button>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Barra;
