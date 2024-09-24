import React from "react";
import {
  FormLeftCol,
  FormRightCol,
  FormRow,
  LabelWithDescription,
} from "@/components/form";
import Divider from "@/components/common/Divider";
import Input from "@/components/ui/input";
import ButtonSubmit from "@/components/ui/buttonSubmit";
import { useCrudShippingCost } from "./useCrudShippingCost";

const AddShippingPrice = () => {
	const { onSubmit, register, errors, isLoading, item } =
		useCrudShippingCost();

	return (
		<React.Fragment>
			<h1 className="text-dark font-semibold text-xl">
				{item ? "Modifier" : "Ajouter"} un nouveau tarif
				d’expédition
			</h1>
			<Divider margin="my-5" />
			<form onSubmit={onSubmit}>
				<FormRow>
					<FormLeftCol>
						<LabelWithDescription
							label="Description"
							description={
								item
									? "Modifier le tarif d’expédition de votre choix et les informations nécessaires à partir d'ici"
									: "Ajoutez le tarif d’expédition de votre choix et les informations nécessaires à partir d'ici"
							}
						/>
					</FormLeftCol>
					<FormRightCol>
						<div className="space-y-5">
							{/* <Input
								label="Intervalle de poids(kg)"
								id="weight"
								type="text"
								required
								placeholder="Exemple: 0-1000"
								{...register("weight_range")}
								error={
									errors.weight_range
										?.message
								}
							/> */}
							<Input
								label="Coût de livraison par bateau le kg"
								id="cost_sea"
								type="number"
								required
								{...register("cost_sea")}
								error={errors.cost_sea?.message}
							/>
							<Input
								label="Coût de livraison par avion le kg"
								id="cost_air"
								type="number"
								required
								{...register("cost_air")}
								error={errors.cost_air?.message}
							/>
						</div>
					</FormRightCol>
				</FormRow>
				<div className="flex justify-end pt-10">
					<ButtonSubmit
						className="ml-auto w-min"
						label={
							item
								? "Modifier l’expédition"
								: "Ajoutez l’expédition"
						}
						isLoading={isLoading}
					/>
				</div>
			</form>
		</React.Fragment>
	);
};

export default AddShippingPrice;
