import { Creature } from './Creature';
import { getRandomStepsBeforeChangeDirectionValue } from './helpers';

import { radiansToDegrees, degreesToRadians, positiveOrNegativeValue, randomValue } from '../math.helpers';

import type { IDirectionParams } from './Creature';

export class CreatureConstructor extends Creature {
	private _stepsBeforeChangeDirection = getRandomStepsBeforeChangeDirectionValue(this.speed);
	private _step = this._stepsBeforeChangeDirection;

	public constructor(props: TProps) {
		super(props);

		this.init();
	}

	public update() {
		this.realisticMove();
		this.bounce();
		this.draw();
	}

	private init() {
		this.draw();
	}

	private draw() {
		this.drawBody();
		this.drawSensitivity();
	}

	private realisticMove() {
		const isShouldChangeDirection = this._step >= this._stepsBeforeChangeDirection;

		if (isShouldChangeDirection) {
			this.updateDirection(this.calcNewDirection());
			this.reInitDirectionStep();
		}

		this.increaseStep();
		this.move();
	}

	/**
	 * Обновляет значение счетчика шагов смены направления
	 */
	private reInitDirectionStep() {
		this._step = 0;

		this._stepsBeforeChangeDirection = getRandomStepsBeforeChangeDirectionValue(this.speed);
	}

	/**
	 * Увеличивает значение шага
	 */
	private increaseStep() {
		this._step += 1;
	}

	/**
	 * Высчитывает новые значения направления существа по dx/dy
	 * @returns значения dx/dy
	 */
	private calcNewDirection() {
		const randomAngle = randomValue({ min: 0, max: 360 });
		const radian = degreesToRadians(randomAngle);

		return this.directionAngleControl({
			dx: Math.sin(radian) * positiveOrNegativeValue(),
			dy: Math.cos(radian) * positiveOrNegativeValue()
		});
	}

	/**
	 * Регулирует новое направление, исключая резкие повороты
	 * @param newDirection новые значения dx/dy
	 * @returns отрегулированные значения dx/dy
	 */
	private directionAngleControl(newDirection: IDirectionParams) {
		const correctedDirection = { ...newDirection };
		const maxDegreeDiffValue = 85;

		const { dx: newDx, dy: newDy } = newDirection;
		const { dx: oldDx, dy: oldDy } = this.direction;

		const dxDegreeDiff = radiansToDegrees(Math.abs(oldDx - newDx));
		const dyDegreeDiff = radiansToDegrees(Math.abs(oldDy - newDy));

		if (dxDegreeDiff >= maxDegreeDiffValue) {
			correctedDirection.dx = oldDx;
		}

		if (dyDegreeDiff >= maxDegreeDiffValue) {
			correctedDirection.dy = oldDy;
		}

		return correctedDirection;
	}
}

type TProps = ConstructorParameters<typeof Creature>[0];
