import Divider from "@/components/common/Divider";
import {
  FormLeftCol,
  FormRightCol,
  FormRow,
  InputFile,
  LabelWithDescription,
} from "@/components/form";
import ButtonSubmit from "@/components/ui/buttonSubmit";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";
import classique from "@/assets/images/admin/template/classique.png";
import standard from "@/assets/images/admin/template/standard.png";
import moderne from "@/assets/images/admin/template/moderne.png";
import minimal from "@/assets/images/admin/template/minimal.png";
import compacte from "@/assets/images/admin/template/compacte.png";

const modeles = [
  {
    name: "Classique",
    value: "classique",
    template: classique,
  },
  {
    name: "Compacte",
    value: "compacte",
    template: compacte,
  },
  {
    name: "Minimal",
    value: "minimal",
    template: minimal,
  },
  {
    name: "Moderne",
    value: "moderne",
    template: moderne,
  },
  {
    name: "Standard",
    value: "standard",
    template: standard,
  },
];

const ViewTemplate = () => {
  return (
    <React.Fragment>
      <h1 className="text-dark font-semibold text-xl">Ajouter produit</h1>
      <Divider margin="my-5" />
      <form>
        <FormRow>
          <FormLeftCol>
            <LabelWithDescription
              label="Description"
              description="Ajoutez la description de votre groupe et les informations nécessaires à partir d'ici"
            />
          </FormLeftCol>
          <FormRightCol>
            <div className="space-y-5">
              <Input label="Nom" id="nom" type="text" required />
              <InputFile label="Téléchargez votre icone" id="logo" />
            </div>
          </FormRightCol>
        </FormRow>
        <FormRow>
          <FormLeftCol>
            <LabelWithDescription
              label="Sélectionner les paramètres liés au groupe"
              description="Assurez-vous d'avoir sélectionné les paramètres nécessaires"
            />
          </FormLeftCol>
          <FormRightCol>
            <div className="space-y-5">
              <div>
                <Label>Sélectionnez votre mise en page</Label>
                <RadioGroup className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                  {modeles.map((item) => (
                    <label
                      key={item.value}
                      className="flex flex-col space-y-3 items-center border  border-th-gray-c9 p-2"
                      htmlFor={item.value}
                    >
                      <img src={item.template} alt="template image" />
                      <div className="space-x-2">
                        <RadioGroupItem
                          id={item.value}
                          value={item.value}
                          className="my-0"
                        />
                        <span className="text-th-gray text-sm cursor-pointer">
                          {item.name}
                        </span>
                      </div>
                    </label>
                  ))}
                </RadioGroup>
              </div>
              <div>
                <Label>Sélectionnez votre fiche produit</Label>
              </div>
            </div>
          </FormRightCol>
        </FormRow>
        <div className="flex justify-end pt-10">
          <ButtonSubmit className="ml-auto w-min" label="Enregistrez" />
        </div>
      </form>
    </React.Fragment>
  );
};

export default ViewTemplate;
