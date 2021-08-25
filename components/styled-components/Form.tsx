import styled from 'styled-components';

export const Form = styled.form`
  display: grid;
  grid-template-columns: auto 1fr;
  margin: 30px 0;
  gap: 20px 0;
  text-align: center;
`;

export const FormLabel = styled.label`
  border: solid 3px #000;
  border-radius: 10px 0 0 10px;
  padding: 10px;
  border-right: none;
  font-size: 1.5em;
`;

export const FormInput = styled.input`
  border: solid 3px #000;
  padding: 10px;
  font-size: 1.2em;
`;

export const FormTextArea = styled.textarea`
  border: solid 3px #000;
  padding: 10px;
  font-size: 1.2em;
`;
