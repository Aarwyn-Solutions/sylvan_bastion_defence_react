import React from "react";

export type DungeonInfo = {
  name: string;
  description: string;
};

type DungeonProps = {
  imageUrl: string;
  index: number;
  onClick: (info: DungeonInfo) => void;
};

const Dungeon: React.FC<DungeonProps> = ({ imageUrl, index, onClick }) => {
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

  const handleClick = () => {
    const dungeonInfo: DungeonInfo = {
      name: `Dungeon ${index}`,
      description: `Description block for ${index}`,
    };

    onClick(dungeonInfo);
  };

  const dungeonBlockId = `dungeon-block-${index}`;
  return (
    <div className="dungeon-block" id={dungeonBlockId} style={dungeonStyles} onClick={handleClick}>
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
