import { AreaConstructor } from './area';
import { FoodConstructor } from './food';
import { randomValue } from './math.helpers';

export abstract class NaturalSelection {
	private readonly _areaSize: IProps['areaSize'];
	private readonly _areaBorderSize: IProps['areaBorderSize'];
	private readonly _areaCtx: IProps['areaCtx'];

	private _foodSize: number;
	private _foodList: FoodConstructor[] = [];
	private _area: AreaConstructor | null = null;

	public constructor(props: IProps) {
		this._areaBorderSize = props.areaBorderSize;
		this._areaSize = props.areaSize;
		this._areaCtx = props.areaCtx;
		this._foodSize = Math.floor(this._areaSize / 50);
	}

	protected initArea() {
		this._area = new AreaConstructor({ ctx: this._areaCtx, borderSize: this._areaBorderSize });
	}

	protected initFood() {
		for (let i = 0; i < 100; i++) {
			const foodParams = this.randomizeFoodParam();
			const food = new FoodConstructor({ ctx: this._areaCtx, params: foodParams });

			this._foodList.push(food);
		}
	}

	private randomizeFoodParam(): TFoodProps['params'] {
		const min = Math.ceil(this._areaBorderSize / 2) + this._foodSize;
		const max = this._areaSize - min;

		return {
			startX: randomValue({ min, max }),
			startY: randomValue({ min, max }),
			size: this._foodSize
		};
	}
}

interface IProps {
	areaSize: number;
	areaBorderSize: number;
	areaCtx: CanvasRenderingContext2D;
}

type TFoodProps = ConstructorParameters<typeof FoodConstructor>[0];
