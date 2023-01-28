import React from 'react';
import { Stack, Typography, Button } from '@mui/material';
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

          <Button type="submit" variant="contained" disabled={isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  </Stack>
);

export default FormComponent;
