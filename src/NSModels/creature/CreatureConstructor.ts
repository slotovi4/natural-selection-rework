import { Creature } from './Creature';

export class CreatureConstructor extends Creature {
	public constructor(props: TProps) {
		super(props);

		this.init();
	}

	private init() {
		this.draw();
	}

	private draw() {
		this.drawBody();
		this.drawSensitivity();
	}
}

type TProps = ConstructorParameters<typeof Creature>[0];
