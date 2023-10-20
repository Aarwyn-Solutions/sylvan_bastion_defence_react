import React from "react";
import { useEffect } from "react";

import Map from "./components/Map";

const App: React.FC = () => {
  const mapImageUrl = "./src/assets/game/map.jpg";
  return (
    <>
      <h1>Hello Map</h1>
      <Map imageUrl={mapImageUrl} />
    </>
  );
};

export default App;
