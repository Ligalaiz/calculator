import { css } from '@emotion/react';
import { color } from 'src/styles';

export const DisplayStyles = css`
  min-width: 320px;
  width: 100%;
  height: 60px;
  border-radius: 6px;

  color: ${color['green-color--light']};
  text-align: right;
  font-size: 65px;
  font-family: 'digital_mono', 'Arila', sans-serif;

  background-color: ${color['black-color']};
  box-shadow: 0 14px 28px ${color['black-color--light-X2']},
    0 10px 10px ${color['black-color--light-X1']};
`;

export const DisplayWrapperStyles = css`
  margin: 0 auto;
  padding: 20px 0;
`;
