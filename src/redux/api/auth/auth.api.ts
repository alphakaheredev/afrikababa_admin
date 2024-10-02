import { createApi } from "@reduxjs/toolkit/query/react";
import {
	LoginFormData,
	LoginResult,
	ChangePasswordData,
	RegisterFormData,
} from "./auth.type";
import { User } from "../user/user.type";
import { baseQueryWithLogout } from "@/lib/baseQuery";

export const AuthApi = createApi({
	reducerPath: "auth",
	tagTypes: ["auth"],
	baseQuery: baseQueryWithLogout,
	endpoints: (build) => ({
		// register user mutation
		registerUser: build.mutation<LoginResult, RegisterFormData>({
			query: (data) => ({
				url: "auth/register",
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["auth"],
		}),
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

export const {
	useLoginUserMutation,
	useChangePasswordMutation,
	useRegisterUserMutation,
} = AuthApi;
