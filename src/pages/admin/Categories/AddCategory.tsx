import React from "react";
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

const AddCategory = () => {
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
              label="Image"
              description="Téléchargez ici l'image de votre catégorie"
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
              <Input label="Ajoutez une icône" id="icon" type="file" required />
              <Input label="Catégorie parentale" id="category" type="text" />
            </div>
          </FormRightCol>
        </FormRow>
        <div className="flex justify-end pt-10">
          <ButtonSubmit
            className="ml-auto w-min"
            label="Ajoutez la catégorie"
          />
        </div>
      </form>
    </React.Fragment>
  );
};

export default AddCategory;
