import { View, Text , StyleSheet, TextInput, FlatList, Image} from 'react-native'
import React, {useEffect,useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const RecommendedExperts = (props)=> {
const [qualification, setQualification] = useState();
const[isLoading, setisLoading] = useState(true);
const[myUserData, setMyUserData] = useState()

const suppose='Software Engineering'
async function getquali (){
    const qua = await AsyncStorage.getItem("quali")
   setQualification(qua)
   console.log("from homescreen quali", qua)
  }

  const getUserData = async () =>{
    try {
        const response = await fetch( "https://nimerta123.github.io/Newexpertsapi/expertsapi.json");
        const myData = await response.json();
        setMyUserData(myData.Expert);
        setisLoading(false);
        console.log("hook", myData.Expert )
      
    } catch (error) {
        console.log(error);
    }
    
}
useEffect(()=>{
    getquali();
   getUserData();
},[])

return(
    <View style={styles.maincontainer}>
        <FlatList
            data={myUserData}
            horizontal = {props.mode == 'horizontal' ? true : false}
            renderItem={({ item })=>{
               if(item.Qualification== suppose){
                return(
                    <View style={styles.card}>
            <View style={styles.imagecontainer}>
              <Image
              style={styles.imagestyle}
              resizeMode = "cover"
              source={require('../assets/avatarfemale.png')}
              />
              </View>
              <View>
                <View style={styles.biodatacontainer}>
                  <Text style={styles.biodata}>Bio-Data</Text>
                  <Text style={styles.idnumber}> {item.id < 10 ? `#0${item.id}` : `#${item.id}`}</Text>
                </View>
                <View>
                <View style={styles.maindatacontainer}>
                  <Text style={styles.mynamee}>Name: {item.Name}</Text>
                  <Text style={styles.myname}>Qualification: {item.Qualification}</Text>
                </View>
                </View>
          </View>
          </View>
                )
               }
            }}
        />
    </View>
);
};
export default RecommendedExperts
const styles = StyleSheet.create({
    loader:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    minHeight:"100%",
    
    },
    mynamee:{
    fontSize: 15,
    color: "#fff",
    marginBottom: 10,
    alignSelf: "flex-start",
    textTransform: "capitalize",
    fontFamily: "JosefinSans_400Regular",
    fontWeight:"bold"
    },
    maincontainer:{
    // width: "100%",
    // paddingTop: 0,
    // display:"flex",
    // justifyContent:"center",
    // alignItems:"center", 
    },
     card:{
      width: 200,
      backgroundColor: '#fff',
      borderRadius:5,
      borderWidth: 5,
      borderColor:'#DEDDDB',
      display: "flex",
      flexDirection: "column",
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
     },
     idnumber:{
      fontSize:20,
      color: "rgba(255, 255, 255, 0.5)",
      fontFamily: "JosefinSans_400Regular",
      paddingRight: 10,
     },
     biodata:{
      fontSize: 20,
      color: "#fff",
      fontFamily: "JosefinSans_400Regular",
     },
     imagecontainer:{
      padding: 10,
     },
     imagestyle:{
      width: "100%",
      height: 140,
     },
     maindatacontainer:{
      padding: 10,
      backgroundColor: "#353535",
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
     },
     myname:{
      fontSize: 13,
      color: "#fff",
      marginBottom: 10,
      alignSelf: "flex-start",
      textTransform: "capitalize",
      fontFamily: "JosefinSans_400Regular",
     }
    })