import styles from './AreaTreeContainer.module.scss';

import { useEffect, useRef } from 'react';
import { AreaTreeConstructor } from 'src/NSModels';
import { Canvas } from 'src/shared';

export const AreaTreeContainer = () => {
	const areaSize = 800;
	const sectorCanvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		const sectorCtx = sectorCanvasRef.current?.getContext('2d');

		if (sectorCtx) {
			const areaTree = new AreaTreeConstructor({ areaSize, ctx: sectorCtx });

			areaTree.draw();
		}
	}, []);

	return (
		<section className={styles.AreaTreeContainer}>
			<Canvas
				ref={sectorCanvasRef}
				width={areaSize}
				height={areaSize}
			/>
		</section>
	);
};
