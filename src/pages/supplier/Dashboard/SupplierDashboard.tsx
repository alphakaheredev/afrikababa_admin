import { Link } from "react-router-dom";
import { BsGlobe } from "react-icons/bs";
import { Fragment } from "react/jsx-runtime";
import CardStat from "@/pages/admin/Dashboard/CardStat";
import { useAppSelector } from "@/redux/hooks";
import { supplierPaths } from "@/routes/paths";
import {
	formatDateToDayMonthYear,
	formatPriceToUsd,
	getBannerUrl,
	getLogo,
} from "@/lib/utils";
import { useGetShopStatsQuery } from "@/redux/api/shop/shop.api";

const SupplierDashboard = () => {
	const { shop } = useAppSelector((state) => state.user);
	const { data } = useGetShopStatsQuery(shop?.id as number);

	return (
		<Fragment>
			{shop ? (
				<>
					<div className="min-h-[200px]  h-[300px]">
						<img
							src={getBannerUrl(shop.banner_url)}
							alt="banner boutique"
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="flex items-center justify-between mb-5">
						<div className="flex items-center space-x-4">
							<div className="w-28 h-28 rounded-full flex justify-center items-center -mt-10 border border-gray-100 ">
								<img
									src={getLogo(
										shop.logo_url
									)}
									alt="logo"
									className="w-full h-full rounded-full object-cover"
								/>
							</div>
							<div>
								<h1 className="text-dark text-lg font-semibold">
									{shop.company_name}
									<BsGlobe className="inline ms-3" />
								</h1>
								<div className="text-th-gray font-normal text-sm space-x-2">
									<span className="border-r border-th-gray pr-5">
										{shop.email_address}
									</span>
									<span>
										{shop.address},{" "}
										{shop.city}
									</span>
									<span>
										+{shop.phone_number}
									</span>
								</div>
							</div>
						</div>
						<Link
							to={`/fournisseur/tableau-de-bord/modifier-votre-boutique/${shop?.id}`}
							className="bg-[#FB8885] hover:bg-orange-400 text-white p-3 font-normal"
							state={{ item: shop }}
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
									{formatDateToDayMonthYear(
										shop.created_at
									)}
								</p>
							</div>
							<div className="p-3 mb-3">
								<p className="text-dark font-semibold text-base">
									Description
								</p>
								<p className="text-th-gray font-normal text-sm">
									{shop?.description}
								</p>
							</div>
						</div>
						<div className="col-span-8 card-shadow m-1 p-3">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
								<CardStat
									title="Total de produits"
									value={
										data?.total_products
									}
									borderColor="border-b-[#0A4362]"
								/>
								<CardStat
									title="Total de ventes"
									value={formatPriceToUsd(
										data?.revenu_total ??
											0
									)}
									borderColor="border-b-th-primary"
								/>
								<CardStat
									title="Revenu total"
									value={formatPriceToUsd(
										shop?.revenu_total
									)}
									borderColor="border-b-[#CB30CB]"
								/>
								<CardStat
									title="Solde"
									value={formatPriceToUsd(
										shop?.balance
									)}
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
