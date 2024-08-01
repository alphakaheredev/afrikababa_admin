import ButtonSubmit from "@/components/ui/buttonSubmit";
import Input from "@/components/ui/input";

const ResetPassword = () => {
  return (
    <div className="flex justify-center h-screen">
      <div className="flex items-center justify-center w-full lg:w-1/2 px-3">
        <div className="bg-white py-6 px-6 shadow-2xl w-full max-w-xl">
          <h1 className="text-dark font-medium text-2xl mb-2">
            Reinitialiser le mot de passe
          </h1>
          <p className="font-normal text-th-gray-c9 text-sm mb-8">
            Veuillez entrer le code et mot de passe
          </p>
          <form className="mb-8">
            <div className="space-y-8 mb-12">
              <Input
                label=""
                placeholder="Code"
                type="number"
                id="code"
                variant="auth"
              />
              <Input
                label=""
                placeholder="Nouveau mot de passe"
                type="password"
                id="password"
                variant="auth"
              />
              <Input
                label=""
                placeholder="Confirmation mot de passe"
                type="password"
                id="password"
                variant="auth"
              />
            </div>
            <ButtonSubmit label="Reinitialiser le mot de passe" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
