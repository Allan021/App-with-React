import React from "react";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
import { Paper, makeStyles } from "@material-ui/core";
import SiteHeader from "../../components/SiteHeader";
import EmployeeForm from "./EmployeeForm";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <>
      <SiteHeader
        title="Añadir Usuarios"
        subTitle="Crear una cuenta para el Empleado"
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
<EmployeeForm/>
      </Paper>
    </>
  );
}
