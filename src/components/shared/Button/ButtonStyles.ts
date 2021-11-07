import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IButtonStyles } from 'src/interfaces';
import { color } from 'src/styles';

const BaseButtonStyle = css`
  min-width: 85px;
  height: 60px;
  padding: 5px 15px;

  border: 0;
  border-radius: 4px;

  color: ${color['grey-color']};
  font-size: 27px;
  text-transform: uppercase;
  outline: 0;

  cursor: pointer;
  transition: all 0.3s;
  background-color: ${color['white-color']};
  box-shadow: 0 14px 28px ${color['black-color--light-X2']},
    0 10px 10px ${color['black-color--light-X1']};

  &:hover {
    background-color: ${color['grey-color--dark-X2']};
  }
`;

export const btnShadowOff = css`
  box-shadow: none;
`;
const primary = css`
  background-color: #0939ef3d;
`;
const operator = css`
  background-color: #09e7ef4f;
`;

export const ButtonStyles = styled.button<IButtonStyles>`
  ${BaseButtonStyle};
  ${({ isVariant }) => {
    if (isVariant === 'primary') {
      return primary;
    }
    if (isVariant === 'operator') {
      return operator;
    }
    return '';
  }};
  ${({ isClicked }) => (isClicked ? btnShadowOff : '')};
`;
