import { parseData } from '../helpers';

const data = {
  id: 'example_id',
  full_name: 'Test Full Name',
  description: 'Test Description',
  avatar_url: 'www.test.com/avatar_url',
  type: {
    id: 'example_id',
    name: 'Test Type Name',
  },
};

describe('helpers', () => {
  it('should parse data', () => {
    expect(parseData(data)).toEqual({
      full_name: 'Test Full Name',
      description: 'Test Description',
      avatar_url: 'www.test.com/avatar_url',
      type: 'example_id',
    });
  });
});
