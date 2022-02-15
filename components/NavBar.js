import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import icons from '../constants/icons';
import {SIZES} from '../constants/theme';

const NavBar = () => {
  return (
    <View style={styles.navbar}>
      <View style={styles.icon}>
        <Image
          source={icons.menuicon}
          resizeMode="contain"
          style={styles.icon}
        />
      </View>
      <View style={styles.icon}>
        <Image
          source={icons.usericon}
          resizeMode="contain"
          style={styles.icon}
        />
      </View>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#FFFFFF',
    padding: SIZES.padding,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {width: 30, height: 30},
});
