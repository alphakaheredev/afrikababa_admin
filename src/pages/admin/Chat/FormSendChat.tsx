import Textarea from "@/components/ui/textarea";
import { FiSend } from "react-icons/fi";

const FormSendChat = () => {
  return (
    <div className="absolute bottom-2 left-2 w-[98%]">
      <form action="" className="relative">
        <Textarea
          label=""
          placeholder="Tapez votre message ici"
          className="min-h-28 bg-[#F5F5F5]"
        />
        <button className="text-[#323232] font-normal absolute right-2 top-2">
          <FiSend fontSize={24} />
        </button>
      </form>
    </div>
  );
};

export default FormSendChat;
