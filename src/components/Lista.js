import List from "@material-ui/core/List";
import HomeIcon from "@material-ui/icons/Home";
import React from "react";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import Item from "./Item";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Divider from "@material-ui/core/Divider";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import InfoIcon from "@material-ui/icons/Info";
import PublicIcon from "@material-ui/icons/Public";
import FormatAlignCenterIcon from "@material-ui/icons/FormatAlignCenter";
import AttachmentIcon from "@material-ui/icons/Attachment";
const Lista = ({ classes }) => {
  return (
    <List>
      <Item classes={classes} path="/" icon={<HomeIcon />} text="Inicio" />
      <Item
        classes={classes}
        path="/about"
        icon={<InfoIcon />}
        text="Sobre Nosotros"
      />
      <Item
        classes={classes}
        path="/canales"
        icon={<YouTubeIcon />}
        text="Canales"
      />
      <Item
        classes={classes}
        path="/admin"
        icon={<SupervisorAccountIcon />}
        text="Administracion "
      />
      <Item
        classes={classes}
        path="/productos"
        icon={<AttachMoneyIcon />}
        text="Productos"
      />
      <Divider />
      <Item
        classes={classes}
        path="/register"
        icon={<PersonAddIcon />}
        text="Registro"
      />
      <Item
        classes={classes}
        path="/login"
        icon={<PermContactCalendarIcon />}
        text="Login"
      />{" "}
      <Item
        classes={classes}
        path="/privadas"
        icon={<PublicIcon />}
        text="Paginas Privadas"
      />{" "}
      <Item
        classes={classes}
        path="/friends"
        icon={<FormatAlignCenterIcon />}
        text="Paginas Anidadas"
      />
      <Divider />
      <Item
        classes={classes}
        path="/agregar"
        icon={<AttachmentIcon />}
        text="Agregar Fotografias"
      />
    </List>
  );
};

export default Lista;
