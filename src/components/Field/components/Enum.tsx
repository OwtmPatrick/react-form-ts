import React from 'react';
import { Box, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { useField } from 'formik';
import { EnumField } from '../../../types';
import { getFieldLabel } from '../../../utils';

const DEFAULT_FIELD_KEY = 'enum-field-key';

const Enum: React.FC<{ f: EnumField; name?: string }> = ({ f, name }) => {
  const [field] = useField(name || DEFAULT_FIELD_KEY);
  const id = React.useId();
  const label = getFieldLabel(name);

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id={id}>{label}</InputLabel>
        <Select labelId={id} label={label} {...field}>
          {f.enum.map((item) => (
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
