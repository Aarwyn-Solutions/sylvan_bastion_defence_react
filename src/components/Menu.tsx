import React, { useState } from "react";
import { DungeonInfo } from "./Dungeon";
import { BastionInfo } from "./Bastion";

type MenuProps = {
  selectedBlock: BastionInfo | DungeonInfo | null;
};

const Menu: React.FC<MenuProps> = ({ selectedBlock }) => {
  const [userInput, setUserInput] = useState("");

  const menuContainerStyle: React.CSSProperties = {
    backgroundColor: "#1d0802",
    padding: "20px",
    borderRadius: "0 10px 10px 0",
    width: "27%",
  };

  const sideMenuStyle: React.CSSProperties = {
    color: "#fff",
  };

  const textareaStyle: React.CSSProperties = {
    marginTop: "10px",
    width: "100%",
    padding: "10px",
    boxSizing: "border-box",
    flex: "0 0 30%",
  };

  const menuImageStyles: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserInput(e.target.value);
  };

  return (
    <div style={menuContainerStyle}>
      {selectedBlock ? (
        <div>
          <p>Name: {selectedBlock.name}</p>
          {selectedBlock.image ? <img src={selectedBlock.image} style={menuImageStyles} /> : <></>}
          <p>Description: {selectedBlock.description}</p>
        </div>
      ) : (
        <p>Select a block to see details</p>
      )}

      <div style={sideMenuStyle}>
        <h3>Additional Information</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>
      </div>

      <textarea
        placeholder="Enter your notes here..."
        value={userInput}
        onChange={handleInputChange}
        style={textareaStyle}
      />
    </div>
  );
};

export default Menu;
