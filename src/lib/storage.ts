export const AppStorage = {
	getItem<T>(key: string, defualtValue: any = null): T {
		const data = window.sessionStorage.getItem(key);
		if (data) {
			return JSON.parse(data);
		}
		return defualtValue;
	},
	setItem(key: string, value: any) {
		window.sessionStorage.setItem(key, JSON.stringify(value));
	},
	removeItem(key: string) {
		window.sessionStorage.removeItem(key);
	},
	clear() {
		window.sessionStorage.clear();
	},
};

export const AppLocalStorage = {
	getItem<T>(key: string, defualtValue: any = null): T {
		const data = window.localStorage.getItem(key);
		if (data) {
			return JSON.parse(data);
		}
		return defualtValue;
	},
	setItem(key: string, value: any) {
		window.localStorage.setItem(key, JSON.stringify(value));
	},
	removeItem(key: string) {
		window.localStorage.removeItem(key);
	},
	clear() {
		window.localStorage.clear();
	},
};
