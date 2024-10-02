import { createApi } from "@reduxjs/toolkit/query/react";
import { Product, ProductQuery } from "./product.type";
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
	}),
});

export const {
	useGetProductsListQuery,
	useDeleteProductMutation,
	useUpdateProductStatusMutation,
	useGetTopSellingProductsQuery,
} = ProductApi;
