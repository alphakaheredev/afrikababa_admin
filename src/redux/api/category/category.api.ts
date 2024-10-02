import { createApi } from "@reduxjs/toolkit/query/react";
import { Category, CategoryFormData } from "./category.type";
import { PaginationResults, TypeQuery } from "@/lib/type";
import { baseQueryWithLogout } from "@/lib/baseQuery";

export const CategoryApi = createApi({
	reducerPath: "categoryApi",
	tagTypes: ["categories"],
	baseQuery: baseQueryWithLogout,
	endpoints: (build) => ({
		getCategorysList: build.query<
			PaginationResults<Category>,
			TypeQuery
		>({
			query: (query) => ({
				url: `categories`,
				method: "GET",
				params: { ...query },
			}),
			providesTags: ["categories"],
		}),

		createOrUpdateCategory: build.mutation<
			Category,
			{
				id?: number;
				data: CategoryFormData | FormData;
			}
		>({
			query: ({ id, data }) => {
				if (id) {
					return {
						url: `categories/update/${id}`,

						method: "POST",
						body: data,
					};
				}
				return {
					url: `categories`,
					method: "POST",
					body: data,
				};
			},
			invalidatesTags: ["categories"],
		}),

		deleteCategory: build.mutation<Category, number>({
			query: (slug) => ({
				url: `categories/${slug}`,
				method: "DELETE",
			}),
			invalidatesTags: ["categories"],
		}),
	}),
});

export const {
	useCreateOrUpdateCategoryMutation,
	useGetCategorysListQuery,
	useDeleteCategoryMutation,
} = CategoryApi;
