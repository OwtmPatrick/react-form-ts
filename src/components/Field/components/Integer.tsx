import React from 'react';
import { TextField } from '@mui/material';
import { useField } from 'formik';

import { Field } from '../../../types';

const DEFAULT_FIELD_KEY = 'integer-field-key';

const Integer: React.FC<{ f: Field; name?: string }> = ({ f, name }) => {
  const [field, meta, { setValue }] = useField(name || DEFAULT_FIELD_KEY);

  React.useEffect(() => {
    if (field.value === undefined) {
      setValue('');
    }
  }, []);

  return (
    <>
      <TextField type="number" {...field} label={name || ''} />
      {meta.error && meta.touched && <div>{meta.error}</div>}
    </>
  );
};

export default Integer;
