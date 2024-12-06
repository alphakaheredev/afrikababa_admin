// import ButtonSubmit from "@/components/ui/buttonSubmit";
import Input from "@/components/ui/input";
// import img from "@/assets/images/auth/woman.png";
import { Link } from "react-router-dom";
import "../auth.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { authPaths } from "@/routes/paths";
import { useLoginForm } from "./useLogin";
import ButtonSubmit from "@/components/ui/buttonSubmit";

const Login = () => {
	const { register, onSubmit, errors, isLoading } = useLoginForm();

	return (
		<div className="flex h-screen">
			<div className="flex items-center justify-center w-full px-3">
				<div className="bg-white py-10 px-6 shadow-2xl w-full max-w-xl">
					<h1 className="text-dark font-medium text-2xl mb-2">
						Connectez-vous
					</h1>
					<p className="font-normal text-th-gray-c9 text-sm mb-8">
						Veuillez entrer votre email et mot de passe
						pour vous connecter
					</p>
					<form className="mb-8" onSubmit={onSubmit}>
						<div className="space-y-5">
							<Input
								label=""
								placeholder="Email"
								type="email"
								id="email"
								variant="auth"
								{...register("email")}
								error={errors.email}
							/>
							<Input
								label=""
								placeholder="Password"
								type="password"
								id="password"
								variant="auth"
								{...register("password")}
								error={errors.password}
							/>
						</div>
						<Link
							to="/mot-de-passe-oublie"
							className="text-red-500 text-sm text-right block w-full mt-1 mb-8"
						>
							Mot de passe oublié ?
						</Link>
						<ButtonSubmit
							label="Connexion"
							isLoading={isLoading}
						/>
					</form>
					<p className="auth_or relative text-center font-medium text-dark mb-3">
						ou
					</p>
					<div className="flex items-center justify-center space-x-2 text-th-primary text-sm font-medium">
						<FaArrowRightLong />
						<Link to={authPaths.register}>
							Inscrivez-vous en tant que
							propriétaire de boutique
						</Link>
					</div>
				</div>
			</div>
			{/* <div className="hidden lg:w-1/2 lg:flex justify-end">
				<img src={img} alt="Register page image" />
			</div> */}
		</div>
	);
};

export default Login;
