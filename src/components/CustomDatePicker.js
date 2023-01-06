import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import React, {useState} from 'react';
import {Platform, StyleSheet, TouchableOpacity, View} from 'react-native';

import {hp, wp} from '../util';
import Text from './CustomText';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
const CustomDatePicker = ({
  onChange,
  type,
  value,
  maxDate,
  minDate,
  customDateView,
  calendar,
  time,
  format,
  display,
  timeStart,
  timeEnd,
}) => {
  const [date, setDate] = useState('');
  const [mode, setMode] = useState('');
  const [show, setShow] = useState(false);

  const _onChange = (event, value) => {
    if (event.type == 'dismissed') {
      setShow(Platform.OS === 'ios');
    } else {
      const currentDate = value;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);

      if (mode === 'time') {
        onChange(moment(currentDate));
      }
      if (mode === 'date') {
        onChange(moment(currentDate));
      }
    }
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          type == 'date' ? showDatepicker() : showTimepicker();
        }}
        style={{paddingBottom: 10}}>
        <View style={[styles.dateView, customDateView]}>
          {date == '' && timeStart && (
            <Text style={styles.fromTextStyle}>From:</Text>
          )}
          {date == '' && timeEnd && (
            <Text style={styles.fromTextStyle}>To:</Text>
          )}
          <Text style={styles.datePlaceholder}>
            {date == '' ? (type == 'date' ? 'Select Date' : null) : format}
          </Text>
          {calendar && (
            <FontAwesome name="calendar" size={20} color={'#be7df0'} />
          )}
          {time && <FontAwesome name="clock-o" size={20} color={'#be7df0'} />}
        </View>
      </TouchableOpacity>
      {show && Platform.OS != 'ios' && (
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          mode={mode}
          is24Hour={false}
          display={display}
          onChange={_onChange}
          maximumDate={maxDate}
          minimumDate={minDate}
        />
      )}
    </>
  );
};

export default CustomDatePicker;

const styles = StyleSheet.create({
  dateView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#F5F5F5',
    borderRadius: hp(2),
    height: hp(7),
    width: wp(90),
    paddingHorizontal: wp(3),
    backgroundColor: '#F5F5F5',
  },
  fromTextStyle: {
    fontSize: hp(2),
  },
  datePlaceholder: {
    fontSize: hp(1.9),
  },
});
