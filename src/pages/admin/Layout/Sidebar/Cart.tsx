import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Link } from "react-router-dom";
import { PiShoppingCart } from "react-icons/pi";

const Cart = () => {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <button className="fixed right-2 top-[45vh] bg-white text-dark p-6 rounded-full shadow-2xl">
          <PiShoppingCart fontSize={24} />
        </button>
      </DrawerTrigger>
      <DrawerContent className="container py-20 h-screen top-0 right-0 left-auto mt-0 w-[350px] rounded-tl-7xl rounded-bl-7xl">
        <DrawerTitle className="hidden">Cart</DrawerTitle>
        <div className=""></div>
        <DrawerFooter>
          <Link
            to="/paiement"
            className="font-medium text-th-teal underline underline-offset-4 text-lg"
          >
            Achetez maintenant
          </Link>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Cart;
