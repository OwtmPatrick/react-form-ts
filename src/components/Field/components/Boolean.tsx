import React from 'react';
import { FormControl, FormControlLabel, Checkbox, Typography } from '@mui/material';
import { useField } from 'formik';
import { getFieldLabel } from '../../../utils';

import { REQUIRED_ERROR_MESSAGE } from '../../../constants/errors';
import { DEFAULT_FIELD_KEY } from '../../../constants/field';

// const DEFAULT_FIELD_KEY = 'boolean-field-key';

const Boolean: React.FC<{ name?: string; required?: boolean }> = ({ name, required }) => {
  const validate = (val?: boolean) => {
    if (required && val === undefined) {
      return REQUIRED_ERROR_MESSAGE;
    }

    return undefined;
  };

  const [, meta, { setValue }] = useField({ name: name || DEFAULT_FIELD_KEY, validate });
  const label = getFieldLabel(name);

  return (
    <FormControl fullWidth>
      <FormControlLabel
        name={name}
        control={<Checkbox onChange={(e) => setValue(e.target.checked)} />}
        label={
          <Typography
            variant="body1"
            sx={(theme) => ({
              color: meta.error ? theme.palette.error.main : theme.palette.text.primary,
            })}
          >
            {label}
          </Typography>
        }
      />

      {!!meta.error && (
        <Typography variant="caption" sx={(theme) => ({ color: theme.palette.error.main })} mt={1}>
          {meta.error}
        </Typography>
      )}
    </FormControl>
  );
};

export default Boolean;
