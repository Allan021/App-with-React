import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useForm, Form } from "../../hooks/useForm";
import { NavLink, Redirect, Route } from "react-router-dom";
import Controls from "../../components/controls/Controls";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import PrivatePage from "../PrivatePage";

const initialLogin = {
  username: "",
  password: "",
};

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 400,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

  const validarInputs = (form) => {
    let error = {};
    const RegEmail =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const RegPassword =
      /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;

    if (!form.username)
      error.username =
        "El campo username es requerido wey, o como te vas a registrar xd";
    else if (!RegEmail.test(form.username))
      error.username = "El nombre de usuario es incorrecto";

    if (!form.password) error.password = "Ingresa la contraseña wey nmms";
    else if (!RegPassword.test(form.password))
      error.password = "La contraseña ingresada es insegura";

    return error;
  };

  const {
    form,
    errors,
    response,
    loading,
    handleChange,
    handleSubmit,
    resetForm,
    handleBlur,
    responseState,
    setErrors,
  } = useForm(
    initialLogin,
    validarInputs,
    "http://localhost/servidor/login.php"
  );
  useEffect(() => {
    if (responseState) {
      if (!responseState.conectado) {
        responseState.errorU &&
          setErrors({
            ...errors,
            username: responseState.errorU,
          });

        responseState.errorP &&
          setErrors({
            ...errors,
            password: responseState.errorP,
          });
      }
    }

    return (e) => resetForm();
  }, [responseState]);
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Form onSubmit={(e) => handleSubmit(e, "php")}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>

          <Controls.Input
            name="username"
            label="Usuario "
            value={form.username}
            onChange={handleChange}
            error={errors && errors.username}
            onBlur={handleBlur}
          />

          <Controls.Input
            name="password"
            label="Constraseña"
            type="password"
            value={form.password}
            onChange={handleChange}
            error={errors && errors.password}
            onBlur={handleBlur}
          />

          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            Iniciar Sesión
          </Button>
          <Typography style={{ margin: "1rem auto" }}>
            {" "}
            No tienes una cuenta?{" "}
            <NavLink to="/register">
              <Link>Registrate</Link>
            </NavLink>
          </Typography>
          {loading && <Loader />}

          {responseState !== null && responseState.conectado && (
            <>
              <Route path="/content">
                <PrivatePage data={responseState.data} />
              </Route>

              <Redirect
                to="/content"
                children={<PrivatePage data={responseState.data} />}
              />
            </>
          )}
        </Form>
      </Paper>
    </Grid>
  );
};

export default Login;
