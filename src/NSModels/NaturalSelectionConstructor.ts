import { NaturalSelection } from './NaturalSelection';

export class NaturalSelectionConstructor extends NaturalSelection {
	public constructor(props: TProps) {
		super(props);

		this.init();
	}

	private init() {
		this.initArea();
		this.initFood();
		this.initCreature();
	}
}

type TProps = ConstructorParameters<typeof NaturalSelection>[0];
