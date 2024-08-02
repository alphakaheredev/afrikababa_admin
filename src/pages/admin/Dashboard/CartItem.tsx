import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { IoMdCloseCircleOutline } from "react-icons/io";
import book from "@/assets/images/book.png";

const CartItem = ({ item }: { item: any }) => {
  return (
    <div className="flex items-start space-x-4">
      <img
        src={book}
        alt={item.title}
        className="w-24 h-32 object-cover rounded"
      />
      <div className="">
        <div>
          <h3 className="text-sm text-dark font-semibold">{item.title}</h3>
          <p className="text-dark font-light text-sm">{item.price}</p>
        </div>
        <div className="flex items-center gap-3 pt-4">
          <button>
            <AiOutlinePlusSquare fontSize={16} />
          </button>
          <p className="text-dark font-light text-sm">{item.quantity}</p>
          <button>
            <AiOutlineMinusSquare fontSize={16} />
          </button>
        </div>
      </div>
      <button>
        <IoMdCloseCircleOutline fontSize={18} className="text-th-gray" />
      </button>
    </div>
  );
};

export default CartItem;
