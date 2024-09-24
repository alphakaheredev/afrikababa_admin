export enum ConditionType {
	terms = "terms",
	privacy = "privacy",
	legal = "legal",
	refundPolicy = "refund_policy",
}

export type Condition = {
	id: number;
	target: "supplier" | "customer";
	type: ConditionType;
	content: string;
	created_at: string;
};

export type ConditionFormData = Pick<Condition, "target" | "type" | "content">;
