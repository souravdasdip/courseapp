import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  background: '#F7ECD1',
  red: '#FF6962',
  orange: '#F8A629',
  white: '#FFFFFF',
  black: '#000000',
  linearBackground: 'linear-gradient(180deg, #ff6962 64%, #ffb78c 100%)',
  transparentBlack1: 'rgba(0, 0, 0, 0.1)',
  transparentBlack2: 'rgba(0,0,0,.5)',
  transparentwhite: 'rgb(244,244,244)',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  radius2: 5,
  padding: 15,
  padding2: 6,
  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,
  imgWidth: 30,
  imgHeight: 30,
  // app dimensions
  width,
  height,
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
};
export const FONTS = {
  largeTitle: {fontFamily: 'Poppins-Black', fontSize: SIZES.largeTitle},
  h1: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.h1,
    lineHeight: 35,
    fontWeight: 'bold',
    color: COLORS.black,
    marginTop: 5,
    marginBottom: 5,
  },
  h2: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.h2,
    fontWeight: 'bold',
    lineHeight: 22,
    color: COLORS.black,
    marginTop: 25,
    marginBottom: 5,
  },
  h3: {
    fontFamily: 'Poppins-SemiBold',
    color: COLORS.black,
    fontSize: SIZES.h3,
    lineHeight: 22,
  },
  h4: {
    fontFamily: 'Poppins-SemiBold',
    color: COLORS.black,
    fontSize: SIZES.h4,
    lineHeight: 22,
  },
  h5: {
    fontFamily: 'Poppins-SemiBold',
    color: COLORS.black,
    fontSize: SIZES.h5,
    lineHeight: 22,
  },
  body1: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.black,
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.black,
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.black,
    fontSize: SIZES.body3,
    lineHeight: 24,
  },
  body4: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.black,
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.black,
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
