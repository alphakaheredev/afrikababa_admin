import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import useScrollPosition from "@/hooks/useScrollPosition";
import { IconBurger } from "@/components/common/Icons";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { onlogout } from "@/redux/features/user.slice";
import { getUserAvatarUrl } from "@/lib/utils";

const Topbar = ({ open }: { open: () => void }) => {
	const scrollPosition = useScrollPosition();
	const { user } = useAppSelector((state) => state.user);
	const dispatch = useAppDispatch();

	const onLogout = () => {
		dispatch(onlogout());
	};

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
						{/* <a
							href="https://afrikababba.com/"
							target="_blank"
							rel="noreferrer"
						>
							visitez le site
						</a> */}
						<Popover>
							<PopoverTrigger asChild>
								<Avatar className="cursor-pointer w-12 h-12">
									<AvatarImage
										src={getUserAvatarUrl(
											user?.avatar_url as string
										)}
										alt="user avatar"
									/>
									<AvatarFallback>
										{user?.firstname?.charAt(
											0
										)}
										{user?.lastname?.charAt(
											0
										)}
									</AvatarFallback>
								</Avatar>
							</PopoverTrigger>
							<PopoverContent className="w-40 px-3 py-1">
								<Link
									to="/admin/profil"
									className="text-dark text-sm"
								>
									Mon profil
								</Link>
								<button
									className="border-t border-gray-300 w-full mt-2 pt-2 text-left text-dark text-sm"
									onClick={onLogout}
								>
									Se déconnecter
								</button>
							</PopoverContent>
						</Popover>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Topbar;
