import { cn } from "@/lib/utils";
import React from "react";

interface FormColProps {
	children: React.ReactNode;
	className?: string;
}

export const FormLeftCol: React.FC<FormColProps> = ({
	children,
	className,
}) => {
	return <div className={cn("col-span-3", className)}>{children}</div>;
};

export const FormRightCol: React.FC<FormColProps> = ({
	children,
	className,
}) => {
	return (
		<div
			className={cn(
				"card-shadow bg-white col-span-9 p-3",
				className
			)}
		>
			{children}
		</div>
	);
};
