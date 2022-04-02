import { useEffect, useRef } from 'react';
import { Area } from 'src/components';
import { NaturalSelectionConstructor } from 'src/NSModels';

export const HomeContainer = () => {
	const areaSize = 500;
	const areaCanvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		const areaCtx = areaCanvasRef.current?.getContext('2d');

		if (areaCtx) {
			const ns = new NaturalSelectionConstructor({ areaCtx, areaSize });
		}
	}, []);


	return (
		<Area
			ref={areaCanvasRef}
			areaSize={areaSize}
		/>
	);
};
