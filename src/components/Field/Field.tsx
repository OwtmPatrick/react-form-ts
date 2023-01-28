import React from 'react';
import { Stack } from '@mui/system';
import Text from './components/Text';
import Integer from './components/Integer';
import Boolean from './components/Boolean';
import Array from './components/Array';
import Enum from './components/Enum';

import { Field, FieldType } from '../../types';

const getComponent = (field: Field): React.FC<{ f: Field; name?: string }> | null => {
  if (field.type === FieldType.STRING) {
    return Text;
  }

  if (field.type === FieldType.INTEGER) {
    return Integer;
  }

  if (field.type === FieldType.BOOLEAN) {
    return Boolean;
  }

  if (field.type === FieldType.ARRAY) {
    return Array;
  }

  if (field.enum?.length) {
    return Enum;
  }

  return null;
};

const FormField: React.FC<{ field: Field; name?: string }> = ({ field, name }) => {
  const Component = getComponent(field);

  if (Component) {
    return <Component f={field} name={name} />;
  }

  if (field.type === FieldType.OBJECT) {
    if (!field.properties) {
      return <div>object should have properties</div>;
    }

    return (
      <Stack spacing={2} sx={{ flexGrow: 1 }}>
        {Object.keys(field.properties!).map((p) => (
          <FormField
            key={p}
            name={name ? `${name}.${p}` : p}
            field={field.properties![p] as Field}
          />
        ))}
      </Stack>
    );
  }

  return null;
};

export default FormField;
