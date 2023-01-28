import React from 'react';
import { Box, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { useField } from 'formik';

import { Field } from '../../../types';

const DEFAULT_FIELD_KEY = 'enum-field-key';

const Enum: React.FC<{ f: Field; name?: string }> = ({ f, name }) => {
  const [field] = useField(name || DEFAULT_FIELD_KEY);
  const id = React.useId();

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id={id}>{name || ''}</InputLabel>
        <Select labelId={id} label={name || ''} {...field}>
          {f?.enum?.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Enum;
