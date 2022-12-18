import React from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import CustomAvatar from '../components/CustomAvatar';
import CustomHeader from '../components/CustomHeader';
import {hp, wp} from '../util';
const Chat = () => {
  return (
    <CustomHeader
      statusbar={styles.headerColor}
      centerComponent={<Text style={styles.centerText}>Chat</Text>}
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
        //   onPress={() => {
        //     props.navigation.navigate('AccountStack', {
        //       screen: 'ProfileInfo',
        //     });
        //   }

        //   }
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
  );
};
export default Chat;

const styles = StyleSheet.create({
  imageStyle: {
    height: 152,
    width: 102,
    borderRadius: 20,
    overflow: 'hidden',
    // backgroundColor: 'red',
  },
  headingTextStyleOne: {
    marginLeft: 35,
    marginTop: 20,
    marginBottom: 10,
    // fontWeight: 'bold',
    color: '#000',
  },
  styleContainer: {
    marginTop: 20,
    marginHorizontal: 30,
    borderColor: '#F5F5F5',
    borderWidth: 0.15,
    backgroundColor: '#fff',
    // padding: 4,
    borderRadius: 15,
    marginBottom: 1.5,
  },
  activityStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  textStyle: {
    width: 100,
    height: 24,
    textAlignVertical: 'center',
    textAlign: 'center',
    position: 'absolute',
    bottom: 0,
    paddingBottom: 0.5,
    color: '#000',
    fontSize: 12.2,
    backgroundColor: '#be7df0',
    fontWeight: 'Bold',
    // fontFamily: theme.family.medium,
    // backgroundColor: theme.color.blackOverlay,
  },
  imageView: {
    justifyContent: 'center',
  },
  inputStyle: {
    color: '#000',
    // backgroundColor: 'red',
    // width: 50,
  },
});
