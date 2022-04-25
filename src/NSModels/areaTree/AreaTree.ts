import { splitSector } from './helpers';
import { SectorConstructor } from './sector';
import { PointConstructor } from './point';

import { CanvasElement } from '../CanvasElement';

import type { ISectorPosition, IPoint } from './helpers';

export class AreaTree extends CanvasElement {
	public constructor(props: TCanvasElementProps) {
		super(props);
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

	/**
	 * Рисует секторы и подсекторы сектора
	 * @param sectorsList массив секторов
	 */
	protected drawSectors(sectorsList: ISector[]) {
		sectorsList.forEach(({ position, subSectors }) => {
			this.drawSector(position);

			if (subSectors && subSectors.length) {
				this.drawSectors(subSectors);
			}
		});
	}

	/**
	 * Рисует точку на границе области
	 * @param point координаты точки
	 * @param color цвет точки
	 */
	protected drawBorderPoint(point: IPoint, color: string) {
		new PointConstructor({ ctx: this._ctx, point, color });
	}

	/**
	 * Рисует сектор
	 * @param sector координаты сектора
	 */
	private drawSector(sector: ISectorPosition) {
		new SectorConstructor({ ctx: this._ctx, sector });
	}
}

type TCanvasElementProps = ConstructorParameters<typeof CanvasElement>[0];

export interface ISector extends ISectorData {
	subSectors?: ISector[];
}

interface ISectorData {
	position: ISectorPosition;
	borderPoints?: IPoint[];
}
