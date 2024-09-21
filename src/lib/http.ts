type ENV = "dev" | "prod" | "demo";

export const currentEnv: ENV = "dev";

const env: ENV = currentEnv;

export const Env = env;

const API_DEV_URL = "https://afrikababaa-571dedf1e98c.herokuapp.com";
const API_DEMO_URL = "https://afrikababaa-571dedf1e98c.herokuapp.com";
const API_PROD_URL = "https://afrikababaa-571dedf1e98c.herokuapp.com";

export const APP_URL = "http://localhost:5173";

function processApiUrl() {
	if (env === "prod") return API_PROD_URL;
	if (env === "demo") return API_DEMO_URL;
	return API_DEV_URL;
}
export const ApiBaseUrl = processApiUrl();
