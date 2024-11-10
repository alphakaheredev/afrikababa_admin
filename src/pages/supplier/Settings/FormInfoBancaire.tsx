import ButtonSubmit from "@/components/ui/buttonSubmit";
import { useEditPaymentInfos } from "../shop/useCrudShop";
import Input from "@/components/ui/input";

const FormInfoBancaire = () => {
	const { onSubmit, register, isLoading, errors, handleTypeChange } =
		useEditPaymentInfos();
	return (
		<form className="space-y-4" onSubmit={onSubmit}>
			<Input
				label="Numéro de compte bancaire"
				placeholder="Entrez votre numéro de compte bancaire"
				type="text"
				id="bank_account_number"
				{...register("bank_account_number")}
				error={errors.bank_account_number?.message}
				required
			/>
			<Input
				label="Nom de la banque"
				placeholder="Entrez le nom de la banque"
				type="text"
				id="bank_name"
				{...register("bank_name")}
				error={errors.bank_name?.message}
				required
			/>
			<Input
				label="Code SWIFT"
				placeholder="Entrez le code SWIFT"
				type="text"
				id="swift_code"
				{...register("bank_swift_code")}
				error={errors.bank_swift_code?.message}
				required
			/>
			<Input
				label="Code de la banque(IBAN)"
				placeholder="Entrez le code de la banque"
				type="text"
				id="bank_code"
				{...register("bank_code")}
				error={errors.bank_code?.message}
				required
			/>
			<Input
				label="Adresse du banque"
				placeholder="Entrez l'adresse du banque"
				type="text"
				id="bank_address"
				{...register("bank_address")}
				error={errors.bank_address?.message}
				required
			/>
			<Input
				label="Votre adresse"
				placeholder="Entrez votre adresse"
				type="text"
				id="address"
				{...register("address")}
				error={errors.address?.message}
				required
			/>
			<div className="flex justify-end pt-5">
				<ButtonSubmit
					isLoading={isLoading}
					label="Enregistrer"
					className="w-fit"
					onClick={() => handleTypeChange("bank")}
				/>
			</div>
		</form>
	);
};

export default FormInfoBancaire;
