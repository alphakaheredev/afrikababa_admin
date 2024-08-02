import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonDelete: React.FC<Props> = ({ ...props }) => {
  return (
    <button {...props}>
      <RiDeleteBinLine className="text-red-500" fontSize={20} />
    </button>
  );
};

export default ButtonDelete;
