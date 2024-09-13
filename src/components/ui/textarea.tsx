import React, { forwardRef } from "react";
import Label from "./label";
import { cn } from "@/lib/utils";
import { FieldError } from "react-hook-form";
import { Error } from "../common/Error";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label: string;
	error?: string | FieldError;
}

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
	({ label, id, required, className, error, ...props }, ref) => {
		return (
			<div>
				<Label htmlFor={id} required={required}>
					{label}
				</Label>
				<textarea
					{...props}
					id={id}
					ref={ref}
					className={cn(
						"appearance-none border  w-full py-2 px-3 text-dark text-sm border-th-gray-e6 leading-tight focus:outline-none focus:shadow-outline",
						className
					)}
				/>
				<Error error={error} />
			</div>
		);
	}
);

Textarea.displayName = "Textarea";

export default Textarea;
