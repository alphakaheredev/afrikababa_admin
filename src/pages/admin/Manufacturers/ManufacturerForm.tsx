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
import Textarea from "@/components/ui/textarea";
import React from "react";

const ManufacturerForm = () => {
  return (
    <React.Fragment>
      <h1 className="text-dark font-semibold text-xl">
        Créez une nouvelle catégorie
      </h1>
      <Divider margin="my-5" />
      <form>
        <FormRow>
          <FormLeftCol>
            <LabelWithDescription
              label="Logo"
              description="Téléchargez ici le logo de votre fabricant. Les dimensions doivent être de 160 x 160 px."
            />
          </FormLeftCol>
          <FormRightCol>
            <InputFile label="Téléchargez votre image" id="logo" />
          </FormRightCol>
        </FormRow>
        <Divider margin="my-5" />
        <FormRow>
          <FormLeftCol>
            <LabelWithDescription
              label="Image de couverture"
              description="Téléchargez l'image de couverture de votre fabricant/publication à partir d'ici, la dimension doit être de 960 x 340 px."
            />
          </FormLeftCol>
          <FormRightCol>
            <InputFile label="Téléchargez votre image" id="logo" />
          </FormRightCol>
        </FormRow>
        <Divider margin="my-5" />
        <FormRow>
          <FormLeftCol>
            <LabelWithDescription
              label="Description"
              description="Ajoutez les détails de votre catégorie et les informations nécessaires à partir d'ici"
            />
          </FormLeftCol>
          <FormRightCol>
            <div className="space-y-5">
              <Input label="Nom" id="nom" type="text" required />
              <Textarea label="Description" id="description" required />
              <Input label="Site" id="site" type="url" />
              <Input label="Groupe" id="groupe" type="text" />
            </div>
          </FormRightCol>
        </FormRow>
        <div className="flex justify-end pt-10">
          <ButtonSubmit
            className="ml-auto w-min"
            label="Ajoutez un fabricant"
          />
        </div>
      </form>
    </React.Fragment>
  );
};

export default ManufacturerForm;
