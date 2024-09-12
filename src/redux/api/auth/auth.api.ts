import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoginFormData, LoginResult, ChangePasswordData } from "./auth.type";
import { User } from "../user/user.type";
import { prepareHeaders } from "../user/user.api";
import { ApiBaseUrl } from "@/lib/http";

export const AuthApi = createApi({
	reducerPath: "auth",
	tagTypes: ["auth"],
	baseQuery: fetchBaseQuery({
		baseUrl: `${ApiBaseUrl}/api/`,
		prepareHeaders,
	}),
	endpoints: (build) => ({
		// login user mutation
		loginUser: build.mutation<LoginResult, LoginFormData>({
			query: (data) => ({
				url: "auth/login",
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["auth"],
		}),

		changePassword: build.mutation<User, ChangePasswordData>({
			query: (data) => ({
				url: "auth/change-password/",
				method: "PUT",
				body: data,
			}),
			invalidatesTags: ["auth"],
		}),
	}),
});

export const { useLoginUserMutation, useChangePasswordMutation } = AuthApi;
