import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../api/user/user.type";
import { AppStorage } from "@/lib/storage";
import { Shop } from "../api/shop/shop.type";

const initialState = AppStorage.getItem<AuthState>("user", {
	user: null,
	shop: null,
	token: undefined,
});
export const UserSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		onSetUser: (state, action: PayloadAction<AuthState["user"]>) => {
			state.user = action.payload;
			AppStorage.setItem("user", state);
		},
		onSetToken: (state, action: PayloadAction<AuthState["token"]>) => {
			state.token = action.payload;
			AppStorage.setItem("token", state.token);
		},
		onSetUserToken: (state, action: PayloadAction<AuthState>) => {
			state.user = action.payload.user;
			state.token = action.payload.token;
			AppStorage.setItem("user", state);
		},
		onSetShop: (state, action: PayloadAction<Shop>) => {
			state.shop = action.payload;
			AppStorage.setItem("user", state);
		},
		onlogout: (state) => {
			state.user = null;
			state.token = null;
			state.shop = null;
			AppStorage.setItem("user", state);
			AppStorage.clear();
		},
	},
});

export const { onSetUser, onSetUserToken, onSetToken, onlogout, onSetShop } =
	UserSlice.actions;
export default UserSlice.reducer;
