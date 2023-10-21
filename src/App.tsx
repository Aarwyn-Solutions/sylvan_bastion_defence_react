import React, { useState } from "react";

import Map from "./components/Map";
import Menu from "./components/Menu";
import { DungeonInfo } from "./components/Dungeon";
import { BastionInfo } from "./components/Bastion";

const App: React.FC = () => {
  const mapImageUrl = "./src/assets/game/map.jpg";
  const [selectedBlock, setSelectedBlock] = useState<BastionInfo | DungeonInfo | null>(null);

  const appStyles: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    width: "1900px",
  };

  const handleBlockClick = (info: BastionInfo | DungeonInfo) => {
    setSelectedBlock(info);
  };

  return (
    <>
      <div className="container" style={appStyles}>
        <Map imageUrl={mapImageUrl} onBlockClick={handleBlockClick} />
        <Menu selectedBlock={selectedBlock} />
      </div>
    </>
  );
};

export default App;
