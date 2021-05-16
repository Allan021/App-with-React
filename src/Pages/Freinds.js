import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useRouteMatch, useParams } from "react-router";
import { Link, Switch, Route } from "react-router-dom";

const Friend = () => {
  const { friend } = useParams();

  return (
    <>
      <Typography variant="h6" color="initial">
        Saludando a mi amiga {friend}
      </Typography>

      <Typography variant="body1" color="initial">
        Mi amiga {friend} es muy especial para mi y por eso la quiero. Todo
        nuestro cariño para la familia. Queríamos mucho a nuestra abuela. Le
        estaremos eternamente agradecidos por todo lo que hizo por nosotros. La
        echaremos mucho de menos
      </Typography>
    </>
  );
};

const Freinds = () => {
  const { path, url } = useRouteMatch();
  console.info(path, url); //path se usa en el route y el rote se mira en urkl

  return (
    <Grid
      container
      spacing={1}
      direction="row"
      justify="center"
      alignItems="center"
      alignContent="center"
      wrap="nowrap"
    >
      <Grid item xs={12}>
        <Typography variant="h5" color="initial">
          De ahora en adelante vamos a trabajar con rutas anidadas
        </Typography>

        <ul>
          <li>
            <Link to={`${url}/paola`}>Paola</Link>
          </li>
          <li>
            <Link to={`${url}/beily`}>Beily</Link>
          </li>
          <li>
            <Link to={`${url}/abigail`}>Abigail</Link>
          </li>
          <li>
            <Link to={`${url}/angie`}>Angie</Link>
          </li>
        </ul>
      </Grid>

      <Grid item xs={12}>
        <Switch>
          <Route path={`${path}/:friend`} component={Friend} />
        </Switch>
      </Grid>
    </Grid>
  );
};

export default Freinds;
