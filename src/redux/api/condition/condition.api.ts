import { createApi } from "@reduxjs/toolkit/query/react";
import { Condition, ConditionFormData } from "./condition.type";
import { PaginationResults, TypeQuery } from "@/lib/type";
import { baseQueryWithLogout } from "@/lib/baseQuery";

export const ConditionApi = createApi({
	reducerPath: "conditionApi",
	tagTypes: ["term"],
	baseQuery: baseQueryWithLogout,
	endpoints: (build) => ({
		getConditionsList: build.query<
			PaginationResults<Condition>,
			TypeQuery
		>({
			query: (query) => ({
				url: `terms`,
				method: "GET",
				params: { ...query },
			}),
			providesTags: ["term"],
		}),

		createOrUpdateCondition: build.mutation<
			Condition,
			{
				id?: number;
				data: ConditionFormData;
			}
		>({
			query: ({ id, data }) => {
				if (id) {
					return {
						url: `terms/${id}`,
						method: "PATCH",
						body: data,
					};
				}
				return {
					url: `terms`,
					method: "POST",
					body: data,
				};
			},
			invalidatesTags: ["term"],
		}),

		deleteCondition: build.mutation<Condition, number>({
			query: (id) => ({
				url: `terms/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["term"],
		}),
	}),
});

export const {
	useCreateOrUpdateConditionMutation,
	useGetConditionsListQuery,
	useDeleteConditionMutation,
} = ConditionApi;
