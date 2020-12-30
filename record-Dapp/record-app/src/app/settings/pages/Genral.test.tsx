import React from 'react';

import { render } from 'tests';

import { General } from './General';

describe('General Page', () => {
  test('renders', () => {
    const { getByText } = render(<General />);
    expect(getByText('settings.dark_mode')).toBeInTheDocument();
  });
});
