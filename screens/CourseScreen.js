import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Banner from '../components/Banner';
import icons from '../constants/icons';
import images from '../constants/images';
import {COLORS, FONTS, SIZES} from '../constants/theme';

const CourseScreen = ({coursedata}) => {
  const {course} = coursedata;
  const {course_title, price, details, duration, instructor} = course;
  console.log('From cs: ', course_title);
  return (
    <View>
      <Banner />
      <View style={styles.info}>
        <View style={styles.details}>
          <View style={styles.courseInfo}>
            <View style={styles.category}>
              <View style={styles.bestseller}>
                <Text style={styles.bestSellertext}>Bestseller</Text>
              </View>

              <View style={styles.icons}>
                <Image
                  style={styles.imgLove}
                  source={icons.loveicon}
                  resizeMode="contain"
                />
                <Image
                  style={styles.imgShare}
                  source={icons.shareicon}
                  resizeMode="contain"
                />
              </View>
            </View>
            <Text style={FONTS.h1}>{course_title}</Text>

            <Text style={FONTS.body3}>{details}</Text>
            <View style={styles.view}>
              <Text style={styles.viewtext}>Duration: {duration}</Text>
              <Text style={styles.viewtext}>Age: 8+</Text>
            </View>
            <Text style={styles.viewtext}>
              Days of Classes: Mon, Wed and Fri
            </Text>

            <View style={styles.mentor}>
              <Image
                style={styles.mentorImg}
                source={images.mentor}
                resizeMode="cover"
              />
              <View style={styles.mentorDetails}>
                <Text style={styles.mentorName}>{instructor}</Text>
                <Text style={styles.mentorCategory}>
                  Yoga master | Psycologist | Teacher
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.aboutCourse}>
            <View style={styles.courseDetails}>
              <Text style={FONTS.h1}>Free</Text>
              <View style={styles.courseDetail}>
                <Text style={styles.coursePrice}>Rs {price}</Text>
                <Text style={styles.priceOff}>100% off</Text>
              </View>

              <View style={styles.startTime}>
                <Text style={styles.classStarts}>Class starts in</Text>
                <Text style={styles.startsIn}>24 : 58 : 02</Text>
              </View>
            </View>
            <Button
              style={styles.button}
              title="Register Now !"
              color={COLORS.red}
            />

            {/* Course Dexription */}
            <View style={styles.courseDescription}>
              <Text style={FONTS.h2}>Course Details</Text>
              <View style={styles.hrline} />
              <Text style={styles.courseText}>Audio: English Orginal</Text>
              <Text style={styles.courseText}>
                Subtitles: English, Spanish, French
              </Text>
              <Text style={styles.courseText}>Course: 7 Parts</Text>
              <Text style={styles.courseText}>Level: Medium</Text>
              <Text style={styles.courseText}>Duration: 2hr 30min</Text>
              <Text style={styles.courseText}>
                Access On Monbile, Desktop And TV
              </Text>
              <Text style={styles.courseText}>Certificate of Complition</Text>
              <Text style={styles.courseText}>Support Files</Text>
              <Text style={styles.courseText}>Full time access</Text>
            </View>

            {/* Why You learn */}
            <View>
              <Text style={FONTS.h2}>Why you'll learn</Text>
              <View style={styles.hrline} />
              <View>
                <Text style={styles.whyulearn}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  tempora numquam dolorum fugiat, ea, consequatur porro.
                </Text>
              </View>
            </View>

            {/* Curriculum */}
            <View style={styles.curriculum}>
              <Text style={FONTS.h2}>Curriculum</Text>
              <Text style={styles.curriculumSectionHeadline}>
                28 Sections, 12 Lectures, 3h 45m Total length
              </Text>
              <View style={styles.hrline} />
              <View style={styles.curriculumSections}>
                <Text style={styles.curriculumSection}>
                  ▪ Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis rem accusantium itaque illo debitis, facilis corporis
                  labore laudantium consectetur sed quas
                </Text>
                <Text style={styles.curriculumSection}>
                  ▪ Sit amet consectetur adipisicing elit. Officiis rem
                  accusantium itaque illo debitis, facilis corporis labore
                  laudantium consectetur sed quas
                </Text>
              </View>
            </View>

            {/* Required Material */}
            <View style={styles.requiredMaterial}>
              <Text style={FONTS.h2}>Software/Required Material</Text>
              <View style={styles.hrline} />
              <Text style={FONTS.body3}>Yoga Matt</Text>
              <Text style={FONTS.body3}>Water ( 1 ml )</Text>
              <View style={SIZES.row}>
                <Image source={images.banner} />
                <Text style={styles.bannerText}>
                  You can access to more courses while you earn more coins!
                </Text>
              </View>
              <Button
                style={styles.button}
                title="Play and Win Now !"
                color={COLORS.red}
              />
            </View>

            {/* Review */}
            <View style={styles.reviews}>
              <Text style={FONTS.h2}>Reviews</Text>
              <View style={styles.hrline} />
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

              {/* User Commnet */}
              <View style={styles.userComments}>
                <View style={styles.userComment}>
                  <Image
                    style={styles.userImg}
                    source={images.mentor}
                    resizeMode="cover"
                  />
                  <View style={styles.comment}>
                    <Text style={FONTS.h3}>Rajini Patro</Text>
                    <Text style={styles.commentText}>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Ipsum atque labore veniam placeat et amet, voluptas itaque
                      molestiae explicabo minima error reiciendis cumque vitae
                      nisi vero ad. Nam, perferendis aliquid.
                    </Text>
                  </View>
                </View>
                <View style={styles.userComment}>
                  <Image
                    style={styles.userImg}
                    source={images.mentor}
                    resizeMode="cover"
                  />
                  <View style={styles.comment}>
                    <Text style={FONTS.h3}>Rajini Patro</Text>
                    <Text style={styles.commentText}>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Ipsum atque labore veniam placeat et amet, voluptas itaque
                      molestiae explicabo minima error reiciendis cumque vitae
                      nisi vero ad. Nam, perferendis aliquid.
                    </Text>
                  </View>
                </View>
              </View>

              {/* Other Courses */}
              <View style={styles.otherCourses} />
              <TouchableOpacity style={styles.otherCourse}>
                <View style={styles.otherCourseImageDiv}>
                  <Image
                    style={styles.otherCourseImage}
                    source={images.yoga}
                    resizeMode="cover"
                  />
                </View>
                <View style={styles.enrollCourse}>
                  <Text style={styles.courseDetailText}>
                    Therapy and Arts of Yoga
                  </Text>
                  <Button
                    style={styles.button}
                    title="Enroll Now !"
                    color={COLORS.red}
                  />
                </View>

                <View style={styles.liveTag}>
                  <Text style={styles.liveText}>LIVE</Text>
                </View>
                <View style={styles.enrollCourserating}>
                  <Image
                    style={styles.enrollstar}
                    source={icons.staricon}
                    resizeMode="contain"
                  />
                  <Image
                    style={styles.enrollstar}
                    source={icons.staricon}
                    resizeMode="contain"
                  />
                  <Image
                    style={styles.enrollstar}
                    source={icons.staricon}
                    resizeMode="contain"
                  />
                  <Image
                    style={styles.enrollstar}
                    source={icons.staricon}
                    resizeMode="contain"
                  />
                  <Image
                    style={styles.enrollstar}
                    source={icons.staricon}
                    resizeMode="contain"
                  />
                  <Text style={styles.enrolltext}>5</Text>
                </View>
                <View style={styles.liveusers}>
                  <Image
                    style={styles.users}
                    source={icons.usersliveicon}
                    resizeMode="contain"
                  />
                  <Text style={styles.courselivetext}>245</Text>
                </View>

                <View style={styles.schedule}>
                  <Image
                    style={styles.callendericon}
                    source={icons.callendericon}
                    resizeMode="contain"
                  />
                  <View style={styles.classTime}>
                    <Text style={styles.enrolltext}>Mon - Fri</Text>
                    <Text style={styles.enrolltext}>9:00Am - 12.00Am</Text>
                  </View>
                  <View style={styles.tags}>
                    <Text style={styles.tag}>Health</Text>
                    <Text style={styles.tag}>Morning</Text>
                  </View>
                  <View style={styles.byInstructor}>
                    <Image
                      style={styles.ByInstructorImg}
                      source={images.mentor}
                      resizeMode="cover"
                    />
                    <Text style={styles.instructor}>by Avika Ghor</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CourseScreen;

const styles = StyleSheet.create({
  byInstructor: {
    flexDirection: 'row',
    position: 'absolute',
    left: 170,
    bottom: 7,
  },
  instructor: {
    marginLeft: 5,
    color: 'white',
  },
  ByInstructorImg: {
    width: 25,
    height: 25,
    borderRadius: 50,
  },
  tags: {
    position: 'absolute',
    top: -80,
    left: 190,
    flexDirection: 'row',
  },
  tag: {
    color: 'black',
    fontSize: 10,
    borderRadius: 2,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 2,
    margin: 4,
    backgroundColor: 'white',
  },
  classTime: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  liveTag: {
    position: 'absolute',
    top: 15,
    right: 95,
    backgroundColor: COLORS.red,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: SIZES.radius2,
  },
  liveText: {
    color: COLORS.white,
    fontWeight: '800',
  },
  enrollCourserating: {
    position: 'absolute',
    top: 15,
    left: 17,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.transparentBlack2,
    paddingRight: 2,
    paddingLeft: 2,
    borderRadius: SIZES.radius2,
  },
  enrollstar: {
    width: 10,
    height: 10,
  },
  enrolltext: {
    color: COLORS.white,
    fontSize: SIZES.h5,
    marginLeft: 6,
    marginRight: 6,
  },
  liveusers: {
    position: 'absolute',
    top: 10,
    left: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyCOntent: 'space-between',
    backgroundColor: COLORS.transparentBlack2,
    paddingRight: 5,
    paddingLeft: 5,
    marginRight: 10,
    borderRadius: SIZES.radius2,
    color: COLORS.white,
    fontSize: 10,
  },
  users: {
    width: 13,
    height: 13,
  },
  schedule: {
    position: 'absolute',
    bottom: 74,
    right: 20,
    flexDirection: 'row-reverse',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  callendericon: {
    width: 30,
    height: 30,
  },
  button: {flex: 1},
  courseText: {
    fontWeight: 'bold',
    flex: 1,
  },
  enrollCourse: {
    width: '100%',
    height: '30%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: 'black',
    fontWeight: 'bold',
  },
  otherCourseImage: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
  },
  otherCourseImageDiv: {
    width: '100%',
    height: '70%',
  },
  otherCourse: {
    width: 320,
    height: 220,
    padding: 10,
    backgroundColor: 'white',
    elevation: 20,
    shadowColor: '#171717',
    borderRadius: 10,
    marginBottom: 45,
    overflow: 'hidden',
  },
  commentText: {
    color: COLORS.black,
    lineHeight: 20,
  },
  userComment: {
    backgroundColor: '#ffb78c',
    padding: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContentL: 'space-between',
    margin: 5,
  },
  comment: {
    marginLeft: 10,
    flex: 1,
  },
  userImg: {
    width: 40,
    height: 40,
    borderRadius: 80,
  },
  text: {
    color: COLORS.black,
    fontSize: SIZES.h2,
    marginLeft: 6,
    marginRight: 6,
  },
  bestSellertext: {
    color: COLORS.white,
    fontSize: SIZES.h2,
    marginLeft: 6,
    marginRight: 6,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
  },
  star: {
    width: 20,
    height: 20,
  },
  bannerText: {
    flex: 1,
    fontSize: SIZES.h2,
    color: COLORS.black,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  curriculumSections: {
    padding: SIZES.padding2,
    backgroundColor: COLORS.transparentwhite,
    borderRadius: 20,
  },
  curriculumSection: {
    padding: SIZES.padding2,
    lineHeight: 20,
    color: COLORS.black,
  },
  curriculumSectionHeadline: {
    color: COLORS.black,
    marginBottom: 20,
  },
  whyulearn: {
    color: COLORS.white,
    fontSize: SIZES.body3,
    backgroundColor: COLORS.red,
    marginTop: 20,
    marginBottom: 20,
    padding: 20,
    borderRadius: 20,
    lineHeight: 22,
  },
  hrline: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  courseDetailText: {
    marginTop: 6,
    marginBottom: 5,
    color: COLORS.black,
    fontSize: SIZES.body3,
  },
  aboutCourse: {
    backgroundColor: COLORS.white,
    paddingRight: 15,
    paddingLeft: 15,
  },
  courseInfo: {
    paddingRight: SIZES.padding,
    paddingLeft: SIZES.padding,
  },
  courseDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  startsIn: {
    fontSize: SIZES.h3,
    color: COLORS.red,
    fontWeight: 'bold',
  },
  classStarts: {
    color: COLORS.red,
    fontWeight: 'bold',
  },
  coursePrice: {
    fontSize: SIZES.h3,
    color: COLORS.black,
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
  },
  priceOff: {
    backgroundColor: COLORS.orange,
    borderRadius: SIZES.radius2,
  },
  mentor: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  mentorImg: {
    width: 40,
    height: 40,
    borderRadius: 90,
  },
  mentorDetails: {
    marginLeft: 10,
  },

  mentorName: {
    fontSize: SIZES.h3,
    color: COLORS.black,
    fontWeight: 'bold',
  },
  mentorCategory: {
    fontSize: SIZES.h3,
    color: COLORS.black,
  },
  view: {
    flexDirection: 'row',
  },
  viewtext: {
    fontSize: SIZES.h3,
    color: COLORS.black,
    padding: SIZES.padding2,
    backgroundColor: COLORS.white,
    marginRight: 10,
    marginTop: 5,
  },
  headline: {
    fontWeight: 'bold',
    fontSize: SIZES.h1,
    color: COLORS.black,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  category: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imgLove: {
    width: 40,
    height: 40,
  },
  imgShare: {
    width: SIZES.imgWidth,
    height: SIZES.imgHeight,
  },
  courselivetext: {
    color: COLORS.white,
    // fontWeight: '800',
    paddingTop: 4,
    paddingBottom: 4,
  },
  bestseller: {
    backgroundColor: COLORS.red,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: SIZES.radius2,
  },
});
