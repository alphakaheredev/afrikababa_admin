import ButtonSubmit from "@/components/ui/buttonSubmit";
import { useEditPaymentInfos } from "../shop/useCrudShop";
import Input from "@/components/ui/input";

const FormInfoBancaire = () => {
	const { onSubmit, register, isLoading, errors, handleTypeChange } =
		useEditPaymentInfos();
	return (
		<form className="space-y-4" onSubmit={onSubmit}>
			<Input
				label="Bank account number"
				placeholder="Enter your bank account number"
				type="text"
				id="bank_account_number"
				{...register("bank_account_number")}
				error={errors.bank_account_number?.message}
				required
			/>
			<Input
				label="Bank name"
				placeholder="Enter the bank name"
				type="text"
				id="bank_name"
				{...register("bank_name")}
				error={errors.bank_name?.message}
				required
			/>
			<Input
				label="Swift code"
				placeholder="Enter the swift code"
				type="text"
				id="swift_code"
				{...register("bank_swift_code")}
				error={errors.bank_swift_code?.message}
				required
			/>
			<Input
				label="Bank code (IBAN)"
				placeholder="Enter the bank code"
				type="text"
				id="bank_code"
				{...register("bank_code")}
				error={errors.bank_code?.message}
				required
			/>
			<Input
				label="Bank address"
				placeholder="Enter the bank address"
				type="text"
				id="bank_address"
				{...register("bank_address")}
				error={errors.bank_address?.message}
				required
			/>
			<Input
				label="Your address"
				placeholder="Enter your address"
				type="text"
				id="address"
				{...register("address")}
				error={errors.address?.message}
				required
			/>
			<div className="flex justify-end pt-5">
				<ButtonSubmit
					isLoading={isLoading}
					label="Save"
					className="w-fit"
					onClick={() => handleTypeChange("bank")}
				/>
			</div>
		</form>
	);
};

export default FormInfoBancaire;
