import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import NavBar from './components/NavBar';
import {COLORS, FONTS, SIZES} from './constants/theme';
import data from './data/data.json';
import CourseScreen from './screens/CourseScreen';

const App = () => {
  const [coursedata, setcoursedata] = useState(null);
  useEffect(() => {
    setcoursedata(data);
  }, []);

  return (
    <ScrollView style={styles.appScreen}>
      <NavBar />
      {coursedata && <CourseScreen coursedata={coursedata} />}
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  appScreen: {
    width: SIZES.width,
    height: SIZES.height,
    flex: 1,
    backgroundColor: COLORS.background,
    fontFamily: FONTS.body1,
  },
});
