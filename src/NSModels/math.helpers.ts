export const randomValue = ({ min, max }: IRandomValue) => {
	const value = min + (Math.random() * (max - min));

	return Math.round(value);
};

export const positiveOrNegativeValue = () => Math.random() > 0.5 ? 1 : -1;

export const randomBoolean = () => Math.random() >= 0.5;

export const degreesToRadians = (degrees: number) => degrees * (Math.PI / 180);

export const radiansToDegrees = (radians: number) => radians * (180 / Math.PI);

interface IRandomValue {
	min: number;
	max: number;
}
