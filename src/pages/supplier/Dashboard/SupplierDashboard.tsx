import banner from "@/assets/images/shop_banner.png";
import logo from "@/assets/images/favicon.png";
import { Link } from "react-router-dom";
import { BsGlobe } from "react-icons/bs";
import { Fragment } from "react/jsx-runtime";
import CardStat from "@/pages/admin/Dashboard/CardStat";
import { useAppSelector } from "@/redux/hooks";
import { supplierPaths } from "@/routes/paths";
import { useGetShopsByUserQuery } from "@/redux/api/shop/shop.api";

const SupplierDashboard = () => {
	const { user } = useAppSelector((state) => state.user);
	const { data } = useGetShopsByUserQuery();
	console.log(data);
	return (
		<Fragment>
			{user?.shop ? (
				<>
					<div>
						<img
							src={banner}
							alt="banner boutique"
							className="w-full h-full"
						/>
					</div>
					<div className="flex items-center justify-between mb-5">
						<div className="flex items-center space-x-4">
							<div className="bg-dark w-28 h-28 rounded-full flex justify-center items-center -mt-10">
								<img
									src={logo}
									alt="logo"
									className="w-20 h-20"
								/>
							</div>
							<div>
								<h1 className="text-dark text-lg font-semibold">
									Boutique vente meubles{" "}
									<BsGlobe className="inline ms-3" />
								</h1>
								<div className="text-th-gray font-normal text-sm space-x-4">
									<span className="border-r border-th-gray">
										@meublehome@innovatelq.sn
									</span>
									<span>
										Ngor Almadies
										/Dakar/Sénégal
									</span>
									<span>
										+221 00 000 01 02
									</span>
								</div>
							</div>
						</div>
						<Link
							to={``}
							className="bg-[#FB8885] text-white p-3"
						>
							Modifiez la boutique
						</Link>
					</div>
					<div className="grid grid-cols-12 gap-5">
						<div className="col-span-4 card-shadow m-1">
							<div className="border-b border-t-th-gray-e6 border-dashed p-3 mb-3">
								<p className="text-th-gray font-normal text-sm">
									Boutique enregistrée
									depuis le
								</p>
								<p className="text-dark font-semibold text-base">
									12 Juillet 2024
								</p>
							</div>
							<div className="p-3 mb-3">
								<p className="text-dark font-semibold text-base">
									Description
								</p>
								<p className="text-th-gray font-normal text-sm">
									Le lorem ipsum est, en
									imprimerie, une suite de
									mots sans signification
									utilisée à titre
									provisoire pour calibrer
									une mise
								</p>
							</div>
						</div>
						<div className="col-span-8 card-shadow m-1 p-3">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
								<CardStat
									title="Total de produits"
									value="100"
									borderColor="border-b-[#0A4362]"
								/>
								<CardStat
									title="Total de ventes"
									value="0"
									borderColor="border-b-th-primary"
								/>
								<CardStat
									title="Total de commandes"
									value="50"
									borderColor="border-b-th-[#711500]"
								/>
							</div>
						</div>
					</div>
				</>
			) : (
				<div className="flex flex-col items-center gap-5 justify-center h-[40vh]">
					<div className="text-center">
						<h1 className="text-xl font-medium">
							Vous n'avez pas de boutique
						</h1>
						<p className="text-sm text-th-gray">
							Créez votre boutique pour commencer à
							vendre vos produits
						</p>
					</div>
					<Link
						to={`/fournisseur/${supplierPaths.createBoutique}`}
						className="bg-th-primary border-1 -th-primary px-5 py-2 text-white font-medium text-sm"
					>
						Créer ma boutique
					</Link>
				</div>
			)}
		</Fragment>
	);
};

export default SupplierDashboard;
