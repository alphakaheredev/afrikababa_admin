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
				Create your shop
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
						description="Upload your shop logo here"
					/>
				</FormLeftCol>
				<FormRightCol className="">
					<div>
						<InputFile
							label="Upload your image"
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
						label="Cover image"
						description="The cover image dimension must be 1170 x 450 px"
					/>
				</FormLeftCol>
				<FormRightCol className="">
					<div>
						<InputFile
							label="Upload your image"
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
						description="Upload your business license in PDF or image format"
					/>
				</FormLeftCol>
				<FormRightCol className="">
					<div>
						<InputFile
							label="Upload your business license"
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
						label="Basic information"
						description="Add here some basic information about your shop"
					/>
				</FormLeftCol>
				<FormRightCol>
					<div className="space-y-5">
						<Input
							label="Shop name"
							id="company_name"
							type="text"
							required
							{...register("company_name")}
							error={errors.company_name?.message}
						/>
						<Input
							label="Shop email"
							id="email_address"
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
							label="Business registration number"
							id="company_registration"
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
						label="Shop address"
						description="Add your physical shop address here"
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
							label="City"
							id="city"
							type="text"
							required
							{...register("city")}
							error={errors.city?.message}
						/>
						<Input
							label="Address"
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
			<FormRow>
				<FormLeftCol>
					<LabelWithDescription
						label="Shop settings"
						description="Add your shop settings here"
					/>
				</FormLeftCol>
				<FormRightCol>
					<div className="space-y-5">
						<Input
							label="Website"
							id="website"
							type="url"
							{...register("company_website")}
							error={
								errors.company_website?.message
							}
						/>
						<div>
							<Label required>Contact number</Label>
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
					label="Save"
					isLoading={isLoading}
				/>
			</div>
		</form>
	);
}

export default CreateShop;
