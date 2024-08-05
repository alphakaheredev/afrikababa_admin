import React from "react";

interface FormRowProps {
  children: React.ReactNode;
}

const FormRow: React.FC<FormRowProps> = ({ children }) => {
  return (
    <section className="grid grid-cols-12 gap-3 pb-4 pr-1">{children}</section>
  );
};

export default FormRow;
