import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../Redux/actions/contactsActions';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormContainer } from './ContactFormStyled';

const ContactForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[a-zA-Zа-яА-Я\s'-]*$/, 'Invalid name format')
      .required('Name is required'),
    number: Yup.string()
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        'Invalid phone number'
      )
      .required('Phone number is required'),
  });

  const initialValues = {
    name: '',
    number: '',
  };

  const onSubmit = (values, { resetForm }) => {
    const newContact = { ...values, id: Math.random().toString() };
    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <FormContainer>
      <h2>Add Contact</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            <label className="your-label-class">Name:</label>
            <Field type="text" name="name" className="your-input-class" />
            <ErrorMessage name="name" component="div" className="your-error-class" />
          </div>
          <div>
            <label className="your-label-class">Number:</label>
            <Field type="tel" name="number" className="your-input-class" />
            <ErrorMessage name="number" component="div" className="your-error-class" />
          </div>
          <button type="submit" className="your-button-class">Add Contact</button>
        </Form>
      </Formik>
    </FormContainer>
  );
};

export default ContactForm;
