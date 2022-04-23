import { AreaTree } from './AreaTree';
import { SectorConstructor } from './sector';

import type { ISector } from './AreaTree';

export class AreaTreeConstructor extends AreaTree {
	private readonly _ctx: IProps['ctx'];

	public constructor(props: IProps) {
		super(props);

		this._ctx = props.ctx;

		this.init();
	}

	public draw() {
		this.drawSectors(this._rootSectorsList);
	}

	private init() {
		const startPoint = { x: 0, y: 0 };
		const endPoint = { x: this._areaSize, y: this._areaSize };

		this._rootSectorsList = this.createSector({ startPoint, endPoint }, 4);
	}

	private drawSectors(sectorsList: ISector[]) {
		sectorsList.forEach(sector => {
			new SectorConstructor({ ctx: this._ctx, sector: sector.position });

			if (sector.subSectors) {
				this.drawSectors(sector.subSectors);
			}
		});
	}
}

type TAreaTreeProps = ConstructorParameters<typeof AreaTree>[0];

interface IProps extends TAreaTreeProps {
	ctx: CanvasRenderingContext2D;
}
