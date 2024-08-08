import React from "react";
import Label from "./label";
import { cn } from "@/lib/utils";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const Textarea: React.FC<Props> = ({
  label,
  id,
  required,
  className,
  ...props
}) => {
  return (
    <div>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <textarea
        {...props}
        id={id}
        className={cn(
          "appearance-none border  w-full py-2 px-3 text-dark text-sm border-th-gray-e6 leading-tight focus:outline-none focus:shadow-outline",
          className
        )}
      />
    </div>
  );
};

export default Textarea;
