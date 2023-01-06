import {
  Alert,
  Linking,
  PermissionsAndroid,
  Platform,
  Pressable,
  ToastAndroid,
  View,
  TouchableOpacity,
  BackHandler,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import moment from 'moment';
import {hp, wp} from '../util/index';

import Input from '../components/CustomInputField';
import CustomDatePicker from '../components/CustomDatePicker';
import {Formik} from 'formik';

import * as yup from 'yup';
import {ScrollView} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import {StyleSheet} from 'react-native';
import firestore from '@react-native-firebase/firestore';
const Addjobs = props => {
  function createjob() {
    console.log('jobhere');
    firestore()
      .collection('jobs')
      .add({
        jobtitle: jobTitle,
        jobpublisher: JobPublisher,
        description: jobDescription,
        jobdate: date,
        applyFrom: applyFrom,
        time: startTime,
      })
      .then(() => {
        showAlert();
        console.log('Job added!');
      });
  }
  const [mapShow, setMapShow] = useState(false);
  const [address, setAddress] = useState('');
  const [buttonPressed, setButtonPressed] = useState(false);

  const [error, setError] = useState(false);

  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  const [uri1, setUri1] = useState(null);
  const [uri2, setUri2] = useState(null);
  const [uri3, setUri3] = useState(null);
  const [date, setDate] = useState(new Date());
  // const [endTime, setEndTime] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());

  const [open, setOpen] = useState(false);

  const [value, setValue] = useState([]);
  const [items, setItems] = useState([]);

  const [checkStart, setCheckStart] = useState(false);

  const [startDateDisable, setStartDateDisable] = useState(true);
  const [endDateDisable, setEndDateDisable] = useState(true);
  const [JobPublisher, setJobPublisher] = useState('');
  const [applyFrom, setApplyFrom] = useState('');
  const validationSchema = yup.object().shape({
    jobTitle: yup
      .string('Job Title is required')
      .label('JobTitle')
      .required('Job Title is required'),
    jobDescription: yup
      .string('Job Description required')
      .label('job Description')
      .required('Job Description is required'),
    date: yup
      .string('date is required')
      .label('date')
      .required('date is required'),
    JobPublisher: yup
      .string('job Publisher is required')
      .label('job Publisher')
      .required('job Publisher is required'),
    applyFrom: yup
      .string('link is required')
      .label('applyFrom')
      .required('link is required'),
    startTime: yup
      .string('Time is required')
      .label('Time')
      .required('Time is required'),
    endTime: yup
      .string('End Time is required')
      .label('endTime')
      .required('End Time is required'),
    value: yup
      .string('Category is required')
      .label('Category')
      .required('Category is required'),
  });
  const showAlert = () =>
    Alert.alert(
      'Success Message',
      'Job Posted Successfully.',
      [
        {
          text: 'Ok',
          onPress: () => Alert.alert('Okay Pressed'),
          style: 'ok',
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            'This alert was dismissed by tapping outside of the alert dialog.',
          ),
      },
    );
  return (
    <View style={styles.mainContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginHorizontal: wp(4),
          flexGrow: 1,
        }}
        style={{
          paddingTop: hp(3),
          marginBottom: hp(3),
        }}>
        <Formik
          validateOnChange={false}
          validateOnBlur={false}
          initialValues={{
            jobTitle: jobTitle,
            jobDescription: jobDescription,

            date: '',
            startTime: '',
            endTime: '',
          }}
          validationSchema={validationSchema}
          onSubmit={async values => {
            createjob();
          }}>
          {({
            handleChange,
            handleSubmit,
            handleBlur,
            errors,
            values,
            setFieldValue,
          }) => (
            <>
              <View>
                <Text style={styles.inputHeaderText}>Job Title</Text>
                <Input
                  placeholder={'Title'}
                  value={jobTitle}
                  onChange={e => setJobTitle(e.nativeEvent.text)}
                  onChangeText={value => {
                    setJobTitle(value);
                    setFieldValue('jobTitle', value);
                  }}
                  onBlur={handleBlur('jobTitle')}
                />
                <Text style={styles.error}>{errors.jobTitle}</Text>
              </View>
              <View>
                <Text style={styles.inputHeaderText}>Job Publisher</Text>
                <Input
                  placeholder={'Publisher'}
                  value={JobPublisher}
                  onChange={e => setJobPublisher(e.nativeEvent.text)}
                  onChangeText={value => {
                    setJobPublisher(value);
                    setFieldValue('JobPublisher', value);
                  }}
                  onBlur={handleBlur('JobPublisher')}
                />
                <Text style={styles.error}>{errors.JobPublisher}</Text>
              </View>
              <View>
                <Text style={styles.inputHeaderText}>Job Description</Text>

                <Input
                  multiline
                  placeholder={'Type here...'}
                  inputStyle={styles.offerContainerStyle}
                  containerStyle={styles.containerStyleOne}
                  inputContainerStyle={styles.containerStyleOne}
                  value={jobDescription}
                  onChange={e => setJobDescription(e.nativeEvent.text)}
                  onChangeText={value => {
                    setFieldValue('jobDescription', value);
                    setJobDescription(value);
                  }}
                  onBlur={handleBlur('jobDescription')}
                />

                <Text style={styles.error}>{errors.jobDescription}</Text>
              </View>
              <View>
                <Text style={styles.inputHeaderText}>Apply from</Text>
                <Input
                  placeholder={'link'}
                  value={applyFrom}
                  onChange={e => setApplyFrom(e.nativeEvent.text)}
                  onChangeText={value => {
                    setApplyFrom(value);
                    setFieldValue('applyFrom', value);
                  }}
                  onBlur={handleBlur('applyFrom')}
                />
                <Text style={styles.error}>{errors.applyFrom}</Text>
              </View>
              <View>
                <Text style={styles.inputHeaderText}>Date</Text>

                <CustomDatePicker
                  calendar={true}
                  value={new Date(date)}
                  type="date"
                  customDateView={styles.dateInput}
                  onChange={value => {
                    setDate(value);
                    setFieldValue('date', date);
                    setStartTime(value);
                    setEndTime(value);
                    setStartDateDisable(false);
                  }}
                  format={moment(date).format('MM/DD/YYYY')}
                  minDate={new Date()}
                  // pickermode={'date'}
                />
                <Text style={styles.error}> {errors.date}</Text>
              </View>
              <View>
                <Text style={styles.inputHeaderText}>Time</Text>

                <CustomDatePicker
                  // disabled={startDateDisable ? true : false}
                  timeStart={true}
                  time={true}
                  type="time"
                  value={new Date(startTime)}
                  customDateView={styles.timeStartInput}
                  onChange={value => {
                    setStartTime(value);
                    setFieldValue(
                      'startTime',
                      moment(value).utc(moment(value)),
                    );
                    setCheckStart(true);
                  }}
                  format={moment(startTime).format('HH:mm')}
                  minDate={new Date()}
                />

                <Text style={styles.error}>{errors.startTime}</Text>
              </View>

              <TouchableOpacity
                style={styles.postButton}
                onPress={() => handleSubmit()}>
                <Text style={styles.postText}>Post Job</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

export default Addjobs;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainerStyle: {
    borderBottomColor: '#fff',
    borderBottomLeftRadius: hp(0),
    borderBottomRightRadius: hp(0),
  },
  headerColor: '#000',
  centerText: {
    color: '#000',
  },
  uploadImageTextStyle: {
    // paddingHorizontal: wp(5),
    marginBottom: hp(0.5),
    // marginTop: hp(3),
    marginLeft: wp(2),
  },
  dashedView: {
    flexDirection: 'row',
    marginTop: hp(1),
    // paddingHorizontal: wp(5),
    //   backgroundColor: 'red',
  },
  imageStyle: {
    height: hp(15),
    width: wp(29),
    alignSelf: 'center',
    borderRadius: hp(4),
  },
  boxEmpty: {
    borderColor: '#000',
    //   marginLeft: wp(2),
  },
  boxImage: {
    borderColor: 'transparent',
  },
  inputHeaderText: {
    // paddingHorizontal: wp(2),
    marginBottom: hp(0.5),
    fontWeight: 'bold',
    color: '#000',
    marginLeft: wp(2),
  },

  imageStyle: {
    height: hp(15),
    width: wp(29),
    alignSelf: 'center',
    borderRadius: hp(4),
  },
  formikErrorText: {
    color: 'red',
    marginLeft: wp(4),
    marginBottom: hp(0.5),
    fontSize: hp(2),
  },
  error: {
    color: 'red',
    marginLeft: wp(2),
    fontSize: hp(1.5),
    // marginTop: hp(1.9),
  },
  descriptionInputStyle: {
    height: hp(20),
    textAlignVertical: 'top',
  },
  descriptionContainerStyle: {
    height: hp(20),
  },

  dateInput: {
    width: wp(92),
  },
  timeStartInput: {
    width: wp(92),
  },
  endTimeView: {
    width: wp(45),
    marginTop: hp(3.2),
  },
  postButton: {
    backgroundColor: '#be7df0',
    width: wp(85),
    height: hp(7),
    marginTop: hp(3),
    marginBottom: hp(3),
    borderRadius: hp(2),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  postText: {
    color: '#fff',
  },

  containerStyle: {
    borderColor: '#fff',
    borderLeftColor: '#fff',
  },
  offerContainerStyle: {
    height: hp(28),
    textAlignVertical: 'top',
  },
  containerStyleOne: {
    height: hp(28),
    borderRadius: hp(2),
  },
});
