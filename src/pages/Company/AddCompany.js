import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
export default function AddCompany() {
  return (
    <div>
      <h1>Add Company</h1>
      <Formik
        initialValues={{ name: '', email: '', username: '', password: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if (!values.name) {
            errors.email = 'Required';
          }
          if (!values.username) {
            errors.username = 'Required';
          }
          if (!values.password) {
            errors.password = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="name" name="name" placeholder="Company Name" />
            <ErrorMessage name="email" component="div" />
            <Field type="email" name="email" placeholder="Company Email" />
            <ErrorMessage name="email" component="div" />
            <Field
              type="username"
              name="username"
              placeholder="Company username"
            />
            <ErrorMessage name="username" component="div" />
            <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Add
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
