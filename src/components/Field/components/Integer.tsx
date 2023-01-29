import React from 'react';
import { FormControl, TextField, Typography } from '@mui/material';
import { useField } from 'formik';
import { IntegerField } from '../../../types';

import { getFieldLabel } from '../../../utils';

import { REQUIRED_ERROR_MESSAGE } from '../../../constants/errors';

const DEFAULT_FIELD_KEY = 'integer-field-key';

const Integer: React.FC<{ f: IntegerField; name?: string; required?: boolean }> = ({
  f,
  name,
  required,
}) => {
  const validate = (val: number) => {
    if (required && !val) {
      return REQUIRED_ERROR_MESSAGE;
    }

    if (f.minimum && val < f.minimum) {
      return `Value must be >= ${f.minimum}`;
    }

    if (f.maximum && val > f.maximum) {
      return `Value must be <= ${f.maximum}`;
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
