import React, {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';

import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  FlatList,
} from 'react-native';
import FormInput from '../components/FormInput';
// import {hp, wp} from '../util';
// import Text from './CustomText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomHeader from '../components/CustomHeader';
import CustomAvatar from '../components/CustomAvatar';
import {hp, wp} from '../util';
import db from './config';
import {
  setDoc,
  doc,
  getDoc,
  addDoc,
  collection,
  Firestore,
} from 'firebase/firestore';
import SearchBar from '../components/CustomSearchBar';
import RecommendedStudents from './RecommendedStudents';
import firestore from '@react-native-firebase/firestore';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Addjobs from './Addjobs';
const ExpertHomescreen = props => {
  const [scholarship, setscholarship] = useState('');
  const [job, setjob] = useState('');
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    const Data = [
      {
        id: 1,
        name: 'Students',
        src: require('../assets/Scholarships.jpg'),
      },
      {
        id: 2,
        name: 'Blogs',
        src: require('../assets/experts.jpg'),
      },
    ];
    setFilterData(Data);
    setData(Data);
  }, []);
  const SearchFilterFunction = text => {
    const newData = data.filter(function (item) {
      const itemData = item.name ? item.name.toUpperCase() : null;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setFilterData(newData);
  };
  async function create() {
    console.log('scholarshiphere');
    firestore()
      .collection('scholarships')
      .doc('ABC')
      .set({
        scholarship: scholarship,
      })
      .then(() => {
        console.log('scholarship added!');
      });
  }
  function createjob() {
    console.log('jobhere');
    firestore()
      .collection('jobs')
      .doc('02')
      .set({
        job: job,
      })
      .then(() => {
        console.log('Job added!');
      });
  }
  return (
    <>
      <CustomHeader
        statusbar={styles.headerColor}
        centerComponent={<Text style={styles.centerText}>Expert Home</Text>}
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
      <Text style={styles.headingTextStyleOne}>
        What are you looking for today?
      </Text>
      <FormInput
        inputStyle={styles.inputStyle}
        placeholder="Search here "
        value={searchText}
        onChangeText={e => {
          setSearchText(e);
          SearchFilterFunction(e);
          if (e == '') {
            Keyboard.dismiss();
          }
        }}
        appendComponent={
          <View style={styles.imageView}>
            {/* <Search width={12} height={12} /> */}
            <FontAwesome name="search" color="#808080" size={20} />
          </View>
        }
      />
      <FlatList
        keyExtractor={item => item.id}
        ListEmptyComponent={() => {
          return (
            <View style={styles.activityStyle}>
              <Text>Nothing Found</Text>
            </View>
          );
        }}
        data={filterData}
        renderItem={({item, index}) => (
          console.log('item.name', item.name),
          (
            <TouchableOpacity
              style={styles.styleContainer}
              onPress={() => {
                if (item.name == 'Jobs') {
                  props.navigation.navigate('BottomNavigation', {
                    screen: 'MyJobs',
                    params: {
                      index: 1,
                      skills: props?.route?.params?.additionalSkill,
                    },
                  });
                }
              }}
              activeOpacity={1}>
              <Image
                source={item.src}
                resizeMode="stretch"
                style={{
                  width: 300,
                  height: 130,
                  alignSelf: 'center',
                  overflow: 'hidden',
                }}
              />
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 10,
                  marginBottom: 10,
                  fontWeight: 'bold',
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )
        )}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          // justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'black',
            marginTop: hp(2),
            width: wp(40),
          }}>
          Add jobs
        </Text>
        <TouchableOpacity
          style={{
            width: wp(25),
            height: hp(5),
            backgroundColor: '#be7df0',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: hp(2),
            marginBottom: hp(2),
          }}
          onPress={() => {
            props.navigation.navigate('Addjobs');
          }}>
          <Ionicons name="add" color="#fff" size={25} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          // justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'black',
            marginTop: hp(2),
            width: wp(40),
          }}>
          Add Scholarships
        </Text>
        <TouchableOpacity
          style={{
            width: wp(25),

            height: hp(5),
            backgroundColor: '#be7df0',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: hp(2),
            marginBottom: hp(2),
          }}>
          <Ionicons name="add" color="#fff" size={25} />
        </TouchableOpacity>
      </View>
    </>
  );
};

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
export default ExpertHomescreen;
