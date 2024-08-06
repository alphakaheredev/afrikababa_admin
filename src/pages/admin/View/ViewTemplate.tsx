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
import React from "react";

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
