import { CanvasElement } from '../CanvasElement';

export abstract class Area extends CanvasElement {

	public constructor(props: TCanvasElementProps) {
		super(props);
	}

	protected draw() {
		this._ctx.beginPath();
		this._ctx.lineWidth = 0;
		this._ctx.strokeStyle = 'transparent';
		this._ctx.strokeRect(0, 0, this._width, this._height);
		this._ctx.closePath();
	}
}

type TCanvasElementProps = ConstructorParameters<typeof CanvasElement>[0];
