import React from "react";
import { MdClose } from "react-icons/md";

type Props = {
	image: File | string;
	onRemove?: () => void;
};

const PreviewImage: React.FC<Props> = ({ image, onRemove }) => {
	if (onRemove) {
		return (
			<div className="relative w-14 group/overlay mt-3">
				<button
					className="flex justify-center items-center absolute top-0 left-0 w-full h-full z-30 text-red-500 bg-black/50 invisible group-hover/overlay:visible transition-opacity duration-300"
					type="button"
					onClick={onRemove}
				>
					<MdClose fontSize={20} />
				</button>
				<img
					src={
						typeof image === "string"
							? image
							: URL.createObjectURL(image)
					}
					alt="cover"
					className="w-14 h-12 rounded"
				/>
			</div>
		);
	}
	return (
		<img
			src={
				typeof image === "string"
					? image
					: URL.createObjectURL(image)
			}
			alt="cover"
			className="w-12 h-12 object-contain mt-3 rounded"
		/>
	);
};

export default PreviewImage;
