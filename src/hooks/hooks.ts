import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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

export function useLocationState<T>(
	defaultValue: T | any,
	redirectToWhenNull: string | null = null
): T {
	const state = useLocation().state as T;
	const navigate = useNavigate();
	useEffect(() => {
		if (!state && redirectToWhenNull) {
			navigate(redirectToWhenNull);
		}
	}, [navigate, redirectToWhenNull, state]);
	return state || defaultValue;
}

export function usePagination(initialPerPageValue: number) {
	const [page, setPage] = useState<number>(1);
	const [perPage, setPerPage] = useState<number>(initialPerPageValue);

	const onChange = (perPage: number, page?: number) => {
		setPerPage(perPage);
		page && setPage(page);
	};

	return {
		page,
		setPage,
		limit: perPage,
		setPerPage,
		perPage,
		onChange,
	};
}

export function useItem<T>() {
	const [item, setItem] = useState<T>();
	const getItem = (item: T) => {
		setItem(item);
	};
	const resetItem = () => {
		setItem(undefined);
	};
	return {
		item,
		getItem,
		resetItem,
	};
}

export function useSearch(defaultValue?: string) {
	const [search, setSearch] = useState<string | undefined>(defaultValue);

	const handleSearch = useCallback(
		(e: React.FormEvent<HTMLInputElement>) => {
			if (
				e.currentTarget.value &&
				e.currentTarget.value.length > 2
			) {
				setSearch(e.currentTarget.value);
			} else {
				setSearch("");
			}
		},
		[]
	);

	return {
		search,
		handleSearch,
	};
}

export function useSelectSearch() {
	const [search, setSearch] = useState<string>();
	const handlefilter = (e: React.FormEvent<HTMLSelectElement>) => {
		setSearch(e.currentTarget.value);
	};
	return {
		search,
		handlefilter,
	};
}

export function useToggleModal() {
	const [isShowModal, setIsShowModal] = useState(false);
	const toggle = () => setIsShowModal((isShowModal) => !isShowModal);

	return {
		isShowModal,
		toggle,
		isOpen: isShowModal,
		openModal: toggle,
		closeModal: toggle,
	};
}
