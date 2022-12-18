import React, {useEffect, useState} from 'react';
import {FlatList,Text,TouchableOpacity, StyleSheet, ScrollView, View } from 'react-native';
import 'firebase/firestore';
import firestore from '@react-native-firebase/firestore';
import SearchBar from '../components/CustomSearchBar';

var reslistData = [];
const Jobs=()=>{
    const [reslist, setReslist] = useState([]);
    useEffect(() => {
        getdata();
        console.log('reslist in useEffect', reslist.length);
      }, []);
      const getdata = async () => {
        firestore()
          .collection('jobs')
          .get()
          .then(querySnapshot => {
            console.log('Total users: ', querySnapshot.size);
            const buddies = querySnapshot.docs.map(doc => doc.data().des);
            setReslist(buddies);
          });
        console.log('reslist', reslist.length);
      };
    return(
      <View style={styles.maincontainer}>
        <SearchBar
              containerStyle={styles.searchBarContainer}
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.searchInputStyle}
              placeholder={'Search'}
              searchPlaceholderColor={styles.searchPlaceholderColor}
              
            />
        <ScrollView>
          <View style={styles.mainview}>
        {reslist.map((item, index) => {
          console.log('item', item);
          return (
            <View id={index} style={styles.scholarshipView}>
              <Text style={styles.sstext}>{item}</Text>
            </View>
          );
        })}
        </View>
      </ScrollView>
      </View>
    )
}
export default Jobs;
const styles = StyleSheet.create({
  maincontainer:{
    flex:1,
    width: "100%",
    backgroundColor: "#fff",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    },
    scholarshipView: {
     
        padding: 20,
        borderWidth: 1,
        borderColor: 'grey',
        elevation:2,
        backgroundColor:'#F3F1F1',
        margin: 10,
        borderRadius: 10,
      },
      mainview:{
      backgroundColor:"#fff",
      marginTop:50,
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
})
