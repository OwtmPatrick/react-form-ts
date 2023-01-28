import React, { useState, useEffect } from 'react';
import { useField, useFormikContext, FieldArray } from 'formik';
import FormField from '../Field';

import { Field } from '../../../types';

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
  const [field, meta, { setValue }] = useField(name || DEFAULT_FIELD_KEY);
  const { values }: any = useFormikContext();

  const value = getValue(values, name) || [];

  const handleAddItem = () => {
    const newItem = f.items?.type === 'object' ? {} : '';

    setValue([...value, newItem]);
  };

  const handleRemoveItem = (index: number) => {
    setValue(value.filter((_, i: number) => i !== index));
  };

  useEffect(() => {
    setValue([]);
  }, []);

  return (
    <div>
      {value.length > 0 &&
        value.map((_, index: number) => (
          <div key={index}>
            <FormField name={`${name}.${index}`} field={f.items!} />

            <button type="button" onClick={() => handleRemoveItem(index)}>
              remove
            </button>
          </div>
        ))}

      <button type="button" onClick={handleAddItem}>
        add
      </button>
    </div>
  );
};

export default ArrayField;
