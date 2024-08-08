import { CiGlobe, CiSearch } from "react-icons/ci";
import diamond from "@/assets/images/admin/diamond.png";
import avatar from "@/assets/images/avatar.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import FormSendChat from "./FormSendChat";
import ModalSelectProvider from "./ModalSelectProvider";

const Chat = () => {
  return (
    <div className="flex gap-3">
      <div className="w-1/4 mx-1 my-1 card-shadow min-h-[80vh] relative">
        <div className="mb-8 border-b-4 border-th-gray-e6 relative">
          <input
            type="search"
            className="w-full py-3 px-3 text-sm"
            placeholder="Recherchez par boutique..."
          />
          <CiSearch
            className="absolute right-0 top-4 text-th-gray-c9"
            fontSize={20}
          />
        </div>
        <div>
          {[...Array(3)].map((_item, i) => (
            <div
              className="flex items-center justify-between mb-5 border-b border-th-gray-c9 border-dashed pb-3 px-3"
              key={i}
            >
              <div className="flex items-center space-x-2">
                <div className="bg-slate-200 w-9 h-9 rounded-full flex items-center justify-center">
                  <img
                    src={diamond}
                    alt="Icon"
                    className="w-5 h-5 object-cover rounded"
                  />
                </div>
                <h3 className="font-medium text-sm">Publication de Tom</h3>
              </div>
              <p className="text-th-gray-c9 text-sm font-normal">3 mois</p>
            </div>
          ))}
          <ModalSelectProvider />
        </div>
      </div>
      <div className="w-3/4  mx-1 my-1 card-shadow relative">
        {/* Show this block when there is no chat history */}

        {/* <div className="w-full flex justify-center items-center h-[70vh]">
          <img src={chatImg} alt="chat" />
        </div> */}

        {/* end */}

        {/* Show this block when there is chat history */}
        <div className="mb-8 border-b border-th-gray-e6 border-dashed flex items-center space-x-5 py-4 px-4">
          <div className="flex items-center space-x-2">
            <div className="bg-slate-200 w-9 h-9 rounded-full flex items-center justify-center">
              <img
                src={diamond}
                alt="Icon"
                className="w-5 h-5 object-cover rounded"
              />
            </div>
            <h3 className="font-medium text-sm">Publication de Tom</h3>
          </div>
          <CiGlobe className="text-black font-semibold" fontSize={22} />
        </div>
        <div className="px-5">
          <div>
            <ProviderMessageItem />
            <CustomerMessageItem />
            <ProviderMessageItem />
          </div>
          <FormSendChat />
        </div>
      </div>
    </div>
  );
};

function ProviderMessageItem() {
  return (
    <div className="flex items-start space-x-4 lg:w-1/2">
      <div className="bg-slate-200 min-w-14 min-h-14 rounded-full flex items-center justify-center">
        <img
          src={diamond}
          alt="Icon"
          className="w-8 h-8 object-cover rounded"
        />
      </div>
      <div className="space-y-1">
        <div className="bg-[#4A4E7B] py-3 px-3 rounded-[30px] rounded-bl-none">
          <p className="text-white font-normal text-sm">
            Le Lorem Ipsum est simplement du faux texte utilisé dans la
            composition et la mise en{" "}
          </p>
        </div>
        <p className="text-th-gray-c9 text-sm">il y a 1 semaine</p>
      </div>
    </div>
  );
}

function CustomerMessageItem() {
  return (
    <div className="flex items-start space-x-4 lg:w-1/2 ml-auto">
      <div className="space-y-1">
        <div className="bg-[#F5F5F5] py-3 px-3 rounded-[30px] rounded-br-none">
          <p className="text-dark font-normal text-sm">
            Le Lorem Ipsum est simplement du faux texte utilisé dans la
            composition et la mise en{" "}
          </p>
        </div>
        <p className="text-th-gray-c9 text-sm">il y a 1 semaine</p>
      </div>
      <div className="bg-slate-200 min-w-14 min-h-14 rounded-full flex items-center justify-center">
        <Avatar className="cursor-pointer w-12 h-12">
          <AvatarImage src={avatar} alt="user avatar" />
          <AvatarFallback>AK</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

export default Chat;
