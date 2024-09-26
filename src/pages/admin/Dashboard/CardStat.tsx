import { cn } from "@/lib/utils";
import React from "react";

interface Props {
	borderColor: string;
	title: string;
	value: number | string;
}

const CardStat: React.FC<Props> = ({ borderColor, title, value }) => {
  return (
    <div
      className={cn(
        "border border-th-gray-c9 border-b-8 p-3 text-right",
        borderColor
      )}
    >
      <h5 className="text-[#909090] text-xs font-normal">{title}</h5>
      <p className="text-dark font-bold text-base">{value}</p>
    </div>
  );
};

export default CardStat;
