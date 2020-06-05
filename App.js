import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import NewOrder from './views/NewOrder';
import Menu from './views/Menu';
import ItemDetail from './views/ItemDetail';
import OrderForm from './views/OrderForm';
import OrderProgress from './views/OrderProgress';
import OrderResume from './views/OrderResume';

import FirebaseState from './context/firebase/firebaseState';
import OrdersState from './context/orders/OrdersState';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <FirebaseState>
        <OrdersState>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#FFDA00',
                },
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}>
              <Stack.Screen
                name="NewOrder"
                component={NewOrder}
                options={{
                  title: 'Nueva Orden',
                }}
              />
              <Stack.Screen
                name="Menu"
                component={Menu}
                options={{
                  title: 'Menu',
                }}
              />
              <Stack.Screen
                name="ItemDetail"
                component={ItemDetail}
                options={{
                  title: 'Item Detail',
                }}
              />
              <Stack.Screen
                name="OrderForm"
                component={OrderForm}
                options={{
                  title: 'Order Form',
                }}
              />
              <Stack.Screen
                name="OrderProgress"
                component={OrderProgress}
                options={{
                  title: 'Order Progress',
                }}
              />
              <Stack.Screen
                name="OrderResume"
                component={OrderResume}
                options={{
                  title: 'Order Resume',
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </OrdersState>
      </FirebaseState>
    </>
  );
};

export default App;
