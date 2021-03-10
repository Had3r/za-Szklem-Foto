import styled from 'styled-components';
import tw from 'twin.macro';

export const Form = styled.form`
  ${tw`container px-4 sm:px-0 text-lg mb-20 lg:mt-8`};
`;

export const InputField = styled.input`
  ${tw`border-black w-full h-12 outline-none px-6 py-4`};
  border-bottom-width: 1px;
`;

export const InputBox = styled.div`
  ${tw`my-8 md:w-5/12`}
`;

export const LeftSide = styled.div`
  ${tw`flex flex-col md:flex-row justify-between`}
`;

export const Textarea = styled.textarea`
  ${tw`border-black w-full outline-none px-6 py-4`};
  border-bottom-width: 1px;
`;

export const SubmitBtn = styled.button`
  ${tw`w-32`}
`;

export const Wrapper = styled.div`
  ${tw`mx-auto max-w-xl lg:max-w-3xl`}
`;

export const ErrorMsgs = styled.div`
  ${tw`max-w-2xl  mx-auto  text-center px-4 my-12`}
`;

export const Head = styled.h4`
  ${tw`text-lg mb-8`};
`;

export const Paragraph = styled.p`
  ${tw`text-base`};

  a {
    ${tw`underline text-primary-darker`}
  }
`;
