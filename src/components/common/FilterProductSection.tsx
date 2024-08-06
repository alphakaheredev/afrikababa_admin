import { FilterSelect } from "@/components/ui/Select";

const groupOptions = [
  { label: "Groupe 1", value: "group1" },
  { label: "Groupe 2", value: "group2" },
];

const productOptions = [
  { label: "Audi", value: "audi" },
  { label: "Mercedes", value: "mercedes" },
  { label: "Hyundai", value: "hyundai" },
  { label: "Moto électrique", value: "electric_bike" },
  { label: "Moto", value: "motorbike" },
  { label: "Roger Rover", value: "roger_rover" },
  { label: "Nissan", value: "nissan" },
  { label: "Camion benne", value: "dump_truck" },
  { label: "BMW", value: "bmw" },
  { label: "Tricycle", value: "tricycle" },
  { label: "Moto Honda", value: "honda_bike" },
  { label: "Suzuki", value: "suzuki" },
];

const categoryOptions = [
  { label: "Transport", value: "transport" },
  { label: "Électronique", value: "electronics" },
  { label: "Santé et beauté", value: "health_beauty" },
  { label: "Maison et bureau", value: "home_office" },
  { label: "Mode", value: "fashion" },
  { label: "Sports", value: "sports" },
  { label: "Alimentation", value: "food" },
  { label: "Autres", value: "others" },
];

const FilterProductSection = () => {
  return (
    <div className="p-4 bg-white rounded shadow-md mb-12 mx-1">
      <div className="flex flex-col lg:flex-row gap-4 py-3 px-3">
        <FilterSelect
          id="group"
          label="Filtre par groupe"
          options={groupOptions}
        />
        <FilterSelect
          id="group"
          label="Filtre par catégories"
          options={categoryOptions}
        />
        <FilterSelect
          id="group"
          label="Filtre par produits"
          options={productOptions}
        />
      </div>
    </div>
  );
};

export default FilterProductSection;
