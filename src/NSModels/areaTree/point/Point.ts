import { CanvasElement } from 'src/NSModels/CanvasElement';

export abstract class Point extends CanvasElement {
	private readonly _point: IProps['point'];

	public constructor(props: IProps) {
		super(props);

		this._point = props.point;
	}

	protected draw() {
		this._ctx.beginPath();
		this._ctx.arc(this._point.x, this._point.y, 10, 0, Math.PI * 2);
		this._ctx.stroke();
		this._ctx.closePath();
	}
}

interface IProps {
	ctx: CanvasRenderingContext2D;
	point: IPoint;
}

interface IPoint {
	x: number;
	y: number;
}
