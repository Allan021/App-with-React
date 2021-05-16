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
  const [errors, setErrors] = useState({});
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
    setResponse(false);setResponseState(null);
  };

  const handleSubmit = (e, type = "") => {
    e.preventDefault();

    setErrors(validationForm(form));

    if (Object.keys(errors).length !== 0)
      return alert("Hay errores por resolver!!");

    setLoading(true);

    type !== "php"
      ? helpHttp()
          .post(url, {
            body: form,
            headers: {
              "Content-type": "application/json",
            },
            accept: "application/json",
          })
          .then((res) => {
            console.info(res);
            setLoading(false);
            setResponse(true);
            setResponseState(res);
            setTimeout(() => {
              resetForm();
              setResponse(false);
            }, 2000);
          })
      : fetchPhp(url, form, setResponseState,setLoading,resetForm);
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
    setErrors,
  };
};

const fetchPhp = async (urlPhp, form, setResponseState, setLoading,resetForm) => {
  const options = {
    method: "POST",
    body: JSON.stringify(form),
    headers: {
      "Content-type": "application/json",
    },
  };

  try {
    let resp = await fetch(urlPhp, options);
    console.info(resp);
    let message = resp.statusText || "Prende el php my admin wey";
    if (!resp.ok) {
      throw {
        status: resp.status,
        statusText: message,
        error: true,
      };
    }

    let json = await resp.json();

    setResponseState(json);
    setLoading(false);

  } catch (error) {
    setResponseState(error);
    setLoading(false);
  }
};
