import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import useScrollPosition from "@/hooks/useScrollPosition";
import { IconBurger } from "@/components/common/Icons";
import { supplierPaths } from "@/routes/paths";
import avatar from "@/assets/images/avatar.png";

const Topbar = ({ open }: { open: () => void }) => {
	const scrollPosition = useScrollPosition();

	return (
		<div
			className={`fixed top-0 right-0 w-full py-4 px-5 app-container z-10 transition-all ease-out duration-200 ${
				scrollPosition > 25 ? "bg-white" : "bg-transparent"
			}`}
		>
			<div className="outlet-container ml-auto">
				<nav className="flex items-center justify-between space-x-6">
					<div>
						{open && (
							<button
								onClick={open}
								className="lg:hidden"
							>
								<IconBurger />
							</button>
						)}

						{/* <div className="relative">
							<CiSearch
								className="text font-bold absolute top-2 left-2"
								fontSize={24}
							/>
							<input
								className="px-3 py-2 border border-th-gray-c9 text-dark min-w-80 font-light pl-8 text-sm"
								placeholder="Recherchez votre itinéraire..."
							/>
						</div> */}
					</div>
					<div className="flex justify-center lg:justify-end items-center gap-8">
						<Link
							to={`/fournisseur/${supplierPaths.createBoutique}`}
							className="bg-th-primary border-1 -th-primary px-5 py-2 text-white font-medium text-sm"
						>
							Créer ma boutique
						</Link>
						<Link to="https://afrikababba.com/">
							visitez le site
						</Link>
						<HoverCard>
							<HoverCardTrigger asChild>
								<Avatar className="cursor-pointer w-12 h-12">
									<AvatarImage
										src={avatar}
										alt="user avatar"
									/>
									<AvatarFallback>
										AK
									</AvatarFallback>
								</Avatar>
							</HoverCardTrigger>
							<HoverCardContent className="w-40 px-3 py-1">
								<Link
									to="/admin/profil"
									className="text-dark text-sm"
								>
									Mon profil
								</Link>
							</HoverCardContent>
						</HoverCard>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Topbar;
