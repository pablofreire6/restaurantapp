import React, {useReducer} from 'react';

import firebase from '../../firebase';
import FirebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';

import {GET_PRODUCTS_SUCCESS} from '../../types';
import firebaseConfig from '../../firebase/config';

const FirebaseState = props => {
  const initialState = {
    menu: [],
  };

  const [state, dispatch] = useReducer(FirebaseReducer, initialState);

  const getProducts = () => {
    firebase.db
      .collection('products')
      .where('existencia', '==', true)
      .onSnapshot(handleSnapshot);

    function handleSnapshot(snapshot) {
      let food = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: food,
      });
    }

    dispatch({
      type: GET_PRODUCTS_SUCCESS,
    });
  };

  return (
    <FirebaseContext.Provider value={{menu: state.menu, firebase, getProducts}}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseState;
