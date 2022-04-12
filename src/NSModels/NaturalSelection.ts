import { AreaConstructor } from './area';
import { FoodConstructor } from './food';
import { randomBoolean, randomValue } from './math.helpers';
import { CreatureConstructor } from './creature';

export abstract class NaturalSelection {
	protected readonly _creatureCtx: IProps['creatureCtx'];
	protected readonly _areaSize: IProps['areaSize'];
	protected _creatureList: CreatureConstructor[] = [];

	private readonly _areaCtx: IProps['areaCtx'];
	private readonly _foodCountPercent: IProps['foodCountPercent'];
	private readonly _maxFoodCount = 100;

	private _foodSize: number;
	private _creatureSize: number;
	private _creatureSensitivityRadius: number;
	private _foodList: FoodConstructor[] = [];
	private _area: AreaConstructor | null = null;

	public constructor(props: IProps) {
		this._areaSize = props.areaSize;
		this._areaCtx = props.areaCtx;
		this._creatureCtx = props.creatureCtx;

		this._foodCountPercent = props.foodCountPercent;
		this._foodSize = Math.floor(this._areaSize / this._maxFoodCount);
		this._creatureSize = Math.floor(this._areaSize / 80);
		this._creatureSensitivityRadius = this._creatureSize * 2;
	}

	protected initArea() {
		this._area = new AreaConstructor({ ctx: this._areaCtx });
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
		for (let i = 0; i < 200; i++) {
			const creatureParams = this.randomizeCreatureParams();
			const creature = new CreatureConstructor({ ctx: this._creatureCtx, params: creatureParams });

			this._creatureList.push(creature);
		}
	}

	private randomizeFoodParams(): TFoodProps['params'] {
		const { min, max } = this.getMinMaxStartPoints(this._foodSize);

		return {
			startX: randomValue({ min, max }),
			startY: randomValue({ min, max }),
			size: this._foodSize
		};
	}

	private randomizeCreatureParams(): TCreatureProps['params'] {
		const { min, max } = this.getMinMaxStartPoints(this._creatureSensitivityRadius);

		const randomAxlePosition = randomValue({ min, max });
		const randomMinMaxPosition = randomBoolean() ? min : max;
		const isYAxle = randomBoolean();

		return {
			startX: isYAxle ? randomMinMaxPosition : randomAxlePosition,
			startY: isYAxle ? randomAxlePosition : randomMinMaxPosition,
			size: this._creatureSize,
			sensitivityRadius: this._creatureSensitivityRadius
		};
	}

	private getMinMaxStartPoints(elementSize: number) {
		const min = elementSize;
		const max = this._areaSize - min;

		return { min, max };
	}
}

interface IProps {
	areaSize: number;
	foodCountPercent: number;
	areaCtx: CanvasRenderingContext2D;
	creatureCtx: CanvasRenderingContext2D;
}

type TFoodProps = ConstructorParameters<typeof FoodConstructor>[0];

type TCreatureProps = ConstructorParameters<typeof CreatureConstructor>[0];
