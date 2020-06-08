import React from 'react';
import {Text, StyleSheet, ImageBackground, View} from 'react-native';
import {Card, CardItem, Body} from 'native-base';
import {useNavigation} from '@react-navigation/native';

const CardContent = ({id, title, image, price, description}) => {
  const navigation = useNavigation();
  return (
    <Card>
      <CardItem
        button
        onPress={() =>
          navigation.navigate('ItemDetail', {
            id: id,
          })
        }>
        <Body style={styles.cardBody}>
          <ImageBackground source={{uri: image}} style={styles.mainImage}>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>${price}</Text>
            </View>
          </ImageBackground>
          <View style={styles.textContainer}>
            <Text style={styles.mainTitle}>{title}</Text>
            <Text>{description}</Text>
          </View>
        </Body>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardBody: {
    flexDirection: 'row',
    flex: 1,
  },
  mainImage: {
    height: 250,
    width: 200,
    marginVertical: 5,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 10,
  },
  mainTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
  priceContainer: {
    width: 60,
    padding: 5,
    margin: 5,
    backgroundColor: '#3cb371',
  },
});

export default CardContent;
