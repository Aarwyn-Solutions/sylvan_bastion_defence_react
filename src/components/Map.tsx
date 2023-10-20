import React from "react";
import "../index.css";

type MapProps = {
  imageUrl: string;
};

const Map: React.FC<MapProps> = ({ imageUrl }) => {
  const mapStyles: React.CSSProperties = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
    position: "relative",
  };

  return <div style={mapStyles}></div>;
};

export default Map;
