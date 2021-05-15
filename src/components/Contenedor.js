import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Barra from "./Barra";
import { useStyles } from "../helpers/useStyles";
import Contact from "../Pages/Users/Contact";
import Home from "../Pages/Home";
import React, { useState } from "react";
import Channels from "../Pages/Channels";
import About from "../Pages/About";
import Error404 from "../Pages/Error404";
import Admin from "../Pages/CourseForm/Admin";
import Login from "../Pages/Users/login";
import Hidden from "@material-ui/core/Hidden";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import Lista from "./Lista";
import Channel from "../templates/Channel";
import Productos from "../Pages/Productos";

const Contenedor = (props) => {
  const { window } = props;
    const [channels, setChannels] = useState(null);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const [isOpen, setIsOpen] = useState(false);

  const handleDrawerToggle = () => {
    //aca al dar click ya no se vera el cajo
    setIsOpen(!isOpen);
  };
  const clases = useStyles();
  return (
    <div>
      <Router>
        <div style={{ display: "flex" }}>
          <CssBaseline />
          <Barra classes={clases} handleDrawerToggle={handleDrawerToggle} />

          <nav className={clases.drawer} aria-label="menu de Navegacion">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
              <Drawer
                container={container}
                variant="temporary"
                anchor="left"
                open={isOpen}
                onClose={handleDrawerToggle}
                classes={{
                  paper: clases.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                <div className={clases.offset}></div>
                <Divider />
                <Lista classes={clases} />
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: clases.drawerPaper,
                }}
                variant="permanent"
                open
              >
                <div className={clases.offset}></div>
                <Divider />
                <Lista classes={clases} />
              </Drawer>
            </Hidden>
          </nav>

          <main className={clases.content}>
            <div className={clases.toolbar} />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/canales/:id" exact children={<Channel data={channels} />} />
              <Route
                path="/canales"
                children={
                  <Channels channels={channels} setChannels={setChannels} />
                }
              />

              <Route path="/login" component={Login} />
              <Route path='/productos' component={Productos}/>
              
              <Route path="/admin" component={Admin} />
              <Route path="/register" component={Contact} />
              <Route path="*" component={Error404} />
            </Switch>
          </main>
        </div>
      </Router>
    </div>
  );
};

export default Contenedor;
