import { createApi } from "@reduxjs/toolkit/query/react";
import {
	Product,
	ProductFormData,
	ProductMedia,
	ProductQuery,
} from "./product.type";
import { PaginationResults } from "@/lib/type";
import { baseQueryWithLogout } from "@/lib/baseQuery";

export const ProductApi = createApi({
	reducerPath: "productApi",
	tagTypes: ["products"],
	baseQuery: baseQueryWithLogout,
	endpoints: (build) => ({
		getProductsList: build.query<
			PaginationResults<Product>,
			ProductQuery
		>({
			query: (query) => ({
				url: `products`,
				method: "GET",
				params: { ...query },
			}),
			providesTags: ["products"],
		}),

		getProductsListByShop: build.query<
			PaginationResults<Product>,
			ProductQuery
		>({
			query: ({ id, ...query }) => ({
				url: `boutique/products/${id}`,
				method: "GET",
				params: { ...query },
			}),
			providesTags: ["products"],
		}),

		createOrUpdateProduct: build.mutation<
			Product,
			{ id?: number; data: ProductFormData | FormData }
		>({
			query: ({ id, data }) => ({
				url: `products${id ? `/update/${id}` : ""}`,
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["products"],
		}),

		deleteProduct: build.mutation<Product, number>({
			query: (id) => ({
				url: `products/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["products"],
		}),

		updateProductStatus: build.mutation<
			Product,
			{ id: number; status: "active" | "inactive" }
		>({
			query: ({ id, status }) => ({
				url: `products/${id}/status`,
				method: "PATCH",
				body: { status },
			}),
			invalidatesTags: ["products"],
		}),

		// get top selling products
		getTopSellingProducts: build.query<{ data: Product[] }, void>({
			query: () => ({
				url: `product/top-selling`,
				method: "GET",
			}),
		}),

		//add product to media
		addMedia: build.mutation<{ data: ProductMedia }, FormData>({
			query: (data) => ({
				url: `product_media`,
				method: "POST",
				body: data,
			}),
		}),

		//delete media
		deleteMedia: build.mutation<Product, number>({
			query: (id) => ({
				url: `product_media/${id}`,
				method: "DELETE",
			}),
		}),
	}),
});

export const {
	useGetProductsListQuery,
	useDeleteProductMutation,
	useUpdateProductStatusMutation,
	useGetTopSellingProductsQuery,
	useCreateOrUpdateProductMutation,
	useAddMediaMutation,
	useDeleteMediaMutation,
	useGetProductsListByShopQuery,
} = ProductApi;
