import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { IconEdit } from "../common/Icons";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonEdit: React.FC<Props> = ({ ...props }) => {
  return (
    <button {...props}>
      <IconEdit />
    </button>
  );
};

export const ButtonDelete: React.FC<Props> = ({ ...props }) => {
  return (
    <button {...props}>
      <RiDeleteBinLine className="text-red-500" fontSize={20} />
    </button>
  );
};
