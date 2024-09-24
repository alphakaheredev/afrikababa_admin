export type Shipping = {
	id: number;
	delivery_method: ShippingMethod;
	status: string;
	batch_number: string;
	created_at: string;
};

export interface ShippingMethod {
	id: number;
	method_name: string;
	description: string;
	logo: string;
	created_at: string;
}

export type ShippingMethodData = {
	method_name: string;
	description: string;
	logo: string;
};

export type ShippingCost = {
	id: number;
	weight_range: string;
	cost_sea: number;
	cost_air: number;
	created_at: string;
};

export type ShippingCostData = {
	cost_sea: number;
	cost_air: number;
};
