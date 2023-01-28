import React from 'react';
import { FormControl, TextField } from '@mui/material';
import { useField } from 'formik';
import { Field } from '../../../types';
import { getFieldLabel } from '../../../utils';

const DEFAULT_FIELD_KEY = 'integer-field-key';

const Integer: React.FC<{ f: Field; name?: string }> = ({ f, name }) => {
  const [field, meta, { setValue }] = useField(name || DEFAULT_FIELD_KEY);
  const label = getFieldLabel(name);

  React.useEffect(() => {
    if (field.value === undefined) {
      setValue('');
    }
  }, []);

  return (
    <FormControl fullWidth>
      <TextField type="number" {...field} label={label} />
      {meta.error && meta.touched && <div>{meta.error}</div>}
    </FormControl>
  );
};

export default Integer;
