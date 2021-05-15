import React from "react";
import Typography from "@material-ui/core/Typography";

const Error404 = ({ text = "" }) => {
  return (
    <div>
      <Typography variant="h3" color="secondary">
        Pagina no encontrada :(
      </Typography>
      {text && (
        <Typography variant="subtitle1" color="initial">
          {text}
        </Typography>
      )}
    </div>
  );
};

export default Error404;
