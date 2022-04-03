import { CanvasElement } from '../CanvasElement';

export abstract class Creature extends CanvasElement {
	private readonly _params: IProps['params'];

	public constructor(props: IProps) {
		super(props);

		this._params = props.params;
	}

	protected drawBody() {
		const { startX, startY, size } = this._params;

		this._ctx.beginPath();
		this._ctx.strokeStyle = 'transparent';
		this._ctx.fillStyle = 'red';
		this._ctx.arc(startX, startY, size, 0, 2 * Math.PI);
		this._ctx.fill();
		this._ctx.closePath();
	}

	protected drawSensitivity() {
		const { startX, startY, size } = this._params;

		this._ctx.beginPath();
		this._ctx.strokeStyle = 'black';
		this._ctx.arc(startX, startY, size * 2, 0, 2 * Math.PI);
		this._ctx.stroke();
		this._ctx.closePath();
	}
}

type TCanvasElementProps = ConstructorParameters<typeof CanvasElement>[0];

interface IProps extends TCanvasElementProps {
	params: ICreatureParams;
}

interface ICreatureParams {
	startX: number;
	startY: number;
	size: number;
}
