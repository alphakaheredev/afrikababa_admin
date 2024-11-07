import Divider from "@/components/common/Divider";
import {
	FormLeftCol,
	FormRightCol,
	FormRow,
	InputFile,
	LabelWithDescription,
} from "@/components/form";
import Input from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";
import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Label from "@/components/ui/label";
import ButtonSubmit from "@/components/ui/buttonSubmit";
import { useCrudShop } from "./useCrudShop";
import { Error } from "@/components/common/Error";
import { Shop } from "@/redux/api/shop/shop.type";
import { isImage } from "@/lib/utils";
import { IoIosDocument } from "react-icons/io";

const CreateShop = () => {
	return (
		<React.Fragment>
			<h1 className="text-dark font-semibold text-xl">
				Création de votre boutique
			</h1>
			<Divider margin="my-5" />
			<ShopForm />
		</React.Fragment>
	);
};

export function ShopForm({ item }: { item?: Shop }) {
	const {
		register,
		onSubmit,
		errors,
		phone,
		handlePhoneChange,
		handleLogoChange,
		handleCoverChange,
		logo,
		cover,
		isLoading,
		handleBusinessLicenseChange,
		businessLicense,
	} = useCrudShop(item);

	return (
		<form onSubmit={onSubmit}>
			<FormRow>
				<FormLeftCol>
					<LabelWithDescription
						label="Logo"
						description="Téléchargez le logo de votre boutique par ici"
					/>
				</FormLeftCol>
				<FormRightCol className="">
					<div>
						<InputFile
							label="Téléchargez votre image"
							id="logo"
							onChange={handleLogoChange}
							accept="image/*"
						/>
						{logo && (
							<img
								src={URL.createObjectURL(logo)}
								alt="logo"
								className="w-12 h-12 object-contain mt-3"
							/>
						)}
						<Error error={errors.logo?.message} />
					</div>
				</FormRightCol>
			</FormRow>
			<Divider margin="my-5" />
			<FormRow>
				<FormLeftCol>
					<LabelWithDescription
						label="Image de couverture"
						description="La dimension de l'image de couverture doit être de 1170 x 450 px"
					/>
				</FormLeftCol>
				<FormRightCol className="">
					<div>
						<InputFile
							label="Téléchargez votre image"
							id="cover"
							onChange={handleCoverChange}
							accept="image/*"
						/>
						{cover && (
							<img
								src={URL.createObjectURL(cover)}
								alt="cover"
								className="w-12 h-12 object-contain mt-3"
							/>
						)}
						<Error error={errors.banner?.message} />
					</div>
				</FormRightCol>
			</FormRow>
			<Divider margin="my-5" />
			<Divider margin="my-5" />
			<FormRow>
				<FormLeftCol>
					<LabelWithDescription
						label="Business license"
						description="Téléchargez votre business license au format PDF ou image"
					/>
				</FormLeftCol>
				<FormRightCol className="">
					<div>
						<InputFile
							label="Téléchargez votre business license"
							id="business_license"
							onChange={handleBusinessLicenseChange}
							accept="application/pdf"
						/>
						{businessLicense &&
						typeof businessLicense !== "string" ? (
							isImage(businessLicense) ? (
								<img
									src={URL.createObjectURL(
										businessLicense
									)}
									alt="cover"
									className="w-12 h-12 object-contain mt-3"
								/>
							) : (
								<p className="flex items-center gap-2 pt-3 text-gray-500">
									<IoIosDocument
										fontSize={24}
										className="text-gray-500"
									/>
									{businessLicense?.name}
								</p>
							)
						) : null}
						<Error
							error={
								errors.business_license?.message
							}
						/>
					</div>
				</FormRightCol>
			</FormRow>
			<Divider margin="my-5" />
			<FormRow>
				<FormLeftCol>
					<LabelWithDescription
						label="Informations de base"
						description="Ajoutez ici quelques informations de base sur votre boutique"
					/>
				</FormLeftCol>
				<FormRightCol>
					<div className="space-y-5">
						<Input
							label="Nom de la boutique"
							id="nom_boutique"
							type="text"
							required
							{...register("company_name")}
							error={errors.company_name?.message}
						/>
						<Input
							label="Email de la boutique"
							id="email_boutique"
							type="email"
							required
							{...register("email_address")}
							error={errors.email_address?.message}
						/>
						<Textarea
							label="Description"
							required
							{...register("description")}
							error={errors.description?.message}
						/>
						<Input
							label="Numéro de registre de commerce"
							id="enregistrement_boutique"
							type="text"
							{...register("company_registration")}
							error={
								errors.company_registration
									?.message
							}
						/>
					</div>
				</FormRightCol>
			</FormRow>
			<Divider margin="my-5" />
			<FormRow>
				<FormLeftCol>
					<LabelWithDescription
						label="Adresse de la boutique"
						description="Ajoutez l'adresse de votre boutique physique à partir d'ici"
					/>
				</FormLeftCol>
				<FormRightCol>
					<div className="space-y-5">
						{/* <Input
					label="Pays"
					id="country"
					type="text"
					required
					{...register("company_address")}
					error={
						errors.company_address
							?.message
					}
				/> */}
						<Input
							label="Ville"
							id="city"
							type="text"
							required
							{...register("city")}
							error={errors.city?.message}
						/>
						<Input
							label="Adresse"
							id="address"
							type="text"
							required
							{...register("address")}
							error={errors.address?.message}
						/>
					</div>
				</FormRightCol>
			</FormRow>
			<Divider margin="my-5" />
			{/* <FormRow>
		<FormLeftCol>
			<LabelWithDescription
				label="Mode de paiement accepté"
				description="Ajoutez vos informations de paiement à partir d'ici"
			/>
		</FormLeftCol>
		<FormRightCol>
			<RadioGroup className="flex gap-5 h-full m-0">
				{[...Array(3)].map((_item, i) => {
					return (
						<label
							key={i}
							htmlFor={`mode_paiement_${i}`}
							className="flex items-center justify-between border border-th-gray-c9 w-full px-2 py-1 rounded-lg cursor-pointer"
						>
							<img
								src={hp}
								alt="mode_paiement_logo"
								className="w-5 object-contain"
							/>
							<RadioGroupItem
								id={`mode_paiement_${i}`}
								value={`mode_paiement_${i}`}
								className="my-0"
							/>
						</label>
					);
				})}
			</RadioGroup>
		</FormRightCol>
	</FormRow>
	<Divider margin="my-5" /> */}
			<FormRow>
				<FormLeftCol>
					<LabelWithDescription
						label="Paramètres de la boutique"
						description="Ajoutez les informations sur les paramètres de votre boutique à partir d'ici"
					/>
				</FormLeftCol>
				<FormRightCol>
					<div className="space-y-5">
						<Input
							label="Site web"
							id="website"
							type="url"
							{...register("company_website")}
							error={
								errors.company_website?.message
							}
						/>
						<div>
							<Label required>
								Numéro de contact
							</Label>
							<PhoneInput
								country={"cn"}
								value={phone}
								onChange={handlePhoneChange}
								masks={{
									sn: ".. ... .. ..",
								}}
							/>
							<Error
								error={
									errors?.phone_number
										?.message
								}
							/>
						</div>
					</div>
				</FormRightCol>
			</FormRow>
			<div className="flex justify-end pt-10">
				<ButtonSubmit
					className="ml-auto w-min"
					label="Enregistrez"
					isLoading={isLoading}
				/>
			</div>
		</form>
	);
}

export default CreateShop;
