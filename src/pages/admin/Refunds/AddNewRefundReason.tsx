import Divider from "@/components/common/Divider";
import {
  FormLeftCol,
  FormRightCol,
  FormRow,
  LabelWithDescription,
} from "@/components/form";
import { ButtonBack } from "@/components/ui/button";
import ButtonSubmit from "@/components/ui/buttonSubmit";
import Input from "@/components/ui/input";
import React from "react";

const AddNewRefundReason = () => {
  return (
		<React.Fragment>
			<div className="flex items-center gap-2">
				<ButtonBack />
				<h1 className="text-dark font-medium text-xl">
					Ajouter une nouvelle raison de remboursement
				</h1>
			</div>
			<Divider margin="my-5" />
			<form>
				<FormRow>
					<FormLeftCol>
						<LabelWithDescription
							label="Description"
							description="Ajoutez les informations sur le motif du remboursement à partir d'ici."
						/>
					</FormLeftCol>
					<FormRightCol>
						<div className="space-y-5">
							<Input
								label="Titre du motif du remboursement"
								id="title"
								type="text"
								required
								placeholder="Entrez le titre de la raison de votre remboursement"
							/>
						</div>
					</FormRightCol>
				</FormRow>
				<div className="flex justify-end pt-10">
					<ButtonSubmit
						className="ml-auto w-min"
						label="Ajoutez l’expéditiong"
					/>
				</div>
			</form>
		</React.Fragment>
  );
};

export default AddNewRefundReason;
