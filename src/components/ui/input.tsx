import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

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
  const { label, variant = "primary", type, id, ...rest } = props;
  if (type === "password") {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
      <div className="relative">
        <label
          className="block text-dark text-sm font-medium mb-2"
          htmlFor={id}
        >
          {label}
        </label>
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
      <label className="block text-dark text-sm font-medium mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className={`${inputVariants[variant]} w-full`}
        type={type}
        {...rest}
      />
    </div>
  );
};

export default Input;
