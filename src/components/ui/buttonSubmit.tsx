// ButtonSubmit.tsx
import { cn } from "@/lib/utils";
import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
	className?: string;
	isLoading?: boolean;
}

const ButtonSubmit: React.FC<Props> = ({
	label,
	className,
	isLoading,
	...props
}) => {
	return (
		<button
			{...props}
			className={cn(
				"bg-emeraldGreen text-white font-medium text-base w-full text-left py-3 px-4 focus:outline-none focus:shadow-outline min-w-80",
				className
			)}
			type="submit"
		>
			{isLoading ? (
				<>
					<div
						className="inline-block mr-1 h-5 w-5 animate-spin rounded-full border-4 border-solid border-white border-e-transparent align-[-0.325em] text-surface "
						role="status"
					>
						<span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
							Loading...
						</span>
					</div>
					<span>En cours...</span>
				</>
			) : (
				label
			)}
		</button>
	);
};

export default ButtonSubmit;
