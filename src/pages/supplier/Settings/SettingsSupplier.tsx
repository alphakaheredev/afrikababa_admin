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

const SettingsSupplier = () => {
	const { onSubmit, register, isLoading, errors, shop, handleTypeChange } =
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
									required
								/>
								<div className="flex justify-end pt-5">
									<ButtonSubmit
										isLoading={
											isLoading
										}
										label="Enregistrer"
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
								<span>Virement bancaire</span>
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
							<form
								onSubmit={onSubmit}
								className="space-y-4"
							>
								<Input
									label="Prénoms et nom"
									placeholder="Entrez votre prénoms et nom"
									type="text"
									id="name"
									value={
										shop?.sales_manager_name
									}
									disabled
								/>
								<Input
									label="Numéro de téléphone"
									placeholder="Entrez votre numero"
									type="text"
									id="phone_number"
									{...register(
										"phone_number"
									)}
									error={
										errors.phone_number
											?.message
									}
								/>
								<Input
									label="Ville"
									placeholder="Entrez votre ville"
									type="text"
									id="city"
									value={shop?.city}
									disabled
								/>

								<div className="flex justify-end pt-5">
									<ButtonSubmit
										isLoading={
											isLoading
										}
										label="Enregistrer"
										className="w-fit"
									/>
								</div>
							</form>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</TabsContent>
		</Tabs>
	);
};

export default SettingsSupplier;
