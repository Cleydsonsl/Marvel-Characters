/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

import villainImg from '../../assets/viloes.png';
import background from '../../assets/vormir.png';

interface AvatarProps {
  thumbnail: {
    path: string;
    extension: string;
  };
}

export const Background = styled.body`
  background: #f0f0f5 url(${background}) no-repeat;
  background-size: cover;
  max-width: auto;
  height: 100vh;
  -webkit-font-smoothing: antialiased;
`;

export const Villain = styled.div`
  background: url(${villainImg}) no-repeat center bottom;
  background-size: contain;
  max-width: auto;
  height: 100%;
  margin: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  #hidra {
    max-width: 190px;
    margin-top: 40px;
    display: flex;
    justify-content: center;
  }

  #marvel {
    max-width: 190px;
    margin: 40px auto;
    padding: 40px;
  }
`;

// const urlImg = (props: AvatarProps) =>
//   `${props.thumbnail.path}.${props.thumbnail.extension}`;

export const Repositories = styled.div`
  margin-top: 40px;
  max-width: 700px;
  width: 400px;

  display: flex;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translate(10px);
    }

    div {
      margin-left: 16px;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const Img = styled.img<AvatarProps>`
  width: 64px;
  height: 64px;
  border-radius: 50%;

  ${props => props.thumbnail}
`;
