import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SettingsSupplier = () => {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="w-full justify-start bg-gray-100 space-x-4">
        <TabsTrigger value="account">Réglages géneraux</TabsTrigger>
        <TabsTrigger value="password">Paramètres de paiement</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  );
};

export default SettingsSupplier;
