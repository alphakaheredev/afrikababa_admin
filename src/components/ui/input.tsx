import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<Props> = ({ label, id, ...props }) => {
  return (
    <div className="mb-4">
      <label className="block text-dark text-sm font-medium mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        {...props}
        id={id}
        className="border w-full py-3 px-3 text-dark border-th-gray-e6 text-sm leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default Input;
