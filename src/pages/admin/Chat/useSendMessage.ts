import { useSendMessageMutation } from "@/redux/api/chat/chat.api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ChatFormData } from "@/redux/api/chat/chat.type";
import { toast } from "react-toastify";

const useSendMessage = (conversationId: number) => {
	const [sendMessage, { isLoading }] = useSendMessageMutation();

	const schema = yup.object().shape({
		message: yup.string().required("Message est requis"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ChatFormData>({
		//@ts-ignore
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data: ChatFormData) => {
		console.log(data);
		const response = await sendMessage({
			conversation_id: conversationId,
			message: data.message,
		});
		if (response.data) {
			reset();
			console.log("Message envoyé avec succès");
		} else {
			toast.error("Erreur lors de l'envoi du message");
		}
	};

	return {
		sendMessage,
		isLoading,
		register,
		onSubmit: handleSubmit(onSubmit),
		errors,
	};
};

export default useSendMessage;
