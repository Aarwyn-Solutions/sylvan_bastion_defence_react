import React from "react";

type BastionProps = {
  imageUrl: string;
};

const Bastion: React.FC<BastionProps> = ({ imageUrl }) => {
  const dungeonStyles: React.CSSProperties = {
    width: "148px",
    height: "142px",
    borderRadius: "50%",
    border: "4px solid white",
    overflow: "hidden",
  };

  const dungeonImageStyles: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <div className="bastion-block" style={dungeonStyles}>
      <img
        className="bastion-image-block"
        style={dungeonImageStyles}
        src={imageUrl}
        alt="Bastion image"
      />
    </div>
  );
};

export default Bastion;
