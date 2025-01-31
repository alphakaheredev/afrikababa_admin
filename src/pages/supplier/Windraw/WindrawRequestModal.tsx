import ButtonSubmit from "@/components/ui/buttonSubmit";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import Input from "@/components/ui/input";
import { useCrudWindraw } from "./useCrudWindraw";
import Select from "@/components/ui/Select";

const WindrawRequestModal: React.FC<{ isOpen: boolean; close: () => void }> = (
	props
) => {
	const { isOpen, close } = props;
	const { register, onSubmit, errors, isLoading } = useCrudWindraw(close);
	return (
		<Dialog open={isOpen} onOpenChange={close}>
			<DialogContent className="max-w-3xl">
				<DialogHeader className="mb-5">
					<DialogTitle>Request a withdrawal</DialogTitle>
				</DialogHeader>
				<form onSubmit={onSubmit} className="space-y-5">
					<Input
						label="Amount"
						type="number"
						id="amount"
						placeholder="Amount"
						required
						{...register("amount")}
						error={errors?.amount}
					/>
					<Select
						label="Payment method"
						id="paiememt"
						placeholder="Payment method"
						required
						{...register("payment_methode")}
						error={errors?.payment_methode}
						options={[
							{ label: "Paypal", value: "paypal" },
							{
								label: "Bank transfer",
								value: "virement_bancaire",
							},
							{
								label: "Western union",
								value: "western union",
							},
						]}
					/>

					<DialogFooter className="pt-5">
						<ButtonSubmit
							label={"Soumettre"}
							type="submit"
							isLoading={isLoading}
						/>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default WindrawRequestModal;
