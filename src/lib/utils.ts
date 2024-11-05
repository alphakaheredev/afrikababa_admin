import { ConditionType } from "@/redux/api/condition/condition.type";
import { OrderStatus } from "@/redux/api/order/order.type";
import { RefundStatus } from "@/redux/api/refund/refund.type";
import { ROLE, User } from "@/redux/api/user/user.type";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ApiBaseUrl } from "./http";

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
	if (role === ROLE.supplier) return "Fournisseur";
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

export function getMainImage(main_image: string) {
	if (main_image) return ApiBaseUrl + main_image;
	return "/images/product-default.png";
}

export function getBannerUrl(banner_url: string) {
	if (banner_url) return banner_url;
	return "/images/banner.png";
}

export function getLogo(logo_url: string) {
	if (logo_url) return logo_url;
	return "/images/logo.png";
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

// format order status
export function formatOrderStatus(status: OrderStatus) {
	if (status === OrderStatus.PENDING) return "En attente";
	if (status === OrderStatus.CONFIRMED) return "Confirmé";
	if (status === OrderStatus.REJECTED) return "Rejeté";
	if (status === OrderStatus.DELIVERED) return "Livré";
	if (status === OrderStatus.SHIPPED) return "Expédié";
	if (status === OrderStatus.CANCELLED) return "Annulé";
	if (status === OrderStatus.IN_SHIPMENT) return "En transit";
	if (status === OrderStatus.IN_PROGRESS) return "En cours";
	if (status === OrderStatus.REFUNDED) return "Remboursé";
	if (status === OrderStatus.READY) return "Prêt à expédier";
	return status;
}

// format order status to badge
export function formatOrderStatusToBadge(status: OrderStatus) {
	if (status === OrderStatus.PENDING) return "bg-gray-900";
	if (status === OrderStatus.CONFIRMED) return "bg-green-500";
	if (status === OrderStatus.REJECTED) return "bg-red-500";
	if (status === OrderStatus.DELIVERED) return "bg-green-600";
	if (status === OrderStatus.SHIPPED) return "bg-purple-500";
	if (status === OrderStatus.CANCELLED) return "bg-red-500";
	if (status === OrderStatus.IN_SHIPMENT) return "bg-orange-500";
	if (status === OrderStatus.IN_PROGRESS) return "bg-gray-500";
	if (status === OrderStatus.REFUNDED) return "bg-teal-500";
	if (status === OrderStatus.READY) return "bg-blue-500";
	return "bg-gray-500";
}

// format condition type
export function formatConditionType(type: ConditionType) {
	if (type === ConditionType.terms) return "Termes et conditions";
	if (type === ConditionType.legal) return "Mentions légales";
	if (type === ConditionType.refundPolicy)
		return "Conditions de remboursement";
	if (type === ConditionType.privacy) return "Politique de confidentialité";
	return type;
}

// format condition target
export function formatConditionTarget(target: "supplier" | "customer") {
	if (target === "supplier") return "Fournisseur";
	if (target === "customer") return "Client";
	return target;
}

// format refund status
export function formatRefundStatus(status: RefundStatus) {
	if (status === RefundStatus.PENDING) return "En attente";
	if (status === RefundStatus.TRAITED) return "Traité";
	if (status === RefundStatus.IN_PROGRESS) return "En cours";
	return status;
}

export function formatRefundStatusToBadge(status: RefundStatus) {
	if (status === RefundStatus.PENDING) return "bg-gray-200 text-gray-800";
	if (status === RefundStatus.TRAITED) return "bg-green-600";
	if (status === RefundStatus.IN_PROGRESS)
		return "bg-blue-200 text-blue-800";
	return "bg-gray-500";
}

// format date to "12 Juillet 2024"
export function formatDateToDayMonthYear(date: string) {
	const formattedDate = new Date(date);
	return formattedDate.toLocaleDateString("fr-FR", {
		day: "2-digit",
		month: "long",
		year: "numeric",
	});
}

// check if file is an image
export function isImage(file: File) {
	return file.type.startsWith("image/");
}

export function appendDataToFormData(formData: FormData, data: any) {
	Object.entries(data).forEach(([key, value]) => {
		// check if is Array
		if (Array.isArray(value)) {
			value.forEach((item) => {
				formData.append(key, item);
			});
		} else if (value) {
			formData.append(key, value as string);
		}
	});
}