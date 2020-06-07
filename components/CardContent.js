import React from 'react';
import {Text, StyleSheet, Image, View, ScrollView} from 'react-native';
import {Card, CardItem, Body} from 'native-base';

const CardContent = () => {
  return (
    <Card>
      <CardItem>
        <Body style={styles.cardBody}>
          <Image
            source={require('../images/burger1.png')}
            style={styles.mainImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.mainTitle}>King Size Burger</Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit
              amet ipsum laoreet, molestie urna quis
            </Text>
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
});

export default CardContent;
