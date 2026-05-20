import { createContext, type ActionDispatch } from 'react';
import type { FormContextProps } from './FormWithContext';
import type { FormState } from './FormWithContextAndReducer';
import type { Action } from './form-reducer';

export const FormContext = createContext<FormContextProps | null>(null);
export const FormDispatcherContext = createContext<ActionDispatch<[action: Action]> | null>(null);
export const FormStateContext = createContext<FormState | null>(null);
