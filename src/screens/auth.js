import { View, Text } from 'react-native'
import React from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function auth() {
    function logout(){
        firebase.auth().signOut()
        const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user)
  } else {
    console.log("sgnout")
  }
});
    }
  


  return (
    <View>
      <Text>auth</Text>
    </View>
  )
}