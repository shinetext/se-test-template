import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: black;
  border: none;
  color: white;
  cursor: pointer;
  display: block
  font-size: 1em;
  margin: 10px 0;
  padding: 20px;

  @media (max-width: 850px) {
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    border-radius: 0;
  }
`;

export default Button;
