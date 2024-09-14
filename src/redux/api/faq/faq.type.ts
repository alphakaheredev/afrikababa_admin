export type Faq = {
	id: number;
	question: string;
	answer: string;
	created_at: string;
};

export type FaqFormData = Pick<Faq, "question" | "answer">;
