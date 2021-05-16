
import {Redirect } from "react-router-dom";
import React, { useState, useEffect } from 'react';


const PrivatePage = (props) => {
const { data } = props;

const [datos, setDatos] = useState(data);


useEffect(() => {
setDatos(data)

console.info(props);
}, [data]);

  return (
    <div>
Hola
     {/* {!data &&<Redirect to="/" /> } */}
    </div>
  );
}

export default PrivatePage;
