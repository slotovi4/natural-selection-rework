import styles from './HomeContainer.module.scss';

import { useEffect, useRef, useState } from 'react';
import { NaturalSelectionConstructor } from 'src/NSModels';
import { Canvas } from 'src/shared';

import type { ChangeEvent } from 'react';

export const HomeContainer = () => {
	const areaSize = 500;
	const areaBorderSize = 1;
	const areaCanvasRef = useRef<HTMLCanvasElement | null>(null);
	const creaturesCanvasRef = useRef<HTMLCanvasElement | null>(null);

	const [foodCountPercent, setFoodCountPercent] = useState(50);
	const [didStartSelection, setDidStartSelection] = useState(true);

	useEffect(() => {
		if (!didStartSelection) {
			return;
		}

		const areaCtx = areaCanvasRef.current?.getContext('2d');

		if (areaCtx) {
			new NaturalSelectionConstructor({
				areaCtx,
				areaSize,
				areaBorderSize,
				foodCountPercent
			});
		}
	}, [didStartSelection, foodCountPercent]);

	const onChangeFoodCountPercent = (e: ChangeEvent<HTMLInputElement>) => {
		setFoodCountPercent(Number(e.target.value));
	};

	const startSelection = () => {
		setDidStartSelection(true);
	};

	return (
		<section>
			{didStartSelection ? (
				<section className={styles['HomeContainer-CanvasContainer']}>
					<Canvas
						className={styles['HomeContainer-Canvas']}
						ref={areaCanvasRef}
						width={areaSize}
						height={areaSize}
					/>

					<Canvas
						className={styles['HomeContainer-Canvas']}
						ref={creaturesCanvasRef}
						width={areaSize}
						height={areaSize}
					/>
				</section>
			) : (
				<>
					<label htmlFor="foodCountPercent">Food count percent (between 10% and 100%): {foodCountPercent}</label>
					<input
						id="foodCountPercent"
						type='range'
						min={10}
						max={100}
						value={foodCountPercent}
						onChange={onChangeFoodCountPercent}
					/>

					<button onClick={startSelection}>
						Start
					</button>
				</>
			)}
		</section>
	);
};
