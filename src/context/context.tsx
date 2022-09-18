import { createContext } from 'react';
const initValue: {
  dispatch: (parma: { type: string; payload: { id: number } }) => void;
  state: { goodsList: []; total: string };
} = {
  dispatch: () => 1,
  state: {
    goodsList: [],
    total: ''
  }
};
export const AppContext = createContext(initValue);
export const Provider = AppContext.Provider;
export const Consumer = AppContext.Consumer;
