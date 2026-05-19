import { expect, describe, test } from 'vitest';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';
import VisibilityDemo from './VisibilityDemo';

describe('Visibility tests', async () => {
	test('Toggle DOM absence', async () => {
		const user = userEvent.setup();
		let { getByText, queryByTestId } = render(<VisibilityDemo />);
		const button = getByText('Toggle DOM');
		const box = queryByTestId('DOM');
		// Verify that the box is in the DOM
		expect(box).toBeInTheDocument();

		await user.click(button);
		expect(box).not.toBeInTheDocument();
	});

	test('Toggle Visibility', async () => {
		const user = userEvent.setup();
		let { getByText, queryByTestId } = render(<VisibilityDemo />);
		const button = getByText('Toggle Visibility');
		const box = queryByTestId('visibility');
		// Verify that the box is in the DOM
		expect(box).toBeInTheDocument();
		expect(box).toBeVisible();

		await user.click(button);
		expect(box).toBeInTheDocument();
		expect(box).not.toBeVisible();
	});

	test('Toggle Display', async () => {
		const user = userEvent.setup();
		let { getByText, queryByTestId } = render(<VisibilityDemo />);
		const button = getByText('Toggle Display');
		const box = queryByTestId('display');
		// Verify that the box is in the DOM
		expect(box).toBeInTheDocument();
		expect(box).toBeVisible();

		await user.click(button);
		expect(box).toBeInTheDocument();
		expect(box).not.toBeVisible();
	});

	test('Toggle Opacity', async () => {
		const user = userEvent.setup();
		let { getByText, queryByTestId } = render(<VisibilityDemo />);
		const button = getByText('Toggle Opacity');
		const box = queryByTestId('opacity');
		// Verify that the box is in the DOM
		expect(box).toBeInTheDocument();
		expect(box).toBeVisible();

		await user.click(button);
		expect(box).toBeInTheDocument();
		expect(box).not.toBeVisible();
	});

	test('Toggle Hidden', async () => {
		const user = userEvent.setup();
		let { getByText, queryByTestId } = render(<VisibilityDemo />);
		const button = getByText('Toggle Hidden');
		const box = queryByTestId('hidden');
		// Verify that the box is in the DOM
		expect(box).toBeInTheDocument();
		expect(box).toBeVisible();

		await user.click(button);
		expect(box).toBeInTheDocument();
		expect(box).not.toBeVisible();
	});
});
