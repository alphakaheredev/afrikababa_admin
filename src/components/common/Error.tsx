import { cn } from "@/lib/utils";
import { FieldError } from "react-hook-form";

function getErrorMessage(error?: string | FieldError) {
	if (typeof error === "string") {
		return error;
	} else if (error) {
		return error.message;
	}
	return error;
}

export function Error({
	error,
	className,
}: {
	error?: string | FieldError;
	className?: string;
}) {
	const message = getErrorMessage(error);

	if (!message) return null;

	return (
		<div
			className={cn(
				"text-red-500 text-sm font-normal mt-1",
				className
			)}
			role="alert"
		>
			{message}
		</div>
	);
}
