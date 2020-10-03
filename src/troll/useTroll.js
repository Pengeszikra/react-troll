import React, { useReducer, useMemo } from 'react';
import { getDispatchedActions } from './getDispatchedAction';

export const useTroll = (reducer, init, getActions) => {
  const [state, dispatch] = useReducer(reducer, init);
  const memoizedActionSet = useMemo(_ => getDispatchedActions(getActions(), dispatch), [dispatch]);
  return [state, memoizedActionSet];
};