/**
 * Разбивает сектор на 4
 * @param sector начальные и конечные координаты сектора
 * @returns массив из 4х новых секторов
 */
export const splitSector = ({ startPoint, endPoint }: ISectorPosition): ISectorPosition[] => {
	const xDiff = Math.abs(startPoint.x - endPoint.x) / 2;
	const yDiff = Math.abs(startPoint.y - endPoint.y) / 2;
	const centerX = startPoint.x + xDiff;
	const centerY = startPoint.y + yDiff;

	return [
		{
			startPoint: { x: startPoint.x, y: startPoint.y },
			endPoint: { x: centerX, y: centerY },
		},
		{
			startPoint: { x: centerX, y: startPoint.y },
			endPoint: { x: endPoint.x, y: centerY },
		},
		{
			startPoint: { x: startPoint.x, y: centerY },
			endPoint: { x: centerX, y: endPoint.y },
		},
		{
			startPoint: { x: centerX, y: centerY },
			endPoint: { x: endPoint.x, y: endPoint.y },
		}
	];
};

export interface ISectorPosition {
	startPoint: IPoint;
	endPoint: IPoint;
}

interface IPoint {
	x: number;
	y: number;
}
