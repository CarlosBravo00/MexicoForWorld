import React from "react";
import notFoundImage from "../../images/confusedCat.jpeg"

const NotFoundPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>404 Not Found</h1>
      <p>Oops! The page you're looking for does not exist.</p>
      <img src={notFoundImage} alt="its a confused cat" />
    </div>
  );
};

export default NotFoundPage;
