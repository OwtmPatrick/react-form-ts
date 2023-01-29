import React from 'react';
import { Stack } from '@mui/system';
import Text from './components/Text';
import Integer from './components/Integer';
import Boolean from './components/Boolean';
import Array from './components/Array';
import Enum from './components/Enum';

import { Field, FieldType } from '../../types';

const FormField: React.FC<{ field: Field; name?: string; required?: boolean }> = ({
  field,
  name,
  required,
}) => {
  if ('type' in field) {
    if (field.type === FieldType.STRING) {
      return <Text name={name} required={required} />;
    }

    if (field.type === FieldType.INTEGER) {
      return <Integer name={name} required={required} />;
    }

    if (field.type === FieldType.BOOLEAN) {
      return <Boolean name={name} required={required} />;
    }

    if (field.type === FieldType.ARRAY) {
      return <Array f={field} name={name} required={required} />;
    }

    if (field.type === FieldType.OBJECT) {
      if (!field.properties) {
        return <div>object should have properties</div>;
      }

      return (
        <Stack spacing={2} sx={{ flexGrow: 1 }}>
          {Object.keys(field.properties).map((key) => {
            // console.log(field.required, key, field.required?.includes(key));
            return (
              <FormField
                key={key}
                name={name ? `${name}.${key}` : key}
                field={field.properties[key] as Field}
                required={field.required?.includes(key)}
              />
            );
          })}
        </Stack>
      );
    }
  } else if ('enum' in field) {
    return <Enum f={field} name={name} required={required} />;
  }

  return null;
};

export default FormField;
