import { createReducer, on } from '@ngrx/store';
import { updateOptionValue } from './counter.actions';
import { OptionState } from '@shared/state/list.state';

export const initialState: OptionState = {
  options: {},
};

export const optionReducer = createReducer(
  initialState,
  on(updateOptionValue, (state, { optionId, value }) => ({
    ...state,
    options: {
      ...state.options,
      [optionId]: value,
    },
  }))
);
