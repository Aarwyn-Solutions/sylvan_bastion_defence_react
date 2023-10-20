import React, { useState } from "react";

type MenuProps = {
  name: string;
  description: string;
};

const Menu: React.FC<MenuProps> = ({ name, description }) => {
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

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserInput(e.target.value);
  };

  return (
    <div style={menuContainerStyle}>
      <h2>{name}</h2>
      <p>{description}</p>

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
