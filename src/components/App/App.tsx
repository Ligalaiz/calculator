/** @jsxImportSource @emotion/react */
import { Display } from 'components/Display';
import { NumberTable } from 'components/NumberTable';
import { OperatorsTable } from 'components/OperatorsTable';
import React, { ChangeEvent, FC, useState } from 'react';
import { Button } from 'shared/Button';
import { runner } from 'utils/runner';
import { CalculatorWrapper, TableWrapper } from './AppStylex';

export const App: FC = () => {
  const [calculateStr, setCalculateStr] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setCalculateStr(value);
  };

  const handleClick = (): void => {
    setCalculateStr(runner(calculateStr).toString());
  };

  return (
    <div className="calculator__wrapper" css={CalculatorWrapper}>
      <Display calculateStr={calculateStr} handleChange={handleChange} />
      <div className="table__wrapper" css={TableWrapper}>
        <NumberTable
          setCalculateStr={setCalculateStr}
          calculateStr={calculateStr}
        />
        <OperatorsTable
          setCalculateStr={setCalculateStr}
          calculateStr={calculateStr}
        />
      </div>
      <Button
        style={{ width: '100%' }}
        sign="Calculate"
        variant="default"
        onClick={handleClick}
        data-testid="Calculate"
      />
    </div>
  );
};
