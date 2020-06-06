import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import {Container, Button, Text} from 'native-base';
import globalStyles from '../styles/global';
import {useNavigation} from '@react-navigation/native';

const NewOrder = () => {
  const navigation = useNavigation();

  return (
    <Container style={[globalStyles.container, styles.container]}>
      <ImageBackground
        source={require('../images/bg_main.jpeg')}
        style={styles.image}>
        <View style={[globalStyles.content, styles.content]}>
          <Text style={styles.heading}>Food App Concept</Text>
          <Text style={styles.title}>Welcome!</Text>
          <Text style={styles.subtitle}>
            Login to your account or choose the city for being served without
            login
          </Text>

          <Button
            block
            style={globalStyles.button}
            onPress={() => navigation.navigate('Menu')}>
            <Text style={globalStyles.buttonText}>Create a new order</Text>
          </Button>
        </View>
      </ImageBackground>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#888',
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginBottom: 50,
  },
  title: {
    fontSize: 45,
    color: '#fff',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 30,
  },
  heading: {
    color: '#fff',
  },
  image: {
    resizeMode: 'cover',
    flex: 1,
  },
});

export default NewOrder;
