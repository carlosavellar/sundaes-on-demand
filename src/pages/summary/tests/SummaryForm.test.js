import { fireEvent, queryByText, render, screen } from '@testing-library/react';
import SummaryForm from './../SummaryForm';
import userEvent from '@testing-library/user-event';

describe('Checkbox', () => {
  test('Is disabled?', () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();

    const btn = screen.getByRole('button');
    expect(btn).toBeDisabled();
  });
});

describe('Checkbox', () => {
  test('Enabled now, right??', async () => {
    const user = userEvent.setup();
    render(<SummaryForm />);
    const checkbox = screen.getByRole('checkbox');
    const btn = screen.getByRole('button', { name: /confirm order/i });

    expect(checkbox).not.toBeChecked();

    await user.click(checkbox);

    expect(btn).toBeEnabled();
  });
});

test('Popup responds on hover', async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);

  const textTerms = screen.queryByText(/terms and conditions/i);
  await user.hover(textTerms);

  const popover = screen.queryByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  await user.unhover(textTerms);
  expect(popover).not.toBeInTheDocument();
});
