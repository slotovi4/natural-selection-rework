import { randomValue } from '../math.helpers';

export const getRandomStepsBeforeChangeDirectionValue = (speed: number) => {
	const minStepsBeforeChangeDirection = Math.round(30 / speed);
	const maxStepsBeforeChangeDirection = Math.round(80 / speed);

	return randomValue({
		min: minStepsBeforeChangeDirection,
		max: maxStepsBeforeChangeDirection
	});
};
