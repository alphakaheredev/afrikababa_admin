export type Category = {
	id: number;
	name: string;
	description: string;
	logo: string;
	created_at: string;
};

export type CategoryFormData = {
	name: string;
	description?: string;
	logo?: File;
};
