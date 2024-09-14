import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Faq, FaqFormData } from "./faq.type";
import { ApiBaseUrl } from "@/lib/http";
import { PaginationResults, TypeQuery } from "@/lib/type";
import { prepareHeaders } from "../user/user.api";

export const FaqApi = createApi({
	reducerPath: "faqApi",
	tagTypes: ["faq"],
	baseQuery: fetchBaseQuery({
		baseUrl: `${ApiBaseUrl}/api/`,
		prepareHeaders,
	}),
	endpoints: (build) => ({
		getFaqsList: build.query<PaginationResults<Faq>, TypeQuery>({
			query: (query) => ({
				url: `faqs/`,
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
						url: `faqs/${id}/`,

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
				url: `faqs/${id}/`,
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
