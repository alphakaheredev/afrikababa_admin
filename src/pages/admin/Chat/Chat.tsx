import { CiGlobe, CiSearch } from "react-icons/ci";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import FormSendChat from "./FormSendChat";
import {
	useGetChatsListQuery,
	useLazyGetConversationQuery,
} from "@/redux/api/chat/chat.api";
import Alert from "@/components/common/Alert";
import chatImg from "@/assets/images/admin/chat/chat.png";
import { useEffect, useRef, useState } from "react";
import { Chat as ChatType, Conversation } from "@/redux/api/chat/chat.type";
import { useAppSelector } from "@/redux/hooks";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";
import {
	cn,
	getInitialsOfName,
	getUserAvatarUrl,
	getUserName,
} from "@/lib/utils";
import { pusher } from "@/redux/api/chat/pusher.config";
import { ScrollArea } from "@/components/ui/scroll-area";

const Chat = () => {
	const { user } = useAppSelector((state) => state.user);
	const { data, isLoading } = useGetChatsListQuery();
	const [conversation, setConversation] = useState<Conversation>();
	const [fetchConversation, { isLoading: isFetchingConversation }] =
		useLazyGetConversationQuery();
	const messagesEndRef = useRef<HTMLDivElement>(null);

	const getConversation = async (conversation: Conversation) => {
		const { data } = await fetchConversation({
			user_two_id: conversation.customer.id,
		});
		setConversation(data);
	};

	useEffect(() => {
		if (data && data.length > 0) {
			getConversation(data[0]);
		}
	}, [data]);

	useEffect(() => {
		if (!conversation) return;

		const channel = pusher.subscribe(`conversation.${conversation.id}`);
		const messageHandler = () => {
			getConversation(conversation);
		};

		channel.bind("new-message", messageHandler);

		return () => {
			channel.unbind("new-message", messageHandler);
			pusher.unsubscribe(`conversation.${conversation.id}`);
		};
	}, [conversation]);

	useEffect(() => {
		if (conversation) {
			messagesEndRef.current?.scrollIntoView({
				behavior: "smooth",
			});
		}
	}, [conversation]);

	return (
		<div className="flex gap-3">
			<div className="w-1/4 mx-1 my-1 card-shadow  relative">
				<div className="mb-8 border-b-4 border-th-gray-e6 relative">
					<input
						type="search"
						className="w-full py-3 px-3 text-sm"
						placeholder="Recherchez par utilisateur..."
					/>
					<CiSearch
						className="absolute right-0 top-4 text-th-gray-c9"
						fontSize={20}
					/>
				</div>
				<div className="px-3">
					{!isLoading ? (
						data && data?.length > 0 ? (
							data.map((itm) => (
								<div
									className={cn(
										"flex items-center justify-between mb-5 border-b border-th-gray-c9 border-dashed py-3 px-3 cursor-pointer hover:bg-slate-50 transition-colors duration-300 group",
										conversation?.id ===
											itm.id &&
											"bg-slate-100"
									)}
									key={itm.id}
									onClick={() =>
										getConversation(itm)
									}
								>
									<div className="flex items-center space-x-2">
										<div className="bg-slate-200 w-8 h-8 rounded-full flex items-center justify-center">
											<img
												src={getUserAvatarUrl(
													itm
														?.customer
														?.avatar_url
												)}
												alt={getUserName(
													itm?.customer
												)}
												className="w-6 h-6 object-cover rounded"
											/>
										</div>
										<h3 className="font-medium text-sm">
											{getUserName(
												itm?.customer
											)}
										</h3>
									</div>
									<p className="text-th-gray-c9 text-sm font-normal group-hover:text-slate-300 transition-colors duration-300">
										{formatDistanceToNow(
											new Date(
												itm?.messages?.[0]?.created_at
											),
											{ locale: fr }
										)}
									</p>
								</div>
							))
						) : (
							<Alert />
						)
					) : (
						<>
							{isLoading &&
								[...Array(3)].map(
									(_item, i) => (
										<ChatItemSkeleton
											key={i}
										/>
									)
								)}
						</>
					)}

					{/* <ModalSelectProvider /> */}
				</div>
			</div>
			<div className="w-3/4  mx-1 my-1 card-shadow relative">
				{conversation ? (
					<>
						<div className="border-b border-th-gray-e6 border-dashed flex items-center space-x-5 py-4 px-4">
							<div className="flex items-center space-x-3">
								<div className="bg-slate-200 w-10 h-10 rounded-full flex items-center justify-center">
									<Avatar className="cursor-pointer w-10 h-10">
										<AvatarImage
											src={getUserAvatarUrl(
												conversation
													?.customer
													?.avatar_url
											)}
											alt="user avatar"
										/>
										<AvatarFallback>
											AK
										</AvatarFallback>
									</Avatar>
								</div>
								<h3 className="font-medium text-sm">
									Message de{" "}
									{
										conversation
											?.customer
											?.firstname
									}
								</h3>
							</div>
							<CiGlobe
								className="text-black font-semibold"
								fontSize={22}
							/>
						</div>
						<ScrollArea className="scroll-area-class px-5 h-[60vh] overflow-y-auto pt-8 pb-3">
							<div>
								{conversation?.messages?.map(
									(chat) => {
										if (
											chat?.user_id !==
											user?.id
										) {
											return (
												<CustomerMessageItem
													item={
														chat
													}
													key={
														chat.id
													}
													avatar={
														conversation
															?.customer
															?.avatar_url
													}
													username={getUserName(
														conversation?.customer
													)}
												/>
											);
										}
										return (
											<ProviderMessageItem
												item={
													chat
												}
												key={
													chat.id
												}
												avatar={
													user?.avatar_url
												}
												username={
													user?.firstname
												}
											/>
										);
									}
								)}
							</div>
							<div ref={messagesEndRef} />
						</ScrollArea>
						<div className="px-5">
							<FormSendChat
								conversationId={
									conversation?.id
								}
							/>
						</div>
					</>
				) : (
					<>
						{isFetchingConversation ? (
							<div className="animate-pulse">
								<div className="mb-8 border-b border-th-gray-e6 border-dashed flex items-center space-x-5 py-4 px-4">
									<div className="flex items-center space-x-3">
										<div className="bg-slate-200 w-10 h-10 rounded-full flex items-center justify-center" />
										<div className="bg-slate-200 w-28 h-3 rounded-full" />
									</div>
								</div>
								<div className="px-5">
									{[...Array(5)].map(
										(_item, i) => (
											<div key={i}>
												<div className="flex items-center space-x-3">
													<div className="bg-slate-200 w-10 h-10 rounded-full flex items-center justify-center" />
													<div className="bg-slate-200 w-36 h-6 rounded-full" />
												</div>
												<div className="flex items-center justify-end space-x-3">
													<div className="bg-slate-200 w-36 h-6 rounded-full" />
													<div className="bg-slate-200 w-10 h-10 rounded-full flex items-center justify-center" />
												</div>
											</div>
										)
									)}
								</div>
							</div>
						) : (
							<div className="w-full flex justify-center items-center h-[70vh]">
								<img src={chatImg} alt="chat" />
							</div>
						)}
					</>
				)}
			</div>
		</div>
	);
};

