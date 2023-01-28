import React from 'react';
import { FormControl, TextField } from '@mui/material';
import { useField } from 'formik';
import { getFieldLabel } from '../../../utils';

const DEFAULT_FIELD_KEY = 'text-field-key';

const Text: React.FC<{ name?: string }> = ({ name }) => {
  const [field, meta, { setValue }] = useField(name || DEFAULT_FIELD_KEY);
  const label = getFieldLabel(name);

  React.useEffect(() => {
    if (field.value === undefined) {
      setValue('');
    }
  }, []);

  return (
    <FormControl fullWidth>
      <TextField {...field} label={label} />
      {meta.error && meta.touched && <div>{meta.error}</div>}
    </FormControl>
  );
};

export default Text;
