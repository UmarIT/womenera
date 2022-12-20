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
function Home(props) {
  //   const styles = useThemeAwareObject(createStyles);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    const Data = [
      {
        id: 1,
        name: 'Scholarships',
        src: require('../assets/Scholarships.jpg'),
      },
      {
        id: 2,
        name: ' Experts',
        src: require('../assets/experts.jpg'),
      },
      {
        id: 3,
        name: 'Jobs',
        src: require('../assets/jobimg.jpg'),
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
  return (
    <>
      <CustomHeader
        statusbar={styles.headerColor}
        centerComponent={<Text style={styles.centerText}>Home</Text>}
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
    </>
  );
}

export default Home;

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
