import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost:3000/scoops', (req, res, ctx) => {
    console.log(ctx.body, '🅱️');
    return res(
      ctx.json([
        {
          name: 'Chocolate',
          imagePath: '/images/chocolate.png',
        },
        {
          name: 'Vanilla',
          imagePath: '/images/vanilla.png',
        },
      ])
    );
  }),
];
