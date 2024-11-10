import ButtonSubmit from "@/components/ui/buttonSubmit";
import { useEditPaymentInfos } from "../shop/useCrudShop";
import Input from "@/components/ui/input";

const FormWesternUnion = () => {
	const { onSubmit, register, isLoading, errors, handleTypeChange } =
		useEditPaymentInfos();
	return (
		<form className="space-y-4" onSubmit={onSubmit}>
			<Input
				label="Prénom"
				placeholder="Entrez votre prénom"
				type="text"
				id="western_union_firstname"
				{...register("western_union_firstname")}
				error={errors.western_union_firstname?.message}
				required
			/>
			<Input
				label="Nom"
				placeholder="Entrez votre nom"
				type="text"
				id="western_union_lastname"
				{...register("western_union_lastname")}
				error={errors.western_union_lastname?.message}
				required
			/>
			<Input
				label="Ville"
				placeholder="Entrez la ville"
				type="text"
				id="western_union_city"
				{...register("western_union_city")}
				error={errors.western_union_city?.message}
				required
			/>
			<Input
				label="Numéro de téléphone"
				placeholder="Entrez le numéro de téléphone"
				type="text"
				id="western_union_phone_number"
				{...register("western_union_phone_number")}
				error={errors.western_union_phone_number?.message}
				required
			/>
			<div className="flex justify-end pt-5">
				<ButtonSubmit
					isLoading={isLoading}
					label="Enregistrer"
					className="w-fit"
					onClick={() => handleTypeChange("western_union")}
				/>
			</div>
		</form>
	);
};

export default FormWesternUnion;