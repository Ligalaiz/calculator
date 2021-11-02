/* eslint-disable import/no-unresolved */
import React from 'react';
import cn from 'classnames';
import { PropsButton } from '../../interfaces';
import cl from './Button.module.scss';

export const Button = ({ sign, variant, ...props }: PropsButton) => {
  const btnClassName = cn(cl.btn, {
    [`${cl.operator}`]: variant === 'operator',
    [`${cl.primary}`]: variant === 'primary',
  });

  return (
    <div>
      <button className={btnClassName} type="button" {...props}>
        {sign}
      </button>
    </div>
  );
};
