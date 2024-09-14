import React, { useState, forwardRef } from "react";
import { CiSearch } from "react-icons/ci";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Label from "./label";
import { Error } from "../common/Error";
import { FieldError } from "react-hook-form";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	variant?: "primary" | "secondary" | "auth";
	error?: string | FieldError;
}

export const inputVariants = {
	primary: "border border-th-gray-e6 bg-white text-dark text-sm leading-tight focus:outline-none focus:shadow-outline px-3 py-3",
	secondary:
		"bg-th-gray-e6 text-white text-sm leading-tight focus:outline-none focus:shadow-outline px-3 py-3",
	auth: "border-b border-black bg-white text-dark text-sm leading-tight focus:outline-none focus:shadow-outline py-2",
};

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
	const {
		label,
		variant = "primary",
		type,
		id,
		required,
		error,
		...rest
	} = props;

	const [showPassword, setShowPassword] = useState<boolean>(false);

	if (type === "password") {
		return (
			<>
				<div className="relative">
					<Label htmlFor={id} required={required}>
						{label}
					</Label>
					<input
						ref={ref}
						id={id}
						className={`${inputVariants[variant]} w-full`}
						type={showPassword ? "text" : type}
						{...rest}
					/>
					<span
						className="absolute right-0 pr-3 cursor-pointer"
						onClick={() =>
							setShowPassword((prev) => !prev)
						}
					>
						{showPassword ? <FiEyeOff /> : <FiEye />}
					</span>
					<Error
						error={error}
						className="absolute left-0 pr-3 cursor-pointer"
					/>
				</div>
			</>
		);
	}

	return (
		<div>
			<Label htmlFor={id} required={required}>
				{label}
			</Label>
			<input
				ref={ref}
				id={id}
				className={`${inputVariants[variant]} w-full`}
				type={type}
				{...rest}
			/>
			<Error error={error} />
		</div>
	);
});

Input.displayName = "Input";

export const InputSearch = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
	return (
		<div className="relative text-dark w-full max-w-lg">
			<CiSearch
				className="font-bold absolute top-[14px] left-1"
				fontSize={18}
			/>
			<input
				ref={ref}
				className="w-full border-[#E4E4E4] bg-[#E4E4E4] border py-3 px-4 pl-7 text-dark text-sm outline-none placeholder:text-dark"
				type="search"
				{...props}
			/>
		</div>
	);
});

InputSearch.displayName = "InputSearch";

export default Input;
