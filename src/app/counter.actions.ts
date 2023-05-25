import { createAction, props } from '@ngrx/store';

export const updateOptionValue = createAction(
  '[Options] Update Option Value',
  props<{ optionId: string; value: string }>()
);
