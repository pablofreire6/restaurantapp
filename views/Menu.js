import React, {useContext, useEffect} from 'react';
import {Text} from 'react-native';
import FirebaseContext from '../context/firebase/firebaseContext';

const Menu = () => {
  const {getProducts, menu} = useContext(FirebaseContext);

  useEffect(() => {
    getProducts();

    console.log(menu);
  }, []);
  return (
    <>
      <Text>Menu</Text>
    </>
  );
};

export default Menu;
