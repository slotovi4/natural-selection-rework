import { splitSector } from './helpers';

import type { ISectorPosition } from './helpers';

export class AreaTree {
	protected readonly _areaSize: IProps['areaSize'];

	public constructor({ areaSize }: IProps) {
		this._areaSize = areaSize;
	}

	/**
	 * Разбивает сектор по уровню вложенности
	 * @param rootSectorPosition начальные и конечные координаты сектора
	 * @param k уровень вложенности
	 * @returns вложенный массив секторов 
	 */
	protected createSector(rootSectorPosition: ISectorPosition, k = 0): ISector[] {
		return splitSector(rootSectorPosition).map(position => ({
			position,
			subSectors: k !== 0 ? this.createSector(position, k - 1) : undefined
		}));
	}
}

interface IProps {
	areaSize: number;
}

export interface ISector extends ISectorData {
	subSectors?: ISector[];
}

interface ISectorData {
	position: ISectorPosition;
}
