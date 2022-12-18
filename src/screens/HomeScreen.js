import React, { useEffect, useState, Component } from 'react';
import {View, Text, StyleSheet, Image, ImageBackground, Alert} from 'react-native';
import {
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Pressable,
} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import 'firebase/firestore';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RecommendedExperts from './RecommendedExperts';



var reslistData = [];

const HomeScreen = ({navigation}) => {
  const [skills, setskills] = useState('')
  const [quali, setQuali]= useState('')
  const [name, setname] = useState('');
  const [reslist, setReslist] = useState([]);
  const [arraySkills, setArraySkills] = useState([])
  const [jobtitle, setJobtitle] = useState([])
  const [schtitle, setSchtitle] = useState([])
  const [funds, setFunds] = useState([])
  console.log("companies", arraySkills)
  console.log("Job Titles", jobtitle)
  async function getskills (){
    const userSkills = await AsyncStorage.getItem("skills")
   setskills(userSkills)
   console.log("from homescreen", userSkills)
   // get recommendations:
   //1 split the string to get skills in the array:
   const skillsArray = userSkills.split(",");
    console.log("Skills array:", skillsArray);
   return skillsArray
  }
  
 const getrecommendations=async(skills)=>{
    const response = await fetch("http://10.0.2.2:8000/recommendJobs",{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        skills
      })
    }) .then (async(Response)=>{
      const data= await Response.json()
      console.log("Response from job recommendation server: ",Response);
      console.log("outputs: ", data);
      setArraySkills(data.result.companies)
      setJobtitle(data.result.jobTitles)
    }).catch(error=>{console.log("Error in calling ml api: ",error)});
  }

  async function getqualification (){
    const userQuali = await AsyncStorage.getItem("quali")
   setQuali(userQuali)
   console.log("from homescreen", userQuali)
   // get recommendations:
   //1 split the string to get skills in the array:
   const qualiArray = userQuali.split(",");
    console.log("Skills array:", qualiArray);
   return qualiArray
  }

  const getschrecommendations=async(qualification)=>{
    const response = await fetch("http://10.0.2.2:8001/recommendScholarship",{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        qualification
      })
    }) .then (async(Response)=>{
      const data= await Response.json()
      console.log("Response from scholarship recommendation server: ",Response);
      console.log("outputs: ", data);
      setSchtitle(data.result.ScholarshipTitle)
      setFunds(data.result.Funds)
    }).catch(error=>{console.log("Error in calling ml sch api: ",error)});
  }


  function onAuthStateChanged(user) {
    if (user) {
      console.log(user.uid)  
       console.log(user.email)
      //  console.log(user.qualification)
      // getUserData(user.uid)
    } else {
      console.log("sgnout")
    }
  
  }

  useEffect(async() => {
    const finalskills = await getskills()
    const finalquali = await getqualification()
    getrecommendations(finalskills)
    getschrecommendations(finalquali)
    console.log("finalskills", finalskills)
    console.log("finalquali",finalquali)
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; 
  }, []);

  const getdata = async () => {
    firestore()    
      .collection('scholarships')
      .get()
      .then(querySnapshot => {
        console.log('Total users: ', querySnapshot.size);
        const buddies = querySnapshot.docs.map(doc => doc.data().scholarship);
        setReslist(buddies);
         
      });
    console.log('reslist', reslist.scholarship);
  };

  return (
    
    <View
      style={{
        backgroundColor: '#FFF',
        flex: 1,
      }}>
          <TextInput
             placeholder="Search"
             placeholderTextColor="grey"
             style={{
                fontWeight: 'bold',
                fontSize: 15,
                width: 350,
                borderRadius: 20,
                borderWidth: 1,
                backgroundColor: "#E8E8E8",
                marginTop: 10
              }}
             >
            </TextInput>
      <ScrollView>
      <Text style={styles.experttext}> Recommended Experts</Text> 
      <View style={styles.expertsview}>
       <RecommendedExperts mode={'horizontal'} /> 
       </View>
      <Text style={styles.title}> Recommended jobs </Text>
      <View style={styles.card}>
      <View>
                    <View style={styles.biodatacontainer}>
                      <Text style={styles.biodata}>Companies</Text>
                    </View>
                    <View style={styles.maindatacontainer}>
                    {arraySkills.map((item, index) => {
          console.log('item', item);
            return (
              <View id={index}>
                <Text  style={styles.jobsview}>{item}</Text>
              </View>
            );
          
        })}
                    </View>
                    </View>
                   <View>
                    <View style={styles.biodatacontainer}>
                    <Text style={styles.biodata}>Job Titles</Text>
                       </View>
                    <View style={styles.maindatacontainer}>
                    {jobtitle.map((item, index) => {
          console.log('item', item);
            return (
              <View id={index} >
                <Text style={styles.jobsview}>{item}</Text>
              </View>
            );
          
        })}
             
                    </View>
                    </View>
        </View>
       
        <Text style={styles.title}> Recommended scholarships</Text>
        <View style={styles.card}>
      <View>
                    <View style={styles.biodatacontainer}>
                      <Text style={styles.biodata}>Scholarships Title</Text>
                    </View>
                    <View style={styles.maindatacontainer}>
                    {schtitle.map((item, index) => {
          console.log('item', item);
            return (
              <View id={index}>
                <Text  style={styles.jobsview}>{item}</Text>
              </View>
            );
          
        })}
                    </View>
                    </View>
                   <View>
                    <View style={styles.biodatacontainer}>
                    <Text style={styles.biodata}>Funds</Text>
                       </View>
                    <View style={styles.maindatacontainer}>
                    {funds.map((item, index) => {
          console.log('item', item);
            return (
              <View id={index} >
                <Text style={styles.jobsview}>{item}</Text>
              </View>
            );
          
        })}
             
                    </View>
                    </View>
        </View>
        </ScrollView>
    </View>
    
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
    margin: 5,
    marginHorizontal: 10,
  },
  innercontainer: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  experttext:{
    marginVertical: 0,
    fontSize: 20,
    marginTop:20,
  },
  itemtext: {
    fontWeight: 300,
  },
  scholarshipView: {
    padding: 20,
    borderWidth: 1,
    borderColor: 'grey',
    margin: 10,
    borderRadius: 10,
  },
  title: {
    // alignSelf: 'center',
    marginVertical: 0,
    marginTop: 20,
    fontSize: 20,
  },
  card:{
    width: 250,
    backgroundColor: '#fff',
    borderRadius:5,
    marginVertical: 50,
    flex:1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
   },
   biodatacontainer:{
    width: "100%",
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    backgroundColor:"#353535",
    paddingVertical:10,
    fontFamily: "JosefinSans_400Regular",
    marginTop:-40,
    borderWidth:2,
    borderColor:'#DEDDDB',
    
   },
   biodata:{
    fontSize: 20,
    color: "#fff",
    fontFamily: "JosefinSans_400Regular",
   },
   maindatacontainer:{
    padding: 10,
    backgroundColor: "#353535",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderWidth:2,
    borderColor:'#DEDDDB',
   },
   jobsview:{
    fontSize: 15,
    color: "#fff",
    marginBottom: 10,
    alignSelf: "flex-start",
    textTransform: "capitalize",
    fontFamily: "JosefinSans_400Regular",
   }
});
