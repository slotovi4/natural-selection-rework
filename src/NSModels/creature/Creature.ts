import { CanvasElement } from '../CanvasElement';

export abstract class Creature extends CanvasElement {
	private _x: number;
	private _y: number;
	private _sensitivityRadius: number;

	private _sensitivity = 1;
	private _dx = 1;
	private _dy = 1;
	private _speed = 1;

	private readonly _params: IProps['params'];

	public constructor(props: IProps) {
		super(props);

		this._params = props.params;
		this._x = props.params.startX;
		this._y = props.params.startY;
		this._sensitivityRadius = props.params.sensitivityRadius * this._sensitivity;
	}

	/**
	 * Направление существа по оси xy
	 */
	protected get direction() {
		return { dx: this._dx, dy: this._dy };
	}

	/**
	 * Скорость существа
	 */
	protected get speed() {
		return this._speed;
	}

	/**
	 * Рисует тело существа
	 */
	protected drawBody() {
		const { size } = this._params;

		this._ctx.beginPath();
		this._ctx.strokeStyle = 'transparent';
		this._ctx.fillStyle = 'red';
		this._ctx.arc(this._x, this._y, size, 0, 2 * Math.PI);
		this._ctx.fill();
		this._ctx.closePath();
	}

	/**
	 * Рисует радиус чувствительности существа
	 */
	protected drawSensitivity() {
		this._ctx.beginPath();
		this._ctx.strokeStyle = 'black';
		this._ctx.arc(this._x, this._y, this._sensitivityRadius, 0, 2 * Math.PI);
		this._ctx.stroke();
		this._ctx.closePath();
	}

	/**
	 * Обновляет значения направлений движения
	 * @param direction новые значения dx/dy
	 */
	protected updateDirection({ dx, dy }: IDirectionParams) {
		this._dx = dx;
		this._dy = dy;
	}

	/**
	 * Осуществляет движение существа по dx/dy
	 */
	protected move() {
		this._x += this._dx * this.speed;
		this._y += this._dy * this.speed;
	}

	/**
	 * Обрабатывает отскок существа от области
	 */
	protected bounce() {
		const newX = this._x + (this._dx * this.speed);
		const newY = this._y + (this._dy * this.speed);

		if (newX > this._width - this._sensitivityRadius || newX < this._sensitivityRadius) {
			this._dx *= -1;
		}

		if (newY > this._height - this._sensitivityRadius || newY < this._sensitivityRadius) {
			this._dy *= -1;
		}
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
	sensitivityRadius: number;
}

export interface IDirectionParams {
	dx: number;
	dy: number;
}
