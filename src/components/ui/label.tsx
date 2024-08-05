import React from "react";

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

const Label: React.FC<Props> = ({ children, required, htmlFor }) => {
  return (
    <label
      className="block text-dark text-sm font-medium mb-2"
      htmlFor={htmlFor}
    >
      {children}
      {required && <span className="text-red-500 ms-1">*</span>}
    </label>
  );
};

export default Label;
