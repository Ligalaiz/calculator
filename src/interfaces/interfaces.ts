/* eslint-disable no-unused-vars */
/* eslint-disable  @typescript-eslint/no-explicit-any */
import { ChangeEventHandler, HTMLAttributes, MouseEvent } from 'react';

export interface PropsButton extends HTMLAttributes<HTMLButtonElement> {
  /**
   * Emotion bug
   */
  css?: any;
  /**
   * Button contents
   */
  sign?: string | number;
  /** Which variant look would you like use */
  variant?: 'primary' | 'default' | 'operator';
  /**
   * Optional click handler
   */
  onClick?(event: MouseEvent<HTMLButtonElement>): void;
  onMouseDown?(event: MouseEvent<HTMLButtonElement>): void;
  onMouseUp?(event: MouseEvent<HTMLButtonElement>): void;
  'data-testid'?: string | number;
}

export interface PropsDisplay extends HTMLAttributes<HTMLInputElement> {
  /**
   * Display contents
   */
  calculateStr: string;
  /**
   * Change handler
   */
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

export interface IDisplay {
  /**
   * Display contents
   */
  calculateStr: string;
  /**
   * Change handler
   */
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

export interface INumberTable {
  /**
   * Display contents
   */
  calculateStr: string;
  /**
   * Display contents handler
   */
  setCalculateStr: (active: string) => void;
}

export interface IButtonStyles {
  isClicked: boolean;
  isVariant: 'primary' | 'default' | 'operator' | undefined;
}
