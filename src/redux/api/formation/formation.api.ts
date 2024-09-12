import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
	Diplome,
	Domaine,
	Filiere,
	Formation,
	FormationFormData,
} from "./formation.type";
import { PaginationResults, TypeQuery } from "../user/user.type";
import { prepareHeaders } from "../user/user.api";
import { ApiBaseUrl } from "@/lib/http";

export const FormationApi = createApi({
	reducerPath: "formationApi",
	tagTypes: [
		"formation",
		"formationByEcole",
		"diplome",
		"domaine",
		"filiere",
	],
	baseQuery: fetchBaseQuery({
		baseUrl: `${ApiBaseUrl}/api/`,
		prepareHeaders,
	}),
	endpoints: (build) => ({
		getFormationsList: build.query<
			PaginationResults<Formation>,
			TypeQuery
		>({
			query: (query) => ({
				url: `formations/`,
				method: "GET",
				params: { ...query },
			}),
			providesTags: ["formation"],
		}),

		getformationsByEcole: build.query<
			PaginationResults<Formation>,
			TypeQuery
		>({
			query: ({ slug, ...query }) => ({
				url: `ecole/${slug}/formations/`,
				params: { ...query },
			}),
			providesTags: ["formation"],
		}),

		createOrUpdateFormation: build.mutation<
			Formation,
			{
				slug?: string;
				data: FormationFormData | FormData;
			}
		>({
			query: ({ slug, data }) => {
				if (slug) {
					return {
						url: `formations/${slug}/`,

						method: "PUT",
						body: data,
					};
				}
				return {
					url: `formations/`,
					method: "POST",
					body: data,
				};
			},
			invalidatesTags: ["formation"],
		}),

		deleteFormation: build.mutation<Formation, number>({
			query: (slug) => ({
				url: `formations/${slug}/`,
				method: "DELETE",
			}),
			invalidatesTags: ["formation"],
		}),

		getDiplomesList: build.query<PaginationResults<Diplome>, void>({
			query: () => "diplomes/",
			providesTags: ["diplome"],
		}),

		getDomainesList: build.query<PaginationResults<Domaine>, TypeQuery>(
			{
				query: (query) => ({
					url: "domaines/",
					params: { ...query },
				}),
				providesTags: ["domaine"],
			}
		),

		getFilieresList: build.query<PaginationResults<Filiere>, void>({
			query: () => "filieres/",
			providesTags: ["filiere"],
		}),
	}),
});

export const {
	useGetFormationsListQuery,
	useCreateOrUpdateFormationMutation,
	useDeleteFormationMutation,
	useGetformationsByEcoleQuery,
	useGetDiplomesListQuery,
	useGetDomainesListQuery,
	useGetFilieresListQuery,
} = FormationApi;
