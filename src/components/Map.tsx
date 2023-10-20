import React from "react";
import "../index.css";

import Dungeon, { DungeonInfo } from "./Dungeon";
import Bastion, { BastionInfo } from "./Bastion";

type MapProps = {
  imageUrl: string;
  onBlockClick: (info: DungeonInfo | BastionInfo) => void;
};

const Map: React.FC<MapProps> = ({ imageUrl, onBlockClick }) => {
  const dungeonImageUrl = "./src/assets/game/image 13.png";
  const bastionImageUrl = "./src/assets/game/image 2.png";

  const items = Array.from({ length: 5 }, (_, index) => index + 1);

  const mapStyles: React.CSSProperties = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
    position: "relative",
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridGap: "10px",
    flex: "0 0 70%",
  };

  return (
    <div style={mapStyles}>
      {items.map(index => (
        <Dungeon key={index} imageUrl={dungeonImageUrl} index={index} onClick={onBlockClick} />
      ))}
      {items.map(index => (
        <Bastion key={index} imageUrl={bastionImageUrl} index={index} onClick={onBlockClick} />
      ))}
    </div>
  );
};

export default Map;
