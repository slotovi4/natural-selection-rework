import { AreaConstructor } from './area';
import { FoodConstructor } from './food';
import { randomValue } from './math.helpers';
import { CreatureConstructor } from './creature';

export abstract class NaturalSelection {
	private readonly _areaSize: IProps['areaSize'];
	private readonly _areaBorderSize: IProps['areaBorderSize'];
	private readonly _areaCtx: IProps['areaCtx'];
	private readonly _creatureCtx: IProps['creatureCtx'];
	private readonly _foodCountPercent: IProps['foodCountPercent'];

	private readonly _maxFoodCount = 100;

	private _foodSize: number;
	private _creatureSize: number;
	private _foodList: FoodConstructor[] = [];
	private _creatureList: CreatureConstructor[] = [];
	private _area: AreaConstructor | null = null;

	public constructor(props: IProps) {
		this._areaBorderSize = props.areaBorderSize;
		this._areaSize = props.areaSize;
		this._areaCtx = props.areaCtx;
		this._creatureCtx = props.creatureCtx;

		this._foodCountPercent = props.foodCountPercent;
		this._foodSize = Math.floor(this._areaSize / this._maxFoodCount);
		this._creatureSize = Math.floor(this._areaSize / 80);
	}

	protected initArea() {
		this._area = new AreaConstructor({ ctx: this._areaCtx, borderSize: this._areaBorderSize });
	}

	protected initFood() {
		const foodCount = (this._maxFoodCount / 100) * this._foodCountPercent;

		for (let i = 0; i < foodCount; i++) {
			const foodParams = this.randomizeFoodParams();
			const food = new FoodConstructor({ ctx: this._areaCtx, params: foodParams });

			this._foodList.push(food);
		}
	}

	protected initCreature() {
		for (let i = 0; i < 50; i++) {
			const creatureParams = this.randomizeCreatureParams();
			const creature = new CreatureConstructor({ ctx: this._creatureCtx, params: creatureParams });

			this._creatureList.push(creature);
		}
	}

	private randomizeFoodParams(): TFoodProps['params'] {
		const min = Math.ceil(this._areaBorderSize / 2) + this._foodSize;
		const max = this._areaSize - min;

		return {
			startX: randomValue({ min, max }),
			startY: randomValue({ min, max }),
			size: this._foodSize
		};
	}

	private randomizeCreatureParams(): TCreatureProps['params'] {
		const min = Math.ceil(this._areaBorderSize / 2) + this._creatureSize;
		const max = this._areaSize - min;

		const randomAxlePosition = randomValue({ min, max });
		const randomMinMaxPosition = Math.random() >= 0.5 ? min : max;
		const isYAxle = Math.random() >= 0.5;

		return {
			startX: isYAxle ? randomMinMaxPosition : randomAxlePosition,
			startY: isYAxle ? randomAxlePosition : randomMinMaxPosition,
			size: this._creatureSize
		};
	}
}

interface IProps {
	areaSize: number;
	areaBorderSize: number;
	foodCountPercent: number;
	areaCtx: CanvasRenderingContext2D;
	creatureCtx: CanvasRenderingContext2D;
}

type TFoodProps = ConstructorParameters<typeof FoodConstructor>[0];

type TCreatureProps = ConstructorParameters<typeof CreatureConstructor>[0];
