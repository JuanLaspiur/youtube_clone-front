import React from "react";
import './Button.css'

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className="button_text" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
