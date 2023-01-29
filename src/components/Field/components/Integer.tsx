import React from 'react';
import { FormControl, TextField, Typography } from '@mui/material';
import { useField } from 'formik';

import { getFieldLabel } from '../../../utils';

import { REQUIRED_ERROR_MESSAGE } from '../../../constants/errors';

const DEFAULT_FIELD_KEY = 'integer-field-key';

const Integer: React.FC<{ name?: string; required?: boolean }> = ({ name, required }) => {
  const validate = (val: string) => {
    if (required && !val) {
      return REQUIRED_ERROR_MESSAGE;
    }

    return undefined;
  };

  const [field, meta, { setValue }] = useField({ name: name || DEFAULT_FIELD_KEY, validate });
  const label = getFieldLabel(name);
  const hasError = !!meta.error && meta.touched;

  React.useEffect(() => {
    if (field.value === undefined) {
      setValue('');
    }
  }, []);

  return (
    <FormControl fullWidth>
      <TextField type="number" {...field} label={label} error={hasError} />
      {hasError && (
        <Typography variant="caption" sx={(theme) => ({ color: theme.palette.error.main })} mt={1}>
          {meta.error}
        </Typography>
      )}
    </FormControl>
  );
};

export default Integer;
