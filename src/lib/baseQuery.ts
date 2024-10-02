import {
	BaseQueryFn,
	FetchArgs,
	fetchBaseQuery,
	FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { ApiBaseUrl } from "./http";
import { onlogout } from "@/redux/features/user.slice";
import { AppStorage } from "./storage";
import { AuthState } from "@/redux/api/user/user.type";
import { RootState } from "@/redux/store";

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

const baseQuery = fetchBaseQuery({
	baseUrl: `${ApiBaseUrl}/api/`,
	credentials: "include",
	prepareHeaders,
});

export const baseQueryWithLogout: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
> = async (args, api, extraOptions) => {
	const result = await baseQuery(args, api, extraOptions);
	if (result.error && result.error.status === 401) {
		api.dispatch(onlogout());
	}

	return result;
};
