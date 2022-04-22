export const randomValue = ({ min, max }: IRandomValue) => {
	const value = min + (Math.random() * (max - min));

	return Math.round(value);
};

export const positiveOrNegativeValue = () => randomBoolean() ? 1 : -1;

export const randomBoolean = () => Math.random() >= 0.5;

export const degreesToRadians = (degrees: number) => Number((degrees * (Math.PI / 180)).toFixed(4));

export const radiansToDegrees = (radians: number) => Number((radians * (180 / Math.PI)).toFixed(4));

export const calcDistance = (fPoint: IPoint, sPoint: IPoint) => Number(Math.hypot(fPoint.x - sPoint.x, fPoint.y - sPoint.y).toFixed(4));

interface IRandomValue {
	min: number;
	max: number;
}

interface IPoint {
	x: number;
	y: number;
}
