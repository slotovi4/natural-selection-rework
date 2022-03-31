import Area from './Area';

import { render } from 'react-dom';

describe('Test Area component', () => {
	it('Renders without crashing', () => {
		const app = document.createElement('div');

		render(<Area />, app);
	});
});
