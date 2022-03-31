interface IProps {
	storageKey: string;
}

export class LocalStorage {
	private readonly _storageKey: string;

	protected constructor({ storageKey }: IProps) {
		this._storageKey = storageKey;
	}

	public setItem(value: string) {
		localStorage.setItem(this._storageKey, value);
	}

	public getItem() {
		return localStorage.getItem(this._storageKey);
	}

	public removeItem() {
		localStorage.removeItem(this._storageKey);
	}

	public setItemAsJson<T = Record<string, unknown>>(value: T) {
		this.setItem(JSON.stringify(value));
	}

	public getItemAsJson<T = Record<string, unknown>>(): T | null {
		const value = this.getItem();

		if (!value) {
			return null;
		}

		try {
			return JSON.parse(value);
		} catch (e) {
			return null;
		}
	}
}
