import { expect, test } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import { render } from 'vitest-browser-react';
import VisibilityDemo from './VisibilityDemo';

test('Smoke test', () => {
	render(<VisibilityDemo />);
});

test('Renders elements, uses page', async () => {
	await render(<VisibilityDemo />);
	await expect(page.getByText('Toggle DOM')).toBeInTheDocument();
});

test('Renders elements, uses screen', async () => {
	const screen = await render(<VisibilityDemo />);
	await expect(screen.getByText('Toggle DOM')).toBeInTheDocument();
});

test('Toggle Visibility', async () => {
	let { getByText, getByTestId } = await render(<VisibilityDemo />);
	const button = getByText('Toggle Visibility');
	const box = getByTestId('visibility');
	// Verify that the box is in the DOM
	expect(box).toBeInTheDocument();
	expect(box).toBeVisible();

	await userEvent.click(button);
	expect(box).toBeInTheDocument();
	expect(box).not.toBeVisible();
});
