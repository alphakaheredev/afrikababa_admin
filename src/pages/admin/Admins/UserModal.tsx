import ButtonSubmit from "@/components/ui/buttonSubmit";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from "@/components/ui/dialog";
import Input from "@/components/ui/input";
import { ModalProps } from "@/lib/type";
import { ROLE, User } from "@/redux/api/user/user.type";
import { useCrudUser } from "./useCrudUser";
import countries from "@/lib/countries.json";
import Label from "@/components/ui/label";
import Select from "react-select";
import { Error } from "@/components/common/Error";

interface UserModalProps extends ModalProps<User> {
	role: ROLE;
}

const UserModal: React.FC<UserModalProps> = (props) => {
	const { isOpen, close, item, role } = props;
	const {
		register,
		onSubmit,
		errors,
		isLoading,
		country,
		handleSelectCountry,
	} = useCrudUser(close, role, item);
	return (
		<Dialog open={isOpen} onOpenChange={close}>
			<DialogContent className="max-w-lg">
				<DialogHeader className="mb-5">
					<DialogTitle>
						{!item
							? `Ajouter un ${
									role === ROLE.admin
										? "administrateur"
										: "transitaire"
							  }`
							: `Modifier ${
									role === ROLE.admin
										? "l'administrateur"
										: "le transitaire"
							  }`}
					</DialogTitle>
					<DialogDescription hidden>
						Modal d'ajout d'un utilisateur
					</DialogDescription>
				</DialogHeader>
				<form onSubmit={onSubmit} className="space-y-5">
					<Input
						label="Prénoms"
						type="text"
						id="firstname"
						placeholder="Prénoms"
						required
						{...register("firstname")}
						error={errors?.firstname}
						defaultValue={item?.firstname}
					/>
					<Input
						label="Nom"
						type="text"
						id="lastname"
						placeholder="Nom"
						required
						{...register("lastname")}
						error={errors?.lastname}
						defaultValue={item?.lastname}
					/>

					<Input
						label="Email"
						type="email"
						id="name"
						placeholder="Email"
						{...register("email")}
						error={errors?.email}
						defaultValue={item?.email}
					/>

					<Input
						label="Téléphone"
						type="tel"
						id="phone"
						placeholder="Téléphone"
						required
						{...register("phone_number")}
						error={errors?.phone_number}
						defaultValue={item?.phone_number}
					/>

					{/* <Select
						label="Pays"
						type="text"
						id="country"
						placeholder="Pays"
						required
						{...register("country")}
						error={errors?.country}
						defaultValue={item?.country}
						options={Object.entries(countries).map(
							([key, value]) => ({
								value: key,
								label: value,
							})
						)}
					/> */}
					<div className="space-y-2">
						<Label className="mb-3">Pays</Label>
						<Select
							// @ts-ignore
							options={Object.entries(
								countries
							).map(([key, value]) => ({
								value: key,
								label: value,
							}))}
							classNamePrefix="react-select"
							value={country}
							onChange={handleSelectCountry}
						/>
						<Error error={errors?.country} />
					</div>
					<Input
						label="Adresse de l'entrepot en chine"
						type="text"
						id="address"
						placeholder="Adresse"
						required
						{...register("adresse")}
						error={errors?.adresse}
						defaultValue={item?.adresse}
					/>

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

export default UserModal;
