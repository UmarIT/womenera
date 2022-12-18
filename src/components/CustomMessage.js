import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Avatar from './CustomAvatar';
import Text from './CustomText';

import Divider from './CustomDivider';

function CustomMessage(props) {
 
  return (
    <>
      <TouchableOpacity style={styles.mainContainer} onPress={props.onPress}>
        <View style={styles.leftContainer}>
          {props.image == null ? (
            <Avatar
              icon={{name: 'user', type: 'font-awesome'}}
              rounded
              size={styles.avatarStyle}
              containerStyle={styles.avatarContainer}
            />
          ) : (
            <Avatar
            //   image={baseUrl.imageUrl + props.image}
              rounded
              size={styles.avatarStyle}
              containerStyle={styles.avatarContainer}
            />
          )}
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.topView}>
            <Text numberOfLines={1} style={styles.nameStyle}>
              {props.name}
            </Text>
            <Text numberOfLines={1} style={styles.timeStyle}>
              {props.time}
            </Text>
          </View>
          <Text numberOfLines={1} style={styles.messageStyle}>
            {props.message}
          </Text>
        </View>
      </TouchableOpacity>
      <Divider style={styles.dividerStyle} />
    </>
  );
}

export default CustomMessage;
const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 1.5,
        padding: 1.5,
        borderRadius: 25,
      },
      leftContainer: {
        width: 15,
      },
      rightContainer: {
        marginLeft: 2,
        marginRight: 2,
        flex: 1,
      },
      topView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      avatarContainer: {
        backgroundColor: 'pink',
      },
      timeStyle: {
        color: 'pink',
        fontSize: 12,
      },
      nameStyle: {
        color: 'white',
        width: 40,
      },
      messageStyle: {
        color: 'pink',
        alignSelf: 'flex-start',
      },
      dividerStyle: {
        height: 0.2,
        marginHorizontal: 4,
        borderBottomColor: 'transparent',
        borderRadius: 3,
        backgroundColor: 'pink',
      },
      avatarStyle: 15,
})