import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { IconEdit } from "../common/Icons";
import { Link, LinkProps } from "react-router-dom";

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

export const ButtonAddLink: React.FC<LinkProps> = ({ children, ...rest }) => {
  return (
    <Link
      {...rest}
      className="bg-dark p-2 text-white whitespace-nowrap font-normal text-sm leading-5"
    >
      {children}
    </Link>
  );
};
