import React, { useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "90%",
      margin: theme.spacing(1),
    },
  },
}));

export function Form(props) {
  const classes = useStyles();
  const { children, ...other } = props;
  return (
    <form className={classes.root} autoComplete="off" {...other}>
      {props.children}
    </form>
  );
}

export const useForm = (initialForm, validationForm, url) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(null);
  const [response, setResponse] = useState(false);
  const [responseState, setResponseState] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target; //aca hago referencia al imput
    ///actualizar el estado
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleKeyUp = (e) => {
    handleChange(e);

    setErrors(validationForm(form));
  };

const handleBlur = (e) => {

  setErrors(validationForm(form));
};

  const resetForm = () => {
    setForm(initialForm);
    setErrors(null);
    setResponse(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validationForm(form));

    if (Object.keys(errors).length !== 0)
      return (
        alert("Hay errores por resolver!!")
      );

    setLoading(true);

    helpHttp()
      .post(url, {
        body: form,
        headers: {
          "Content-type": "application/json",
        },
        accept: "application/json",
      })
      .then((res) => {
        setLoading(false);
        setResponse(true);
        setResponseState(res);
        setTimeout(() => {
          resetForm();
        }, 2000);
      });
  };

  return {
    form,
    errors,
    response,
    loading,
    setForm,
    handleChange,
    handleSubmit,
    handleKeyUp,
    resetForm,
    handleBlur,
    responseState,
  };
};
