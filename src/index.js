import React from 'react';

import { useTroll } from  './troll/useTroll';
import { actionFactory } from './troll/actionsFactory';
import { getDispatchedActions } from './troll/getDispatchedAction';
import { kebabToCamelCase } from './troll/actionsFactory';

export {
  useTroll,
  actionFactory,
  getDispatchedActions,
  kebabToCamelCase,
};