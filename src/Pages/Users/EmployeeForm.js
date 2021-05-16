import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Controls from "../../components/controls/Controls";
import { useForm, Form } from "../../hooks/useForm";
import Loader from "../../components/Loader"
import Message from "../../components/Message";
const genderItems = [
  { id: "masculino", title: "Masculino" },
  { id: "femenino", title: "Femenino" },
  { id: "otro", title: "Otro" },
];

const initialFValues = {
  nombre: "",
  password: "",
  another: "",
  email: "",
  telefono: "",
  ciudad: "",
  genero: "masculino",
  hireDate: new Date(),
  isPermanent: false,
};

const urlPhp = "http://localhost/servidor/";
export default function EmployeeForm() {
  const validar = (form) => {
    let error = {};
    const RegPassword =
      /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
    const RegName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const RegEmail =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const RegTelefono = /^[0-9]{8,9}/;

    if (!form.nombre) error.nombre = "El campo nombre es requerido wey";
    else if (!RegName.test(form.nombre))
      error.nombre = "El nombre que ingresaste es invalido";

    if (!form.email)
      error.email =
        "El campo email es requerido wey, o como te vas a registrar xd";
    else if (!RegEmail.test(form.email))
      error.email = "El email ingresado no existe";

    if (!form.password) error.password = "Ingresa la contraseña wey nmms";
    else if (!RegPassword.test(form.password))
      error.password = "La contraseña ingresada es poco segura";

    if (!form.another) error.another = "Ingresa la otra contraseña wey nmms";
    else if (form.another != form.password)
      error.another = "La constraseña no concuerda con la original";

    if (!form.telefono) error.telefono = "El campo del telefono es requerido";
    else if (!RegTelefono.test(form.telefono))
      error.telefono = "EL telefono que ingresaste es incorrecto";

    if (!form.ciudad) error.ciudad = "Ocupo saber tu ciudad wey";
    return error;
  };
  const {
    form,
    errors,
    response,
    loading,
    handleChange,
    handleSubmit,
    handleKeyUp,
    resetForm,
    handleBlur,
    responseState,
  } = useForm(initialFValues, validar, urlPhp);

  return (
    <Form onSubmit={(e) => handleSubmit(e, "php")}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="nombre"
            label="Nombre Completo"
            value={form.nombre}
            onChange={handleChange}
            error={errors && errors.nombre}
            onBlur={handleBlur}
          />
          <Controls.Input
            type="password"
            label="Contraseña"
            name="password"
            value={form.password}
            onChange={handleChange}
            error={errors && errors.password}
            onKeyUp={handleKeyUp}
          />

          {form.password && (
            <Controls.Input
              type="password"
              label="Confirmar Contraseña"
              name="another"
              value={form.another}
              onChange={handleChange}
              error={errors && errors.another}
              onBlur={handleBlur}
            />
          )}

          <Controls.Input
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            error={errors && errors.email}
            onBlur={handleBlur}
          />
          <Controls.Input
            label="Telefono"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            error={errors && errors.telefono}
            onBlur={handleBlur}
          />

          <Controls.Input
            label="City"
            name="ciudad"
            value={form.ciudad}
            onChange={handleChange}
            error={errors && errors.ciudad}
            onBlur={handleBlur}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            name="genero"
            label="Seleccione su genero"
            value={form.genero}
            onChange={handleChange}
            items={genderItems}
          />

          <Controls.DatePicker
            name="hireDate"
            label="Fecha de Contratacion"
            value={form.hireDate}
            onChange={handleChange}
            error={errors && errors.hireDate}
            onBlur={handleBlur}
          />
          <Controls.Checkbox
            name="isPermanent"
            label="Empleado Permanente"
            value={form.isPermanent}
            onChange={handleChange}
          />

          <div>
            <Controls.Button type="submit" text="Registrarse" />
            <Controls.Button
              text="Limpiar"
              color="default"
              onClick={resetForm}
            />
          </div>
        </Grid>
      </Grid>

      {loading && <Loader />}

      {responseState != null && (
        <Message
          msj={responseState.statusText}
          bgcolor={!responseState.err ? "#5cb85c" : "#d9534f"}
        />
      )}
    </Form>
  );
}
