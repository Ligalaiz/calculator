import React from 'react';
import cn from 'classnames';
import cl from './Display.module.scss';
import { IDisplay } from '../../interfaces';

export const Display = ({ calculateStr, handleChange }: IDisplay) => {
  return (
    <div className={cn(cl.display__wrapper)}>
      <input
        type="text"
        value={calculateStr}
        className={cn('display', cl.display)}
        onChange={handleChange}
        placeholder="0"
        data-testid="display"
      />
    </div>
  );
};
