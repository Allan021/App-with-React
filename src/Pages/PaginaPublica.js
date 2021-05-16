import React from "react";
import Typography from "@material-ui/core/Typography";
import WithLogin from "../HOC/WithLogin";
import PageTest from "../components/pageTest";


const PaginaPublica = ({logged}) => {
  return <div>{logged? <PageTest/>: <Typography variant="h3" color="secondary">No tiene acceso a esta pagina mi papa</Typography> }</div>;
};

export default WithLogin(PaginaPublica);
