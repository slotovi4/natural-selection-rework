export abstract class Area {
	protected readonly _ctx: IProps['ctx'];
	protected readonly _width: number;
	protected readonly _height: number;

	public constructor({ ctx }: IProps) {
		this._ctx = ctx;
		this._width = ctx.canvas.width;
		this._height = ctx.canvas.height;
	}

	protected draw() {
		this._ctx.beginPath();
		this._ctx.rect(0, 0, this._width, this._height);
		this._ctx.stroke();
		this._ctx.closePath();
	}
}

interface IProps {
	ctx: CanvasRenderingContext2D;
}
