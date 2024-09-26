import ButtonSubmit from "@/components/ui/buttonSubmit";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import Input from "@/components/ui/input";
import { ModalProps } from "@/lib/type";
import { PaymentMethod } from "@/redux/api/payment/payment.type";
import { useCrudPaymentMethod } from "./useCrudPaymentMethod";

const PaymentMethodModal: React.FC<ModalProps<PaymentMethod>> = (props) => {
	const { isOpen, close, item } = props;
	const { register, onSubmit, errors, isLoading, handleChangeLogo } =
		useCrudPaymentMethod(close, item);

	return (
		<Dialog open={isOpen} onOpenChange={close}>
			<DialogContent className="max-w-3xl">
				<DialogHeader className="mb-5">
					<DialogTitle>
						{!item ? "Ajouter un " : "Modifier le"}
						moyen de paiement
					</DialogTitle>
				</DialogHeader>
				<form onSubmit={onSubmit} className="space-y-5">
					<Input
						label="Nom"
						type="text"
						id="method_name"
						placeholder="Nom"
						required
						{...register("method_name")}
						error={errors?.method_name}
						defaultValue={item?.method_name}
					/>
					<Input
						type="file"
						label="Logo"
						id="logo"
						placeholder="Logo"
						required
						defaultValue={item?.logo}
						className="border border-th-gray-e6 p-1"
						onChange={handleChangeLogo}
					/>
					{errors?.logo && (
						<span className="text-red-500 text-sm">
							{errors?.logo?.message}
						</span>
					)}
					<DialogFooter className="pt-5">
						<ButtonSubmit
							label={item ? "Modifier" : "Ajouter"}
							type="submit"
							isLoading={isLoading}
						/>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default PaymentMethodModal;
