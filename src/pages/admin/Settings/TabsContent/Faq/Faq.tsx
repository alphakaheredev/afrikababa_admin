import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { ButtonAdd, ButtonDelete, ButtonEdit } from "@/components/ui/button";
import { useModal } from "@/hooks/hooks";
import { Faq } from "@/redux/api/faq/faq.type";
import {
	useDeleteFaqMutation,
	useGetFaqsListQuery,
} from "@/redux/api/faq/faq.api";
import Alert from "@/components/common/Alert";
import { useDelete } from "@/hooks/useDelete";
import FaqModal from "./FaqModal";

export function Delete({ item }: { item: Faq }) {
	const [deleteItem, { isSuccess, isError, error }] =
		useDeleteFaqMutation();
	const onDelete = useDelete<Faq>({
		item,
		deleteItem,
		isSuccess,
		isError,
		error,
		successMessage: "Faq supprimé",
	});
	return <ButtonDelete onClick={onDelete} />;
}

const TabFaq = () => {
	const { data: result, isLoading } = useGetFaqsListQuery({});
	const { isOpen, item, closeModal, openEditModal, openModal } =
		useModal<Faq>();

	return (
		<div>
			<div className="flex items-center justify-between mb-8">
				<h3 className="text-dark font-semibold">
					Foire des questions
				</h3>
				<div className="flex items-center justify-end gap-3 lg:w-2/3">
					<ButtonAdd onClick={openModal}>
						Ajouter un faq
					</ButtonAdd>
				</div>
			</div>
			<div>
				{!isLoading ? (
					<>
						{result?.data && result.data.length > 0 ? (
							<>
								{result.data.map(
									(item, index) => (
										<Accordion
											type="single"
											collapsible
											className="w-full"
											key={index}
										>
											<AccordionItem
												value="item-1"
												className="border mb-4 px-2"
											>
												<AccordionTrigger className="font-medium text-lg gap-2">
													<div className="flex justify-between flex-1">
														<h6>
															{
																item?.question
															}
														</h6>
														<div
															className="flex items-center gap-1 pl-10"
															onClick={(
																e
															) =>
																e.stopPropagation()
															}
														>
															<ButtonEdit
																onClick={() =>
																	openEditModal(
																		item
																	)
																}
															/>
															<Delete
																item={
																	item
																}
															/>
														</div>
													</div>
												</AccordionTrigger>

												<AccordionContent className="text-th-gray text-sm font-normal">
													{
														item?.answer
													}
												</AccordionContent>
											</AccordionItem>
										</Accordion>
									)
								)}
							</>
						) : (
							<Alert />
						)}
					</>
				) : (
					<>
						{/* Show skeletons loading */}
						<>
							{[...Array(5)].map((_, index) => (
								<div
									key={index}
									className="border mb-4 px-2 animate-pulse py-3"
								>
									<div className="h-5 bg-gray-200 rounded"></div>
								</div>
							))}
						</>
					</>
				)}
			</div>
			{isOpen && (
				<FaqModal
					item={item}
					isOpen={isOpen}
					close={closeModal}
				/>
			)}
		</div>
	);
};

export default TabFaq;
