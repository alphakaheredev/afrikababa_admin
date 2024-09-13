const Stores = () => {
	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				{[...Array(12)].map((_item, i) => (
					<div
						className="flex items-center gap-4 border border-th-gray-c9 p-3"
						key={i}
					>
						<div className="bg-dark w-20 h-20 rounded-full flex justify-center items-center p-2">
							<img
								src="https://placehold.jp/40x40.png"
								alt="icon"
							/>
						</div>
						<div>
							<h5 className="font-semibold text-lg">
								Santé et Beauté
							</h5>
							<p className="text-sm font-normal text-dark">
								Ngor Alamdies Dakar / Sénégal{" "}
								<br />
								+221 00 000 01 02
							</p>
							<div className="flex justify-between flex-wrap gap-2 text-[#8E8E8D] text-xs mt-3">
								<div className="border-r border-[#8E8E8D] pr-2">
									<h5>Commandes</h5>
									<p>200</p>
								</div>
								<div className="border-r border-[#8E8E8D] pr-2">
									<h5>Ventes</h5>
									<p>45</p>
								</div>
								<div className="pr-2">
									<h5>Annulées</h5>
									<p>5</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Stores;
