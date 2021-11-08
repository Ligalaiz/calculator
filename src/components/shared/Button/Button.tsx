/** @jsxImportSource @emotion/react */
import { PropsButton } from '@src/interfaces';
import React, { FC, useState } from 'react';
import { ButtonStyles } from './ButtonStyles';

export const Button: FC<PropsButton> = ({ sign, variant, ...props }) => {
  const [click, setClick] = useState<boolean>(false);
  const handleClick = (): void => {
    setClick(!click);
  };

  return (
    <div>
      <ButtonStyles
        isClicked={click}
        isVariant={variant}
        {...props}
        onMouseDown={handleClick}
        onMouseUp={handleClick}
      >
        {sign}
      </ButtonStyles>
    </div>
  );
};
