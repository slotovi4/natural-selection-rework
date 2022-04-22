import type { TNutritionalValue } from './Food';

export const randomizeNutritionalValue = (): TNutritionalValue => {
	const val = Math.random();

	if (val >= 0.6) {
		return 'hight';
	} else if (val >= 0.3) {
		return 'middle';
	} else {
		return 'low';
	}
};

export const getNutritionalValueColor = (nutritionalValue: TNutritionalValue) => {
	switch (nutritionalValue) {
		case 'hight':
			return '#4caf50';
		case 'middle':
			return '#8bc34a';
		case 'low':
			return '#cee741';
	}
};

