import React , {useState, useEffect}from 'react'
import { View, Text, StyleSheet, TextInput,  TouchableOpacity, ScrollView } from 'react-native'
import db  from './config'
import { setDoc , doc, getDoc, addDoc, collection, Firestore} from 'firebase/firestore'
import SearchBar from '../components/CustomSearchBar';
import RecommendedStudents from './RecommendedStudents';
import firestore from '@react-native-firebase/firestore'
const ExpertHomescreen = ({navigation}) => {
    const [scholarship, setscholarship] = useState('')
    const [job, setjob] = useState('')

async function create () {
  
    console.log("scholarshiphere")
    firestore()
    .collection('scholarships')
    .doc('ABC')
    .set({
     scholarship:scholarship
    })
    .then(() => {
      console.log('scholarship added!');
    });
}
function createjob () {
    console.log("jobhere")
    firestore()
  .collection('jobs')
  .doc('02')
  .set({
   job:job
  })
  .then(() => {
    console.log('Job added!');
  });
}
    return(
        <ScrollView>
        <View style={{
            backgroundColor:"#FFF",
            flex:1
        }}>
              <SearchBar
              containerStyle={styles.searchBarContainer}
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.searchInputStyle}
              placeholder={'Search'}
              searchPlaceholderColor={styles.searchPlaceholderColor}
            />
            <Text style={styles.experttext}> Recommended Students</Text> 
      <View style={styles.expertsview}>
       <RecommendedStudents mode={'horizontal'} /> 
       </View>
            <Text style={styles.title}> Upload Scholarship</Text>
            <TextInput placeholder = 'Add Scholarship'
             value={scholarship}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(scholarship)=>setscholarship(scholarship)}
            // onBlur={handleBlur('additionalSkill')}
           
            ></TextInput>
            <TouchableOpacity
               onPress={() => create()}
              style={[styles.submit,{borderColor:'#be7df0',
            borderWidth:1,
            marginTop:15,
            backgroundColor:'#be7df0',
            }]}>
            <Text style={[styles.textSign,{color:'#fff'}]}>
              Submit
            </Text>
            </TouchableOpacity> 
            <Text style={styles.title}> Upload Job</Text>
            <TextInput placeholder = 'Add job'
             value={job}
            style={styles.textInputjob}
            autoCapitalize="none"
            onChangeText={(job)=>setjob(job)}
            // onBlur={handleBlur('additionalSkill')}
           
            ></TextInput>
            <TouchableOpacity
               onPress={() => createjob()}
              style={[styles.submit,{borderColor:'#be7df0',
            borderWidth:1,
            marginTop:15,
            backgroundColor:'#be7df0',
            }]}>
            <Text style={[styles.textSign,{color:'#fff'}]}>
              Submit
            </Text>
            </TouchableOpacity> 
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    textInput:{
        flex:1,
        color:'#05375a',
        borderWidth:0.5,
        borderRadius:4,
        width:350,
        height:100,
        alignSelf:'center',
        marginTop: 20,
        backgroundColor:'#DEDDDB',
    },
    textInputjob:{
      flex:1,
      color:'#05375a',
      borderWidth:0.5,
      borderRadius:4,
      width:350,
      height:100,
      alignSelf:'center',
      marginTop: 20,
      backgroundColor:'#DEDDDB',
    },
    submit:{
        width:100,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        alignSelf:'center'
    },
    textSign:{
        fontSize:18,
        fontWeight:'bold'
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
        width: 340,
        height: 40,
        justifyContent: 'center',
        borderRadius: 8,
      },
      searchInputStyle: {
        color: 'black',
      },
      searchPlaceholderColor: 'grey',
      experttext:{
        marginVertical: 0,
        fontSize: 20,
        marginTop:40,
      },
      title: {
        // alignSelf: 'center',
        marginVertical: 0,
        marginTop: 20,
        fontSize: 20,
      },
    })
export default ExpertHomescreen;