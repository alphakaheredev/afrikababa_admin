export const authPaths = {
  register: "inscription",
  forgotPassword: "mot-de-passe-oublie",
  resetPassword: "reinitisliser-mot-de-passe",
};

export const adminPaths = {
	dashboard: "tableau-de-bord",
	boutique: "boutiques",
	shopDetail: "boutiques/:id",
	store: "magasins",
	products: "produits",
	productDetail: "produits/:id",
	addProduct: "produits/ajouter",
	productOutOfStock: "produits/en-rupture-stock",
	inventory: "inventaires",
	categories: "categories",
	addCategory: "categories/ajouter",
	editCategory: "categories/modifier/:id",
	manufacturers: "fournisseurs",
	addManufacturer: "fournisseurs/ajouter",
	editManufacturer: "fournisseurs/modifier/:id",
	shipping: "expeditions",
	shippingCosts: "expeditions/frais-expedition",
	addShippingCost: "expeditions/frais-expedition/ajouter",
	editShippingCost: "expeditions/frais-expedition/modifier/:id",
	refunds: "remboursements",
	addRefund: "remboursements/ajouter",
	orders: "commandes",
	detailOrder: "commandes/:id",
	transactions: "transactions",
	admins: "administrateurs",
	customers: "clients",
	addCustomer: "clients/ajouter",
	group: "pages-groupes",
	addGroup: "pages-groups/ajouter",
	faq: "faq",
	conditions: "conditions-et-termes",
	discounts: "coupons",
	addDiscount: "coupons/ajouter",
	chat: "messages",
	reviews: "avis",
	settings: "parametres",
	profil: "profil",
	addCondition: "parametres/conditions-et-termes/ajouter",
	editCondition: "parametres/conditions-et-termes/modifier/:id",
	withdrawRequests: "demandes-retrait",
	transitaires: "transitaires",
};

export const supplierPaths = {
	dashboard: "tableau-de-bord",
	createBoutique: "tableau-de-bord/creer-votre-boutique",
	editBoutique: "tableau-de-bord/modifier-votre-boutique/:id",
	products: "produits",
	addProduct: "produits/ajouter",
	productOutOfStock: "produits/en-rupture-stock",
	categories: "categories",
	addCategory: "categories/ajouter",
	editCategory: "categories/modifier/:id",
	refunds: "remboursements",
	orders: "commandes",
	detailOrder: "commandes/:id",
	transactions: "transactions",
	customers: "clients",
	discounts: "coupons",
	addDiscount: "coupons/ajouter",
	chat: "messages",
	reviews: "avis",
	settings: "parametres",
	profil: "profil",
	withdrawalRequests: "demandes-retrait",
	editProduct: "produits/modifier/:id",
	detailProduct: "produits/:id",
};
