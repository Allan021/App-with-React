import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import Lista from "./Lista";
const Cajon = ({ classes, variante, isOpen = "true", handleDrawerToggle }) => {
  return (
    <Drawer
      anchor="left"
      variant={variante}
      open={isOpen}
      classes={{
        paper: classes.drawerPaper, //xre que esto sera  el papel en blanco del drawer
      }}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      onClose={handleDrawerToggle || null}
      // cuando esto se cierre entonces el estado se cambia
    >
      <div className={classes.offset}></div>
      <Divider />
      <Lista classes={classes} />
    </Drawer>
  );
};

export default Cajon;
