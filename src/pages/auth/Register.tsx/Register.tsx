import ButtonSubmit from "@/components/ui/buttonSubmit";
import Input from "@/components/ui/input";
// import img from "@/assets/images/auth/man.png";
import { Link } from "react-router-dom";
import "../auth.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRegisterForm } from "./useRegister";

const Register = () => {
	const { register, onSubmit, errors, isLoading } = useRegisterForm();
	return (
		<div className="flex h-screen">
			<div className="flex items-center justify-center w-full px-3">
				<div className="bg-white py-6 px-6 shadow-2xl w-full max-w-xl">
					<h1 className="text-dark font-medium text-2xl mb-2">
						Créez un nouveau compte
					</h1>
					<p className="font-normal text-th-gray-c9 text-sm mb-8">
						Veuillez entrer votre nom, email et mot de
						passe pour vous enregistrer
					</p>
					<form className="mb-8" onSubmit={onSubmit}>
						<div className="space-y-8 mb-12">
							<Input
								label=""
								placeholder="Prénoms *"
								type="text"
								id="firsname"
								variant="auth"
								{...register("firstname")}
								error={errors.firstname}
							/>
							<Input
								label=""
								placeholder="Nom *"
								type="text"
								id="lastname"
								variant="auth"
								{...register("lastname")}
								error={errors.lastname}
							/>
							<Input
								label=""
								placeholder="Email *"
								type="email"
								id="email"
								variant="auth"
								{...register("email")}
								error={errors.email}
							/>
							<Input
								label=""
								placeholder="Téléphone *"
								type="text"
								id="phone_number"
								variant="auth"
								{...register("phone_number")}
								error={errors.phone_number}
							/>
							<Input
								label=""
								placeholder="Adresse *"
								type="text"
								id="address"
								variant="auth"
								{...register("adresse")}
								error={errors.adresse}
							/>
							<Input
								label=""
								placeholder="Mot de passe *"
								type="password"
								id="password"
								variant="auth"
								{...register("password")}
								error={errors.password}
							/>
							<Input
								label=""
								placeholder="Confirmation mot de passe *"
								type="password"
								id="password_confirmation"
								variant="auth"
								{...register(
									"password_confirmation"
								)}
								error={
									errors.password_confirmation
								}
							/>
						</div>
						<ButtonSubmit
							label="S’inscrire"
							isLoading={isLoading}
							className="mt-5"
						/>
					</form>
					<p className="auth_or relative text-center font-medium text-dark mb-3">
						ou
					</p>
					<div className="flex items-center justify-center space-x-2 text-th-primary text-sm font-medium">
						<FaArrowRightLong />
						<Link to="/">S’identifier</Link>
					</div>
				</div>
			</div>
			{/* <div className="hidden lg:w-1/2 lg:flex justify-end">
				<img src={img} alt="login page image" />
			</div> */}
		</div>
	);
};

export default Register;
