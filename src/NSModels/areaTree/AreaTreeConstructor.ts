import { AreaTree } from './AreaTree';
import { SectorConstructor } from './sector';
import { PointConstructor } from './point';
import { createAreaBorderPoints } from './helpers';

import type { IPoint, ISectorPosition } from './helpers';
import type { ISector } from './AreaTree';

export class AreaTreeConstructor extends AreaTree {
	private readonly _ctx: IProps['ctx'];
	private readonly _sectorsNestingLevel = 4;
	private readonly _areaSectorPosition: ISector['position'];

	private _areaBorderPoints: IPoint[] = [];
	private _rootSectorsList: ISector[] = [];

	public constructor(props: IProps) {
		super(props);

		this._ctx = props.ctx;
		this._areaSectorPosition = {
			startPoint: { x: 0, y: 0 },
			endPoint: { x: this._areaSize, y: this._areaSize }
		};

		this.init();
	}

	public draw() {
		this.drawAreaSectors();
		this.drawAreaBorderPoints();
	}

	private drawAreaSectors() {
		this.drawSectors(this._rootSectorsList);
	}

	private drawAreaBorderPoints() {
		this._areaBorderPoints.forEach(point => this.drawBorderPoint(point));
	}

	private init() {
		this.initRootSectorsList();
		this.initAreaBorderPoints();
	}

	private initRootSectorsList() {
		this._rootSectorsList = this.createSector(this._areaSectorPosition, this._sectorsNestingLevel);
	}

	private initAreaBorderPoints() {
		this._areaBorderPoints = createAreaBorderPoints(this._areaSectorPosition, Math.pow(this._sectorsNestingLevel, 2));
	}

	private drawSectors(sectorsList: ISector[]) {
		sectorsList.forEach(({ position, subSectors }) => {
			this.drawSector(position);

			if (subSectors && subSectors.length) {
				this.drawSectors(subSectors);
			}
		});
	}

	private drawBorderPoint(point: IPoint) {
		new PointConstructor({ ctx: this._ctx, point });
	}

	private drawSector(sector: ISectorPosition) {
		new SectorConstructor({ ctx: this._ctx, sector });
	}
}

type TAreaTreeProps = ConstructorParameters<typeof AreaTree>[0];

interface IProps extends TAreaTreeProps {
	ctx: CanvasRenderingContext2D;
}
