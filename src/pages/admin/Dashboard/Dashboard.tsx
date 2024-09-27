import { InputSearch } from "@/components/ui/input";
import OrdersTable from "../Orders/OrdersTable";
import CardStat from "./CardStat";
import SalesBarChart from "./SalesBarChart";
import { cn, formatAmount } from "@/lib/utils";
import CartItem from "./CartItem";
import { useGetAdminDashboardDataQuery, useGetHistoryOrdersStatisticsQuery } from "@/redux/api/config/config.api";
import { useGetTopSellingProductsQuery } from "@/redux/api/product/product.api";
import { useSearch } from "@/hooks/hooks";

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
	const { data } = useGetAdminDashboardDataQuery();
	const year = new Date().getFullYear();
	const { data: historyOrders } = useGetHistoryOrdersStatisticsQuery(year);
	const { data: topSellingProducts } = useGetTopSellingProductsQuery();
	const { search, handleSearch } = useSearch();
	console.log(historyOrders);

	return (
		<div>
			<div className={cn(cardClass, "mb-12")}>
				<h1 className="text-dark font-medium mb-2">Résumé</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
					<CardStat
						title="Revenu total"
						value={formatAmount(
							data?.total_revenue ?? 0
						)}
						borderColor="border-b-[#CB30CB]"
					/>
					<CardStat
						title="Commande totale"
						value={data?.total_orders ?? 0}
						borderColor="border-b-violet-500"
					/>
					<CardStat
						title="Fournisseurs"
						value={data?.total_suppliers ?? 0}
						borderColor="border-b-th-primary"
					/>
					<CardStat
						title="Total magasin"
						value={data?.total_shops ?? 0}
						borderColor="border-b-pink-500"
					/>
				</div>
			</div>
			<div className={cn(cardClass, "mb-12")}>
				<h1 className="text-dark font-medium mb-2">
					Statut commande
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
					<CardStat
						title="Commande en cours"
						value={data?.pending_orders ?? 0}
						borderColor="border-b-teal-500"
					/>
					<CardStat
						title="Commande terminée"
						value={data?.completed_orders ?? 0}
						borderColor="border-b-gray-500"
					/>
					<CardStat
						title="Commande annulée"
						value={data?.cancelled_orders ?? 0}
						borderColor="border-b-orange-500"
					/>
				</div>
			</div>

			{/* Dernières commandes */}
			<section className={cn(cardClass, "mb-12")}>
				<div className="flex items-center justify-between mb-8">
					<h3 className="text-dark font-semibold">
						Les dernières commandes
					</h3>
					<InputSearch
						placeholder="Recherchez par numéro de suivi"
						onChange={handleSearch}
					/>
				</div>
				<OrdersTable limit={10} order_number={search} />
			</section>

			{/* Historique de ventes */}
			<section className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-12">
				<div className={cn(cardClass)}>
					<h3 className="text-dark font-semibold">
						Historique de ventes
					</h3>
					<SalesBarChart />
				</div>
				<div className={cn(cardClass)}>
					<h3 className="text-dark font-semibold mb-5">
						Produits populaires
					</h3>
					<div className="grid grid-cols space-y-4">
						{topSellingProducts?.data
							?.slice(0, 2)
							.map((item, index) => (
								<CartItem
									key={index}
									item={item}
								/>
							))}
					</div>
				</div>
			</section>

			{/* Produits en faible stock */}
			{/* <section className={cn(cardClass, "mb-12")}>
				<div className="flex items-center justify-between mb-8">
					<h3 className="text-dark font-semibold">
						Produits en faible stock
					</h3>
					<InputSearch placeholder="Recherchez par nom" />
				</div>
				<ProductsTable />
			</section> */}
		</div>
	);
};

export default Dashboard;
