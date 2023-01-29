import React, { useEffect } from 'react';
import { IconButton, Stack, Card, CardContent, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveIcon from '@mui/icons-material/Remove';
import { useField, useFormikContext } from 'formik';
import FormField from '../Field';
import { FieldType, Field, ArrayField } from '../../../types';

import { getFieldLabel } from '../../../utils';

import { REQUIRED_ERROR_MESSAGE } from '../../../constants/errors';

const DEFAULT_FIELD_KEY = 'array-field-key';

const getValue = (values: any, name?: string) => {
  const splited = name!.split('.');
  let value = values;

  for (let i = 0; i < splited.length; i = i + 1) {
    value = value[splited[i]];
  }

  return value;
};

const ArrayFieldComponent: React.FC<{ f: ArrayField; name?: string; required?: boolean }> = ({
  f,
  name,
  required,
}) => {
  const validate = (val: any[]) => {
    if (required && val.length === 0) {
      return REQUIRED_ERROR_MESSAGE;
    }

    return undefined;
  };
  const [, meta, { setValue }] = useField({ name: name || DEFAULT_FIELD_KEY, validate });
  const { values }: any = useFormikContext();
  const value = getValue(values, name) || [];
  const label = getFieldLabel(name);

  const handleAddItem = () => {
    let newItem;

    if ('type' in f.items) {
      newItem = f.items?.type === FieldType.OBJECT ? {} : '';
    } else {
      newItem = '';
    }

    setValue([...value, newItem]);
  };

  const handleRemoveItem = (index: number) => {
    setValue(value.filter((v: Field, i: number) => i !== index));
  };

  useEffect(() => {
    setValue([]);
  }, []);

  return (
    <>
      <Typography variant="body1" mb={1}>
        {label}
      </Typography>

      <Stack spacing={2}>
        {value.length > 0 &&
          value.map((v: Field, index: number) => (
            <Card key={index}>
              <CardContent>
                <Typography variant="body2" mb={1}>{`${label}-${index}`}</Typography>

                <Stack direction="row" alignItems="flex-start" spacing={2}>
                  <FormField name={`${name}.${index}`} field={f.items} />

                  <IconButton aria-label="add" onClick={() => handleRemoveItem(index)}>
                    <RemoveIcon />
                  </IconButton>
                </Stack>
              </CardContent>
            </Card>
          ))}

        <Stack alignItems="flex-end">
          <IconButton aria-label="add" onClick={handleAddItem}>
            <AddCircleOutlineIcon />
          </IconButton>
        </Stack>
      </Stack>
      <Typography variant="caption" sx={(theme) => ({ color: theme.palette.error.main })} mt={1}>
        {meta.error}
      </Typography>
    </>
  );
};

export default ArrayFieldComponent;
