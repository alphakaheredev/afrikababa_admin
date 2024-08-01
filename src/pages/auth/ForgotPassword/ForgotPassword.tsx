import ButtonSubmit from "@/components/ui/buttonSubmit";
import Input from "@/components/ui/input";

const ForgotPassword = () => {
  return (
    <div className="flex justify-center h-screen">
      <div className="flex items-center justify-center w-full lg:w-1/2 px-3">
        <div className="bg-white py-6 px-6 shadow-2xl w-full max-w-xl">
          <h1 className="text-dark font-medium text-2xl mb-2">
            Mot de passe oublié
          </h1>
          <p className="font-normal text-th-gray-c9 text-sm mb-8">
            Veuillez entrer votre email
          </p>
          <form className="mb-8">
            <div className="space-y-8 mb-12">
              <Input
                label=""
                placeholder="Email"
                type="email"
                id="email"
                variant="auth"
              />
            </div>
            <ButtonSubmit label="Envoyer" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
