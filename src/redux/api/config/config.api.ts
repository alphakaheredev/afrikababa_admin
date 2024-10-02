import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithLogout } from "@/lib/baseQuery";
import { AdminDashboardData, MonthlyOrderData } from "./config.type";

export const ConfigApi = createApi({
	reducerPath: "configApi",
	tagTypes: ["config"],
	baseQuery: baseQueryWithLogout,
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
		getHistoryOrdersStatistics: build.query<MonthlyOrderData, number>({
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
