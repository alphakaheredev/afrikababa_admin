import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
const InputFile: React.FC<Props> = ({ label, id, ...rest }) => {
  return (
    <label
      htmlFor={id}
      className="flex items-center justify-center cursor-pointer space-x-1 h-full border border-dashed border-th-gray-e6 p-3"
    >
      <MdOutlineFileDownload className="text-th-gray-c9" fontSize={20} />
      <span className="text-th-primary font-medium text-sm">{label}</span>
      <input type="file" id={id} className="w-0 h-0" {...rest} />
    </label>
  );
};

export default InputFile;
