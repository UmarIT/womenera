import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import CustomHeader from '../components/CustomHeader';
import {TouchableOpacity} from 'react-native';
import CustomAvatar from '../components/CustomAvatar';
import {hp} from '../util';
import CustomNotificationCard from '../components/CustomNotificationCard';

const Notifications = props => {
  const description =
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ';

  return (
    <>
      <CustomHeader
        statusbar={styles.headerColor}
        centerComponent={<Text style={styles.centerText}>Notifications</Text>}
        containerStyle={styles.headerContainerStyle}
        backgroundColor={styles.headerColor}
        leftComponent={
          <Image
            source={require('../assets/splashicon.png')}
            resizeMode="contain"
            style={{
              width: hp(7),
              height: hp(7),
            }}
          />
        }
        rightComponent={
          <TouchableOpacity
          // onPress={() => {
          //   props.navigation.navigate('AccountStack', {
          //     screen: 'ProfileInfo',
          //   });
          // }}
          >
            <View>
              <CustomAvatar
              // image={
              //   userinfo?.image ? baseUrl.imgUrl + userinfo?.image : null
              // }
              />
            </View>
          </TouchableOpacity>
        }
      />
      <CustomNotificationCard
        name="Nimar"
        message="Hi How are you ?"
        time="1 hour ago"
      />
    </>
  );
};

const styles = StyleSheet.create({
  headerContainerStyle: {
    borderBottomColor: '#FFFFFF',
    borderBottomLeftRadius: hp(0),
    borderBottomRightRadius: hp(0),
  },
  headerColor: '#FFFFFF',
  centerText: {
    fontSize: hp(2),
    // fontFamily: theme.family.bold,
    // color: theme.color.buttonBackground,
    fontWeight: 'bold',
    color: '#000',
  },
  headingTextStyle: {
    color: '#000',
    // fontFamily: theme.family.medium,
    marginBottom: hp(3.5),
  },
  imageView: {
    justifyContent: 'center',
  },
});

export default Notifications;
