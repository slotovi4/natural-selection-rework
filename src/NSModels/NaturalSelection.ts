import { AreaConstructor } from './area';
import { FoodConstructor } from './food';

export abstract class NaturalSelection {
	private readonly _areaSize: IProps['areaSize'];
	private readonly _areaCtx: IProps['areaCtx'];
	private _foodList: FoodConstructor[] = [];
	private _area: AreaConstructor | null = null;

	public constructor(props: IProps) {
		this._areaSize = props.areaSize;
		this._areaCtx = props.areaCtx;
	}

	protected initArea() {
		this._area = new AreaConstructor({ ctx: this._areaCtx });
	}

	protected initFood() {
		const foodParamsList: TFoodProps['params'][] = [
			{ startX: 10, startY: 10, size: this._areaSize / 50 },
			{ startX: 20, startY: 20, size: this._areaSize / 50 },
			{ startX: 30, startY: 30, size: this._areaSize / 50 }
		];

		this._foodList = foodParamsList.map(params => new FoodConstructor({ ctx: this._areaCtx, params }));
	}
}

interface IProps {
	areaSize: number;
	areaCtx: CanvasRenderingContext2D;
}

type TFoodProps = ConstructorParameters<typeof FoodConstructor>[0];
