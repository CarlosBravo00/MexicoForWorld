import React from "react";
import constructionImage from "../../images/construction.webp";

export default function WorkInProgressPage(params) {
  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <h1>Work in Progress</h1>
      <p style={{ textAlign: "center" }}>
        This page is currently under construction. Please check back later for
        updates.
      </p>
      <img src={constructionImage} alt="UnderConstruction" width={300} />
    </div>
  );
}
