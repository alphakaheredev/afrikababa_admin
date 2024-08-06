// import ButtonSubmit from "@/components/ui/buttonSubmit";
import Input from "@/components/ui/input";
import img from "@/assets/images/auth/woman.png";
import { Link } from "react-router-dom";
import "../auth.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { authPaths } from "@/routes/paths";

const Login = () => {
  return (
    <div className="flex h-screen">
      <div className="flex items-center justify-center w-full lg:w-1/2 px-3">
        <div className="bg-white py-6 px-6 shadow-2xl w-full max-w-xl">
          <h1 className="text-dark font-medium text-2xl mb-2">
            Connectez-vous
          </h1>
          <p className="font-normal text-th-gray-c9 text-sm mb-8">
            Veuillez entrer votre email et mot de passe pour vous connecter
          </p>
          <form className="mb-8">
            <div className="space-y-5">
              <Input
                label=""
                placeholder="Email"
                type="email"
                id="email"
                variant="auth"
              />
              <Input
                label=""
                placeholder="Password"
                type="password"
                id="password"
                variant="auth"
              />
            </div>
            <Link
              to="/mot-de-passe-oublie"
              className="text-red-500 text-sm text-right block w-full mt-1 mb-8"
            >
              Mot de passe oublié ?
            </Link>
            <Link
              to="admin"
              className="bg-emeraldGreen text-white font-medium text-base w-full text-left py-3 px-4 focus:outline-none focus:shadow-outline min-w-80 inline-block"
            >
              Connexion
            </Link>
            {/* <ButtonSubmit label="Connexion" /> */}
          </form>
          <p className="auth_or relative text-center font-medium text-dark mb-3">
            ou
          </p>
          <div className="flex items-center justify-center space-x-2 text-th-primary text-sm font-medium">
            <FaArrowRightLong />
            <Link to={authPaths.register}>
              Inscrivez-vous en tant que propriétaire de boutique
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:w-1/2 lg:flex justify-end">
        <img src={img} alt="Register page image" />
      </div>
    </div>
  );
};

export default Login;
