import { createApi } from "@reduxjs/toolkit/query/react";
import { Chat, ChatFormData } from "./chat.type";
import { baseQueryWithLogout } from "@/lib/baseQuery";

export const ChatApi = createApi({
	reducerPath: "chatApi",
	tagTypes: ["chat"],
	baseQuery: baseQueryWithLogout,
	endpoints: (build) => ({
		getChatsList: build.query<{ messages: Chat[] }, void>({
			query: () => ({
				url: `conversations`,
				method: "POST",
			}),
			providesTags: ["chat"],
		}),

		getConversation: build.query<Chat, { user_two_id: number }>({
			query: ({ user_two_id }) => ({
				url: `conversations`,
				method: "POST",
				body: { user_two_id },
			}),
			providesTags: ["chat"],
		}),

		sendMessage: build.mutation<Chat, ChatFormData>({
			query: (data) => ({
				url: `conversations/send-message`,
				method: "POST",
				body: data,
			}),
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
		}),

		deleteChat: build.mutation<Chat, number>({
			query: (id) => ({
				url: `messages/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["chat"],
		}),

		getChatsByUser: build.query<Chat[], void>({
			query: () => ({
				url: `messages/`,
				method: "GET",
			}),
		}),
	}),
});

export const { useGetChatsListQuery, useSendMessageMutation, useGetChatsByUserQuery } =
	ChatApi;
