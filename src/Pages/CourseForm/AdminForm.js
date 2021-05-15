import { Grid, TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Controls from "../../components/controls/Controls";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { useForm, Form } from "../../hooks/useForm";

const InitialCourse = {
  id: null,
  nombre: "",
  subs: "",
  imageUrl: "",
  link: "",
  description: "",
};

const AdminForm = () => {
  const validarInputs = (form) => {
    let errors = {};

    const RegName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const RegUrl = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
    const RegSubs = /^[0-9]+$/;

    //si la data que esta en el use
    if (!form.nombre)
      errors.nombre = "No se puede dejar el campo nombre vacio wey";
    else if (!RegName.test(form.nombre))
      errors.nombre = `El nombre del canal ${form.nombre} es invalido`;

    if (!form.link) errors.link = "Necesita ingresar la url por fuerza";
    else if (!RegUrl.test(form.link))
      errors.link = `La url ${form.link} es incorrecta`;

    if (!form.subs) errors.subs = "Se necesitan saber los Subscriptores";
    else if (!RegSubs.test(form.subs))
      errors.subs = `El numero de subscriptores  ${form.subs} es incorrecta`;

    if (!form.description)
      errors.description = "Porfavor ingrese la descripcion del canal";
    return errors;
  };
  const {
    form,
    setForm,
    errors,
    response,
    loading,
    handleChange,
    handleSubmit,
    handleKeyUp,
    resetForm,
    responseState,
  } = useForm(InitialCourse, validarInputs, "http://localhost:5000/canales");

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12}>
          <Controls.Input
            name="nombre"
            label="Nombre completo"
            value={form.nombre}
            onChange={handleChange}
            onKeyUp={handleKeyUp}
            error={errors && errors.nombre}
            variant="outlined"
          />
          <Controls.Input
            name="link"
            label="Url del canal"
            value={form.link}
            onChange={handleChange}
            onKeyUp={handleKeyUp}
            error={errors && errors.link}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controls.Input
            name="subs"
            label="Subscriptores del canal"
            value={form.subs}
            onChange={handleChange}
            onKeyUp={handleKeyUp}
            error={errors && errors.subs}
            variant="outlined"
          />
        </Grid>

        <Grid style={{ marginTop: "10px" }} item xs={12} md={6}>
          <Controls.UploadButtons
            name="imageUrl"
            label="Subir imagen del canal"
            onChange={(e) => {
              const files = e.target.files;

              if (files.length === 0) {
                e.target.value = form.imageUrl;
              } else {
                setForm({
                  ...form,
                  [e.target.name]: URL.createObjectURL(files[0]),
                });
              }
            }}
          />
        </Grid>
        <Controls.Input
          name="imageUrl"
          label="Url de la imagen del canal"
          value={form.imageUrl}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          error={errors && errors.link}
          variant="outlined"
        />
        <Controls.Input
          name="description"
          label="Descripcion del canal"
          value={form.description}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          error={errors && errors.description}
          variant="outlined"
        />

        <div>
          <Controls.Button type="submit" text="Insertar" />
          <Controls.Button
            text="Resetear"
            color="default"
            onClick={resetForm}
          />
        </div>
      </Grid>

      {loading && <Loader />}
      {response ? responseState.err === null ? (
        <Message msj="El curso se ingreso correctamente" bgcolor="#5cb85c" />
      ) : (
        <Message msj="Prende el Servidor HDPM" bgcolor="#d9534f" />
      ):""}
    </Form>
  );
};

export default AdminForm;
