import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  View,
  Image,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
} from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';
import SearchBar from '../components/CustomSearchBar';

const Myexperts = props => {
  const [isLoading, setisLoading] = useState(true);
  const [myUserData, setMyUserData] = useState();
  const [filteredData, setFilteredData] = useState();
  const [searchText, setSearchText] = useState('');
  const [openSearch, setOpenSearch] = useState(false);
  console.log('filtered', filteredData);
  // const[search, setSearch] = useState('');
  const getUserData = async () => {
    try {
      const response = await fetch(
        'https://nimerta123.github.io/Newexpertsapi/expertsapi.json',
      );
      const myData = await response.json();
      setMyUserData(myData.Expert);
      setFilteredData(myData.Expert);
      setisLoading(false);
      console.log('hook', myData.Expert);
    } catch (error) {
      console.log(error);
    }
  };
  const SearchFilterFunction = text => {
    const newData = myUserData.filter(function (item) {
      const itemData = item.Name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setFilteredData(newData);
  };
  useEffect(() => {
    getUserData();
  }, []);
  if (myUserData === undefined) {
    return null;
  }
  // const searchFilter= (text)=>{
  //   if (text) {
  //     const newdata = filteredData.filter((item)=>{
  //       const itemdata = item.Qualification ? item.Qualification.toUpperCase()
  //       : ''.toUpperCase();
  //       const textData = text.toUpperCase();
  //       return itemdata.indexOf(textData) > -1;
  //     })
  //     setMyUserData(newdata)
  //     setSearch(text);
  //   }
  //   else{
  //     setMyUserData(filteredData);
  //     setSearch(text);
  //   }
  // }
  return (
    <View style={styles.maincontainer}>
      <SearchBar
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={styles.searchInputStyle}
        placeholder={'Search'}
        searchPlaceholderColor={styles.searchPlaceholderColor}
        onChangeText={e => {
          setSearchText(e);
          SearchFilterFunction(e);
        }}
        onClear={e => SearchFilterFunction('')}
        value={searchText}
      />

      <FlatList
        data={filteredData}
        ListEmptyComponent={() => {
          return (
            <View style={styles.activityStyle}>
              <Text>Nothing Found</Text>
            </View>
          );
        }}
        renderItem={({item}) => {
          return (
            <View style={styles.card}>
              <View style={styles.imagecontainer}>
                <Image
                  style={styles.imagestyle}
                  resizeMode="cover"
                  source={require('../assets/avatarfemale.png')}
                />
              </View>
              <View>
                <View style={styles.biodatacontainer}>
                  <Text style={styles.biodata}>Bio-Data</Text>
                  <Text style={styles.idnumber}>
                    {' '}
                    {item.id < 10 ? `#0${item.id}` : `#${item.id}`}
                  </Text>
                </View>
                <View>
                  <View style={styles.maindatacontainer}>
                    <Text style={styles.myname}>Name: {item.Name}</Text>
                    <Text style={styles.myname}>Email: {item.Email}</Text>
                    <Text style={styles.myname}>
                      Qualification: {item.Qualification}
                    </Text>
                    <Text style={styles.myname}>
                      Research Area: {item.ResearchArea}
                    </Text>
                    <Text style={styles.myname}>
                      Professor At: {item.ProffessorAt}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Myexperts;
const styles = StyleSheet.create({
  loader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%',
  },
  maincontainer: {
    flex: 1,
    width: '100%',
    paddingTop: 50,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 50,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  biodatacontainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#353535',
    paddingVertical: 10,
    fontFamily: 'JosefinSans_400Regular',
  },
  idnumber: {
    fontSize: 20,
    color: 'rgba(255, 255, 255, 0.5)',
    fontFamily: 'JosefinSans_400Regular',
    paddingRight: 10,
  },
  biodata: {
    fontSize: 30,
    color: '#fff',
    fontFamily: 'JosefinSans_400Regular',
  },
  imagecontainer: {
    padding: 10,
  },
  imagestyle: {
    width: '100%',
    height: 180,
  },
  maindatacontainer: {
    padding: 10,
    backgroundColor: '#353535',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  myname: {
    fontSize: 15,
    color: '#fff',
    marginBottom: 10,
    alignSelf: 'flex-start',
    textTransform: 'capitalize',
    fontFamily: 'JosefinSans_400Regular',
  },
  searchBarContainer: {
    width: 300,
    height: 10,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  inputContainerStyle: {
    marginLeft: 1,
    width: 300,
    height: 40,
    justifyContent: 'center',
    borderRadius: 8,
  },
  searchInputStyle: {
    color: 'black',
  },
  searchPlaceholderColor: 'grey',
  activityStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
