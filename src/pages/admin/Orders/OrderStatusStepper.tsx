import { cn } from "@/lib/utils";
import React from "react";
import { FaCheck } from "react-icons/fa6";

const steps = [
  "commande en attente",
  "commande en cours",
  "commandez pour livrer",
  "Commande terminée",
];

const OrderStatusStepper = () => {
  const [activeIndex] = React.useState(2);

  return (
    <ul className="flex justify-between items-center stepper">
      {steps.map((step, i) => (
        <li
          key={i}
          className={cn(
            "w-full flex flex-col items-center space-y-2 relative",
            {
              active: activeIndex > i,
            }
          )}
        >
          <div
            className={cn(
              "w-7 h-7 rounded-full text-white flex justify-center items-center",
              {
                "bg-th-primary": activeIndex > i,
                "border border-dashed border-th-primary": activeIndex <= i,
              }
            )}
          >
            {activeIndex > i && <FaCheck />}
          </div>
          <h5 className="font-medium text-dark text-sm whitespace-nowrap">
            {step}
          </h5>
        </li>
      ))}
    </ul>
  );
};

export default OrderStatusStepper;
