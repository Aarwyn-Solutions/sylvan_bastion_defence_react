import React from "react";
import "../index.css";

import Dungeon, { DungeonInfo } from "./Dungeon";
import Bastion, { BastionInfo } from "./Bastion";

type MapProps = {
  imageUrl: string;
  onBlockClick: (info: DungeonInfo | BastionInfo) => void;
};

const Map: React.FC<MapProps> = ({ imageUrl, onBlockClick }) => {
  const dungeons = Array.from({ length: 13 }, (_, index) => index + 1);
  const bastions = Array.from({ length: 3 }, (_, index) => index + 1);

  const mapStyles: React.CSSProperties = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    width: "100%",
    height: "200vh",
    position: "relative",
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridGap: "10px",
    flex: "0 0 70%",
  };

  /*{" "}
      {dungeons.map(index => (
        <Dungeon
          key={index}
          imageUrl={`./src/assets/game/structures/dungeon_${index}.png`}
          index={index}
          onClick={onBlockClick}
        />
      ))}
      {bastions.map(index => (
        <Bastion
          key={index}
          imageUrl={`./src/assets/game/structures/bastion_${index}.png`}
          index={index}
          onClick={onBlockClick}
        />
      ))}{" "}
      */
  /*
  <Bastion
    key={3}
    imageUrl={`./src/assets/game/structures/bastion_3.png`}
    index={3}
    onClick={onBlockClick}
  />;
*/
  return (
    <div style={mapStyles}>
      {dungeons.map(index => (
        <Dungeon
          key={index}
          imageUrl={`./src/assets/game/structures/dungeon_${index}.png`}
          index={index}
          onClick={onBlockClick}
        />
      ))}
      {bastions.map(index => (
        <Bastion
          key={index}
          imageUrl={`./src/assets/game/structures/bastion_${index}.png`}
          index={index}
          onClick={onBlockClick}
        />
      ))}
    </div>
  );
};

export default Map;
