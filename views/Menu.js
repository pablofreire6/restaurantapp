import React, {useContext, useEffect} from 'react';
import globalStyles from '../styles/global';
import {Text, StyleSheet, Image, View, ScrollView} from 'react-native';
import FooterMenu from '../components/FooterMenu';
import {Container, Content} from 'native-base';
import FirebaseContext from '../context/firebase/firebaseContext';
import CardContent from '../components/CardContent';

const Menu = () => {
  const {getProducts, menu} = useContext(FirebaseContext);

  useEffect(() => {
    // getProducts();
  }, []);
  return (
    <Container style={[globalStyles.container, styles.container]}>
      <Content style={styles.content}>
        <CardContent />
        <Text style={styles.subTitle}>SPECIAL OFFER</Text>
        <ScrollView horizontal>
          <View>
            <Image
              style={styles.slideImage}
              source={require('../images/burger1.png')}
            />
          </View>
          <View>
            <Image
              style={styles.slideImage}
              source={require('../images/burger1.png')}
            />
          </View>
          <View>
            <Image
              style={styles.slideImage}
              source={require('../images/burger1.png')}
            />
          </View>
        </ScrollView>
        <CardContent />
      </Content>
      <FooterMenu />
    </Container>
  );
};

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#e3e3e3',
  },
  content: {
    flex: 1,
    marginHorizontal: '4%',
    marginTop: '4%',
  },
  subTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
  },
  slideImage: {
    height: 200,
    width: 150,
    marginVertical: 10,
    borderRadius: 10,
    marginRight: 10,
  },
});

export default Menu;
