import { CanvasElement } from '../CanvasElement';

export abstract class Food extends CanvasElement {
	private readonly _params: IFoodParams;

	public constructor({ params, ...rest }: IProps) {
		super(rest);

		this._params = params;
	}

	protected draw() {
		const { startX, startY, size } = this._params;

		this._ctx.beginPath();
		this._ctx.lineWidth = 1;
		this._ctx.arc(startX, startY, size, 0, 2 * Math.PI);
		this._ctx.stroke();
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
