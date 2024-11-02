import { ROLE } from "@/redux/api/user/user.type";

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

export type PaginationResults<T> = {
	meta: {
		total: number;
	};
	data: T[];
};

export type TypeQuery = Partial<{
	page?: number;
	limit?: number;
	q?: string;
	id?: number;
	role?: ROLE;
}>;
