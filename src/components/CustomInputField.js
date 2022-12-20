import React from 'react';
import {StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';
import {useThemeAwareObject} from '../theme';
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
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      inputContainer: {
        borderWidth: 1,
        borderColor: theme.color.secondaryColor,
        backgroundColor: theme.color.secondaryColor,
        borderRadius: theme.borders.radius1,
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
        fontSize: theme.size.small,
        color: '#000000',
        // fontFamily: theme.family.medium,
      },
      placeholderColor: '#aaa',
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
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
