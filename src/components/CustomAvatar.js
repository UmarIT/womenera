import React from 'react';
import {StyleSheet} from 'react-native';
import {Avatar} from 'react-native-elements';

function CustomAvatar(props) {
  return props.image == null ? (
    <Avatar
      icon={{name: 'user', type: 'font-awesome'}}
      size={props.size}
      rounded={props.notRounded ? false : true}
      containerStyle={[styles.avatarContainer, props.avatarContainer]}
    />
  ) : (
    <Avatar
      source={{uri: props.image}}
      rounded={props.notRounded ? false : true}
      size={props.size}
      containerStyle={[styles.avatarContainer, props.avatarContainer]}
      onPress={props.onPress}
      activeOpacity={0.7}
    />
  );
}

export default CustomAvatar;
const styles = StyleSheet.create({
  avatarContainer: {
    backgroundColor: '#828282',
    borderWidth: 2,
    borderColor: 'white',
  },
});
