import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost:3000/scoops', (req, res, ctx) => {
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

  rest.get('http://localhost:3000/toopings', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: 'Cherries',
          pathName: '/images/cherries.png',
        },
        {
          name: 'M&M',
          pathName: '/images/m-and-m.png',
        },
        {
          name: 'Hot Fudge',
          pathName: '/images/hot-fudge.png',
        },
      ])
    );
  }),
];
