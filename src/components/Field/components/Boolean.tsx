import React from 'react';
import { FormControl, FormControlLabel, Checkbox } from '@mui/material';

import { useField } from 'formik';

import { Field } from '../../../types';

const DEFAULT_FIELD_KEY = 'boolean-field-key';

const Boolean: React.FC<{ f: Field; name?: string }> = ({ f, name }) => {
  const [, , { setValue }] = useField(name || DEFAULT_FIELD_KEY);

  return (
    <FormControl fullWidth>
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
    </FormControl>
  );
};

export default Boolean;