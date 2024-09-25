import Select from "@/components/ui/Select";
import { ConditionType } from "@/redux/api/condition/condition.type";
import { useCrudCondition } from "./useCrudCondition";
import ReactQuill from "react-quill";
import Label from "@/components/ui/label";
import ButtonSubmit from "@/components/ui/buttonSubmit";
import { Error } from "@/components/common/Error";
import { formatConditionType } from "@/lib/utils";

const ConditionForm = () => {
	const {
		register,
		errors,
		onSubmit,
		content,
		handleContentChange,
		isLoading,
		item,
	} = useCrudCondition();

	return (
		<>
			<h3 className="text-dark text-xl font-medium mb-10">
				{item ? "Modifier la" : "Ajouter une"} condition
			</h3>
			<form onSubmit={onSubmit} className="space-y-5">
				<Select
					label="Target"
					options={[
						{ label: "Fabricant", value: "supplier" },
						{ label: "Client", value: "customer" },
					]}
					{...register("target")}
					error={errors.target}
				/>
				<Select
					label="Type"
					options={Object.values(ConditionType).map(
						(type) => ({
							label: formatConditionType(type),
							value: type,
						})
					)}
					{...register("type")}
					error={errors.type}
				/>
				<div>
					<Label htmlFor="content">Contenu</Label>
					<ReactQuill
						id="content"
						value={content}
						onChange={handleContentChange}
					/>
					<Error error={errors.content} />
				</div>
				<div className="flex justify-end">
					<ButtonSubmit
						label="Enregistrer"
						type="submit"
						isLoading={isLoading}
						className="lg:w-1/3"
					/>
				</div>
			</form>
		</>
	);
};

export default ConditionForm;
