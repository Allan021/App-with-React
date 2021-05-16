import React, { useState, useEffect } from "react";
import { WithFileUploader } from "../HOC/WithFileUploader";
import Controls from "../components/controls/Controls";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
const ImagenCircular = ({ files, agregaArchivo }) => {
  const [file, setFiles] = useState(files);
  useEffect(() => {
    setFiles([...files]);
  }, [files]);

  return (
    <div>
      <Typography variant="h6" color="initial">
        Imagen Circular
      </Typography>
      <Controls.UploadButtons
        name="cuadrado"
        label="Agregar Archivo"
        onChange={agregaArchivo}
      />
      {file.length !== 0 &&
        file.map((item, index) => {
          <Avatar key={index} alt={`item ${index}`} src={item} />;
        })}
      Carga PTM
    </div>
  );
};

export default WithFileUploader(ImagenCircular); //me retorara basicamente el mismo componente wey
