import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Shipping } from "./shipping.type";
import { ApiBaseUrl } from "@/lib/http";
import { PaginationResults, TypeQuery } from "@/lib/type";
import { prepareHeaders } from "../user/user.api";

export const ShippingApi = createApi({
	reducerPath: "shippingApi",
	tagTypes: ["shippings"],
	baseQuery: fetchBaseQuery({
		baseUrl: `${ApiBaseUrl}/api/`,
		prepareHeaders,
	}),
	endpoints: (build) => ({
		getShippingsList: build.query<
			PaginationResults<Shipping>,
			TypeQuery
		>({
			query: (query) => ({
				url: `shippings`,
				method: "GET",
				params: { ...query },
			}),
			providesTags: ["shippings"],
		}),

		deleteShipping: build.mutation<Shipping, number>({
			query: (id) => ({
				url: `shippings/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["shippings"],
		}),
	}),
});

export const { useGetShippingsListQuery, useDeleteShippingMutation } =
	ShippingApi;
