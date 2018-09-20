import rxloop from '@rxloop/core';
import devtools from '../src/';

const app = rxloop({
  plugins: [
    devtools(),
  ],
});

// app.start();

describe('Basic usage', () => {
  test('immer number', () => {
    expect({}).toEqual({});
  });
});
