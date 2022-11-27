import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
      <Image
        source={require('../assets/images/backIcon.png')}
        style={styles.image}
      />
      <Text>Back</Text>
    </TouchableOpacity>
  );
};

export default Header;

const styles = StyleSheet.create({
  button: {flexDirection: 'row', paddingBottom: 5, alignItems: 'center'},
  image: {
    height: 25,
    width: 25,
  },
});
