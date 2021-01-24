import React from 'react';

import {
  Form,
  InputField,
  InputBox,
  Wrapper,
  Textarea,
  SubmitBtn,
  LeftSide,
} from './ContactForm.styles';

export const ContactForm = () => {
  return (
    <Form action="https://formspree.io/f/xnqowgko" method="POST">
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
        <SubmitBtn className="btn btn-primary">Wyślij</SubmitBtn>
      </Wrapper>
    </Form>
  );
};