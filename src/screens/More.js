import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  ScrollView,
  View,
  Text,
  Alert,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import auth, {firebase} from '@react-native-firebase/auth';
import LoginScreen from './LogInScreen';
import CustomAvatar from '../components/CustomAvatar';
import {hp, wp} from '../util';

const Action = ({icon, title, screen}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(screen)}>
      <View style={styles.action}>
        <View style={styles.iconText}>
          <View style={styles.iconContainer}>
            <FontAwesome name={icon} color="#be7df0" size={29} />
          </View>
          <Text style={styles.actionTitle} title1>
            {' '}
            {title}
          </Text>
        </View>
        <FontAwesome name={'chevron-right'} color="black" size={20} />
      </View>
    </TouchableOpacity>
  );
};
const More = () => {
  // componentDidMount=()=>{
  //   this.unsubscribeauth = firebase.auth().onAuthStateChanged(user=>{
  //     if(user){
  //       this.setState({
  //         email: user.email
  //       })
  //     }
  //     else{
  //       this.props.navigation.replace("LogInScreen")
  //     }
  //   })
  // }

  // function logout(){
  //   firebase.auth.signOut()
  //   .catch(error=>{
  //     Alert.alert(error.message)
  //   })
  // }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 29}}>
        <View style={styles.Profileinfo}>
          <CustomAvatar size={wp(25)} />
          {/* <View style={styles.image} /> */}
          <View style={styles.nameSection}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Nimerta</Text>
            <Text body> nimertar@gmail.com</Text>
          </View>
        </View>
        {/* <View style={styles.actiono}> */}
        {/* <TouchableOpacity>
          <FontAwesome
          name='edit'
          color='#05375a'
          size={20}
          />
          <Text> Edit Profile</Text>
          </TouchableOpacity> */}
        <Action title={'Edit profile'} icon={'edit'} screen={'Profile'} />
        <Action
          title={'View Scholarships'}
          icon={'graduation-cap'}
          screen={'Scholarships'}
        />
        <Action title={'View Jobs'} icon={'search'} screen={'Jobs'} />
        <Action title={'View Experts'} icon={'user'} screen={'Myexperts'} />
        <Action title={'Blogs'} icon={'book'} />
        <Action title={'About us'} icon={'info-circle'} screen={'Aboutus'} />
        <Action title={'Logout'} icon={'arrow-circle-o-left'} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default More;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: hp(3.5),
    backgroundColor: 'white',
  },
  Profileinfo: {
    marginTop: 16,
    paddingHorizontal: 29,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#dcdcdc',
    borderWidth: 1,
    borderColor: '#dddddd',
  },
  nameSection: {
    marginLeft: 20,
  },
  action: {
    marginTop: 29,
    paddingHorizontal: 29,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 6,
  },
  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionTitle: {
    marginLeft: 19,
    fontSize: 17,
  },
});
