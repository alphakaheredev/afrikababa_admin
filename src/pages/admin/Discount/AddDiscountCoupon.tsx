import React from "react";
import {
  FormLeftCol,
  FormRightCol,
  FormRow,
  LabelWithDescription,
} from "@/components/form";
import Divider from "@/components/common/Divider";
import Label from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import ButtonSubmit from "@/components/ui/buttonSubmit";
import Input from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";

const AddDiscountCoupon = () => {
  return (
    <React.Fragment>
      <h1 className="text-dark font-semibold text-xl">Ajouter produit</h1>
      <Divider margin="my-5" />
      <form>
        <FormRow>
          <FormLeftCol>
            <LabelWithDescription
              label="Description"
              description="Ajoutez la description de votre coupon et les informations nécessaires à partir d'ici"
            />
          </FormLeftCol>
          <FormRightCol>
            <div className="space-y-5">
              <Input label="Code" id="code" type="text" required />
              <Textarea label="Description" id="description" />
              <RadioGroup>
                <Label>Type de prix</Label>
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
                  <RadioGroupItem id={`paid`} value={`paid`} className="my-0" />
                  <label
                    htmlFor="paid"
                    className="text-th-gray text-sm cursor-pointer"
                  >
                    Payant
                  </label>
                </div>
              </RadioGroup>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Input label="Actif depuis" id="actif" type="date" required />
                <Input
                  label="Va expirer le"
                  id="expiration"
                  type="date"
                  required
                />
              </div>
            </div>
          </FormRightCol>
        </FormRow>
        <div className="flex justify-end pt-10">
          <ButtonSubmit
            className="ml-auto w-min"
            label="Mettre à jour le produit"
          />
        </div>
      </form>
    </React.Fragment>
  );
};

export default AddDiscountCoupon;
