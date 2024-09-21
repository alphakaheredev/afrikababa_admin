import React from "react";
import Input from "@/components/ui/input";
import Divider from "@/components/common/Divider";
import {
	FormLeftCol,
	FormRightCol,
	FormRow,
	LabelWithDescription,
} from "@/components/form";
import ButtonSubmit from "@/components/ui/buttonSubmit";
import { getUserAvatarUrl } from "@/lib/utils";
import { useEditProfil } from "./useEditProfil";

const Profil = () => {
	const {
		register,
		errors,
		onSubmit,
		isLoading,
		user,
		avatar,
		handleAvatarChange,
	} = useEditProfil();
	return (
		<React.Fragment>
			<h1 className="text-dark font-semibold text-xl">
				Informations personnelles
			</h1>
			<Divider margin="my-5" />
			<form onSubmit={onSubmit}>
				<FormRow>
					<FormLeftCol>
						<LabelWithDescription
							label="Photo de profil"
							description="Téléchargez ici la photo de profil."
						/>
					</FormLeftCol>
					<FormRightCol>
						<div className="flex justify-center items-center">
							<label
								htmlFor="photo"
								className="border border-gray-300 rounded-md p-2"
							>
								<img
									src={
										avatar
											? avatar
											: getUserAvatarUrl(
													user?.avatar_url as string
											  )
									}
									alt={`avatar de ${user?.firstname}`}
									className="w-20 h-20 cursor-pointer"
								/>
								<input
									type="file"
									id="photo"
									className="hidden"
									onChange={
										handleAvatarChange
									}
								/>
							</label>
						</div>
					</FormRightCol>
				</FormRow>
				<Divider margin="my-5" />
				<FormRow>
					<FormLeftCol>
						<LabelWithDescription
							label="Informations personnelles"
							description="Modifiez vos informations personnelles"
						/>
					</FormLeftCol>
					<FormRightCol>
						<div className="space-y-5">
							<Input
								label="Nom"
								id="nom"
								type="text"
								required
								{...register("lastname")}
								error={errors.lastname?.message}
							/>
							<Input
								label="Prénom"
								id="prenom"
								type="text"
								required
								{...register("firstname")}
								error={
									errors.firstname?.message
								}
							/>
							<Input
								label="Email"
								id="email"
								type="email"
								required
								{...register("email")}
								error={errors.email?.message}
								disabled
							/>
							<Input
								label="Téléphone"
								id="telephone"
								type="text"
								required
								{...register("phone_number")}
								error={errors.phone_number}
							/>
							<Input
								label="Adresse"
								id="adresse"
								type="text"
								required
								{...register("address")}
								error={errors.address}
							/>
						</div>
					</FormRightCol>
				</FormRow>
				<div className="flex justify-end pt-10">
					<ButtonSubmit
						className="ml-auto w-min"
						label="Enregistrer"
						isLoading={isLoading}
					/>
				</div>
			</form>
		</React.Fragment>
	);
};

export default Profil;
