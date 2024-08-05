import React from "react";
import {
  FormLeftCol,
  FormRightCol,
  FormRow,
  LabelWithDescription,
} from "@/components/form";
import Divider from "@/components/common/Divider";
import Input from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Label from "@/components/ui/label";
import ButtonSubmit from "@/components/ui/buttonSubmit";

const AddShippingPrice = () => {
  return (
    <React.Fragment>
      <h1 className="text-dark font-semibold text-xl">
        Créer une nouvelle expédition
      </h1>
      <Divider margin="my-5" />
      <form>
        <FormRow>
          <FormLeftCol>
            <LabelWithDescription
              label="Description"
              description="Modifiez la description de votre produit et les informations nécessaires à partir d'ici"
            />
          </FormLeftCol>
          <FormRightCol>
            <div className="space-y-5">
              <Input label="Nom" id="nom" type="text" required />
              <RadioGroup>
                <Label>Statut</Label>
                <div className="space-x-2">
                  <RadioGroupItem id={`free`} value={`free`} className="my-0" />
                  <label
                    htmlFor={`free`}
                    className="text-th-gray text-sm cursor-pointer"
                  >
                    Gratuit
                  </label>
                </div>
                <div className="space-x-2">
                  <RadioGroupItem id={`paid`} value={`pais`} className="my-0" />
                  <label
                    htmlFor="paid"
                    className="text-th-gray text-sm cursor-pointer"
                  >
                    Payant
                  </label>
                </div>
              </RadioGroup>
              <Input label="Montant" id="amount" type="number" required />
            </div>
          </FormRightCol>
        </FormRow>
        <div className="flex justify-end pt-10">
          <ButtonSubmit
            className="ml-auto w-min"
            label="Ajoutez l’expéditiong"
          />
        </div>
      </form>
    </React.Fragment>
  );
};

export default AddShippingPrice;
