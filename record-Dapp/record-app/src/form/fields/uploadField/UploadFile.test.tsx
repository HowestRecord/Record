import React from 'react';

import { fireEvent, render, waitFor, act } from 'tests';
import { Form } from '../../form/Form';

import { UploadField } from './UploadField';

describe('UploadFile', () => {
  test('handle uploading file', async () => {
    const createObjectURL = jest.fn();
    createObjectURL.mockReturnValue('test');
    window.URL.createObjectURL = createObjectURL;
    const file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });
    const { getByTestId, getByLabelText } = render(
      <Form>
        <UploadField name="test" label="label" />
      </Form>,
    );
    const photoInput = getByLabelText('label');
    const fileInput = getByTestId('test_input');

    fireEvent.click(photoInput);
    Object.defineProperty(fileInput, 'files', {
      value: [file],
    });

    act(() => {
      fireEvent.change(fileInput);
    });

    await waitFor(
      () => {
        return expect(photoInput).toHaveValue('chucknorris.png');
      },
      { timeout: 4000 },
    );

    expect(createObjectURL).toBeCalledWith(file);
    const avatar = getByTestId('upload_field_avatar');
    expect(avatar).toBeInTheDocument();
  });
});
