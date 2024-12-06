import { createApi } from "@reduxjs/toolkit/query/react";
import { CountryForwarder, ROLE, User, UserFormData } from "./user.type";
import { PaginationResults, TypeQuery } from "@/lib/type";
import { baseQueryWithLogout } from "@/lib/baseQuery";

export const UserApi = createApi({
	reducerPath: "userApi",
	tagTypes: ["users", "countryForwarders"],
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
				role: ROLE;
			}
		>({
			query: ({ id, role, data }) => {
				if (role === ROLE.forwarder) {
					return {
						url: `register-transitaire`,
						method: "POST",
						body: data,
					};
				} else {
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
				}
			},
			invalidatesTags: ["users", "countryForwarders"],
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

		getForwardersList: build.query<
			PaginationResults<CountryForwarder>,
			TypeQuery
		>({
			query: () => ({
				url: `transitaire_pays`,
				method: "GET",
			}),
			providesTags: ["countryForwarders"],
			transformResponse: (response: {
				data: PaginationResults<CountryForwarder>;
			}) => {
				return {
					data: response.data.data.map((user) => ({
						...user,
						role: ROLE.forwarder,
					})),
					meta: response.data.meta,
				};
			},
		}),

		deleteCountryForwarder: build.mutation<CountryForwarder, number>({
			query: (id) => ({
				url: `transitaire_pays/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["countryForwarders"],
		}),
	}),
});

export const {
	useCreateOrUpdateUserMutation,
	useGetUsersListQuery,
	useDeleteUserMutation,
	useUpdateUserStatusMutation,
	useLazyGetUsersListQuery,
	useGetForwardersListQuery,
	useDeleteCountryForwarderMutation,
} = UserApi;
