import React from "react";
import { NavLink } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
const Item = ({ classes, path, icon, text }) => {
  return (
    <NavLink
      className={classes.navLink}
      to={path || "/"}
      exact
      activeClassName="active"
    >
      <ListItem button>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text || "Nada we"} />
      </ListItem>
    </NavLink>
  );
};

export default Item;
