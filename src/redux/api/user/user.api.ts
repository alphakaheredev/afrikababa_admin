import { createApi } from "@reduxjs/toolkit/query/react";
import { User, UserFormData } from "./user.type";
import { PaginationResults, TypeQuery } from "@/lib/type";
import { baseQueryWithLogout } from "@/lib/baseQuery";

export const UserApi = createApi({
	reducerPath: "userApi",
	tagTypes: ["users"],
	baseQuery: baseQueryWithLogout,
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
					url: `auth/admin/register`,
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
