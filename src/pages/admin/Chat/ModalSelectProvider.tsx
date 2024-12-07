import { IconEdit } from "@/components/common/Icons";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import Input from "@/components/ui/input";
import { getInitialsOfName, getUserAvatarUrl, getUserName } from "@/lib/utils";
import { useLazyGetUsersListQuery } from "@/redux/api/user/user.api";
import { ROLE, User } from "@/redux/api/user/user.type";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { useState } from "react";

function ModalSelectProvider() {
	const [users, setUsers] = useState<User[]>([]);
	const [fetchUsers] = useLazyGetUsersListQuery();

	const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const { data } = await fetchUsers({
			role: ROLE.customer,
			q: e.target.value,
		});
		setUsers(data?.data || []);
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<button className="flex items-center justify-center space-x-1 w-full absolute bottom-5 ">
					<IconEdit />
					<span>Write your message</span>
				</button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Start your conversation</DialogTitle>
					<DialogDescription hidden>
						Choose a customer to start a conversation
					</DialogDescription>
				</DialogHeader>
				<div>
					<Input
						label=""
						placeholder="Find a customer"
						id="name"
						variant="primary"
						onChange={handleSearch}
					/>
					<ul className="max-h-[200px] overflow-y-auto space-y-3 pt-5">
						{users.map((user) => (
							<li
								key={user.id}
								className="flex items-center space-x-2"
							>
								<Avatar>
									<AvatarImage
										src={getUserAvatarUrl(
											user.avatar_url
										)}
									/>
									<AvatarFallback>
										{getInitialsOfName(
											user?.firstname
										)}
									</AvatarFallback>
								</Avatar>
								<span>{getUserName(user)}</span>
							</li>
						))}
					</ul>
				</div>
				{/* <DialogFooter>
					<ButtonSubmit
						label="Démarrez une conversation"
						type="button"
					/>
				</DialogFooter> */}
			</DialogContent>
		</Dialog>
	);
}

export default ModalSelectProvider;
