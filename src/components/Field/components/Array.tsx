import React, { useEffect } from 'react';
import { IconButton, Stack, Card, CardContent, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveIcon from '@mui/icons-material/Remove';
import { useField, useFormikContext } from 'formik';
import FormField from '../Field';
import { Field } from '../../../types';
import { getFieldLabel } from '../../../utils';

const DEFAULT_FIELD_KEY = 'array-field-key';

const getValue = (values: any, name?: string) => {
  const splited = name!.split('.');
  let value = values;

  for (let i = 0; i < splited.length; i = i + 1) {
    value = value[splited[i]];
  }

  return value;
};

const ArrayField: React.FC<{ f: Field; name?: string }> = ({ f, name }) => {
  const [, , { setValue }] = useField(name || DEFAULT_FIELD_KEY);
  const { values }: any = useFormikContext();
  const value = getValue(values, name) || [];
  const label = getFieldLabel(name);

  const handleAddItem = () => {
    const newItem = f.items?.type === 'object' ? {} : '';

    setValue([...value, newItem]);
  };

  const handleRemoveItem = (index: number) => {
    setValue(value.filter((v: Field, i: number) => i !== index));
  };

  useEffect(() => {
    setValue([]);
  }, []);

  return (
    <Stack spacing={2}>
      {value.length > 0 &&
        value.map((v: Field, index: number) => (
          <Card key={index}>
            <CardContent>
              <Typography variant="body2" mb={1}>{`${label}-${index}`}</Typography>

              <Stack direction="row" alignItems="flex-start" spacing={2}>
                <FormField name={`${name}.${index}`} field={f.items!} />

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
  );
};

export default ArrayField;
