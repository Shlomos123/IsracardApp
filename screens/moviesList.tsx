import React, { Component} from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, FooterTab, Footer, Content, Card, Row } from 'native-base';
import { inject, observer,Observer  } from 'mobx-react';
import { action, observable } from 'mobx';
import { appStore } from '../stores';
import * as Facebook from 'expo-facebook';
import firebase from 'firebase/app';
import firestore from '@react-native-firebase/firestore';
import { AntDesign } from "@expo/vector-icons";
import { FloatingAction } from "react-native-floating-action";
import {Alert, Modal, Pressable,StyleSheet, Image, Text, View, Dimensions, TouchableOpacity, ScrollView, FlatList,Switch, TextInput } from 'react-native';
import { useState } from "react";
import { BackgroundColors, General, LoginStyles } from '../styles/styles';





var { height, width } = Dimensions.get("window");


export class Task {
  public title: string;
  
  constructor(t: string) {
      this.title = t;
  }
}

@inject("stores")
@observer
export class TodoTasks extends Component {


  
  

  

  constructor(props) {
    super(props);
  }

  

  async componentDidMount() {
   
  }



  

  // updateTasks = () =>{

  //   let tasksToAdd: string[]=[];
  //   this.state.tasksTodo.forEach(function (value) {
  //     tasksToAdd.push(value.title);
  // });
    
  
  //   firebase.firestore()
  //   .collection('Users')
  //   .doc(appStore.userId)
  //   .update({
  //     tasksTodo: tasksToAdd,
  //   })
  //   .then(() => {
  //     console.log('User added!');
  //   });

  // }
  @observable
  reviews: any[] = [
    // { title: 'Zelda, Breath of Fresh Air',},
    // { title: 'Gotta Catch Them All (again)' },
    // { title: 'Not So "Final" Fantasy' },
    // { title: 'Zelda, Breath of Fresh Air'},
    // { title: 'Gotta Catch Them All (again)' },
    // { title: 'Not So "Final" Fantasy' },
  ];


  getMoviesFromApiAsync = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/popular?api_key=3e3e11d1451454d18c967605c6bb052a&language=en-US&page=1'
      );
      const json = await response.json();
      this.reviews = json.results;
    } catch (error) {
      console.error(error);
    }
  };
  


    static navigationOptions =
  {
    header: null,
    drawerIcon: (
      <Image source={require('../assets/movie.png')}
        style={{ height: 24, width: 24 }} />
    )
  };

  

 

 

    render() {

      const { appStore } = this.props.stores;
     
        return (
          <Observer>{() =><Container>
          <Header>
            <Left>
              <Button transparent>
                <Icon name='arrow-back' onPress={() => this.props.navigation.goBack()}/>
              </Button>
            </Left>
            <Body>
              <Title style={{alignSelf: "center", fontWeight: "bold"}}>Movies List</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon name='menu' onPress={() => this.props.navigation.openDrawer()}/>
              </Button>
            </Right>
          </Header>
          <Content
            contentContainerStyle={{
              flex: 1,
              backgroundColor: "#ecffff",
              //alignItems: "center",
              justifyContent: "center",
              flexDirection: "column"
            }}
          >
             
            <ScrollView>
            <Text style={{fontSize: 20, fontWeight: "bold",alignSelf: 'center'}}>Welcome {appStore.name}!</Text>
            <Image
             style={styles.logo}
        source={{
          uri: appStore.pictureUrl, //"https://wallpaperaccess.com/full/317501.jpg",
        }}
      />
      <Text style={{fontSize: 20, fontWeight: "bold",alignSelf: 'center'}}>Number Of Favorite Movies: {appStore.favorites.length}</Text>
            <Button full iconLeft style={[General.margin10,{width: width*0.5, alignSelf: 'center'}]}
                onPress={() => this.getMoviesFromApiAsync()}
                >
                <Text style={[General.text, { fontSize: 16, fontWeight: 'bold', color: "white", }]}>{' Get Movies'}</Text>
            </Button>
               
            <Observer>{() =><FlatList data={this.reviews} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => this.props.navigation.navigate('MovieDetails', {
          title: item.title,
          poster_path: item.poster_path,
          overview: item.overview,
          vote_average: item.vote_average,
        })}>
          <Card>
            <Text style={styles.titleText}>{ item.title }</Text>
          </Card>
        </TouchableOpacity>
      )} />}</Observer>
  
              
             
            </ScrollView>
           
          </Content>
  
          <Footer>
            <FooterTab>
            <Button vertical active>
                <Icon name="list" />
                <Text>Movies List</Text>
              </Button>
              <Button vertical onPress={() => this.props.navigation.navigate('MovieDetails')}>
                <Icon name="list" />
                <Text>Movie Details</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>}</Observer>
        )
    }
}

export default TodoTasks


const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    alignSelf: "center",
    width: 136,
    height: 128,
  },
  centeredView: {
    flex: 1,
    
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    width: width*0.8,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 15,
    textAlign: "center"
  },
  input: {
    padding: 3,
    fontSize: 16,
    height: 40,
    width: width*0.7,
    margin: 12,
    borderWidth: 1,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  errorText: {
    color: 'crimson',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 6,
    textAlign: 'center',
  },
});