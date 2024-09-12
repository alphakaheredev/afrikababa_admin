export interface QueryError {
	status: number;
	data: {
		error: string;
	};
}

export interface ModalProps<T> {
	item?: T;
	isOpen: boolean;
	close: () => void;
}
