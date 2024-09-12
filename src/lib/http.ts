type ENV = "dev" | "prod" | "demo";

export const currentEnv: ENV = "dev";

const env: ENV = currentEnv;

export const Env = env;

const API_DEV_URL = "http://127.0.0.1:8000";
const API_DEMO_URL = "http://127.0.0.1:8000";
const API_PROD_URL = "http://127.0.0.1:8000";

export const APP_URL = "http://localhost:5173";

function processApiUrl() {
	if (env === "prod") return API_PROD_URL;
	if (env === "demo") return API_DEMO_URL;
	return API_DEV_URL;
}
export const ApiBaseUrl = processApiUrl();
