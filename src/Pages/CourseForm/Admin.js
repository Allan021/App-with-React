import React, { useState, useEffect } from "react";
import SiteHeader from "../../components/SiteHeader";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AdminForm from "./AdminForm";
import { Paper, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));


const Admin = () => {
const classes=useStyles();

  return (
    <>
      <SiteHeader
        icon={<AddCircleOutlineIcon />}
        title="Insertar un nuevo curso"
        subTitle="Sea cuidadoso con lo que ingrese"
      />
      <Paper className={classes.pageContent}>
        <AdminForm  />
      </Paper>
    </>
  );
};

export default Admin;
