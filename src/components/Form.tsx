import React from 'react';
import { Stack, Typography } from '@mui/material';
import { Formik, Form } from 'formik';

import FormField from './Field/Field';

import { Field } from '../types';

const FormComponent: React.FC<{ schema: Field }> = ({ schema }) => (
  <Stack
    spacing={1}
    sx={(theme) => ({
      [theme.breakpoints.up('lg')]: {
        width: '50%',
      },
    })}
  >
    <Typography variant="h6">Form</Typography>

    <Formik
      initialValues={{}}
      onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <FormField field={schema} />

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </Stack>
);

export default FormComponent;
