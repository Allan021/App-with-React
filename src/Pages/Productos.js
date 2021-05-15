import React from "react";
import Typography from "@material-ui/core/Typography";
import { useHistory, useLocation } from "react-router";
import { Button, Box } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const Productos = () => {
  const location = useLocation(); //hoy para poder ver laos paramentros de consulta y la localizacion
  const { search } = useLocation();

  const parametros = new URLSearchParams(search);

   console.info(parametros);


  let start = parseInt(parametros.get("inicio")) || 1;
  let end = parseInt(parametros.get("fin")) || 20;
  const LIMIT = 20; //eesto ira de 20 en 20 wey

  const historial = useHistory();
console.info(start,end);

  const handlePrev = (e) => {
historial.push({search:`?inicio=${start -LIMIT}&fin=${end-LIMIT}`})

  };
  const handleNext = (e) => {
historial.push({ search: `?inicio=${start + LIMIT}&fin=${end +LIMIT}` });
  };
  return (
    <div>
      <Typography variant="h3" color="initial">
        Pagina de Productos
      </Typography>
      <Typography variant="h5" color="initial">
        Usted se Encuentra en la seccion{" "}
        <b> {location.pathname.replace("/", "")}</b>
      </Typography>
      <Typography variant="body1" color="initial">
        Usetd se encuentra en la pagina <b>{start} </b>
        de <b>{end}</b>
      </Typography>

      <Grid container spacing={2}>
        {start > LIMIT && (
          <Grid item>
            <Box mt={2}>
              <Button onClick={handlePrev} variant="contained" color="primary">
                Anterior
              </Button>
            </Box>
          </Grid>
        )}
        <Grid item>
          <Box mt={2}>
            <Button onClick={handleNext} variant="contained" color="secondary">
              Siguiente
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Productos;
