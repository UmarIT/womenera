import React, {useState} from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';

import {hp, wp} from '../util/index';
import Icons from 'react-native-vector-icons/Fontisto';
import IconFont from 'react-native-vector-icons/FontAwesome';
const CustomJob = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <View style={styles.topContainer}>
            <Image
              source={require('../assets/rec.png')}
              resizeMode="contain"
              style={styles.imageStyle}
            />
            <View style={styles.jobTitle}>
              <Text style={styles.titleText}>{props.jobTitle}</Text>
              <View style={styles.categoryView}>
                <Text style={styles.categoryText}>{props.category}</Text>
              </View>
            </View>
          </View>
        </View>

        <Text style={styles.description} numberOfLines={3}>
          {props.description}
        </Text>
        <View style={styles.bottomView}>
          <View style={styles.rowContainer}>
            <Icons name={'date'} color={'#be7df0'} size={wp(6)} />
            {/* <Calendar width={wp(6)} height={wp(6)} /> */}
            <Text style={styles.dateTimeText}>{props.date}</Text>
          </View>
          <View style={styles.rowContainer}>
            <IconFont name={'clock-o'} color={'#be7df0'} size={wp(6)} />
            <Text style={styles.dateTimeText}>{props.time}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CustomJob;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(4),
    borderColor: '#F5F5F5',
    borderWidth: hp(0.15),

    backgroundColor: '#fff',
    padding: hp(2),
    borderRadius: 10,
    marginBottom: hp(1.5),
  },
  topContainer: {
    flexDirection: 'row',
    marginLeft: props.invite ? wp(5) : wp(-2),
  },
  imageStyle: {
    width: wp(12),
    height: wp(12),
    borderRadius: 10,
  },
  jobTitle: {
    marginLeft: wp(2.5),
  },
  titleText: {
    fontSize: hp(2.2),
    width: wp(65),
    // fontFamily: theme.family.semiBold,
  },
  categoryView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryText: {
    color: '#2670FF',
    marginRight: wp(3),
    fontSize: hp(1.6),
    // fontFamily: theme.family.semiBold,
  },
  address: {
    color: '#2670FF',
    fontSize: hp(1.6),
    width: wp(35),
    marginLeft: wp(1),
    // backgroundColor: 'red',
    // fontFamily: theme.family.semiBold,
  },
  description: {
    marginVertical: hp(1),
  },
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(55),
    justifyContent: 'space-between',
  },

  dateTimeText: {
    // color: theme.color.buttonBackground,
    fontSize: hp(1.5),
    marginLeft: wp(1.5),
    // fontFamily: theme.family.semiBold,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inviteStyle: {
    color: '#fff',
    // fontFamily: theme.family.semiBold,
    // fontSize: theme.size.xSmall,
  },
});
