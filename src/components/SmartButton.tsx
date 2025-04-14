import { Link } from "react-router-dom";
import React from "react";

interface SmartButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  link?: boolean;
  disabled?: boolean;
  black?: boolean;
  to?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const SmartButton = ({
  text,
  to,
  onClick,
  link = false,
  disabled = false,
  black = false,
}: SmartButtonProps) => {
  if (link && to) {
    return (
      <Link
        to={to}
        className="px-3 py-3 ring ring-black bg-white w-42 hover:ring-2 transition text-center"
      >
        {text}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-3 py-3 border border-black w-42 hover:bg-gray-400 hover:border-gray-400 disabled:bg-gray-400 disabled:border-gray-400 hover:cursor-not-allowed transition-all
         ${black && "bg-black text-white"}
        `}
    >
      {text}
    </button>
  );
};

export default SmartButton;
