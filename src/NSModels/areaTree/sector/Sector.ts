export abstract class Sector {
	protected readonly _ctx: IProps['ctx'];
	private readonly _sector: IProps['sector'];

	public constructor(props: IProps) {
		this._ctx = props.ctx;
		this._sector = props.sector;
	}

	protected draw() {
		const { startPoint, endPoint } = this._sector;

		const width = Math.abs(startPoint.x - endPoint.x);
		const height = Math.abs(startPoint.y - endPoint.y);

		this._ctx.beginPath();
		this._ctx.lineWidth = 1;
		this._ctx.rect(startPoint.x, startPoint.y, width, height);
		this._ctx.stroke();
		this._ctx.closePath();
	}
}

interface IProps {
	ctx: CanvasRenderingContext2D;
	sector: ISector;
}

interface ISector {
	startPoint: IPoint;
	endPoint: IPoint;
}

interface IPoint {
	x: number;
	y: number;
}
