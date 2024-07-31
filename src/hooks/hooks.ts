import { useState } from "react";

export function useToggle() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen((isOpen) => !isOpen);

  return {
    isOpen,
    close: toggle,
    open: toggle,
    toggle,
  };
}
