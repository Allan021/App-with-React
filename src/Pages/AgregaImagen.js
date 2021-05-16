import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Controls from "../components/controls/Controls";
import ImagenCircular from "./ImagenCircular";
import ImagenCuadrada from "./ImagenCuadrada";

const AgregaImagen = () => {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justify="center"
      alignItems="center"
      alignContent="center"
      wrap="nowrap"
    >
      <Grid item xs={12} sm={12} md={12}>
        <Typography variant="h5" color="primary">
          Agrega Archivos mediante los inputs
        </Typography>

        <ImagenCircular />
        <ImagenCuadrada />
      </Grid>
    </Grid>
  );
};

export default AgregaImagen;
