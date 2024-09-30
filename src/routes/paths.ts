export const authPaths = {
  register: "inscription",
  forgotPassword: "mot-de-passe-oublie",
  resetPassword: "reinitisliser-mot-de-passe",
};

export const adminPaths = {
	dashboard: "tableau-de-bord",
	boutique: "boutiques",
	createBoutique: "boutiques/creer",
	editBoutique: "boutiques/modifier/:id",
	shopDetail: "boutiques/:id",
	store: "magasins",
	products: "produits",
	productDetail: "produits/:id",
	addProduct: "produits/creer",
	productOutOfStock: "produits/en-rupture-stock",
	inventory: "inventaires",
	categories: "categories",
	addCategory: "categories/ajouter",
	editCategory: "categories/modifier/:id",
	manufacturers: "fabricants",
	addManufacturer: "fabricants/ajouter",
	editManufacturer: "fabricants/modifier/:id",
	shipping: "expeditions",
	shippingCosts: "expeditions/frais-expedition",
	addShippingCost: "expeditions/frais-expedition/ajouter",
	editShippingCost: "expeditions/frais-expedition/modifier/:id",
	refunds: "remboursements",
	addRefund: "remboursements/ajouter",
	orders: "commandes",
	detailOrder: "commandes/detail/:id",
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
};

export const supplierPaths = {
  dashboard: "tableau-de-bord",
  products: "produits",
  addProduct: "produits/creer",
  productOutOfStock: "produits/en-rupture-stock",
  categories: "categories",
  addCategory: "categories/ajouter",
  editCategory: "categories/modifier/:id",
  refunds: "remboursements",
  orders: "commandes",
  detailOrder: "commandes/detail/:id",
  transactions: "transactions",
  customers: "clients",
  discounts: "coupons",
  addDiscount: "coupons/ajouter",
  chat: "messages",
  reviews: "avis",
  settings: "parametres",
};
