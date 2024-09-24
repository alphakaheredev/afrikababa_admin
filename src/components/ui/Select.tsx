import React from "react";
import { Error } from "../common/Error";
import { FieldError } from "react-hook-form";

interface Option {
	label: string;
	value?: string | number;
}

interface Props extends React.InputHTMLAttributes<HTMLSelectElement> {
	label?: string;
	variant?: "primary" | "secondary" | "auth";
	options: Option[];
	error?: string | FieldError;
}

const Select = React.forwardRef<HTMLSelectElement, Props>(
	({ id, label, placeholder, options, error, ...rest }, ref) => {
		return (
			<div className="flex-1">
				{label && (
					<label
						htmlFor={id}
						className="block text-sm font-medium text-dark"
					>
						{label}
					</label>
				)}
				<select
					id={id}
					ref={ref}
					className="mt-1 block w-full py-3 px-2 border border-th-gray-c9 placeholder:text-th-gray-c9 text-gray-800 text-sm outline-none bg-white"
					{...rest}
				>
					{placeholder && (
						<option value="">{placeholder}</option>
					)}
					{options.map((option) => (
						<option
							key={option.value}
							value={option.value}
						>
							{option.label}
						</option>
					))}
				</select>
				<Error error={error} />
			</div>
		);
	}
);

Select.displayName = "Select";

export const FilterSelect: React.FC<Props> = ({
	id,
	label,
	options,
	onChange,
}) => {
	return (
		<div className="flex-1">
			<label
				htmlFor={id}
				className="block text-sm font-medium text-dark"
			>
				{label}
			</label>
			<select
				id={id}
				className="mt-1 block w-full py-3 px-2 border border-th-gray-c9 placeholder:text-th-gray-c9 text-gray-600 text-sm outline-none"
				onChange={onChange}
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

export default Select;
