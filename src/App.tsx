import { useReducer } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from '@/context/context';
import { shoppingReducer } from '@/reducer/shopping-cart';
import Router from '@/router';

// style sheet
import './App.less';

const initValue = {
  goodsList: [],
  total: ''
};

function App() {
  // shopping cart data
  // @ts-ignore
  const [state, dispatch] = useReducer<never>(shoppingReducer, initValue);
  return (
    <ChakraProvider>
      <Provider value={{ dispatch, state }}>
        <Router />
      </Provider>
    </ChakraProvider>
  );
}

export default App;
