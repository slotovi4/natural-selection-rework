import { render } from 'react-dom';

describe('Test Area component', () => {
	it('Renders without crashing', () => {
		const app = document.createElement('div');

		render(<div />, app);
	});
});
