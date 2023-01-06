import React from 'react';
import {StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';

import {hp, wp} from '../util';

const CustomInputField = ({
  placeholder,
  onChangeText,
  onChange,
  value,
  leftIcon,
  rightIcon,
  onBlur,
  secureTextEntry,
  keyboardType,
  editable,
  multiline,
  maxLength,
  style,
  containerStyle,
  inputContainerStyle,
  onPress,
  numberOfLines,
  inputStyle,
}) => {
  return (
    <Input
      inputStyle={inputStyle}
      containerStyle={[styles.container, containerStyle]}
      onPress={onPress}
      inputContainerStyle={[styles.inputContainer, inputContainerStyle]}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      secureTextEntry={secureTextEntry}
      editable={editable}
      multiline={multiline}
      placeholder={placeholder}
      numberOfLines={numberOfLines}
      placeholderTextColor={styles.placeholderColor}
      style={[styles.textStyle, style]}
      maxLength={maxLength}
      onChangeText={onChangeText}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      keyboardType={keyboardType}
    />
  );
};

export default CustomInputField;
const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: '#F5F5F5',
    backgroundColor: '#F5F5F5',
    borderRadius: hp(2),
    paddingHorizontal: wp(2),
    height: hp(7),
  },
  container: {
    marginTop: hp(0.8),
    width: wp(96.6),
    alignSelf: 'center',
    height: hp(7),
  },
  textStyle: {
    fontSize: hp(1.7),
    color: '#000000',
    // fontFamily: theme.family.medium,
  },
  placeholderColor: '#aaa',
});
