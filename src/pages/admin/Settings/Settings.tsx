import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PaymentMethodTable from "./TabsContent/PaymentsMethods/PaymentMethodTable";
import TabFaq from "./TabsContent/Faq/Faq";
import ConditionTable from "./TabsContent/Condition/ConditionTable";

const Settings = () => {
	return (
		<Tabs defaultValue="faq" className="w-full">
			{/* Tabs List */}
			<TabsList className="w-full justify-start bg-gray-100 space-x-4 mb-5 py-6 px-2">
				<TabsTrigger value="faq">Faq</TabsTrigger>
				<TabsTrigger value="conditionTab">
					Termes et conditions
				</TabsTrigger>
				<TabsTrigger value="payment_method">
					Moyens de paiements
				</TabsTrigger>
			</TabsList>

			{/* Tabs Content */}
			<TabsContent value="faq">
				<TabFaq />
			</TabsContent>
			<TabsContent value="conditionTab">
				<ConditionTable />
			</TabsContent>
			<TabsContent value="payment_method">
				<PaymentMethodTable />
			</TabsContent>
		</Tabs>
	);
};

export default Settings;
