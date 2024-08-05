import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Label from "./label";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  variant?: "primary" | "secondary" | "auth";
}

export const inputVariants = {
  primary:
    "border border-th-gray-e6 bg-white text-dark text-sm leading-tight focus:outline-none focus:shadow-outline px-3 py-3",
  secondary:
    "bg-th-gray-e6 text-white text-sm leading-tight focus:outline-none focus:shadow-outline px-3 py-3",
  auth: "border-b border-black bg-white text-dark text-sm leading-tight focus:outline-none focus:shadow-outline py-2",
};

const Input: React.FC<Props> = (props) => {
  const { label, variant = "primary", type, id, required, ...rest } = props;
  if (type === "password") {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
      <div className="relative">
        <Label htmlFor={id} required={required}>
          {label}
        </Label>
        <input
          id={id}
          className={`${inputVariants[variant]} w-full`}
          type={showPassword ? "text" : type}
          {...rest}
        />
        <span
          className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
          onClick={() => setShowPassword((showPassword) => !showPassword)}
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </span>
      </div>
    );
  }
  return (
    <div>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <input
        id={id}
        className={`${inputVariants[variant]} w-full`}
        type={type}
        {...rest}
      />
    </div>
  );
};

export const InputSearch: React.FC<
  React.InputHTMLAttributes<HTMLInputElement>
> = (props) => {
  return (
    <div className="relative text-dark w-full  max-w-lg">
      <CiSearch
        className="font-bold absolute top-[10px] left-1"
        fontSize={18}
      />
      <input
        className="w-full border-[#E4E4E4] bg-[#E4E4E4] border py-2 px-3 pl-6 text-dark text-sm outline-none placeholder:text-dark"
        type="search"
        {...props}
      />
    </div>
  );
};

export default Input;
