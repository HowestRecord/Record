import React from 'react';

import { fireEvent, render } from 'tests';

import { ZoomableImage } from './ZoomableImage';

describe('ZoomableImage', () => {
  test('renders image', () => {
    const { getByTestId } = render(<ZoomableImage src="" />);

    const element = getByTestId('zoomable-image');

    expect(element).toBeInTheDocument();
  });
  test('open dialog on image click', () => {
    const { getByTestId } = render(<ZoomableImage src="" />);

    const element = getByTestId('zoomable-image');
    fireEvent.click(element);

    expect(getByTestId('zoomable-dialog')).toBeInTheDocument();
  });
});
