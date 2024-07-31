// ButtonSubmit.tsx
import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const ButtonSubmit: React.FC<Props> = ({ label, ...props }) => {
  return (
    <button
      {...props}
      className="bg-emeraldGreen text-white font-medium text-base w-full text-left py-3 px-4 focus:outline-none focus:shadow-outline"
    >
      {label}
    </button>
  );
};

export default ButtonSubmit;
