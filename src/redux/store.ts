import { configureStore } from "@reduxjs/toolkit";
import { AuthApi } from "./api/auth/auth.api";
import { UserSlice } from "./features/user.slice";
import { UserApi } from "./api/user/user.api";
import { FormationApi } from "./api/formation/formation.api";
import { currentEnv, Env } from "@/lib/http";

export const store = configureStore({
	reducer: {
		[UserSlice.name]: UserSlice.reducer,

		[AuthApi.reducerPath]: AuthApi.reducer,
		[UserApi.reducerPath]: UserApi.reducer,
		[FormationApi.reducerPath]: FormationApi.reducer,
	},
	devTools: Env === currentEnv,
	// @ts-ignore
	middleware: (getDefaultMiddleware) => [
		...getDefaultMiddleware(),
		AuthApi.middleware,
		UserApi.middleware,
		FormationApi.middleware,
	],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
