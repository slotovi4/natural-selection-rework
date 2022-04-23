import { Sector } from './Sector';

export class SectorConstructor extends Sector {
	public constructor(props: TProps) {
		super(props);

		this.init();
	}

	private init() {
		this.draw();
	}
}

type TProps = ConstructorParameters<typeof Sector>[0];
