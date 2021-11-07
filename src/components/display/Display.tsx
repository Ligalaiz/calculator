/** @jsxImportSource @emotion/react */
import React from 'react';
import { IDisplay } from 'src/interfaces';
import { DisplayStyles, DisplayWrapperStyles } from './DisplayStyles';

export const Display = ({ calculateStr, handleChange }: IDisplay) => {
  return (
    <div className="display__wrapper" css={DisplayWrapperStyles}>
      <input
        type="text"
        value={calculateStr}
        className="display"
        css={DisplayStyles}
        onChange={handleChange}
        placeholder="0"
        data-testid="display"
      />
    </div>
  );
};
