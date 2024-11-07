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

const SettingsSupplier = () => {
	const { onSubmit, register, isLoading, errors, shop } =
		useEditPaymentInfos();
	return (
		<Tabs defaultValue="payment" className="w-full">
			<TabsList className="w-full justify-start bg-gray-100 space-x-4">
				<TabsTrigger value="payment">
					Paramètres de paiement
				</TabsTrigger>
			</TabsList>
			<TabsContent value="payment">
				{/* accordion */}
				<form onSubmit={onSubmit}>
					<Accordion
						type="single"
						collapsible
						className="w-full"
					>
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
								<Input
									label="Adresse email de votre paypal"
									placeholder="Entrez votre adresse email"
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
								/>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
					<Accordion
						type="single"
						collapsible
						className="w-full"
					>
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
									<span>
										Carte bancaire
									</span>
								</div>
							</AccordionTrigger>

							<AccordionContent className="text-th-gray text-sm font-normal pt-5">
								<Input
									label="IBAN et N° de compte bancaire"
									placeholder="Entrez votre IBAN et N° de compte bancaire"
									type="text"
									id="bank_account_number"
									{...register(
										"bank_transfer_details"
									)}
									error={
										errors
											.bank_transfer_details
											?.message
									}
								/>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
					<Accordion
						type="single"
						collapsible
						className="w-full"
					>
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

							<AccordionContent className="text-th-gray text-sm font-normal pt-5 space-y-3">
								<Input
									label="Numéro western union"
									placeholder="Entrez votre numero"
									type="text"
									id="name"
									value={
										shop?.sales_manager_name
									}
									disabled
								/>
								<Input
									label="Numéro western union"
									placeholder="Entrez votre numero"
									type="text"
									id="bank_account_number"
									{...register(
										"western_union_details"
									)}
									error={
										errors
											.western_union_details
											?.message
									}
								/>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
					<div className="flex justify-end">
						<ButtonSubmit
							isLoading={isLoading}
							label="Enregistrer les modifications"
							className="w-fit"
						/>
					</div>
				</form>
			</TabsContent>
		</Tabs>
	);
};

export default SettingsSupplier;
