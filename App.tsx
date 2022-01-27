import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigator from './routes/drawer';
import * as stores from './stores';
import { observer, Provider } from 'mobx-react';
import firebase from 'firebase/app';


// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDApN_FG3F5tL7DcGsCcxy7dxJo1DMbg0A',
  authDomain: 'notewordy-b8bbc.firebaseapp.com',
  databaseURL: 'https://notewordy-b8bbc.firebaseio.com',
  projectId: 'notewordy-b8bbc',
  storageBucket: 'notewordy-b8bbc.appspot.com',
  messagingSenderId: '98773220711',
  appId: '524522542196176',
  //measurementId: 'G-measurement-id',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}


const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  'Roboto_medium': require('./assets/fonts/Roboto-Medium.ttf'),
});


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);


  if (fontsLoaded) {
    return (
      
       <Provider stores={stores} >
       <Navigator />    
       </Provider>

    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts} 
        onFinish={() => setFontsLoaded(true)} 
        onError={console.warn}
      />
    )
  }

}