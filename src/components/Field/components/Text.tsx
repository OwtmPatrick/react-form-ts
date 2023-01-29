import React from 'react';
import { FormControl, TextField, Typography } from '@mui/material';
import { useField } from 'formik';
import { TextField as TextFieldT } from '../../../types';

import { getFieldLabel } from '../../../utils';

import { REQUIRED_ERROR_MESSAGE } from '../../../constants/errors';
import { DEFAULT_FIELD_KEY } from '../../../constants/field';

// const DEFAULT_FIELD_KEY = 'text-field-key';

const Text: React.FC<{ f: TextFieldT; name?: string; required?: boolean }> = ({
  f,
  name,
  required,
}) => {
  const validate = (val: string) => {
    if (required && !val) {
      return REQUIRED_ERROR_MESSAGE;
    }

    if (f.minLength && val.length < f.minLength) {
      return `Value must not have less than ${f.minLength} character${f.minLength > 1 ? 's' : ''}`;
    }

    if (f.maxLength && val.length > f.maxLength) {
      return `Value must not have more than ${f.maxLength} character${f.maxLength > 1 ? 's' : ''}`;
    }

    return undefined;
  };

  const [field, meta, { setValue }] = useField({
    name: name || DEFAULT_FIELD_KEY,
    validate,
  });

  const label = getFieldLabel(name);
  const hasError = !!meta.error && meta.touched;

  React.useEffect(() => {
    if (field.value === undefined) {
      setValue('');
    }
  }, []);

  return (
    <FormControl fullWidth>
      <TextField {...field} label={label} error={hasError} />
      {hasError && (
        <Typography variant="caption" sx={(theme) => ({ color: theme.palette.error.main })} mt={1}>
          {meta.error}
        </Typography>
      )}
    </FormControl>
  );
};

export default Text;
