import { Food } from './Food';

export class FoodConstructor extends Food {
	public constructor(props: TProps) {
		super(props);

		this.init();
	}

	private init() {
		this.draw();
	}
}

type TProps = ConstructorParameters<typeof Food>[0];
