import React from 'react';
import { Button } from '../button';
import cl from './NumberTable.module.scss';
import { INumberTable } from '../../interfaces';

export const NumberTable = ({
  setCalculateStr,
  calculateStr,
}: INumberTable) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const target = e.target as typeof e.target & {
      textContent: string;
    };
    setCalculateStr(calculateStr + target.textContent);
  };

  return (
    <div className={cl.numberWrap}>
      {Array(10)
        .fill(null)
        .map((_, idx) => (
          <Button
            sign={idx}
            key={idx}
            variant="primary"
            data-testid={idx}
            onClick={handleClick}
          />
        ))
        .reverse()}
    </div>
  );
};
