/**
 * Разбивает сектор на 4 под сектора
 * @param sectorPosition начальные и конечные координаты сектора
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

/**
 * Создает массив точек по границе области
 * @param areaPosition начальные и конечные координаты области 
 * @param k уровень вложенности секторов
 * @returns массив точек на границе
 */
export const createAreaBorderPoints = ({ startPoint, endPoint }: ISectorPosition, k: number) => {
	const areaBorderPointsList: IPoint[] = [];
	const xDiff = Math.abs(startPoint.x - endPoint.x) / (k || 1);
	const yDiff = Math.abs(startPoint.y - endPoint.y) / (k || 1);

	for (let i = 0; i <= k; i++) {
		areaBorderPointsList.push(
			{
				x: i * xDiff,
				y: startPoint.y
			},
			{
				x: i * xDiff,
				y: endPoint.y
			},
			{
				x: startPoint.x,
				y: i * yDiff
			},
			{
				x: endPoint.x,
				y: i * yDiff
			}
		);
	}

	return areaBorderPointsList;
};

export interface ISectorPosition {
	startPoint: IPoint;
	endPoint: IPoint;
}

export interface IPoint {
	x: number;
	y: number;
}
