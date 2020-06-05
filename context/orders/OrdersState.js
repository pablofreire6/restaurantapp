import React, {useReducer} from 'react';

import OrdersReducer from './OrdersReducer';
import OrdersContext from './OrdersContext';

const OrdersState = props => {
  const initialState = {
    orders: [],
  };

  const [state, dispatch] = useReducer(OrdersReducer, initialState);

  return (
    <OrdersContext.Provider value={{orders: state.orders}}>
      {props.children}
    </OrdersContext.Provider>
  );
};

export default OrdersState;
