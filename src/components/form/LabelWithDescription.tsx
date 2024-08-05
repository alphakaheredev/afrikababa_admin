import React from "react";

interface LabelWithDescriptionProps {
  label: string;
  description: string;
}

const LabelWithDescription: React.FC<LabelWithDescriptionProps> = ({
  label,
  description,
}) => {
  return (
    <>
      <label htmlFor="file-upload" className="block font-semibold text-base">
        {label}
      </label>
      <small className="text-xs text-[#8E8E8D]">{description}</small>
    </>
  );
};

export default LabelWithDescription;
