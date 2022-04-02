import { CanvasElement } from '../CanvasElement';

export abstract class Area extends CanvasElement {
	private readonly _borderSize: IProps['borderSize'];

	public constructor(props: IProps) {
		super(props);

		this._borderSize = props.borderSize;
	}

	protected draw() {
		this._ctx.beginPath();
		this._ctx.lineWidth = this._borderSize;
		this._ctx.strokeRect(0, 0, this._width, this._height);
		this._ctx.closePath();
	}
}

type TCanvasElementProps = ConstructorParameters<typeof CanvasElement>[0]

interface IProps extends TCanvasElementProps {
	borderSize: number;
}
