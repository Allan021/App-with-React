import React from "react";

const Message = ({ msj, bgcolor }) => {
  const styles = {
    color: "#eee",
    backgroundColor:  bgcolor ,
    fontWeigth: "bold",
    textAlign: "center",
    fontSize: "1.2rem",
    padding: "1rem 2rem",
    marginTop: "2rem",
  };

  return (
    <div>
      <p style={styles} dangerouslySetInnerHTML={{ __html: msj }} />
    </div>
  );
};

Message.defaultProps = {
  msj: "Pasame el mensaje de error wey",
};

export default Message;
