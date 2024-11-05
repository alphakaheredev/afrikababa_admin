import { TypeQuery } from "@/lib/type";
import { Category } from "../category/category.type";
import { Shop } from "../shop/shop.type";
import { User } from "../user/user.type";

export type Product = {
	id: number;
	name: string;
	slug: string;
	shop_id: number;
	shop: Shop;
	description: string;
	price: number;
	quantity: number;
	sku: string;
	category_id: number;
	category: Category;
	status: "active" | "inactive";
	product_length: number;
	product_height: number;
	product_weight: number;
	product_width: number;
	created_at: string;
	main_image_url: string;
	main_image: string;
	updated_at: string;
	product_dimensions: {
		length: number;
		height: number;
		width: number;
		weight: number;
	};
	reviews: Review[];
	video: string;
};

export type ProductFormData = Pick<
	Product,
	| "name"
	| "description"
	| "price"
	| "quantity"
	| "shop_id"
	| "category_id"
	| "video"
	| "status"
> & {
	main_image_url: File;
	product_weight: number;
	product_height: number;
	product_length: number;
	product_width: number;
	main_image: File;
	product_media: File[];
};

export type ProductQuery = TypeQuery & {
	shop_id?: number;
	category_id?: number;
};

export type Review = {
	id: number;
	review: string;
	rating: number;
	comment: string;
	user_id: number;
	user: User;
	product_id: number;
	product: Product;
};

export interface ProductMedia {
	id: number;
	product_id: number;
	media_url: string;
}