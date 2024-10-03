import { Navigate, useLocation } from "react-router-dom";
import { ReactElement } from "react";
import { ROLE, User } from "@/redux/api/user/user.type";
import { useAppSelector } from "@/redux/hooks";

export const isAdmin = (user: User) => {
	return user?.role === ROLE.admin;
};

export const isSupplier = (user: User) => {
	return user?.role === ROLE.supplier;
};

export const ProtectedRoute = ({ children }: { children: ReactElement }) => {
	const { user, token } = useAppSelector((state) => state.user);
	const { pathname } = useLocation();

	if (!token || !user) {
		return <Navigate to="/" replace />;
	}

	if (isAdmin(user) && pathname.includes("/fournisseur/")) {
		return <Navigate to={"/admin"} replace />;
	}

	if (isSupplier(user) && pathname.includes("/admin")) {
		return <Navigate to={"/fournisseur"} replace />;
	}

	return children;
};

export const RedirectAuthRoute = ({ children }: { children: ReactElement }) => {
	const { token, user } = useAppSelector((state) => state.user);
	let path: string = "/admin";
	if (isSupplier(user as User)) {
		path = "/fournisseur";
	}

	return !token && !user?.id ? children : <Navigate to={path} replace />;
};
