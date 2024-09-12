import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AuthState, User, UserFormData } from "./user.type";
import { RootState } from "../../store";
import { ApiBaseUrl } from "@/lib/http";
import { AppStorage } from "@/lib/storage";

export const prepareHeaders = (
	headers: Headers,
	{ getState }: { getState: any }
) => {
	const token =
		(getState() as RootState).user.token ??
		AppStorage.getItem<AuthState>("user")?.token;
	headers.set("accept", "application/json");
	if (token) {
		headers.set("authorization", `Bearer ${token}`);
	}
	return headers;
};

export const UserApi = createApi({
	reducerPath: "userApi",
	tagTypes: ["user"],
	baseQuery: fetchBaseQuery({
		baseUrl: `${ApiBaseUrl}/api/`,
		prepareHeaders,
	}),
	endpoints: (build) => ({
		createOrUpdateUser: build.mutation<
			User,
			{
				slug?: string;
				data: UserFormData | FormData;
			}
		>({
			query: ({ slug, data }) => {
				if (slug) {
					return {
						url: `users/${slug}/`,

						method: "PUT",
						body: data,
					};
				}
				return {
					url: `users/`,
					method: "POST",
					body: data,
				};
			},
			invalidatesTags: ["user"],
		}),
	}),
});

export const { useCreateOrUpdateUserMutation } = UserApi;
