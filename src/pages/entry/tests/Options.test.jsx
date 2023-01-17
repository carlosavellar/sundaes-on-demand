import { screen, render } from '@testing-library/react';
import { server } from '../../../mocks/server';
import Options from '../Options';
import { rest } from 'msw';
import { act } from 'react-dom/test-utils';

test('Teste image', async () => {
  act(() => {
    render(<Options optionType="scoops" />);
  });
  // server.resetHandlers(
  //   rest.get('http://localhost:3000/scoops', (req, res, ctx) => {
  //     return res(ctx.status(500));
  //   }),
  //   rest.get('http://localhost:3000/toppings', (req, res, ctx) => {
  //     return res(ctx.status(500));
  //   })
  // );

  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
  act(() => {
    if (!scoopImages) {
      return 'anonimous 😻';
    }

    expect(scoopImages).toHaveLength(2);
    const scoopAlt = scoopImages.map((element) => element.alt);
    expect(scoopAlt).toEqual(['Chocolate scoop', 'Vanilla scoop']);
  });
});
