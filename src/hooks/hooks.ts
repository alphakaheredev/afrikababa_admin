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

export function useModal<T>() {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [item, setItem] = useState<T>();

	const openModal = () => setIsOpen(true);

	const closeModal = () => {
		setItem(undefined);
		setIsOpen(false);
	};

	const resetModalItem = () => setItem(undefined);

	const openEditModal = (item: T) => {
		setItem(item);
		setIsOpen(true);
	};

	return {
		isOpen,
		item,
		closeModal,
		openModal,
		openEditModal,
		resetModalItem,
	};
}
