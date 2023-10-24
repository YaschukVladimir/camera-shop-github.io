import { combineReducers } from '@reduxjs/toolkit';
import { appProcess } from './app-process/app-process';
import { dataProcess } from './data-process/data-process';
import { NameSpace } from '../const';

export const rootReducer = combineReducers({
  [NameSpace.Data]: dataProcess.reducer,
  [NameSpace.App]: appProcess.reducer,
});

export type RootReducerType = ReturnType<typeof rootReducer>;
