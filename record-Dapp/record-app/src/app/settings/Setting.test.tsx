import React from 'react';

import { render } from 'tests';

import { Settings } from './Settings';

describe('Settings', () => {
  test('renders', () => {
    const { getByText } = render(<Settings />);
    expect(getByText('settings.general')).toBeInTheDocument();
  });
});
