import React, { Component } from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity, ScrollView, FlatList,Switch, Dimensions} from 'react-native';
import { inject, observer,Observer  } from 'mobx-react';
import { action, observable } from 'mobx';
import { appStore } from '../stores';
import { Container, Header, Left, Body, Right, Button, Icon, Title, FooterTab, Footer, Content, Card } from 'native-base';
import * as Facebook from 'expo-facebook';
import firebase from 'firebase/app';
import firestore from '@react-native-firebase/firestore';
import { BackgroundColors, General, LoginStyles } from '../styles/styles';
var { height, width } = Dimensions.get("window");


@inject("stores")
@observer
export class CompletedTasks extends Component {


  constructor(props) {
    super(props);
    
  }

  async componentDidMount() {

   
  }

  
  addToFavorites = (title: string) => {
    appStore.addToFavorites(title);
    this.props.navigation.navigate('MoviesList')
  };

  
  removeFromFavorites = (title: string) => {
    appStore.removeFromFavorites(title);
    this.props.navigation.navigate('MoviesList')
  };



  // completedTasks: any[] = [
  //   { title: 'Zelda, Breath of Fresh Air'},
  //   { title: 'Gotta Catch Them All (again)' },
  //   { title: 'Not So "Final" Fantasy' },
  //   { title: 'Zelda, Breath of Fresh Air'},
  //   { title: 'Gotta Catch Them All (again)' },
  //   { title: 'Not So "Final" Fantasy' },
  //   { title: 'Zelda, Breath of Fresh Air'},
  //   { title: 'Gotta Catch Them All (again)' },
  //   { title: 'Not So "Final" Fantasy' },
  //   { title: 'Zelda, Breath of Fresh Air'},
  //   { title: 'Gotta Catch Them All (again)' },
  //   { title: 'Not So "Final" Fantasy' },
  // ];

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
          <Container>
          <Header>
            <Left>
              <Button transparent>
                <Icon name='arrow-back' onPress={() => this.props.navigation.goBack()}/>
              </Button>
            </Left>
            <Body>
              <Title style={{alignSelf: "center", fontWeight: "bold", fontSize: 17}}>Movie Details</Title>
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
              justifyContent: "center",
              flexDirection: "column"
            }}
          >
            <ScrollView>
           
            <Text style={{marginTop: 10,alignSelf: 'center',fontSize: 18, fontWeight: "bold",textDecorationLine: 'underline',}}>Movie Details</Text>
            <Text style={{marginTop: 10,marginBottom: 10,alignSelf: 'center',fontSize: 18, fontWeight: "bold"}}>Name:  {this.props.navigation.getParam('title')}</Text>
            <Image
             style={styles.logo}
        source={{
          uri: "https://image.tmdb.org/t/p/original/"+this.props.navigation.getParam('poster_path'),
        }}
      />
            <Text style={{marginTop: 10,alignSelf: 'center',fontSize: 18, fontWeight: "bold"}}>Overview: {this.props.navigation.getParam('overview')}</Text>
            <Text style={{marginTop: 10,alignSelf: 'center',fontSize: 18, fontWeight: "bold"}}>Vote_avg: {this.props.navigation.getParam('vote_average')}</Text>

            <Button full iconLeft style={[General.margin10,{width: width*0.5, alignSelf: 'center'}]}
                onPress={() => this.addToFavorites(this.props.navigation.getParam('title'))}
                >
                <Text style={[General.text, { fontSize: 16, fontWeight: 'bold', color: "white", }]}>{' Add To Favorites'}</Text>
            </Button>
            <Button full iconLeft style={[General.margin10,{width: width*0.5, alignSelf: 'center'}]}
                onPress={() => this.removeFromFavorites(this.props.navigation.getParam('title'))}
                >
                <Text style={[General.text, { fontSize: 16, fontWeight: 'bold', color: "white", }]}>{' Remove From Favorites'}</Text>
            </Button>
            </ScrollView>
          </Content>
  
          <Footer>
            <FooterTab>
            <Button vertical onPress={() => this.props.navigation.navigate('MoviesList')}>
                <Icon name="list" />
                <Text>Movies List</Text>
              </Button>
              <Button vertical active>
                <Icon name="list" />
                <Text>Movie Details</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
        )
    }
}

export default CompletedTasks

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