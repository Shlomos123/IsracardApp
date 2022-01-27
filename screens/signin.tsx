import React, { Component } from 'react';
import {StyleSheet, Image, Text, View, Dimensions, TouchableOpacity, ScrollView, Alert} from 'react-native';
import { inject, observer } from 'mobx-react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, FooterTab, Footer, Content, Item, Input, Label, Form } from 'native-base';
import { BackgroundColors, General, LoginStyles } from '../styles/styles';
import * as Facebook from 'expo-facebook';
import firebase from 'firebase';
import {Restart} from 'fiction-expo-restart';
import {I18nManager} from 'react-native';

var { height, width } = Dimensions.get("window");

@inject("stores")
@observer
export default class SignIn extends Component {

  static navigationOptions =
  {
    header: null,
    drawerLockMode: "locked-closed",
    drawerIcon: (
      <Image source={require('../assets/navpics/login.png')}
        style={{ height: 24, width: 24 }} />
    )
  }

  // userInput: Input;
  // passInput: Input;

    constructor(props: any) {
        super(props);  
        //this.logout.bind(this); 
        //Facebook.logOutAsync();
        //Facebook.initializeAsync("418712232635316","NoteWordy");
    }

componentDidMount()
{
  if(I18nManager.isRTL) 
  {
    I18nManager.allowRTL(false);  
    I18nManager.forceRTL(false); 
    Restart();
  }
}

    // focusNextInput = ({ _root }: any) => {
    //   _root.focus();
  //}

  // async logout() {

  //   try {
  //     await firebase.auth().signOut();
  //     await Facebook.logOutAsync();

  //     this.props.navigation.navigate('SignIn');

  //   } catch (error) {
  //     console.log(error);
  //   }

  // }

  async loginWithFacebook() {

    const { appStore } = this.props.stores;
    try {
      await Facebook.initializeAsync({
        appId: '523400232200923',
        appName: "IsracardApp",
      });
      const {
        type,
        token,
        // expirationDate,
        // permissions,
        // declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile', 'email'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,about,picture`);
        let obj: any = await response.json();
        //Alert.alert('Logged in!', `Hi ${obj.name}!`);
        //console.log(obj.picture.data.url);
        appStore.name = obj.name;
        appStore.pictureUrl = obj.picture.data.url;
        appStore.userId = obj.id;
        //appStore.obj = await response.json();
        //console.log(appStore.obj);
        // await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);  // Set persistent auth state
        // const credential = firebase.auth.FacebookAuthProvider.credential(token);
        // const facebookProfileData = await firebase.auth().signInWithCredential(credential);  // Sign in with Facebook credential
        this.props.navigation.navigate('MoviesList');
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  
  // async  signInWithFacebook() {
  //   const appId = '418712232635316';
  //   const permissions = ['public_profile', 'email'];  // Permissions required, consult Facebook docs
    
    
  //   const {
  //     type,
  //     token,
  //   } = await Facebook.logInWithReadPermissionsAsync({
  //     permissions: ['public_profile', 'email'],
  //   });
  
  //   switch (type) {
  //     case 'success': {
  //       await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);  // Set persistent auth state
  //       const credential = firebase.auth.FacebookAuthProvider.credential(token);
  //       const facebookProfileData = await firebase.auth().signInAndRetrieveDataWithCredential(credential);  // Sign in with Facebook credential
  //       const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
  //       Alert.alert('Logged in!', `Hi ${(await response.json()).picture.url}!`);
  //       appStore.name = (await response.json()).name;
        
  //       this.props.navigation.navigate('TodoTasks');
  //       // Do something with Facebook profile data
  //       // OR you have subscribed to auth state change, authStateChange handler will process the profile data
        
  //       return Promise.resolve({type: 'success'});
  //     }
  //     case 'cancel': {
  //       return Promise.reject({type: 'cancel'});
  //     }
  //   }
  // }

  

  
  

  
    render() {

      const { appStore } = this.props.stores;
      

        return (
          <Container>
        <Header>
          <Left>
            <Button transparent>
            </Button>
          </Left>
          <Body>
            <Title style={{alignSelf: "center", fontWeight: "bold" , fontSize: 15}}>Sign in to IsracardApp</Title>
          </Body>
          <Right>
            {/* <Button transparent>
              <Icon name='settings'/>
            </Button> */}
          </Right>
        </Header>
        <Content
          contentContainerStyle={{
            flex: 1,
            backgroundColor: "#ecffff",
            justifyContent: 'center',
            flexDirection: "column"
          }}
        >
         <ScrollView>
          {/* <TouchableOpacity onPress={() => this.loginWithFacebook.bind(this)}>
      <View
        style={{
          width: '50%',
          alignSelf: 'center',
          borderRadius: 4,
          flexDirection: "row",
          padding: 24,
          backgroundColor: '#3B5998',
        }}>
           <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          Login to Facebook
        </Text>
      </View>
    </TouchableOpacity> */}
    <Text style={{ marginTop: 160, fontSize: 16, fontWeight: 'bold',width: width*0.9, alignSelf: 'center', textAlign: 'center' }}>{' Welcome Stranger!'}</Text>
    <Image
          style={styles.drawerImage}
          source={require("../assets/login.png")}
        /> 
        <Text style={{ marginTop: 10, fontSize: 12, fontWeight: 'bold',width: width*0.9, alignSelf: 'center', textAlign: 'center' }}>{' Please log in to continue'}</Text>
        <Text style={{ fontSize: 12, fontWeight: 'bold',width: width*0.9, alignSelf: 'center', textAlign: 'center' }}>{' to the awesomness'}</Text>
            {/* <Button full iconLeft style={[General.margin10]}
                onPress={this.logout.bind(this)}
                >
                s
                <Text style={[General.text, { fontSize: 18, fontWeight: 'bold', color: "white", }]}>{'Logout'}</Text>
            </Button> */}
         
         <View style={{marginTop: 100, justifyContent: "center", flexDirection:'row' }}>
            <Button full iconLeft style={[General.margin10, {padding: 10}]}
                onPress={this.loginWithFacebook.bind(this)}
                >
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png',
        }}
      />
                <Text style={[General.text, { fontSize: 16, fontWeight: 'bold', color: "white", }]}>{' Login with Facebook'}</Text>
            </Button>

            <Button full iconLeft style={[General.margin10,{padding: 10}]}
                onPress={() => this.props.navigation.navigate('MoviesList')}
                >
                <Text style={[General.text, { fontSize: 16, fontWeight: 'bold', color: "white", }]}>{'Or Login As Guest'}</Text>
            </Button>
            </View>
            
            </ScrollView>
        </Content>
           
        
      </Container>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tinyLogo: {
      width: 30,
      height: 30,
    },
    logo: {
      width: 66,
      height: 58,
    },
    drawerImage: {
      alignSelf:"center",
      height: 150,
      width: 150,
      borderRadius: 75
    }
  });
  
