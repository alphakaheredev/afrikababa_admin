import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabFaq from "./TabsContent/Faq";

const Settings = () => {
	return (
		<Tabs defaultValue="faq" className="w-full">
			{/* Tabs List */}
			<TabsList className="w-full justify-start bg-gray-100 space-x-4 mb-5 py-6 px-2">
				<TabsTrigger value="faq">Faq</TabsTrigger>
				<TabsTrigger value="condition">
					Termes et conditions
				</TabsTrigger>
				<TabsTrigger value="account">
					Moyens de paiements
				</TabsTrigger>
				<TabsTrigger value="password">Condition</TabsTrigger>
			</TabsList>

			{/* Tabs Content */}
			<TabsContent value="faq">
				<TabFaq />
			</TabsContent>
			<TabsContent value="conditon">
				Make changes to your account here.
			</TabsContent>
			<TabsContent value="account">
				Make changes to your account here.
			</TabsContent>
			<TabsContent value="password">
				Change your password here.
			</TabsContent>
		</Tabs>
	);
};

export default Settings;
