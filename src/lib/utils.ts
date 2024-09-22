import { ROLE, User } from "@/redux/api/user/user.type";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getInitialsOfName(name: string) {
	if (!name) return "";
	const words = name.split(" ");
	const initials = words
		.map((word) => word.charAt(0).toUpperCase())
		.join("");

	return initials;
}

export function addAdminPrefix(route: string) {
	return `/admin/${route}`;
}

// function to format role
export function formatRole(role: ROLE) {
	if (role === ROLE.admin) return "Administrateur";
	if (role === ROLE.supplier) return "Fabricant";
	if (role === ROLE.customer) return "Client";
	if (role === ROLE.forwarder) return "Transitaire";
	return role;
}

// function to get name from User
export function getUserName(user: User) {
	return `${user.firstname} ${user.lastname}`;
}

// funtion to get user avatar url else return default avatar image
export function getUserAvatarUrl(avatar_url: string) {
	if (avatar_url) return avatar_url;
	return "/images/avatar-default.png";
}

export function getCategoryIconUrl(icon: string) {
	if (icon) return icon;
	return "/images/diamond.png";
}

export function getLogoUrl(icon: string) {
	if (icon) return icon;
	return "/images/diamond.png";
}

export function getImageUrl(image_url: string) {
	if (image_url) return image_url;
	return "/images/product-default.png";
}

export function cleannerError(
	errors: any,
	cleanner: any,
	timeOut: number = 5000
) {
	if (errors) {
		setTimeout(
			() =>
				Object.entries(errors).map(([key]: any) =>
					cleanner(key)
				),
			timeOut
		);
	}
}


// format date to "Il y a 10 jours"
export function formatDate(date: string) {
	const now = new Date();
	const createdAt = new Date(date);
	const diffTime = Math.abs(now.getTime() - createdAt.getTime());
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	return `Il y a ${diffDays} jours`;
}

// format amount to "100.000F"
export function formatAmount(amount: number) {
	return `${amount.toLocaleString("fr-FR")}F`;
}