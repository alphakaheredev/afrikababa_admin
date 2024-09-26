import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AuthState, User, UserFormData } from "./user.type";
import { RootState } from "../../store";
import { ApiBaseUrl } from "@/lib/http";
import { AppStorage } from "@/lib/storage";
import { PaginationResults, TypeQuery } from "@/lib/type";

export const prepareHeaders = (
	headers: Headers,
	{ getState }: { getState: any }
) => {
	const token =
		(getState() as RootState).user.token ??
		AppStorage.getItem<AuthState>("user")?.token;
	headers.set("accept", "application/json");
	headers.set("Access-Control-Allow-Origin", "*");
	if (token) {
		headers.set("authorization", `Bearer ${token}`);
	}
	return headers;
};

export const UserApi = createApi({
	reducerPath: "userApi",
	tagTypes: ["users"],
	baseQuery: fetchBaseQuery({
		baseUrl: `${ApiBaseUrl}/api/`,
		prepareHeaders,
	}),
	endpoints: (build) => ({
		getUsersList: build.query<PaginationResults<User>, TypeQuery>({
			query: (query) => ({
				url: `users`,
				method: "GET",
				params: { ...query },
			}),
			providesTags: ["users"],
		}),

		createOrUpdateUser: build.mutation<
			User,
			{
				id?: number;
				data: UserFormData | FormData;
			}
		>({
			query: ({ id, data }) => {
				if (id) {
					return {
						url: `users/update/${id}`,
						method: "POST",
						body: data,
					};
				}
				return {
					url: `users`,
					method: "POST",
					body: data,
				};
			},
			invalidatesTags: ["users"],
		}),

		deleteUser: build.mutation<User, number>({
			query: (slug) => ({
				url: `users/${slug}`,
				method: "DELETE",
			}),
			invalidatesTags: ["users"],
		}),
		//patch user status
		updateUserStatus: build.mutation<
			User,
			{ id: number; status: number }
		>({
			query: ({ id, status }) => ({
				url: `users/${id}/status`,
				method: "PATCH",
				body: { status },
			}),
			invalidatesTags: ["users"],
		}),
	}),
});

export const {
	useCreateOrUpdateUserMutation,
	useGetUsersListQuery,
	useDeleteUserMutation,
	useUpdateUserStatusMutation,
} = UserApi;
