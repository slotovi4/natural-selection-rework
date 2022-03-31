import { AreaConstructor } from './AreaConstructor';

export const initArea = (ctx?: CanvasRenderingContext2D | null) => {
	if (!ctx) {
		return null;
	}

	return new AreaConstructor({ ctx });
};
