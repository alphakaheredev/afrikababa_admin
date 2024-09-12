import { Ecole } from "../ecole/ecole.type";

export interface Formation {
	id: number;
	slug: string;
	libelle: string;
	duree: string;
	description: string;
	accreditations: string;
	domaine: Domaine;
	filiere: Filiere;
	diplome: Diplome;
	lieu: string;
	active: boolean;
	ecole: Ecole;
	created_at: string;
	type: string;
}

export type FormationFormData = {
	domaine: number;
	ecole: number;
	filiere: number;
	diplome: number;
} & Pick<
	Formation,
	| "libelle"
	| "active"
	| "description"
	| "accreditations"
	| "duree"
	| "lieu"
	| "type"
>;

export interface Diplome {
	id: number;
	slug: string;
	libelle: string;
	created_at: string;
}

export interface Domaine {
	id: number;
	slug: string;
	libelle: string;
	filieres: Filiere[];
	created_at: string;
}

export interface Filiere {
	id: number;
	slug: string;
	libelle: string;
	domaine: Domaine;
	created_at: string;
}
