import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import OrderEntry from './../OrderEntry';
import { server } from '../../../mocks/server';

test('Display error alert on catch error during request', async () => {
  server.resetHandlers(
    rest.get('http://localhost:3000/scoops', (req, res, ctx) => {
      res(ctx.status(500));
    }),
    rest.get('http://localhost:3000/toppings', (req, res, ctx) => {
      res(ctx.status(500));
    })
  );

  render(<OrderEntry />);

  const alerts = await screen.findAllByRole('alert', { name: 'An expected error ocurred' });

  expect(alerts).toHaveLength(2);
});
