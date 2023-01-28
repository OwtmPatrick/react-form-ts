import React from 'react';
import { Formik, Form } from 'formik';

import FormField from './Field/Field';

import { Field } from '../types';

const FormComponent: React.FC<{ schema: Field }> = ({ schema }) => (
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
);

export default FormComponent;
