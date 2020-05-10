import React from 'react';
import { render, screen } from '../../../test-utils';
import '@testing-library/jest-dom/extend-expect';

// Components
import Avatar from '../Avatar';

test('Display button', async () => {
  render(
    <Avatar
      src="http://localhost:4000/assets/batman.png"
      alt="Hero"
      size="small"
    >
      Test
    </Avatar>,
  );

  const imgNode = screen.getByRole('img');

  expect(imgNode).toHaveAttribute('src');
  expect(imgNode.getAttribute('src')).toEqual('http://localhost:4000/assets/batman.png');
  expect(imgNode).toHaveAttribute('alt');
  expect(imgNode.getAttribute('alt')).toEqual('Hero');
});
