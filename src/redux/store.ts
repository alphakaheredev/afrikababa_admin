import { configureStore } from "@reduxjs/toolkit";
import { AuthApi } from "./api/auth/auth.api";
import { UserSlice } from "./features/user.slice";
import { UserApi } from "./api/user/user.api";
import { currentEnv, Env } from "@/lib/http";

export const store = configureStore({
	reducer: {
		[UserSlice.name]: UserSlice.reducer,

		[AuthApi.reducerPath]: AuthApi.reducer,
		[UserApi.reducerPath]: UserApi.reducer,
	},
	devTools: Env === currentEnv,
	// @ts-ignore
	middleware: (getDefaultMiddleware) => [
		...getDefaultMiddleware(),
		AuthApi.middleware,
		UserApi.middleware,
	],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
