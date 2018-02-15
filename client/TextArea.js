import React, { Component } from 'react';
import styled from 'styled-components';

const TextArea = styled.p`
  background-color: rgba(81, 81, 81, 0.15);
  border-radius: 8px;
  color: 'black';
  display: inline-block;
  font-size: 18px;
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  font-family: 'Roboto', sans-serif;
  line-height: 25px;
  padding: 20px;
  margin: 10px 0;
  min-height: 200px;
  text-align: left;
  width: 400px;

  @media (max-width: 850px) {
    width: 100%;
    box-sizing: border-box;
  }
`;

export default TextArea;