interface MessageItemProps {
	item: ChatType;
	avatar?: string;
	username?: string;
}

function CustomerMessageItem({ item, avatar, username }: MessageItemProps) {
	return (
		<div className="flex items-start space-x-4 lg:w-1/2 mb-3">
			<div className="border-4 border-slate-200 rounded-full flex items-center justify-center">
				<Avatar className="cursor-pointer w-10 h-10">
					<AvatarImage src={avatar} alt={username} />
					<AvatarFallback>
						{getInitialsOfName(username)}
					</AvatarFallback>
				</Avatar>
			</div>
			<div className="space-y-1">
				<div className="bg-[#F5F5F5] text-dark py-3 px-3 rounded-[30px] rounded-bl-none">
					<p className="text-dark font-normal text-sm">
						{item.message}
					</p>
				</div>
				<p className="text-th-gray-c9 text-sm">
					{formatDistanceToNow(new Date(item.created_at), {
						addSuffix: true,
						locale: fr,
					})}
				</p>
			</div>
		</div>
	);
}

function ProviderMessageItem({ item, avatar, username }: MessageItemProps) {
	return (
		<div className="flex items-start justify-end space-x-4 lg:w-1/2 ml-auto mb-3">
			<div className="space-y-1">
				<div className="bg-[#4A4E7B] text-white py-3 px-3 rounded-[30px] rounded-br-none">
					<p className="text-white font-normal text-sm">
						{item.message}
					</p>
				</div>
				<p className="text-th-gray-c9 text-sm">
					{formatDistanceToNow(new Date(item.created_at), {
						addSuffix: true,
						locale: fr,
					})}
				</p>
			</div>
			<div className="border-4 border-slate-200 rounded-full flex items-center justify-center overflow-hidden">
				<img
					src={getUserAvatarUrl(avatar)}
					alt={username}
					className="w-10 h-10 object-cover rounded"
				/>
			</div>
		</div>
	);
}

export function ChatItemSkeleton() {
	return (
		<div className="border-b border-th-gray-c9 border-dashed pb-3 px-3 animate-pulse mb-3 ">
			<div className="flex items-center space-x-2 w-full">
				<div className="bg-slate-200 min-w-9 min-h-9 rounded-full flex items-center justify-center" />
				<div className="bg-slate-200 w-full h-3 rounded-full" />
			</div>
		</div>
	);
}

export default Chat;
