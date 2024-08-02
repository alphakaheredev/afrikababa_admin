import React from "react";

interface Option {
  label: string;
  value: string | number;
}

interface Props extends React.InputHTMLAttributes<HTMLSelectElement> {
  label: string;
  variant?: "primary" | "secondary" | "auth";
  options: Option[];
}

const FilterSelect: React.FC<Props> = ({ id, label, options }) => {
  return (
    <div className="flex-1">
      <label htmlFor={id} className="block text-sm font-medium text-dark">
        {label}
      </label>
      <select
        id={id}
        className="mt-1 block w-full py-3 px-2 border border-th-gray-c9 text-th-gray-c9 text-sm outline-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterSelect;
