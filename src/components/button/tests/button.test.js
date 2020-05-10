import React from 'react';
import { render, screen } from '../../../test-utils';
import '@testing-library/jest-dom/extend-expect';

// Components
import Button from '../Button';

test('Display button', async () => {
  render(
    <Button
      type="button"
      color="green"
      font="white"
      border="green"
      onClick={() => {}}
      disabled
    >
      Test
    </Button>,
  );

  const buttonNode = screen.getByRole('button');

  expect(buttonNode).toHaveTextContent('Test');
  expect(buttonNode).toHaveAttribute('disabled');
  expect(buttonNode.getAttribute('type')).toEqual('button');
  expect(buttonNode.getAttribute('color')).toEqual('green');
});
