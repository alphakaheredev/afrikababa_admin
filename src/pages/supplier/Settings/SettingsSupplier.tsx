import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEditPaymentInfos } from "../shop/useCrudShop";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import Input from "@/components/ui/input";
import ButtonSubmit from "@/components/ui/buttonSubmit";
import paypal from "@/assets/images/payments/paypal.png";
import wu from "@/assets/images/payments/wu.png";
import cb from "@/assets/images/payments/cb.png";
import FormInfoBancaire from "./FormInfoBancaire";
import FormWesternUnion from "./FormWesternUnion";

const SettingsSupplier = () => {
	const { onSubmit, register, isLoading, errors, handleTypeChange } =
		useEditPaymentInfos();
	return (
		<Tabs defaultValue="payment" className="w-full">
			<TabsList className="w-full justify-start bg-gray-100 space-x-4">
				<TabsTrigger value="payment">
					Payment settings
				</TabsTrigger>
			</TabsList>
			<TabsContent value="payment">
				{/* accordion */}
				<Accordion type="single" collapsible className="w-full">
					<AccordionItem
						value="item-1"
						className="border mb-4 p-2 rounded"
					>
						<AccordionTrigger className="font-medium text-lg gap-2 hover:no-underline p-0">
							<div className="flex items-center gap-2">
								<img
									src={paypal}
									alt="paypal"
									className="w-8 h-8"
								/>
								<span>Paypal</span>
							</div>
						</AccordionTrigger>

						<AccordionContent className="text-th-gray text-sm font-normal pt-5">
							<form onSubmit={onSubmit}>
								<Input
									label="Your paypal email address"
									placeholder="Enter your email address"
									type="email"
									id="paypal_email"
									{...register(
										"paypal_details"
									)}
									error={
										errors
											.paypal_details
											?.message
									}
									required
								/>
								<div className="flex justify-end pt-5">
									<ButtonSubmit
										isLoading={
											isLoading
										}
										label="Save"
										className="w-fit"
										onClick={() =>
											handleTypeChange(
												"paypal"
											)
										}
									/>
								</div>
							</form>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
				<Accordion type="single" collapsible className="w-full">
					<AccordionItem
						value="item-2"
						className="border mb-4 p-2 rounded"
					>
						<AccordionTrigger className="font-medium text-lg gap-2 hover:no-underline p-0">
							<div className="flex items-center gap-2">
								<img
									src={cb}
									alt="paypal"
									className="w-8 h-8"
								/>
								<span>Bank transfer</span>
							</div>
						</AccordionTrigger>

						<AccordionContent className="text-th-gray text-sm font-normal pt-5 space-y-3">
							<FormInfoBancaire />
						</AccordionContent>
					</AccordionItem>
				</Accordion>
				<Accordion type="single" collapsible className="w-full">
					<AccordionItem
						value="item-2"
						className="border mb-4 p-2 rounded"
					>
						<AccordionTrigger className="font-medium text-lg gap-2 hover:no-underline p-0">
							<div className="flex items-center gap-2">
								<img
									src={wu}
									alt="wester union"
									className="w-8 h-8"
								/>
								<span>Western union</span>
							</div>
						</AccordionTrigger>

						<AccordionContent className="text-th-gray text-sm font-normal pt-5">
							<FormWesternUnion />
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</TabsContent>
		</Tabs>
	);
};

export default SettingsSupplier;
