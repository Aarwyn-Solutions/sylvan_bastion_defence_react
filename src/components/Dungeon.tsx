import React from "react";

type DungeonProps = {
  imageUrl: string;
};

const Dungeon: React.FC<DungeonProps> = ({ imageUrl }) => {
  const dungeonStyles: React.CSSProperties = {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    border: "2px solid red",
    overflow: "hidden",
  };

  const dungeonImageStyles: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <div className="dungeon-block" style={dungeonStyles}>
      <img
        className="dungeon-image-block"
        style={dungeonImageStyles}
        src={imageUrl}
        alt="Dungeon image"
      />
    </div>
  );
};

export default Dungeon;
