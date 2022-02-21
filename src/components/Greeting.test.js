import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
	test('renders Hello World as a text', () => {
		// Arrange
		render(<Greeting />);

		// Act
		// ...nothing

		// Assert
		const helloWorldElement = screen.getByText('Hello World!');
		expect(helloWorldElement).toBeInTheDocument();
	});

	test('renders default text if button was not clicked', () => {
		render(<Greeting />);

		const textElement = screen.getByText("It's good to see you!", {
			exact: false,
		});
		expect(textElement).toBeInTheDocument();
	});

	test('renders "Changed!" if the button was clicked', () => {
		// Arrange
		render(<Greeting />);

		// Act
		const buttonElement = screen.getByRole('button');
		userEvent.click(buttonElement);

		// Assert
		const textElement = screen.getByText('Changed!');
		expect(textElement).toBeInTheDocument();
	});

	test('does not render default text if the button is clicked', () => {
		render(<Greeting />);

		const buttonElement = screen.getByRole('button');
		userEvent.click(buttonElement);

		const textElement = screen.queryByText("It's good to see you!", {
			exact: false,
		});
		expect(textElement).toBeNull();
	});
});

// 1. Arrange - Set up the test data, test conditions and test environment
// 2. Act - Run logic that should be tested (e.g. execute function)
// 3. Assert - Compare execution results with expected results
