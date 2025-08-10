import type React from "react";

interface MyButtonProps {
    text: string;
    onClick?: () => void;
}

const MyButton: React.FC<MyButtonProps> = ({ text, onClick }) => {
  return (
    <button
        onClick={onClick}
        className="button font-bold text-2xl bg-violet-700 p-2 rounded-md hover:bg-violet-500"
    >{text}</button>
  )
}

export default MyButton;