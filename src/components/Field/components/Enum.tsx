import React from 'react';
import { Box, Select, MenuItem, InputLabel, FormControl, Typography } from '@mui/material';
import { useField } from 'formik';
import { EnumField } from '../../../types';

import { getFieldLabel } from '../../../utils';

import { REQUIRED_ERROR_MESSAGE } from '../../../constants/errors';
import { DEFAULT_FIELD_KEY } from '../../../constants/field';

// const DEFAULT_FIELD_KEY = 'enum-field-key';

const Enum: React.FC<{ f: EnumField; name?: string; required?: boolean }> = ({
  f,
  name,
  required,
}) => {
  const validate = (val: string) => {
    if (required && !val) {
      return REQUIRED_ERROR_MESSAGE;
    }

    return undefined;
  };

  const [field, meta] = useField({ name: name || DEFAULT_FIELD_KEY, validate });
  const id = React.useId();
  const label = getFieldLabel(name);

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id={id}>{label}</InputLabel>
        <Select labelId={id} label={label} {...field} error={!!meta.error}>
          {f.enum.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
        {!!meta.error && (
          <Typography
            variant="caption"
            sx={(theme) => ({ color: theme.palette.error.main })}
            mt={1}
          >
            {meta.error}
          </Typography>
        )}
      </FormControl>
    </Box>
  );
};

export default Enum;
