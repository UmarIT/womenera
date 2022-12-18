import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View, Text} from 'react-native';

import {hp, wp} from '../util';
import Avatar from './CustomAvatar';

import Divider from './CustomDivider';

function CustomNotificationCard(props) {
  return (
    <>
      <TouchableOpacity style={styles.mainContainer} onPress={props.onPress}>
        <View style={styles.leftContainer}>
          {props.image == null ? (
            props.icon ? (
              props.icon
            ) : (
              <Avatar
                icon={{name: 'user', type: 'font-awesome'}}
                rounded
                size={styles.avatarStyle}
                containerStyle={styles.avatarContainer}
              />
            )
          ) : (
            <Avatar
              image={baseUrl.imgUrl + props.image}
              rounded
              size={styles.avatarStyle}
              containerStyle={styles.avatarContainer}
            />
          )}
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.topView}>
            <Text numberOfLines={1} style={[styles.nameStyle]}>
              {props.name}
            </Text>
            <Text numberOfLines={1} style={[styles.timeStyle]}>
              {props.time}
            </Text>
          </View>
          <Text numberOfLines={2} style={[styles.messageStyle]}>
            {props.message}
          </Text>
        </View>
      </TouchableOpacity>
      <Divider style={styles.dividerStyle} />
    </>
  );
}

export default CustomNotificationCard;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(0.5),
    marginHorizontal: wp(1),
    padding: hp(1.5),
    borderRadius: 15,
  },
  leftContainer: {
    width: wp(15),
  },
  rightContainer: {
    marginLeft: wp(2),
    marginRight: wp(2),
    flex: 1,
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  avatarContainer: {
    backgroundColor: '#828282',
  },
  timeStyle: {
    color: '#828282',
    fontSize: hp(1.5),
  },
  nameStyle: {
    color: '#828282',
    // fontFamily: theme.family.bold,
    width: wp(40),
    fontWeight: 'bold',
  },
  messageStyle: {
    color: '#828282',
  },
  white: '#fff',
  darkGray: '#828282',
  dividerStyle: {
    height: wp(0.3),
    marginHorizontal: wp(4),
    borderBottomColor: 'transparent',
    borderRadius: 10,
    backgroundColor: '#828282',
  },
  avatarStyle: wp(15),
});
