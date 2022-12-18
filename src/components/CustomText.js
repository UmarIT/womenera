import React from 'react';
import {StyleSheet, Text} from 'react-native';

const TextField = ({children, style, numberOfLines}) => {
  return (
    <Text
      style={[styles.textStyle, style]}
      numberOfLines={numberOfLines ?? null}
      allowFontScaling={false}>
      {children}
    </Text>
  );
};

export default TextField;
const styles = StyleSheet.create({
textStyle: {
    color: theme.color.white,
    fontFamily: theme.family.regular,
    fontSize: theme.size.small,
  },
})