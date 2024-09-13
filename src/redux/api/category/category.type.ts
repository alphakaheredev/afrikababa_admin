export type Category = {
	id: number;
	name: string;
	description?: string;
	icon: string;
	created_at: string;
};

export type CategoryFormData = { icon?: File } & Pick<
	Category,
	"name" | "description"
>;
