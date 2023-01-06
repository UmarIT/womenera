import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/CustomHeader';

import Avatar from '../components/CustomAvatar';

import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import {Image} from 'react-native';
import {hp, wp} from '../util/index';
import PostedJob from './PostedJob';
import Recommended from './Recommended';

const MyJobs = props => {
  console.log('props', props);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Posted'},
    {key: 'second', title: 'Recommended'},
  ]);

  useEffect(() => {
    setTimeout(() => {
      props?.route?.params && setIndex(props?.route?.params?.index);
    }, 100);
  }, []);
  const FirstRoute = () => <PostedJob {...props} />;
  const SecondRoute = () => <Recommended {...props} />;

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const renderTabBar = props => {
    return (
      <TabBar
        {...props}
        style={styles.tabBarStyle}
        pressColor={'transparent'}
        indicatorStyle={styles.labelUnderlineStyle}
        renderLabel={({route, focused}) => (
          <Text
            style={
              focused ? styles.tabBarLabelStyle : styles.tabBarInactiveStyle
            }>
            {route.title}
          </Text>
        )}
      />
    );
  };
  return (
    <View style={styles.mainContainer}>
      <Header
        statusbar={styles.headerColor}
        centerComponent={<Text style={styles.centerText}>Jobs</Text>}
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
            onPress={() => {
              props.navigation.navigate('AccountStack', {
                screen: 'ProfileInfo',
              });
            }}>
            <View>
              <Avatar
                // image={
                //   userInfo?.image ? baseUrl.imgUrl + userInfo?.image : null
                // }
                size={styles.avatarSize}
              />
            </View>
          </TouchableOpacity>
        }
      />

      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

export default MyJobs;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainerStyle: {
    borderBottomColor: '#fff',
    borderBottomLeftRadius: hp(0),
    borderBottomRightRadius: hp(0),
  },
  headerColor: '#fff',
  centerText: {
    fontSize: hp(3),
    color: '#000',
  },
  tabBarStyle: {
    backgroundColor: '#fff',
    marginBottom: hp(3),
  },

  headerContainerStyle: {
    borderBottomColor: '#fff',
  },
  searchBarContainer: {
    width: wp(90),
    alignSelf: 'center',
    backgroundColor: 'transparent',

    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    marginTop: hp(4),
  },
  inputContainerStyle: {
    backgroundColor: '#f5f5f5',

    borderRadius: 10,
  },

  avatarSize: hp(4.5),

  labelUnderlineStyle: {
    backgroundColor: '#be7df0',
  },
  tabBarLabelStyle: {
    color: '#be7df0',
    fontSize: hp(1),
  },
  tabBarInactiveStyle: {
    color: '#aaa',
    fontSize: hp(1),
    //   fontFamily: theme.family.semiBold,
  },
});
