import React from 'react';
import { Select, MenuItem } from '@mui/material';
import { useField } from 'formik';

import { Field } from '../../../types';

const DEFAULT_FIELD_KEY = 'enum-field-key';

const Enum: React.FC<{ f: Field; name?: string }> = ({ f, name }) => {
  const [field, meta] = useField(name || DEFAULT_FIELD_KEY);
  //   console.log(f);

  return (
    <div>
      <Select {...field} label={name}>
        {f?.enum?.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default Enum;
