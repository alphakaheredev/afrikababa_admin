import { Badge } from "@/components/ui/badge";
import Select from "@/components/ui/Select";
import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import OrderStatusStepper from "./OrderStatusStepper";
import CartItem from "../Dashboard/CartItem";

const DetailOrder = () => {
  return (
    <React.Fragment>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <h5 className="text-sm font-medium text-dark">
            Statut de la commande
          </h5>
          <Badge className="bg-th-primary bg-opacity-40 text-[##306708]">
            complet
          </Badge>
        </div>
        <div className="flex items-center space-x-3">
          <h5 className="text-sm font-medium text-dark">
            Statut de la commande
          </h5>
          <Badge className="bg-th-primary bg-opacity-40 text-[##306708]">
            Paiement à la livraison
          </Badge>
        </div>
      </div>
      <div className="card-shadow mx-1 mb-8">
        <div className="p-3">
          <div className="flex justify-between mb-12">
            <div>
              <h5 className="text-base font-medium text-dark">
                Numéro de commande 
              </h5>
              <p className="text-th-gray font-medium text-sm">20230410702666</p>
            </div>
            <div className="w-2/3 flex items-center gap-5">
              <Select
                options={[
                  { label: "En cours", value: "cours" },
                  { label: "Complete", value: "complet" },
                ]}
                placeholder="Statut de commande"
              />
              <button className="flex items-center bg-[#3C58BF] text-white p-2">
                <MdOutlineFileDownload fontSize={20} />
                <span>Téléchargez la facture</span>
              </button>
            </div>
          </div>
          <OrderStatusStepper />
        </div>
        <div className="mt-12 pb-12">
          <div className="bg-th-gray-e6 flex items-center justify-between py-1 mb-8">
            <h3 className="text-lg font-normal text-dark px-3">Produits</h3>
            <h3 className="text-lg font-normal text-dark px-3">Total</h3>
          </div>
          <div className="flex justify-between px-3 mb-12">
            <CartItem
              item={{
                title: "Le coeur se souvient",
                price: "10.000F",
                quantity: 1,
                image: "https://via.placeholder.com/100",
              }}
            />
            <div className="w-full max-w-sm">
              <div className="font-medium text-th-gray text-base">
                <p className="text-right pb-4 border-b border-dashed border-th-gray mb-4">
                  12.000 F
                </p>
                <div className="flex items-center justify-between">
                  <h6 className="text-th-gray-c9">Sous total</h6>
                  <p>10.000F</p>
                </div>
                <div className="flex items-center justify-between">
                  <h6 className="text-th-gray-c9">Frais de livraison</h6>
                  <p>2.000F</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between px-3 mt-8">
            <OrderInfoItem
              title="Détails de la commande"
              subtitle="1 article"
              value="Mode de paiement : paiement à la livraison"
            />
            <OrderInfoItem
              title="Adresse de facturation"
              subtitle="Client"
              value="Ngor-Almadies Dakar / Sénégal"
            />
            <OrderInfoItem
              title="Adresse de livraison"
              subtitle="Client"
              value="Ngor-Almadies Dakar / Sénégal"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

type OrderInfoItemProps = {
  title: string;
  value: string;
  subtitle?: string;
};

function OrderInfoItem(props: OrderInfoItemProps) {
  const { title, value, subtitle } = props;
  return (
    <div>
      <h5 className="text-sm font-medium text-dark pb-2 border-b border-dashed border-th-gray-c9 mb-4">
        {title}
      </h5>
      <p className="text-th-gray font-normal text-sm">{subtitle}</p>
      <p className="text-th-gray font-normal text-sm">{value}</p>
    </div>
  );
}

export default DetailOrder;
