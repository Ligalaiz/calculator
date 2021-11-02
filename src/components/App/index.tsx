import React, { FC, useState, ChangeEvent } from 'react';
import runner from '../../utils/runner';
import { Button } from '../button';
import { Display } from '../display';
import { NumberTable } from '../numberTable';
import { OperatorsTable } from '../operatorsTable';

const App: FC = () => {
  const [calculateStr, setCalculateStr] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setCalculateStr(value);
  };

  const handleClick = (): void => {
    setCalculateStr(runner(calculateStr).toString());
  };

  return (
    <>
      <Display calculateStr={calculateStr} handleChange={handleChange} />
      <div className="table__wrapper">
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
    </>
  );
};

export default App;
