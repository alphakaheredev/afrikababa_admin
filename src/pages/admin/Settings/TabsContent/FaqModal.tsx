import ButtonSubmit from "@/components/ui/buttonSubmit";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import Input from "@/components/ui/input";
import { ModalProps } from "@/lib/type";
import { useCrudFaq } from "../hooks/useCrudFaq";
import { Faq } from "@/redux/api/faq/faq.type";
import Textarea from "@/components/ui/textarea";

// const roles = [
// 	{
// 		label: "Administrateur",
// 		value: ROLE.admin,
// 	},
// 	{
// 		label: "Client",
// 		value: ROLE.customer,
// 	},
// 	{
// 		label: "Fabricant",
// 		value: ROLE.supplier,
// 	},
// ];

const FaqModal: React.FC<ModalProps<Faq>> = (props) => {
	const { isOpen, close, item } = props;
	const { register, onSubmit, errors, isLoading } = useCrudFaq(close, item);
	return (
		<Dialog open={isOpen} onOpenChange={close}>
			<DialogContent className="max-w-3xl">
				<DialogHeader className="mb-5">
					<DialogTitle>
						{!item ? "Ajouter un " : "Modifier le"}
						faq
					</DialogTitle>
				</DialogHeader>
				<form onSubmit={onSubmit} className="space-y-5">
					<Input
						label="Question"
						type="text"
						id="question"
						placeholder="Question"
						required
						{...register("question")}
						error={errors?.question}
						defaultValue={item?.question}
					/>
					<Textarea
						label="Réponse"
						id="lastname"
						placeholder="Réponse"
						required
						{...register("answer")}
						error={errors?.answer}
						defaultValue={item?.answer}
						className="min-h-48"
					/>

					<DialogFooter className="pt-5">
						<ButtonSubmit
							label={item ? "Modifier" : "Ajouter"}
							type="submit"
							isLoading={isLoading}
						/>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default FaqModal;
