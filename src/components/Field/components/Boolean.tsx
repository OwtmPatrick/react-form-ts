import React from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';

import { useField } from 'formik';

import { Field } from '../../../types';

const DEFAULT_FIELD_KEY = 'boolean-field-key';

const Boolean: React.FC<{ f: Field; name?: string }> = ({ f, name }) => {
  const [field, meta, { setValue }] = useField(name || DEFAULT_FIELD_KEY);

  return (
    <FormControlLabel
      name={name}
      control={
        <Checkbox
          onChange={(e) => {
            setValue(e.target.checked);
          }}
        />
      }
      label={name}
    />
  );
};

export default Boolean;
