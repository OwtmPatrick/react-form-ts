import React from 'react';
import { Stack, Typography, Button, TextField } from '@mui/material';
import { Formik, Form } from 'formik';

import FormField from './Field/Field';

import { Field } from '../types';

// eslint-disable-next-line react/no-unused-prop-types
const FormComponent: React.FC<{ schema: Field; key: string }> = ({ schema }) => (
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
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, errors, values }) => {
        console.log(values);
        return (
          <Form>
            <FormField field={schema} />

            <Button
              type="submit"
              variant="contained"
              disabled={isSubmitting}
              style={{ margin: '10px 0' }}
            >
              Submit
            </Button>

            {Object.keys(errors as object).length !== 0 && (
              <Stack spacing={1} mt={2}>
                <Typography variant="h6">Errors</Typography>

                <TextField
                  multiline
                  fullWidth
                  rows={15}
                  disabled
                  value={JSON.stringify(errors, null, 2)}
                />
              </Stack>
            )}
          </Form>
        );
      }}
    </Formik>
  </Stack>
);

export default FormComponent;
