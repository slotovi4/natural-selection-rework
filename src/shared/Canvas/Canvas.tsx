import { forwardRef } from 'react';

import type { CanvasHTMLAttributes } from 'react';

interface IProps extends CanvasHTMLAttributes<HTMLCanvasElement> {
	width: number;
	height: number;
}

export const Canvas = forwardRef<HTMLCanvasElement, IProps>((props, ref) => <canvas {...props} ref={ref} />);
