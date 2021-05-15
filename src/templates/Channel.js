import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Error404 from "../Pages/Error404";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router";
const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
});

const Channel = ({data=[]}) => {
  const classes = useStyles();
  const params = useParams();
const id=  params.id;
const canal= data&& data.filter(el=> el.id === parseInt( id))[0];



  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={12}>
        {!canal ? (
          <Error404
            text={`No se logro el canal con el id ${id}`}
          />
        ) : (
          <Card key={canal.id} className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={canal.nombre || "Mucho texto"}
                height="140"
                image={
                  canal.imageUrl ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCH98UjtaDkWo66HbeBYaOidHMT6PSlmaZTTV6FGvm5YX9Nh0erA0tgTti9yMItdN_yvw&usqp=CAU"
                }
                title={canal.nombre || "Mucho texto"}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {canal.nombre || "Sin titulo"}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {canal.description || "Sin nada"}
                </Typography>
                <Typography variant="caption" color="initial">
                  Subscriptores: <b>{canal.subs || "0"}</b>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href={canal.link}
                target="_blank"
              >
                Ir al canal de {canal.nombre}
              </Button>
            </CardActions>
          </Card>
        )}
      </Grid>
    </Grid>
  );
};

export default Channel;
