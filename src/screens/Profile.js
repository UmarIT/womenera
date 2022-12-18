import React,{useState,useEffect, Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  SafeAreaView,
  ScrollView,

} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageInput from '../components/ImageInput';


  function  Profile ({navigation})  {
//   const [name,setName]=useState("")
//   const [email,setemail]=useState("")
//   const [mobile,setmobile]=useState("")
//   const [age,setage]=useState("")
//   const [classname,setclassname]=useState("")
//   const [loading,setloading]=useState(false)
//   const [selectedImage, setSelectedImage] = React.useState(null);
// const [image,setImage] = useState(null);
// useEffect(() => {
//   (async () => {
//     if (Platform.OS !== 'web') {
//       const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//       if (status !== 'granted') {
//         alert('Sorry, we need camera roll permissions to make this work!');
//       }
//     }
//   })();
// }, []);
// const pickImage = async () => {
//   let result = await ImagePicker.launchImageLibraryAsync({
//     mediaTypes: ImagePicker.MediaTypeOptions.All,
//     allowsEditing: true,
//     aspect: [4, 3],
//     quality: 1,
//   });

//   console.log(result);

//   if (!result.cancelled) {
//     setImage(result.uri);
//   }
// };
//   const db = firebase.firestore().collection('users');

//   const storeUser=()=> {
//     if(name === ''){
//      alert('Fill at least your name!')
//     } else {
//       setloading(true);      
//       db.add({
//         name ,
//         email,
//         mobile,
//         age,
//         classname
//       }).then((res) => {
//   console.log('Data enter Successfully..!!')
//         // this.props.navigation.navigate('')
//       })
//       .catch((err) => {
//         console.error("Error found: ", err);
//        setloading(false)
//       });
//     }
//   }
  return (
    <View style={styles.container}>
    <View style={styles.bigCircle}></View>
    <View style={styles.smallCircle}></View>
    <View style={styles.centerizedView}>
      <View style={styles.authBox}>
      
        <Text style={styles.loginTitleText}>Edit Profile</Text>
        <View style={styles.hr}></View>
       <View style={styles.logoBox1}>
      

       <Image source={require('../assets/splashicon.png')} 
resizeMode='center' 
style={{ width: 90, height: 90, borderRadius:45,paddingBottom:60}}/> 
    
       
       </View>

       <View style={{width:90,height:100,}}>
         <TouchableOpacity>
       <MaterialCommunityIcons
        name="camera"
         color='#be7df0'
          size={56} 
          />
          <View >
     <Text style={{fontSize:14,fontWeight:'bold',color:'#be7df0'}}>Image Pick</Text>
     <ImageInput/>
     </View>
     </TouchableOpacity>
          </View>

        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            keyboardType='email-address'
            textContentType='emailAddress'
            placeholder='Username'
            onChangeText={name=> setName(name)}
             />
             <FontAwesome
             style={styles.icon}
            color='#be7df0'
            name='edit'
            type='font-awesome'
            size={20}
          />
             <TextInput
            style={styles.input}
            keyboardType='email-address'
            textContentType='emailAddress'
            placeholder='Email'
            onChangeText={email=> setemail(email)}
             />
             <FontAwesome
             style={styles.icon}
            color='#be7df0'
            name='edit'
            size={20}
          />
        </View>
       
        <View style={styles.inputBox}>
          
          <TextInput
            style={styles.input}
            keyboardType='email-address'
            textContentType='emailAddress'
            placeholder='Qualification'
            onChangeText={mobile=> setmobile(mobile)}
             />
             <FontAwesome
             style={styles.icon}
            color='#be7df0'
            name='edit'
            size={20}
          />
             
          <TextInput
            style={styles.input}
            keyboardType='email-address'
            textContentType='emailAddress'
            placeholder='Skills'
            onChangeText={classname=> setclassname(classname)}
             />
             <FontAwesome
             style={styles.icon}
            color='#be7df0'
            name='edit'
            size={20}
          />
        </View>
        <View style={styles.BtnSetting}>
        <TouchableOpacity style={styles.button}>
        <LinearGradient
          colors={['#be7df0','#6a1ca6']}
          style={styles.gradient}>
        <Text style={[styles.savechangesText,{color:'#fff'}]}>
         Save changes
        </Text>
        </LinearGradient>
        </TouchableOpacity>
        </View>
       </View>
       </View>
  </View>



  );
};

 

  

export default Profile;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height:"100%",
    flexGrow:1,
  },
  bigCircle: {
    width: Dimensions.get('window').height * 0.7,
    height: Dimensions.get('window').height * 0.7,
    backgroundColor: '#be7df0',
    borderRadius: 1000,
    position: 'absolute',
    right: Dimensions.get('window').width * 0.25,
    top: -50,
  },
  smallCircle: {
    width: Dimensions.get('window').height * 0.4,
    height: Dimensions.get('window').height * 0.4,
    backgroundColor: '#be7df0',
    borderRadius: 1000,
    position: 'absolute',
    bottom: Dimensions.get('window').width * -0.2,
    right: Dimensions.get('window').width * -0.3,
  },
  centerizedView: {
    width: '100%',
    top: '10%',
  },
  authBox: {
    
    width: '85%',
    backgroundColor: '#fafafa',
    borderRadius: 20,
    alignSelf: 'center',
    paddingHorizontal: 14,
    paddingBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logoBox: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
    borderRadius: 1000,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: -50,
    marginBottom: -50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  logoBox1: {
      backgroundColor:'#be7df0',
    width: 90,
    height: 90,
    borderRadius: 45,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
   paddingBottom:23,
   paddingTop:22,
   marginTop:15
  },
  loginTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign:'center'
  },
  hr: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#444',
    marginTop: 6,
  },
  imageupload:{
  paddingTop:15,
  borderRadius:34,

  },
  inputBox: {
    marginTop: 40,
    flexDirection:'row'
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 6,
  },
  input: {
    
    width: '45%',
    height: 45,
    borderRadius: 14,
    fontSize: 13,
    fontWeight: '500',
    borderBottomWidth: 1,
    
  },
  inputAge:{
    width: '20%',
    height: 45,
    borderRadius: 14,
    fontSize: 13,
    fontWeight: '500',
    borderBottomWidth: 1,
  },
  button:{
    width: 290,
    marginTop: 50
    
  },
  icon:{
   paddingTop:30,
  },
  BtnSetting:{
    paddingTop:20,
    flexDirection:'row',
    justifyContent:'space-around',
  },
  loginButton: {
    backgroundColor: '#be7df0',
    marginTop: 15,
    paddingVertical: 10,
    borderRadius: 14,
  },
  gradient:{
    width:'100%',
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
},
savechangesText:{
  fontSize:18,
  fontWeight:'bold'
},
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  registerText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    
  },
  registerText1: {
    marginTop: 20,
    fontSize: 16,
    color:'#ee82ee',

  },
  forgotPasswordText: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 20,
    color:'#ee82ee',
  },
});