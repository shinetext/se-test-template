import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: 1px solid black;
  border-radius: 8px;
  font-size: 1em;
  margin: 10px 0;
  padding: 20px;
  width: 400px;

  @media (max-width: 850px) {
    width: 100%;
    box-sizing: border-box;
  }
`;

export default Input;
