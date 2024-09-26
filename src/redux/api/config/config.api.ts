import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiBaseUrl } from "@/lib/http";
import { prepareHeaders } from "../user/user.api";
import { AdminDashboardData } from "./config.type";

export const ConfigApi = createApi({
	reducerPath: "configApi",
	tagTypes: ["config"],
	baseQuery: fetchBaseQuery({
		baseUrl: `${ApiBaseUrl}/api/`,
		prepareHeaders,
	}),
	endpoints: (build) => ({
		getAdminDashboardData: build.query<AdminDashboardData, void>({
			query: () => ({
				url: `statistics`,
				method: "GET",
			}),
			providesTags: ["config"],
			transformResponse: (res: {
				statistics: AdminDashboardData;
			}) => res.statistics,
		}),
		getHistoryOrdersStatistics: build.query<any, number>({
			query: (year) => ({
				url: `stat/monthly-order-counts-for-year/${year}`,
				method: "GET",
			}),
			providesTags: ["config"],
		}),
	}),
});

export const {
	useGetAdminDashboardDataQuery,
	useGetHistoryOrdersStatisticsQuery,
} = ConfigApi;
