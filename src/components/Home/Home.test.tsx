import Home from './Home';

import { render } from 'react-dom';

describe('Test Home component', () => {
	it('Renders without crashing', () => {
		const app = document.createElement('div');

		render(<Home />, app);
	});
});
