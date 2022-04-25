import { AreaTree } from './AreaTree';
import { addBorderPointsToSectors, createAreaBorderPoints } from './helpers';

import type { IPoint } from './helpers';
import type { ISector } from './AreaTree';

export class AreaTreeConstructor extends AreaTree {
	private readonly _areaSize: number;
	private readonly _sectorsNestingLevel = 1;
	private readonly _areaSectorPosition: ISector['position'];

	private _areaBorderPoints: IPoint[] = [];
	private _rootSectorsList: ISector[] = [];

	public constructor(props: TAreaTreeProps) {
		super(props);

		this._areaSize = this._ctx.canvas.width;
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
		this._areaBorderPoints.forEach(point => this.drawBorderPoint(point, ''));
	}

	private init() {
		this.initRootSectorsList();
		this.initAreaBorderPoints();
		this.initSectorsBorderPoints();
	}

	private initRootSectorsList() {
		this._rootSectorsList = this.createSector(this._areaSectorPosition, this._sectorsNestingLevel);
	}

	private initAreaBorderPoints() {
		const sectorsCountOnOneAreaBorder = 4 * Math.pow(2, this._sectorsNestingLevel - 1);

		this._areaBorderPoints = createAreaBorderPoints(this._areaSectorPosition, sectorsCountOnOneAreaBorder);
	}

	private initSectorsBorderPoints() {
		this._rootSectorsList = addBorderPointsToSectors(this._rootSectorsList, this._areaBorderPoints);
	}
}

type TAreaTreeProps = ConstructorParameters<typeof AreaTree>[0];
