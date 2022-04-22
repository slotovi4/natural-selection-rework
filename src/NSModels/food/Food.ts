import { getNutritionalValueColor, randomizeNutritionalValue } from './helpers';

import { CanvasElement } from '../CanvasElement';

export abstract class Food extends CanvasElement {
	private readonly _params: IProps['params'];

	/**
	 * Питательная ценность пищи
	 */
	private readonly _nutritionalValue: TNutritionalValue;

	public constructor({ params, ...rest }: IProps) {
		super(rest);

		this._params = params;
		this._nutritionalValue = randomizeNutritionalValue();
	}

	protected draw() {
		const { startX, startY, size } = this._params;

		this._ctx.beginPath();
		this._ctx.fillStyle = getNutritionalValueColor(this._nutritionalValue);
		this._ctx.arc(startX, startY, size, 0, 2 * Math.PI);
		this._ctx.fill();
		this._ctx.closePath();
	}
}

type TCanvasElementProps = ConstructorParameters<typeof CanvasElement>[0]

interface IProps extends TCanvasElementProps {
	params: IFoodParams;
}

interface IFoodParams {
	startX: number;
	startY: number;
	size: number;
}

export type TNutritionalValue = 'low' | 'middle' | 'hight';
