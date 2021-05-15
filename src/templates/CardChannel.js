import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";

const CardChannel = ({ classes, data }) => {
  const { id, link, nombre, imageUrl, description, subs } = data;
  const styles = {
    navLink: {
      textDecoration: "none",
      backgroundColor: "inherit",
      color: "inherit",
    },
  };

  return (
    <Card key={id} className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={nombre || "Mucho texto"}
          height="140"
          image={
            imageUrl ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCH98UjtaDkWo66HbeBYaOidHMT6PSlmaZTTV6FGvm5YX9Nh0erA0tgTti9yMItdN_yvw&usqp=CAU"
          }
          title={nombre || "Mucho texto"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {nombre || "Sin titulo"}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description || "Sin nada"}
          </Typography>
          <Typography variant="caption" color="initial">
            Subscriptores: <b>{subs || "0"}</b>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={link} target="_blank">
          Ir al canal
        </Button>
        <NavLink to={`canales/${id}`} style={styles.navLink}>
          <Button size="small" color="primary">
            Ver el Canal
          </Button>
        </NavLink>
      </CardActions>
    </Card>
  );
};

export default CardChannel;
