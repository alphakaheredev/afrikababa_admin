import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Payment } from "./payment.type";
import { ApiBaseUrl } from "@/lib/http";
import { PaginationResults, TypeQuery } from "@/lib/type";
import { prepareHeaders } from "../user/user.api";

export const PaymentApi = createApi({
	reducerPath: "paymentApi",
	tagTypes: ["payments"],
	baseQuery: fetchBaseQuery({
		baseUrl: `${ApiBaseUrl}/api/`,
		prepareHeaders,
	}),
	endpoints: (build) => ({
		getPaymentsList: build.query<PaginationResults<Payment>, TypeQuery>(
			{
				query: (query) => ({
					url: `payments`,
					method: "GET",
					params: { ...query },
				}),
				providesTags: ["payments"],
			}
		),

		deletePayment: build.mutation<Payment, number>({
			query: (id) => ({
				url: `payments/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["payments"],
		}),
	}),
});

export const { useGetPaymentsListQuery, useDeletePaymentMutation } = PaymentApi;
