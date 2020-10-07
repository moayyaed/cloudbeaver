/*
 * cloudbeaver - Cloud Database Manager
 * Copyright (C) 2020 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */

import { observer } from 'mobx-react';
import { useCallback, useContext } from 'react';
import styled, { use } from 'reshadow';

import { FormContext } from '../FormContext';
import { CheckboxMarkup } from './CheckboxMarkup';


type BaseProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type' | 'value' | 'checked'> & {
  value?: string;
  checkboxLabel?: string;
  mod?: 'surface';
  long?: boolean;
}

type ControlledProps = BaseProps & {
  checked?: boolean;
  indeterminate?: boolean;
  onChange?(value: boolean, name?: string): any;
  state?: never;
}

type ObjectProps<TKey extends keyof TState, TState> = BaseProps & {
  name: TKey;
  state: TState;
  onChange?(value: boolean, name: TKey): any;
  checked?: never;
  indeterminate?: boolean;
}

type CheckboxType = {
  (props: ControlledProps): JSX.Element;
  <TKey extends keyof TState, TState>(props: ObjectProps<TKey, TState>): JSX.Element;
}

export const Checkbox: CheckboxType = observer(function Checkbox({
  name,
  value,
  state,
  checkboxLabel,
  checked: checkedControlled,
  children,
  className,
  mod,
  long,
  onChange,
  disabled,
  ...rest
}: ControlledProps | ObjectProps<any, any>) {
  const context = useContext(FormContext);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (state) {
      state[name] = event.target.checked;
    }
    if (onChange) {
      onChange(event.target.checked, name);
    }
    if (context) {
      context.onChange(event.target.checked, name);
    }
  }, [state, name, onChange, context]);

  const checked = state ? state[name] : checkedControlled;

  return styled()(
    <CheckboxMarkup 
      {...rest}
      name={name}
      id={value || name}
      checked={checked}
      disabled={disabled}
      onChange={handleChange}
      {...use({ mod })}
    />
  );
});
