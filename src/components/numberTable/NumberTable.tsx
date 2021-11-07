/** @jsxImportSource @emotion/react */
import React from 'react';
import { Button } from 'shared/Button';
import { INumberTable } from 'src/interfaces';
import { v4 as uuidv4 } from 'uuid';
import { NumberTableStyles } from './NumberTableStyles';

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
    <div className="numberWrap" css={NumberTableStyles}>
      {Array(10)
        .fill(null)
        .map((_, idx) => (
          <Button
            sign={idx}
            key={uuidv4()}
            variant="primary"
            data-testid={idx}
            onClick={handleClick}
          />
        ))
        .reverse()}
    </div>
  );
};
