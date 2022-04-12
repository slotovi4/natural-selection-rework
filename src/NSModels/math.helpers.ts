export const randomValue = ({ min, max }: IRandomValue) => {
	const value = min + (Math.random() * (max - min));

	return Number(value.toFixed(2));
};

export const positiveOrNegativeValue = () => Math.random() > 0.5 ? 1 : -1;

export const degreesToRadians = (degrees: number) => degrees * (Math.PI / 180);

export const radiansToDegrees = (radians: number) => radians * (180 / Math.PI);

interface IRandomValue {
	min: number;
	max: number;
}
