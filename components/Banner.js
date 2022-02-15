import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import icons from '../constants/icons';
import images from '../constants/images';
import {COLORS, SIZES} from '../constants/theme';

const Banner = () => {
  return (
    <TouchableOpacity style={styles.banner}>
      <Image source={images.yoga} style={styles.image} resizeMode="contain" />
      <View style={styles.liveTag}>
        <Text style={styles.liveText}>LIVE</Text>
      </View>
      <View style={styles.rating}>
        <Image
          style={styles.star}
          source={icons.staricon}
          resizeMode="contain"
        />
        <Image
          style={styles.star}
          source={icons.staricon}
          resizeMode="contain"
        />
        <Image
          style={styles.star}
          source={icons.staricon}
          resizeMode="contain"
        />
        <Image
          style={styles.star}
          source={icons.staricon}
          resizeMode="contain"
        />
        <Image
          style={styles.star}
          source={icons.staricon}
          resizeMode="contain"
        />
        <Text style={styles.text}>5</Text>
      </View>
      <View style={styles.liveusers}>
        <Image
          style={styles.users}
          source={icons.usersliveicon}
          resizeMode="contain"
        />
        <Text style={styles.text}>245</Text>
      </View>

      <View style={styles.schedule}>
        <Image
          style={styles.callendericon}
          source={icons.callendericon}
          resizeMode="contain"
        />
        <View style={styles.classTime}>
          <Text style={styles.text}>Mon - Fri</Text>
          <Text style={styles.text}>9:00Am - 12.00Am</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Banner;

const styles = StyleSheet.create({
  banner: {
    position: 'relative',
    paddingRight: SIZES.padding,
    paddingLeft: SIZES.padding,
    height: 300,
    marginBottom: -20,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: SIZES.radius,
  },
  liveTag: {
    position: 'absolute',
    top: 40,
    right: 35,
    backgroundColor: COLORS.red,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: SIZES.radius2,
  },
  liveText: {
    color: COLORS.white,
    fontWeight: '800',
  },
  rating: {
    position: 'absolute',
    top: 40,
    left: 25,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.transparentBlack2,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: SIZES.radius2,
  },
  star: {
    width: 20,
    height: 20,
  },
  text: {
    color: COLORS.white,
    fontSize: SIZES.h2,
    marginLeft: 6,
    marginRight: 6,
  },
  liveusers: {
    position: 'absolute',
    top: 75,
    left: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyCOntent: 'space-between',
    backgroundColor: COLORS.transparentBlack2,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: SIZES.radius2,
    color: COLORS.white,
    fontSize: SIZES.h4,
  },
  users: {
    width: 30,
    height: 30,
  },
  schedule: {
    position: 'absolute',
    bottom: 35,
    left: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  callendericon: {
    width: 50,
    height: 50,
  },
});
