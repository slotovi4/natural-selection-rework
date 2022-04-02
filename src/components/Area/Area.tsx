import styles from './Area.module.scss';

import { Canvas } from 'src/shared';
import { forwardRef } from 'react';

interface IProps {
	areaSize: number;
}

export const Area = forwardRef<HTMLCanvasElement, IProps>(({ areaSize }, areaRef) => {
	return (
		<section className={styles['Area']}>
			<Canvas
				className={styles['Area-Canvas']}
				ref={areaRef}
				width={areaSize}
				height={areaSize}
			/>
		</section>
	);
});
