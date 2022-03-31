import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import { AppRoutes } from './AppRoutes';

import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { StrictMode, Suspense } from 'react';

const App = () => (
	<StrictMode>
		<RecoilRoot>
			<Suspense fallback={<div>Loading...</div>}>
				<AppRoutes />
			</Suspense>
		</RecoilRoot>
	</StrictMode>
);

const container = document.getElementById('root');

if (container) {
	const root = createRoot(container);

	root.render(<App />);

	registerServiceWorker();
}
