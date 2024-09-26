import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { IconEdit } from "../common/Icons";
import { Link, LinkProps } from "react-router-dom";
import { BsEye } from "react-icons/bs";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonEditLink: React.FC<LinkProps> = ({ ...props }) => {
	return (
		<Link {...props}>
			<IconEdit />
		</Link>
	);
};

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
			className="bg-dark px-4 py-3 text-white whitespace-nowrap font-normal text-sm leading-5"
		>
			{children}
		</Link>
	);
};

export const ButtonAdd: React.FC<Props> = ({ children, ...rest }) => {
	return (
		<button
			{...rest}
			className="bg-dark px-4 py-3 text-white whitespace-nowrap font-normal text-sm leading-5"
		>
			{children}
		</button>
	);
};

export const ButtonViewLink: React.FC<LinkProps> = ({ ...props }) => {
	return (
		<Link {...props}>
			<BsEye fontSize={20} className="text-teal-700" />
		</Link>
	);
};