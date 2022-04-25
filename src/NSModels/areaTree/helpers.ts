import type { ISector } from './AreaTree';

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
 * @param sectorsCountOnOneAreaBorder количество секторов граничащих с одной из границ области
 * @returns массив точек на границе
 */
export const createAreaBorderPoints = ({ startPoint, endPoint }: ISectorPosition, sectorsCountOnOneAreaBorder: number) => {
	const xDiff = Math.abs(startPoint.x - endPoint.x) / (sectorsCountOnOneAreaBorder || 1);
	const yDiff = Math.abs(startPoint.y - endPoint.y) / (sectorsCountOnOneAreaBorder || 1);
	const borderPointsList: IPoint[] = [
		{
			x: startPoint.x,
			y: startPoint.y
		},
		{
			x: endPoint.x,
			y: endPoint.y
		},
		{
			x: startPoint.x,
			y: endPoint.y
		},
		{
			x: endPoint.x,
			y: startPoint.y
		}
	];

	for (let i = 1; i < sectorsCountOnOneAreaBorder; i++) {
		borderPointsList.push(
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

	return borderPointsList;
};

/**
 * Заполняет параметр borderPoints всем секторам и подсекторам, по точкам границ родительского сектора
 * @param sectorsList массив секторов
 * @param rootSectorBorderPoints массив точек границ родительского сектора
 * @returns сектора с заполненными данными - borderPoints
 */
export const addBorderPointsToSectors = (sectorsList: ISector[], rootSectorBorderPoints: IPoint[]) => {
	return sectorsList.map(rootSector => {
		rootSector.borderPoints = getSectorBorderPoints(rootSector.position, rootSectorBorderPoints);

		if (rootSector.subSectors) {
			rootSector.subSectors = addBorderPointsToSectors(rootSector.subSectors, rootSector.borderPoints);
		}

		return rootSector;
	});
};

/**
 * Возвращает точки границ области, граничащие с сектором
 * @param sectorPosition позиция сектора
 * @param rootSectorBorderPoints тоски границ родительского сектора
 * @returns массив borderPoints текущего сектора
 */
const getSectorBorderPoints = ({ startPoint, endPoint }: ISectorPosition, rootSectorBorderPoints: IPoint[]) => {
	return rootSectorBorderPoints.filter(({ x, y }) => {
		const isPointInsideSector = endPoint.x >= x && endPoint.y >= y && startPoint.y <= y && startPoint.x <= x;

		return isPointInsideSector;
	});
};

export interface ISectorPosition {
	startPoint: IPoint;
	endPoint: IPoint;
}

export interface IPoint {
	x: number;
	y: number;
}
