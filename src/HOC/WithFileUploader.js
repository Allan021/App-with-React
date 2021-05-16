import React, { Component } from "react";

export const WithFileUploader = (Componente) => {
  return class componentName extends Component {
    constructor(props) {
      super(props);
      this.state = { files: [] };
      this.fileReader = new FileReader(); //creando un lector de archivos como propiedad de clase
      this.agregaArchivo = this.agregaArchivo.bind(this);
      this.append = this.append.bind(this);
    }
    //funcion manejadora de eventos
    //esta funcion se encargara de leer un archivo cada vez que el input de tipo file cambie

    agregaArchivo = (e) => {
      const files = e.target.files;
      console.info("as");
      this.fileReader.readAsDataURL(files[0]);
    };
    //manejadra de evento de mi input de tipo change
    append = (e) => {
      //agrega el archivo al estado de mi component e uno agrega el archivo a la cola y otro lo agrega alñl esatdo para usarla en la aplicacion :)
      this.setState({ files: [...this.state.files, this.fileReader.result] });
    };

    componentDidMount() {
      this.fileReader.addEventListener("load", this.append);
    }

    componentWillUnmount() {
      this.fileReader.removeEventListener("load", this.append); //para evitar desboradmientos de pila
    }

    render() {
      return (
        <Componente
          {...this.props}
          files={this.state.files}
          agregaArchivo={this.agregaArchivo}
        />
      );
    }
  };
};
