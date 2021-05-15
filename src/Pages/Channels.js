import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Loader from "../components/Loader";
import { helpHttp } from "../helpers/helpHttp";
import CardChannel from "../templates/CardChannel";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Channels = ({ channels, setChannels }) => {
  const classes = useStyles();

  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null); //me imagino que esta sera la

  let apiUrl = "http://localhost:5000/canales";

  useEffect(() => {
    helpHttp()
      .get(apiUrl)
      .then((res) => {
        if (!res.err) {
          setChannels(res);
          setIsPending(false);
          setError(null);
        } else {
          setError(res);
          setIsPending(false);
          setChannels(res);
        }
      });
  }, []);
  return (
    <>
      <Grid container spacing={2}>
        {isPending && (
          <div style={{ margin: "auto" }}>
            <Loader />
          </div>
        )}

        {channels !== null ? (
          channels.map((el) => (
            <Grid key={el.id} item xs={12} md={4} sm={6} lg={3}>
              <CardChannel classes={classes} data={el} />
            </Grid>
          ))
        ) : (
          <Typography variant="h5" color="secondary">
            Sin canales
          </Typography>
        )}
      </Grid>
    </>
  );
};

export default Channels;
