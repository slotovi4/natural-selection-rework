import {
	randomValue,
	positiveOrNegativeValue,
	randomBoolean,
	degreesToRadians,
	radiansToDegrees,
	calcDistance
} from '../math.helpers';

const radianDegreeDataList = [
	{ r: 1.0027, d: 0.0175 },
	{ r: 90.0002, d: 1.5708 },
	{ r: 99.9983, d: 1.7453 },
	{ r: 114.5916, d: 2 },
	{ r: 286.4789, d: 5 },
];

describe('math.helpers', () => {
	it('Check randomValue', () => {
		const min = 0;
		const max = 10;

		const rValue = randomValue({ min, max });

		expect(rValue >= min).toBeTruthy();
		expect(rValue <= max).toBeTruthy();
	});

	it('Check positiveOrNegativeValue', () => {
		const value = positiveOrNegativeValue();

		expect(value === 1 || value === -1).toBeTruthy();
	});

	it('Check randomBoolean', () => {
		const isBoolean = randomBoolean();

		expect(isBoolean === false || isBoolean === true).toBeTruthy();
	});

	it('Check degreesToRadians', () => {
		const r1 = degreesToRadians(radianDegreeDataList[0].r);
		const r2 = degreesToRadians(radianDegreeDataList[1].r);
		const r3 = degreesToRadians(radianDegreeDataList[2].r);
		const r4 = degreesToRadians(radianDegreeDataList[3].r);
		const r5 = degreesToRadians(radianDegreeDataList[4].r);

		expect(r1).toEqual(radianDegreeDataList[0].d);
		expect(r2).toEqual(radianDegreeDataList[1].d);
		expect(r3).toEqual(radianDegreeDataList[2].d);
		expect(r4).toEqual(radianDegreeDataList[3].d);
		expect(r5).toEqual(radianDegreeDataList[4].d);
	});

	it('Check radiansToDegrees', () => {
		const d1 = radiansToDegrees(radianDegreeDataList[0].d);
		const d2 = radiansToDegrees(radianDegreeDataList[1].d);
		const d3 = radiansToDegrees(radianDegreeDataList[2].d);
		const d4 = radiansToDegrees(radianDegreeDataList[3].d);
		const d5 = radiansToDegrees(radianDegreeDataList[4].d);

		expect(d1).toEqual(radianDegreeDataList[0].r);
		expect(d2).toEqual(radianDegreeDataList[1].r);
		expect(d3).toEqual(radianDegreeDataList[2].r);
		expect(d4).toEqual(radianDegreeDataList[3].r);
		expect(d5).toEqual(radianDegreeDataList[4].r);
	});

	it('Check calcDistance', () => {
		const p1 = { x: 10, y: 0 };
		const p2 = { x: 10, y: 20 };
		const p3 = { x: 4, y: 17 };
		const p4 = { x: 44, y: 272 };

		const d1 = calcDistance(p1, p2);
		const d2 = calcDistance(p3, p4);
		const d3 = calcDistance(p1, p3);
		const d4 = calcDistance(p2, p4);

		expect(d1).toEqual(20);
		expect(d2).toEqual(258.1182);
		expect(d3).toEqual(18.0278);
		expect(d4).toEqual(254.2833);
	});
});
