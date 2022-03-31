import styles from './Area.module.scss';

import { initArea } from 'src/NSModels';
import { Canvas } from 'src/shared';
import { useEffect, useRef } from 'react';

export const Area = () => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		const ctx = canvasRef.current?.getContext('2d');

		initArea(ctx);
	}, []);

	return (
		<section className={styles['Area']}>
			<Canvas
				className={styles['Area-Canvas']}
				ref={canvasRef}
				width={500}
				height={500}
			/>
		</section>
	);
};
