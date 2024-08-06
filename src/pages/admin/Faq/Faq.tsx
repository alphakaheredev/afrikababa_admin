import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl xl:text-4xl text-center border-b-4 border-[#E6E6E6] pb-4 text-dark mb-6">
        Foire des questions
      </h1>
      {[...Array(12)].map((_item, index) => (
        <Accordion type="single" collapsible className="w-full" key={index}>
          <AccordionItem value="item-1" className="border mb-4 px-2">
            <AccordionTrigger className="font-medium text-lg">
              Quelle est votre politique de remboursement ?
            </AccordionTrigger>
            <AccordionContent className="text-th-gray text-sm font-normal">
              Nous avons une politique de retour flexible. Si vous n'êtes pas
              satisfait de votre achat, vous pouvez retourner la plupart des
              articles dans les 30 jours pour un remboursement complet ou un
              échange. Veuillez consulter notre politique de retour pour plus de
              détails.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};

export default Faq;
