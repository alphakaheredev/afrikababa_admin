import ButtonSubmit from "@/components/ui/buttonSubmit";
import Input from "@/components/ui/input";
import img from "@/assets/images/auth/woman.png";

const Login = () => {
  return (
    <div className="flex h-screen">
      <div className="flex items-center justify-center w-1/2">
        <div className="bg-white py-6 px-6 shadow-2xl">
          <h1 className="text-dark font-medium text-2xl mb-2">
            Connectez-vous
          </h1>
          <p className="font-normal text-th-gray-c9 text-sm mb-8">
            Veuillez entrer votre email et mot de passe pour vous connecter
          </p>
          <form action="">
            <Input label="" placeholder="Email" type="email" id="email" />
            <Input label="" placeholder="Email" type="password" id="password" />
            <ButtonSubmit label="Connexion" />
          </form>
        </div>
      </div>
      <div className="w-1/2 flex justify-end">
        <img src={img} alt="login page image" />
      </div>
    </div>
  );
};

export default Login;
