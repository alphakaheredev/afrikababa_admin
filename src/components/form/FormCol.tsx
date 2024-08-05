import React from "react";

interface FormColProps {
  children: React.ReactNode;
}

export const FormLeftCol: React.FC<FormColProps> = ({ children }) => {
  return <div className={`col-span-3`}>{children}</div>;
};

export const FormRightCol: React.FC<FormColProps> = ({ children }) => {
  return <div className="card-shadow bg-white col-span-9 p-3">{children}</div>;
};
