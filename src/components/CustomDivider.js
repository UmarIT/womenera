import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {Divider} from 'react-native-elements';


function CustomDivider(props) {
  const {width, height} = Dimensions.get('window');


  return <Divider color={props.dividerColor} style={props.style} />;
}

export default CustomDivider;
