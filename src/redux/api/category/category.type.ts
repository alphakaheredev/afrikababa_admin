export type Category = {
	id: number;
	name: string;
	description: string;
	logo: string;
	created_at: string;
};

export type CategoryFormData = { logo: File } & Pick<
	Category,
	"name" | "description"
>;
