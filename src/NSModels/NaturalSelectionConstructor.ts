import { NaturalSelection } from './NaturalSelection';

export class NaturalSelectionConstructor extends NaturalSelection {
	public constructor(props: TProps) {
		super(props);

		this.init();
		this.updateCreatureCtx();
	}

	private init() {
		this.initArea();
		this.initFood();
		this.initCreature();
	}

	private updateCreatureCtx() {
		this._creatureCtx.clearRect(0, 0, this._areaSize, this._areaSize);
		this._creatureList.forEach(e => e.update());

		requestAnimationFrame(() => {
			this.updateCreatureCtx();
		});
	}
}

type TProps = ConstructorParameters<typeof NaturalSelection>[0];
