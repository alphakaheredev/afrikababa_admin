import { createApi } from "@reduxjs/toolkit/query/react";
import { Payment, PaymentMethod } from "./payment.type";
import { PaginationResults, TypeQuery } from "@/lib/type";
import { baseQueryWithLogout } from "@/lib/baseQuery";

export const PaymentApi = createApi({
	reducerPath: "paymentApi",
	tagTypes: ["payments", "payment_methods"],
	baseQuery: baseQueryWithLogout,
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

		//get payment method
		getPaymentMethod: build.query<
			PaginationResults<PaymentMethod>,
			TypeQuery
		>({
			query: (query) => ({
				url: `payment_methods`,
				method: "GET",
				params: { ...query },
			}),
			providesTags: ["payment_methods"],
		}),

		// create or update payment method
		createOrUpdatePaymentMethod: build.mutation<
			PaymentMethod,
			{ id?: number; data: PaymentMethodData | FormData }
		>({
			query: ({ id, data }) => ({
				url: `payment_methods${id ? `/update/${id}` : ""}`,
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["payment_methods"],
		}),

		deletePaymentMethod: build.mutation<PaymentMethod, number>({
			query: (id) => ({
				url: `payment_methods/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["payment_methods"],
		}),
	}),
});

export const {
	useGetPaymentsListQuery,
	useDeletePaymentMutation,
	useGetPaymentMethodQuery,
	useCreateOrUpdatePaymentMethodMutation,
	useDeletePaymentMethodMutation,
} = PaymentApi;
