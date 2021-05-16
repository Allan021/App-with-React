import React, { Component } from "react";

const WithLogin = (Componente) => {
  return class NuevoComponente extends Component {
    constructor(props) {
      super(props);
      this.state = { logged: false };

      this.verificarLogin = this.verificarLogin.bind(this);
    }

    verificarLogin() {


      setTimeout(() => {
      const  login = Math.round(Math.random());
      console.info(login);
        this.setState({ logged: login === 1 });
      }, 2000);


    }

    componentDidMount() {
      this.verificarLogin();
    }

    render() {
      return <Componente {...this.props} logged={this.state.logged} />;
    }
  };
};

export default WithLogin;
