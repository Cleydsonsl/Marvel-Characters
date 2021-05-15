/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';
import { shade } from 'polished';

import background from '../../assets/esbolso.png';
import heroesImg from '../../assets/heroes.png';
import HidraImg from '../../assets/HIDRAPRETA.svg';
import ShieldImg from '../../assets/SHIELDBRANCA.svg';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #fff;
  margin-top: 80px;
  display: flex;
  justify-content: center;
`;

export const Background = styled.body`
  background: #f0f0f5 url(${background}) no-repeat;
  background-size: cover;
  max-width: auto;
  height: 100vh;
  -webkit-font-smoothing: antialiased;

  #marvel {
    max-width: 190px;
    margin: 20px auto;
    padding: 40px;

    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
`;

export const Heroes = styled.div`
  background: url(${heroesImg}) no-repeat center bottom;
  background-size: 100%;
  max-width: auto;
  height: 100%;
  margin: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 2px solid #fff;
    border-radius: 5px 0 0 5px;
    border-right: 0;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 100px;
    height: 70px;
    background: #4169e1 url(${ShieldImg}) no-repeat center;
    background-size: 40px;
    border-radius: 0 5px 5px 0;
    border: 0;

    &:hover {
      background: ${shade(0.2, '#8B0000')} url(${HidraImg}) no-repeat center;
      background-size: 40px;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
