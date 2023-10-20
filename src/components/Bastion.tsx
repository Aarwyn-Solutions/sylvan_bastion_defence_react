import React from "react";

type BastionProps = {
  imageUrl: string;
};

const Bastion: React.FC<BastionProps> = ({ imageUrl }) => {
  const bastionStyles: React.CSSProperties = {
    width: "148px",
    height: "142px",
    borderRadius: "50%",
    border: "4px solid white",
    overflow: "hidden",
  };

  const bastionImageStyles: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <div className="bastion-block" style={bastionStyles}>
      <img
        className="bastion-image-block"
        style={bastionImageStyles}
        src={imageUrl}
        alt="Bastion image"
      />
    </div>
  );
};

export default Bastion;
