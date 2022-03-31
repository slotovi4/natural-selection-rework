import { Area } from './Area';

export class AreaConstructor extends Area {
	public constructor(props: TProps) {
		super(props);

		this.init();
	}

	private init() {
		this.draw();
	}
}

type TProps = ConstructorParameters<typeof Area>[0];
