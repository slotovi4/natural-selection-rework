import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { HomePage, NotFoundPage } from 'src/pages';

export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
};
