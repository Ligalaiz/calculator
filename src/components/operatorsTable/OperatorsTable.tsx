/** @jsxImportSource @emotion/react */
import { Button } from '@shared/Button';
import { INumberTable } from '@src/interfaces';
import React from 'react';
import { OperationTableStyles } from './OperationTableStyles';

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
    <div className="numberWrap" css={OperationTableStyles}>
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
