import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';

const FormInput = ({
  containerStyle,
  label,
  placeholder,
  inputStyle,
  prependComponent,
  appendComponent,
  onChangeText,
  secureTextEntry,
  keyboardType = 'default',
  autoCompleteType = 'off',
  autoCapitalize = 'none',
  errorMsg = '',
  value,
  input,
  maxLength,
  labelTextStyle,
  errorTextStyle,
  placeholderTextColor,
  onChange,
}) => {
  return (
    <View style={{...containerStyle}}>
      {/* label & error msg */}
      <View style={styles.labelView}>
        <Text style={[styles.labelText, labelTextStyle]}>{label}</Text>
      </View>
      {/* Text Input */}
      <View style={[styles.inputView, input]}>
        {prependComponent}

        <TextInput
          style={{
            flex: 1,
            ...inputStyle,
          }}
          placeholder={placeholder}
          placeholderTextColor={'#aaa'}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCompleteType={autoCompleteType}
          autoCapitalize={autoCapitalize}
          onChangeText={onChangeText}
          value={value}
          maxLength={maxLength}
          onChange={onChange}
        />

        {appendComponent}
      </View>
      <Text style={[styles.errorText, errorTextStyle]}>{errorMsg}</Text>
    </View>
  );
};
export default FormInput;
export const styles = StyleSheet.create({
  labelView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelText: {
    color: '#000',
    fontSize: 2,
    marginLeft: 2,
    bottom: 1,
    // fontFamily: theme.family.medium,
  },
  inputView: {
    width: '80%',
    flexDirection: 'row',
    height: 15,
    paddingHorizontal: 4,
    // marginTop: hp(0.2),
    // marginLeft: wp(2),
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#E6E6E6',
    // borderWidth: 1,
    // borderColor: theme.color.inputBorder,
    height: 40,
  },
  errorText: {
    // color: theme.color.error,
    marginLeft: 1.8,
    marginTop: 0.7,
    marginBottom: 1,
    // fontSize: theme.size.xSmall,
  },
  // placeholderColor: '#aaa',
});
