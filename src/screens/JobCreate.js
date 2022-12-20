/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
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
import Header from '../../../components/CustomHeader';

import {hp, wp} from '../../../util';

import DashedBox from '../../../components/DashedBox';
import ImageInput from '../../../components/ImageInput';
import Upload from '../../../assets/Svg/Upload.svg';
import Input from '../../../components/CustomInputField';
import Button from '../../../components/CustomButton';

import DropDownPicker from '../../../components/CustomDropdown';
import CustomDatePicker from '../../../components/CustomDatePicker';

import {createJob, createJobInvite} from '../../../endpoints';
import {usePostApiMutation} from '../../../services/service';

import {Formik} from 'formik';

import * as yup from 'yup';
import {ScrollView} from 'react-native';

const CreateJob = props => {
  const styles = useThemeAwareObject(createStyles);
  const [mapShow, setMapShow] = useState(false);
  const [address, setAddress] = useState('');
  const [buttonPressed, setButtonPressed] = useState(false);
  const [createJobCall, createJobResponse] = usePostApiMutation();
  const category = useSelector(state => state.user.category);
  const token = useSelector(state => state.user.token);
  const [error, setError] = useState(false);

  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  const [uri1, setUri1] = useState(null);
  const [uri2, setUri2] = useState(null);
  const [uri3, setUri3] = useState(null);
  const [date, setDate] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());

  const [open, setOpen] = useState(false);

  const [value, setValue] = useState(props?.route?.params?.id);
  const [items, setItems] = useState([]);

  const [checkStart, setCheckStart] = useState(false);

  const [startDateDisable, setStartDateDisable] = useState(true);
  const [endDateDisable, setEndDateDisable] = useState(true);
  const validationSchema = yup.object().shape({
    jobTitle: yup
      .string('Job Title is required')
      .label('JobTitle')
      .required('Job Title is required'),
    jobDescription: yup
      .string('Job Description required')
      .label('job Description')
      .required('Job Description is required'),
    // uri1: yup
    //   .string('Image is required')
    //   .label('Image')
    //   .required('Image is required'),
    address: yup
      .string('Location is required')
      .label('location')
      .required('Location is required'),
    date: yup
      .string('date is required')
      .label('date')
      .required('Date is required'),
    startTime: yup
      .string('Start Time is required')
      .label('start Time')
      .required('Start Time is required'),
    endTime: yup
      .string('End Time is required')
      .label('endTime')
      .required('End Time is required'),
    value: yup
      .string('Category is required')
      .label('Category')
      .required('Category is required'),
  });

  return (
    <View style={styles.mainContainer}>
      <Header
        statusbar={styles.headerColor}
        centerComponent={<Text style={styles.centerText}>Create Job</Text>}
        containerStyle={styles.headerContainerStyle}
        backgroundColor={styles.headerColor}
        leftComponent={
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Back />
          </TouchableOpacity>
        }
      />
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
            address: address,
            value: value,
            uri1: uri1 ?? null,
            date: '',
            startTime: '',
            endTime: '',
          }}
          validationSchema={validationSchema}
          onSubmit={async values => {
            // let difference = moment(endTime).diff(moment(startTime), 'minutes');
            // let differenceTwo = moment(startTime).diff(moment(), 'minutes');
            // console.log('differenceTwo =====>', differenceTwo);
            // console.log('difference====>', difference);
            console.log('values', values);
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
                <Text style={styles.inputHeaderText}>Category</Text>
                <View
                  style={{
                    zIndex: 100,
                  }}>
                  <DropDownPicker
                    disabled={
                      props?.route?.params?.inviteContractor ? true : false
                    }
                    placeholder={'Select Category'}
                    dropDownContainerStyle={styles.dropDownContainerStyle}
                    containerStyle={styles.containerStyle}
                    style={styles.dropDownStyleRate}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    zIndex={200}
                    zIndexReverse={100}
                    ArrowDownIconComponent={() => downArrow}
                    ArrowUpIconComponent={() => upArrow}
                    onChangeValue={value => {
                      setFieldValue('value', value);
                    }}
                  />
                  <Text style={styles.error}>{errors.value}</Text>
                </View>
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
                <Text style={styles.dateTimeError}> {errors.date}</Text>
              </View>
              <View style={styles.timeView}>
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
                      if (moment().isBefore(moment(value))) {
                        setStartTime(value);
                        setFieldValue(
                          'startTime',
                          moment(value).utc(moment(value)),
                        );
                        let tempTime = new Date(value).setMinutes(
                          new Date(value).getMinutes() + 5,
                        );
                        setEndTime(tempTime);
                        setFieldValue(
                          'endTime',
                          moment(value).utc(moment(value)),
                        );
                      } else {
                        let tempTime = new Date().setMinutes(
                          new Date().getMinutes() + 1,
                        );
                        setStartTime(tempTime);
                        setFieldValue(
                          'startTime',
                          moment(value).utc(moment(value)),
                        );
                        setCheckStart(true);
                      }
                      // setStartTime(value);

                      // setEndDateDisable(false);
                    }}
                    format={moment(startTime).format('HH:mm')}
                    minDate={new Date()}
                  />
                  {/* {console.log(
                      'first ======>',
                      moment()
                        .seconds(0)
                        .isBefore(moment(startTime, 'day').seconds(0)),
                    )} */}

                  {/* {moment(startTime, 'day')
                      .seconds(0)
  
                      .isBefore(moment().seconds(0)) && buttonPressed ? (
                      <Text style={styles.dateTimeErrorJOB}>
                        The job cannot be in the past. Choose future date
                      </Text>
                    ) : (
                      <Text></Text>
                      // console.log(
                      //   'hereeeee',
                      //   moment().seconds(0),
                      //   moment(startTime, 'day').seconds(0),
                      // )
                    )} */}
                  <Text style={styles.dateTimeError}>{errors.startTime}</Text>
                </View>
                <View>
                  <CustomDatePicker
                    // disabled={endDateDisable ? true : false}
                    timeEnd={true}
                    time={true}
                    value={new Date(endTime)}
                    type="time"
                    customDateView={styles.endTimeView}
                    onChange={value => {
                      console.log(
                        'value :>> ',
                        moment(value).diff(moment(startTime), 'm') >= 5,
                      );
                      console.log(
                        'first',
                        moment(value).isAfter(moment(startTime)),
                      );
                      if (moment(value).isAfter(moment(startTime))) {
                        if (moment(value).diff(moment(startTime), 'm') >= 5) {
                          setEndTime(value);
                          setFieldValue(
                            'endTime',
                            moment(value).utc(moment(value)),
                          );
                        } else {
                          let tempTime = new Date(startTime).setMinutes(
                            new Date(startTime).getMinutes() + 5,
                          );
                          setEndTime(tempTime);
                          setFieldValue(
                            'endTime',
                            moment(tempTime).utc(moment(tempTime)),
                          );
                        }
                      } else {
                        let tempTime = new Date(startTime).setMinutes(
                          new Date(startTime).getMinutes() + 5,
                        );
                        setEndTime(tempTime);
                        setFieldValue(
                          'endTime',
                          moment(tempTime).utc(moment(tempTime)),
                        );
                      }
                    }}
                    format={moment(endTime).format('HH:mm')}
                    minDate={new Date(startTime)}
                  />

                  <Text style={styles.dateTimeError}>{errors.endTime}</Text>
                </View>
              </View>
              <Button
                style={[styles.postButton, styles.postText]}
                title1="Post Job"
                loading={createJobResponse.isLoading}
                onPress={() => {
                  handleSubmit(values);

                  setButtonPressed(true);
                }}
              />
            </>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

export default CreateJob;
