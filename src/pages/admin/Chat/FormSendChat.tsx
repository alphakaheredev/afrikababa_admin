import Textarea from "@/components/ui/textarea";
import { FiSend } from "react-icons/fi";
import useSendMessage from "./useSendMessage";

const FormSendChat = ({ conversationId }: { conversationId: number }) => {
	const { register, errors, onSubmit } = useSendMessage(conversationId);
	return (
		<div className="mt-5 w-full">
			<form action="" className="relative" onSubmit={onSubmit}>
				<Textarea
					label=""
					placeholder="Tapez votre message ici"
					className="min-h-28 bg-[#F5F5F5] pr-10"
					{...register("message")}
					error={errors.message?.message}
					onKeyDown={(e) => {
						if (e.key === "Enter" && !e.shiftKey) {
							e.preventDefault();
							onSubmit(e);
						}
					}}
				/>
				<button className="text-[#323232] font-normal absolute right-2 top-2">
					<FiSend fontSize={24} />
				</button>
			</form>
		</div>
	);
};

export default FormSendChat;
