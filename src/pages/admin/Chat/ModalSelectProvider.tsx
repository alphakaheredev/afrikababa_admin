import { IconEdit } from "@/components/common/Icons";
import ButtonSubmit from "@/components/ui/buttonSubmit";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Input from "@/components/ui/input";

function ModalSelectProvider() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center justify-center space-x-1 w-full absolute bottom-5 ">
          <IconEdit />
          <span>Rédigez votre message</span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Démarrez votre conversation</DialogTitle>
        </DialogHeader>
        <div>
          <Input
            label=""
            placeholder="Trouvez un fournisseur"
            id="name"
            variant="primary"
          />
        </div>
        <DialogFooter>
          <ButtonSubmit label="Démarrez une conversation" type="button" />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ModalSelectProvider;
