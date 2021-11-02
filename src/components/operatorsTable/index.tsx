import React from 'react';
import { Button } from '../button';
import cl from './OperatorsTable.module.scss';
import { INumberTable } from '../../interfaces';

export const OperatorsTable = ({
  setCalculateStr,
  calculateStr,
}: INumberTable) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const target = e.target as typeof e.target & {
      textContent: string;
    };

    const finalString =
      target.textContent === '!'
        ? `${calculateStr}${target.textContent}`
        : `${calculateStr} ${target.textContent} `;
    setCalculateStr(finalString);
  };

  return (
    <div className={cl.numberWrap}>
      {['+', '-', '/', '*', '**', '!'].map((item) => (
        <Button
          sign={item}
          key={item}
          variant="operator"
          data-testid={item}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};
