export const randomValue = ({ min, max }: IRandomValue) => {
	const value = min + (Math.random() * (max - min));

	return Number(value.toFixed(2));
};

interface IRandomValue {
	min: number;
	max: number;
}
