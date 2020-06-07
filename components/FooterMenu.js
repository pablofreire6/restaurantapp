import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Footer, FooterTab, Button} from 'native-base';

const FooterMenu = () => {
  return (
    <Footer style={styles.footer}>
      <FooterTab>
        <Button>
          <Text style={styles.textButton}>Menu</Text>
        </Button>
        <Button>
          <Text style={styles.textButton}>Favorite</Text>
        </Button>
        <Button>
          <Text style={styles.textButton}>Cart</Text>
        </Button>
        <Button>
          <Text style={styles.textButton}>Profile</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#000',
  },
  textButton: {
    color: '#fff',
  },
});

export default FooterMenu;
