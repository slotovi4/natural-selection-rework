import { CanvasElement } from 'src/NSModels/CanvasElement';

export abstract class Point extends CanvasElement {
	private readonly _point: IProps['point'];
	private readonly _color: IProps['color'];

	public constructor(props: IProps) {
		super(props);

		this._point = props.point;
		this._color = props.color;
	}

	protected draw() {
		this._ctx.beginPath();
		this._ctx.arc(this._point.x, this._point.y, 10, 0, Math.PI * 2);
		this._ctx.fillStyle = this._color || 'black';
		this._ctx.stroke();
		this._ctx.fill();
		this._ctx.closePath();
	}
}

interface IProps {
	ctx: CanvasRenderingContext2D;
	point: IPoint;
	color?: string;
}

interface IPoint {
	x: number;
	y: number;
}
