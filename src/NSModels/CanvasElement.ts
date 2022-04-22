export abstract class CanvasElement {
	protected readonly _ctx: IProps['ctx'];
	protected readonly _width: number;
	protected readonly _height: number;

	public constructor({ ctx }: IProps) {
		this._ctx = ctx;
		this._width = ctx.canvas.width;
		this._height = ctx.canvas.height;
	}
}

interface IProps {
	ctx: CanvasRenderingContext2D;
}
