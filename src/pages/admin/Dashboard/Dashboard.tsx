import { InputSearch } from "@/components/ui/input";
import OrdersTable from "../Orders/OrdersTable";
import CardStat from "./CardStat";
import ProductsTable from "../Products/ProductsTable";
import SalesBarChart from "./SalesBarChart";
import { cn } from "@/lib/utils";
import CartItem from "./CartItem";

export const books = [
  {
    title: "Le coeur se souvient",
    price: "10.000F",
    quantity: 1,
    image: "https://via.placeholder.com/100",
  },
  {
    title: "Le cahier méditation",
    price: "1.500F",
    quantity: 1,
    image: "https://via.placeholder.com/100",
  },
];

const cardClass = "bg-white my-2 mx-1 shadow-gray-100 drop-shadow-xl p-3";

const Dashboard = () => {
  return (
    <div>
      <div className={cn(cardClass, "mb-12")}>
        <h1 className="text-dark font-medium mb-2">Résumé</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <CardStat
            title="Revenu total"
            value="10.000.000F"
            borderColor="border-b-[#CB30CB]"
          />
          <CardStat
            title="Commande totale"
            value="200"
            borderColor="border-b-violet-500"
          />
          <CardStat
            title="Fournisseurs"
            value="40"
            borderColor="border-b-th-primary"
          />
          <CardStat
            title="Total magasin"
            value="15"
            borderColor="border-b-pink-500"
          />
        </div>
      </div>
      <div className={cn(cardClass, "mb-12")}>
        <h1 className="text-dark font-medium mb-2">Statut commande</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <CardStat
            title="Commande en cours"
            value="100"
            borderColor="border-b-teal-500"
          />
          <CardStat
            title="Commande terminée"
            value="90"
            borderColor="border-b-gray-500"
          />
          <CardStat
            title="Commande annulée"
            value="40"
            borderColor="border-b-orange-500"
          />
        </div>
      </div>

      {/* Dernières commandes */}
      <section className={cn(cardClass, "mb-12")}>
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-dark font-semibold">Les dernières commandes</h3>
          <InputSearch placeholder="Recherchez par nom" />
        </div>
        <OrdersTable />
      </section>

      {/* Historique de ventes */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-12">
        <div className={cn(cardClass)}>
          <h3 className="text-dark font-semibold">Historique de ventes</h3>
          <SalesBarChart />
        </div>
        <div className={cn(cardClass)}>
          <h3 className="text-dark font-semibold mb-5">Produits populaires</h3>
          <div className="grid grid-cols space-y-4">
            {books.map((item, index) => (
              <CartItem key={index} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Produits en faible stock */}
      <section className={cn(cardClass, "mb-12")}>
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-dark font-semibold">Produits en faible stock</h3>
          <InputSearch placeholder="Recherchez par nom" />
        </div>
        <ProductsTable />
      </section>
    </div>
  );
};

export default Dashboard;
