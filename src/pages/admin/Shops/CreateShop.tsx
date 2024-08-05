import Divider from "@/components/common/Divider";
import {
  FormLeftCol,
  FormRightCol,
  FormRow,
  InputFile,
  LabelWithDescription,
} from "@/components/form";
import Input from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import hp from "@/assets/images/admin/hp.png";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Label from "@/components/ui/label";
import ButtonSubmit from "@/components/ui/buttonSubmit";

const CreateShop = () => {
  const [phone, setPhone] = useState<string>("+221 33 000 00 01 02");

  return (
    <React.Fragment>
      <h1 className="text-dark font-semibold text-xl">
        Création de votre boutique
      </h1>
      <Divider margin="my-5" />
      <form>
        <FormRow>
          <FormLeftCol>
            <LabelWithDescription
              label="Logo"
              description="Téléchargez le logo de votre boutique par ici"
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
              description="Téléchargez l'image de couverture de votre boutique à partir d'ici La dimension de l'image de couverture doit être de 1170 x 435 px"
            />
          </FormLeftCol>
          <FormRightCol>
            <InputFile label="Téléchargez votre image" id="cover" />
          </FormRightCol>
        </FormRow>
        <Divider margin="my-5" />
        <FormRow>
          <FormLeftCol>
            <LabelWithDescription
              label="Informations de base"
              description="Ajoutez ici quelques informations de base sur votre boutique"
            />
          </FormLeftCol>
          <FormRightCol>
            <div className="space-y-5">
              <Input
                label="Nom de la boutique"
                id="nom_boutique"
                type="text"
                required
              />
              <Textarea label="Description" required />
            </div>
          </FormRightCol>
        </FormRow>
        <Divider margin="my-5" />
        <FormRow>
          <FormLeftCol>
            <LabelWithDescription
              label="Adresse de la boutique"
              description="Ajoutez l'adresse de votre boutique physique à partir d'ici"
            />
          </FormLeftCol>
          <FormRightCol>
            <div className="space-y-5">
              <Input label="Pays" id="country" type="text" required />
              <Input label="Ville" id="city" type="text" required />
              <Input
                label="Adresse de la rue"
                id="address"
                type="text"
                required
              />
            </div>
          </FormRightCol>
        </FormRow>
        <Divider margin="my-5" />
        <FormRow>
          <FormLeftCol>
            <LabelWithDescription
              label="Mode de paiement accepté"
              description="Ajoutez vos informations de paiement à partir d'ici"
            />
          </FormLeftCol>
          <FormRightCol>
            <RadioGroup className="flex gap-5 h-full m-0">
              {[...Array(3)].map((_item, i) => {
                return (
                  <label
                    key={i}
                    htmlFor={`mode_paiement_${i}`}
                    className="flex items-center justify-between border border-th-gray-c9 w-full px-2 py-1 rounded-lg cursor-pointer"
                  >
                    <img
                      src={hp}
                      alt="mode_paiement_logo"
                      className="w-5 object-contain"
                    />
                    <RadioGroupItem
                      id={`mode_paiement_${i}`}
                      value={`mode_paiement_${i}`}
                      className="my-0"
                    />
                  </label>
                );
              })}
            </RadioGroup>
          </FormRightCol>
        </FormRow>
        <Divider margin="my-5" />
        <FormRow>
          <FormLeftCol>
            <LabelWithDescription
              label="Paramètres de la boutique"
              description="Ajoutez les informations sur les paramètres de votre boutique à partir d'ici"
            />
          </FormLeftCol>
          <FormRightCol>
            <div className="space-y-5">
              <Input label="Site web" id="website" type="url" />
              <div>
                <Label required>Numéro de contact</Label>
                <PhoneInput country={"sn"} value={phone} onChange={setPhone} />
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

export default CreateShop;
