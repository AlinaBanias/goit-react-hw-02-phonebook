import React, {Component} from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import 'yup-phone';

const initialValues = { name: '', number: '' };

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const phoneRegExp =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

let SignupSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .matches(
      nameRegExp,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  number: yup
    .string()
    .matches(
      phoneRegExp,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});


export class ContactForm extends Component {
  handleSubmit = (values, {resetForm}) => {    this.props.onSubmit(values);
    resetForm(); 
   }

  render () {
  return (
    <Formik
    initialValues={initialValues}
    onSubmit={this.handleSubmit}
    validationSchema={SignupSchema}
  >   
  <Form>
      <label>
        Name
        <input type="text" name="name" required/>
        <ErrorMessage name="name" component="span" />
      </label>

      <label>
        Number
        <input type="tel" name="number" required />
        <ErrorMessage name="number" component="span" />
      </label>
      
      <button type="submit">Add contact</button>
      </Form>
  </Formik>
  );
}
}