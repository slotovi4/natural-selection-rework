import { Point } from './Point';

export class PointConstructor extends Point {
	public constructor(props: TProps) {
		super(props);

		this.init();
	}

	private init() {
		this.draw();
	}
}

type TProps = ConstructorParameters<typeof Point>[0];
