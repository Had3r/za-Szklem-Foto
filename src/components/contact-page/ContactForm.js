import React from 'react';
import { useForm } from '@formspree/react';
import { Link } from 'gatsby';

import {
  Form,
  InputField,
  InputBox,
  Wrapper,
  Textarea,
  SubmitBtn,
  LeftSide,
  ErrorMsgs,
  Head,
  Paragraph,
} from './ContactForm.styles';

export const ContactForm = () => {
  const [state, handleSubmit] = useForm('xnqowgko');
  if (state.succeeded) {
    return (
      <ErrorMsgs>
        <Head>Dziękuję za wypełnienie formularza!</Head>
        <Paragraph>
          Sprawdzę Twoją wiadomość i skontaktuję się z Tobą do jutra. W międzyczasie możesz
          sprawdzić sekcję z <Link to="/oferta">ofertą</Link> lub przejrzeć moją{' '}
          <Link to="/galeria">galerię</Link> zdjęć.
        </Paragraph>
      </ErrorMsgs>
    );
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Wrapper>
        <LeftSide>
          <InputBox>
            <label htmlFor="first_name" />
            <InputField type="text" name="first_name" id="first_name" placeholder="Imię" />
          </InputBox>
          <InputBox>
            <label htmlFor="email" />
            <InputField required type="email" name="email" id="email" placeholder="Email *" />
          </InputBox>
        </LeftSide>
        <label htmlFor="textarea" />
        <Textarea
          required
          rows="6"
          type="textarea"
          name="textarea"
          id="textarea"
          placeholder="Wiadomość *"
        />
        <SubmitBtn className="btn btn-primary">
          {state.submitting ? 'Wysyłanie...' : 'Wyślij'}
        </SubmitBtn>
      </Wrapper>
    </Form>
  );
};
