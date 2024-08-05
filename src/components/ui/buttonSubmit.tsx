// ButtonSubmit.tsx
import { cn } from "@/lib/utils";
import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  className?: string;
}

const ButtonSubmit: React.FC<Props> = ({ label, className, ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        "bg-emeraldGreen text-white font-medium text-base w-full text-left py-3 px-4 focus:outline-none focus:shadow-outline min-w-80",
        className
      )}
    >
      {label}
    </button>
  );
};

export default ButtonSubmit;
