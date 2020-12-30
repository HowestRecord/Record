import React, { useRef } from 'react';
import { Avatar, Box, InputAdornment } from '@material-ui/core';
import { Controller, useFormContext } from 'react-hook-form';

import { CameraIcon } from 'ui/icons';
import { truncateString } from 'helpers';
import { GenericField } from '../genericField/GenericField';

import { UploadFieldProps } from './UploadField.types';
import { useStyles } from './UploadField.styles';

function getImage(dataUrl: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      resolve(image);
    };
    image.onerror = (_, error?: string) => {
      reject(error);
    };
    image.src = dataUrl;
  });
}

export const UploadField = ({ name, compressImage, ...props }: UploadFieldProps) => {
  const classes = useStyles();
  const fileInput = useRef<HTMLInputElement>(null);
  const { control, setValue } = useFormContext();

  const changeImageQuality = async (file: File) => {
    const image = await getImage(URL.createObjectURL(file));
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;

    const ctx = canvas.getContext('2d');
    ctx?.drawImage(image, 0, 0, image.width, image.height);
    canvas.toBlob(
      blob => {
        if (blob) {
          setValue(name, new File([blob], file.name));
        }
      },
      'image/jpeg',
      0.5,
    );
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      if (compressImage) {
        changeImageQuality(file);
      } else {
        setValue(name, file);
      }
    }
  };

  const handleOpenFileDialog = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  return (
    <Box display="flex" alignItems="center">
      <Controller
        name={name}
        render={({ value }: { value: File }) => {
          return (
            <>
              <input
                type="file"
                style={{ display: 'none' }}
                ref={fileInput}
                onChange={handleFileUpload}
                data-testid={`${name}_input`}
                name={name}
                accept=".png,.jpg,.jpeg"
              />
              <GenericField
                {...props}
                omitRegister
                name="upload_field"
                onClick={handleOpenFileDialog}
                value={truncateString({ maxLength: 30, string: value?.name ?? '' })}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <CameraIcon className={classes.cameraIcon} />
                    </InputAdornment>
                  ),
                }}
              />
              {value && (
                <Avatar
                  src={URL.createObjectURL(value)}
                  variant="rounded"
                  className={classes.avatar}
                  data-testid="upload_field_avatar"
                />
              )}
            </>
          );
        }}
        control={control}
        defaultValue={null}
      />
    </Box>
  );
};
