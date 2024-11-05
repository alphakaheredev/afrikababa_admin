import { createApi } from "@reduxjs/toolkit/query/react";
import { Chat, ChatFormData } from "./chat.type";
import { PaginationResults, TypeQuery } from "@/lib/type";
import { baseQueryWithLogout } from "@/lib/baseQuery";

export const ChatApi = createApi({
	reducerPath: "chatApi",
	tagTypes: ["chat"],
	baseQuery: baseQueryWithLogout,
	endpoints: (build) => ({
		getChatsList: build.query<PaginationResults<Chat>, TypeQuery>({
			query: (query) => ({
				url: `messages`,
				method: "GET",
				params: { ...query },
			}),
			providesTags: ["chat"],
		}),

		createChat: build.mutation<Chat, ChatFormData>({
			query: (data) => ({
				url: `messages`,
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

export const {
	useGetChatsListQuery,
	useCreateChatMutation,
	useGetChatsByUserQuery,
} = ChatApi;
