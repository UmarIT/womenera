import React from 'react';
import {StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';

import {hp, wp} from '../util';

function CustomHeader(props) {
  return (
    <Header
      statusBarProps={props.statusbar ?? styles.backgroundColor}
      barStyle={props.barStyle ?? 'dark-content'}
      placement={props.placement ?? 'center'}
      leftComponent={props.leftComponent}
      centerComponent={({allowFontScaling: false}, props.centerComponent)}
      rightComponent={props.rightComponent}
      backgroundColor={props.backgroundColor}
      containerStyle={[styles.containerStyle, props.containerStyle]}
      centerContainerStyle={[
        styles.centerContainerStyle,
        props.centerContainerStyle,
      ]}
      leftContainerStyle={[styles.sideContainerStyle, props.leftContainerStyle]}
      rightContainerStyle={[
        styles.sideContainerStyle,
        props.rightContainerStyle,
      ]}
    />
  );
}

export default CustomHeader;
export const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: '#000',
  },
  containerStyle: {
    borderBottomColor: 'transparent',
    // borderBottomLeftRadius: wp(5),
    borderBottomLeftRadius: hp(2),
    borderBottomRightRadius: hp(2),
  },
  sideContainerStyle: {
    marginHorizontal: wp(4),
    justifyContent: 'center',
  },
  centerContainerStyle: {
    justifyContent: 'center',
  },
});
