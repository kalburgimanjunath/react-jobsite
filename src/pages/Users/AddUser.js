import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
export default function AddCompany() {
  return (
    <div>
      <h1>Add User</h1>
      <Formik
        initialValues={{
          email: '',
          username: '',
          password: '',
          firstname: '',
          lastname: '',
          address: '',
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }

          if (!values.username) {
            errors.username = 'Required';
          }
          if (!values.password) {
            errors.password = 'Required';
          }
          if (!values.firstname) {
            errors.firstname = 'Required';
          }
          if (!values.lastname) {
            errors.lastname = 'Required';
          }
          if (!values.address) {
            errors.address = 'Required';
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
            <ErrorMessage name="name" component="div" />
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
            <Field type="text" name="firstname" placeholder="Firstname" />
            <ErrorMessage name="firstname" component="div" />
            <Field type="text" name="lastname" placeholder="Lastname" />
            <ErrorMessage name="lastname" component="div" />
            <Field type="textarea" name="address" placeholder="Address" />
            <ErrorMessage name="address" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Add
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
