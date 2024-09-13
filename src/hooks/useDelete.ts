import { colors } from "@/constants/Colors";
import { QueryError } from "@/lib/type";
import { useCallback, useEffect } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export function useDelete<T>({
	item,
	deleteItem,
	isSuccess,
	isError,
	error,
	successMessage,
}: {
	item: T | any;
	deleteItem: (id: number) => void;
	isSuccess: boolean;
	isError: boolean;
	error: any;
	successMessage: string;
}) {
	const onDelete = useCallback(() => {
		Swal.fire({
			title: `Êtes-vous sûr de vouloir effectuer cette action ?`,
			icon: "question",
			showCancelButton: true,
			confirmButtonText: "OUI",
			cancelButtonText: "NON",
			showLoaderOnConfirm: true,
			iconColor: colors.info,
			confirmButtonColor: colors.danger,
			preConfirm: () => {
				return deleteItem(item?.id);
			},
		});
	}, []);
	useEffect(() => {
		if (isSuccess) {
			toast.success(`${successMessage} avec succès`);
		}
	}, [isSuccess]);

	useEffect(() => {
		if (isError) {
			const err = error as QueryError;
			toast.error(
				`Une erreur de status ${err?.status} est survenue!`
			);
		}
	}, [isError]);

	return onDelete;
}
