import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import { AppRoutes } from './AppRoutes';

import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { Suspense } from 'react';

const App = () => {
	return (
		<RecoilRoot>
			<Suspense fallback={<div>Loading...</div>}>
				<AppRoutes />
			</Suspense>
		</RecoilRoot>
	);
};

const container = document.getElementById('root');

if (container) {
	const root = createRoot(container);

	root.render(<App />);

	registerServiceWorker();
}
