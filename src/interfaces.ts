import { HTMLAttributes, MouseEvent, ChangeEventHandler } from 'react';

export interface PropsButton extends HTMLAttributes<HTMLButtonElement> {
  /**
   * Button contents
   */
  sign: string | number;
  /** Which variant look would you like use */
  variant?: 'primary' | 'default' | 'operator';
  /**
   * Optional click handler
   */
  onClick?(event: MouseEvent<HTMLButtonElement>): void;
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
