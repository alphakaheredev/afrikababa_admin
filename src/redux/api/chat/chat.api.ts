import { createApi } from "@reduxjs/toolkit/query/react";
import { Chat, ChatFormData, Conversation } from "./chat.type";
import { baseQueryWithLogout } from "@/lib/baseQuery";
import { User } from "../user/user.type";
import { channel } from "./pusher.config";
import { useEffect, useState } from "react";

export const ChatApi = createApi({
	reducerPath: "chatApi",
	tagTypes: ["chat", "conversation"],
	baseQuery: baseQueryWithLogout,
	endpoints: (build) => ({
		getChatsList: build.query<Conversation[], void>({
			query: () => ({
				url: `conversations`,
				method: "GET",
			}),
			providesTags: ["chat"],
			transformResponse: (response: {
				data: {
					messages: Chat[];
					user_one: User;
					id: number;
					created_at: string;
				}[];
			}) => {
				return response?.data
					?.map((item) => ({
						messages: item.messages,
						customer: item.user_one,
						id: item.id,
					}))
					?.filter((item) => item?.messages?.length > 0);
			},
		}),

		getConversation: build.query<Conversation, { user_two_id: number }>(
			{
				query: ({ user_two_id }) => ({
					url: `conversations`,
					method: "POST",
					body: { user_two_id },
				}),
				providesTags: ["conversation"],
				transformResponse: (response: {
					data: {
						messages: Chat[];
						user_one: User;
						id: number;
					};
				}) => {
					return {
						messages: response.data.messages,
						customer: response.data.user_one,
						id: response.data.id,
					};
				},
			}
		),

		sendMessage: build.mutation<Chat, ChatFormData>({
			query: (data) => ({
				url: `conversations/send-message`,
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["conversation"],
		}),

		createOrUpdateChat: build.mutation<
			{ data: Chat },
			{ id: number; data: ChatFormData | FormData }
		>({
			query: ({ id, data }) => ({
				url: `messages${id ? `/${id}` : ""}`,
				method: id ? "PUT" : "POST",
				body: data,
			}),
			invalidatesTags: ["conversation"],
		}),

		deleteChat: build.mutation<Chat, number>({
			query: (id) => ({
				url: `messages/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["conversation"],
		}),

		getChatsByUser: build.query<Chat[], void>({
			query: () => ({
				url: `messages/`,
				method: "GET",
			}),
		}),
	}),
});

export function useChatMessages() {
	const [messages, setMessages] = useState<any[]>([]);

	useEffect(() => {
		const messageHandler = (data: any) => {
			setMessages((prevMessages) => [...prevMessages, data]);
		};

		channel.bind("new-message", messageHandler);

		return () => {
			channel.unbind("new-message", messageHandler);
		};
	}, []);

	return messages;
}

export const {
	useGetChatsListQuery,
	useSendMessageMutation,
	useGetChatsByUserQuery,
	useGetConversationQuery,
} = ChatApi;
