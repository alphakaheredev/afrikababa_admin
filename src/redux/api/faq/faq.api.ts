import { createApi } from "@reduxjs/toolkit/query/react";
import { Faq, FaqFormData } from "./faq.type";
import { PaginationResults, TypeQuery } from "@/lib/type";
import { baseQueryWithLogout } from "@/lib/baseQuery";

export const FaqApi = createApi({
	reducerPath: "faqApi",
	tagTypes: ["faq"],
	baseQuery: baseQueryWithLogout,
	endpoints: (build) => ({
		getFaqsList: build.query<PaginationResults<Faq>, TypeQuery>({
			query: (query) => ({
				url: `faqs`,
				method: "GET",
				params: { ...query },
			}),
			providesTags: ["faq"],
		}),

		createOrUpdateFaq: build.mutation<
			Faq,
			{
				id?: number;
				data: FaqFormData;
			}
		>({
			query: ({ id, data }) => {
				if (id) {
					return {
						url: `faqs/${id}`,

						method: "PUT",
						body: data,
					};
				}
				return {
					url: `faqs`,
					method: "POST",
					body: data,
				};
			},
			invalidatesTags: ["faq"],
		}),

		deleteFaq: build.mutation<Faq, number>({
			query: (id) => ({
				url: `faqs/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["faq"],
		}),
	}),
});

export const {
	useCreateOrUpdateFaqMutation,
	useGetFaqsListQuery,
	useDeleteFaqMutation,
} = FaqApi;
