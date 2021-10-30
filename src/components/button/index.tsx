import React, { HTMLAttributes } from 'react';
import cn from './Button.module.scss';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /**
   * Button contents
   */
  sign?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const Button = ({ sign = '7', ...props }: Props) => {
  return (
    <div>
      <button className={cn.btn} type="button" {...props}>
        {sign}
      </button>
    </div>
  );
};

export default Button;
