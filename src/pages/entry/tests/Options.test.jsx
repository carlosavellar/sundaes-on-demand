import { screen, render } from '@testing-library/react';
import Options from '../Options';
import ToopingOption from '../ToopingOption';
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

test('Display images for each tooping option from a server', async () => {
  act(() => {
    render(<Options optionType="toopings" />);
  });
  const toopingImages = await screen.findAllByRole('img', { name: /tooping$/i });
  act(() => {
    expect(toopingImages).toHaveLength(3);
  });
});
