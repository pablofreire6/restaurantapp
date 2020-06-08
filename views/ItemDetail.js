import React from 'react';
import {Text, ImageBackground, StyleSheet, View} from 'react-native';
import {Button} from 'native-base';
import {useRoute} from '@react-navigation/native';

const ItemDetail = () => {
  const route = useRoute();

  return (
    <>
      <ImageBackground
        source={require('../images/burger1.png')}
        style={styles.image}>
        <Text style={styles.title}>Cheese Burger</Text>
        <Text style={styles.price}>$300</Text>
      </ImageBackground>
      <View style={styles.addButtonContainer}>
        <Button full style={styles.addButton}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 50,
    textShadowColor: '#000',
    textShadowRadius: 5,
    flex: 1,
  },
  price: {
    color: '#FFDA00',
    fontSize: 50,
    fontWeight: 'bold',
    flex: 1,
    marginTop: 50,
    marginRight: 10,
    textAlign: 'right',
    textShadowColor: '#000',
    textShadowRadius: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 4,
    flexDirection: 'row',
  },
  addButtonContainer: {
    flex: 1,
    marginHorizontal: '2.5%',
    justifyContent: 'flex-end',
  },
  addButton: {
    backgroundColor: '#FFDA00',
    marginBottom: 50,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default ItemDetail;
