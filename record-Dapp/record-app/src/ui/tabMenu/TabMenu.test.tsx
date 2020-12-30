import React from 'react';

import { fireEvent, render } from 'tests';

import { TabMenu } from './TabMenu';

describe('Tab Menu', () => {
  test('render', () => {
    const { getByText } = render(
      <TabMenu
        tabs={[
          { label: 'some label', content: <h1>content</h1> },
          { label: 'other label', content: <h1>content</h1> },
        ]}
      />,
    );
    const tab = getByText('some label');
    expect(tab).toBeInTheDocument();
    fireEvent.click(tab);
    const tab2 = getByText('other label');
    expect(tab2).toBeInTheDocument();
  });
});
