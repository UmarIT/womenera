import React from 'react';
import {StyleSheet} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {useThemeAwareObject} from '../theme';

function CustomSearchBar(props) {


  return (
    <SearchBar
      containerStyle={props.containerStyle}
      inputContainerStyle={props.inputContainerStyle}
      allowFontScaling={false}
      inputStyle={props.inputStyle}
      searchIcon={props.searchIcon}
      clearIcon={true}
      clearButtonMode="always"
      lightTheme
      placeholder={props.placeholder}
      placeholderTextColor={
        props.searchPlaceholderColor ?? styles.searchPlaceholderColor
      }
      returnKeyType={props.keyType ?? 'default'}
      onChangeText={props.onChangeText}
      onSubmitEditing={props.onSubmitEditing}
      onClear={props.onClear}
      value={props.value}
    />
  );
}

export default CustomSearchBar;
