import React from "react";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const Textarea: React.FC<Props> = ({ label, id, ...props }) => {
  return (
    <div className="mb-4">
      <label className="block text-dark text-sm font-medium mb-2" htmlFor={id}>
        {label}
      </label>
      <textarea
        {...props}
        id={id}
        className="appearance-none border  w-full py-2 px-3 text-dark text-sm border-th-gray-e6 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default Textarea;
