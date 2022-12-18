import { View, Text , Button, Alert} from 'react-native'
import React, {useState, useEffect} from 'react'

import {db } from './config';
import { firebase } from '@react-native-firebase/firestore';
import { getDatabase, ref, child, get } from "firebase/database";


export default function test() {
   
    const getmethod = async() =>{
        const dbRef = ref(getDatabase());
get(child(dbRef, `Womenera/`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
    }
  return (
    <View>
        <Text>
            <Button onPress={getmethod()} title="click"></Button>
        </Text>
    </View>
  )
}
