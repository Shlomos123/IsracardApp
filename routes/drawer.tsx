import React from "react";
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import MoviesList from '../screens/moviesList';
import MovieDetails from '../screens/movieDetails';
import SignIn from '../screens/signin';
import { Container, Content, Header, Body, Icon } from "native-base";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView
} from "react-native";


// drawer navigation options


const CustomDrawerContentComponent = props => (
  <Container>
    <Header style={{ height: 200, alignItems: "center" }}>
      <Body>
        <Image
          style={styles.drawerImage}
          source={require("../assets/Isracard.png")}
        />
        <Text style={{alignSelf:"center", fontWeight: "bold", fontSize: 18}}>IsracardApp</Text>
      </Body>
    </Header>
    <Content>
      <ScrollView>
        <DrawerItems {...props} />
      </ScrollView>
    </Content>
  </Container>
);

const RootDrawerNavigator = createDrawerNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      drawerLabel: () => null,
      title: null,
      drawerIcon: () => null
    }
  },
  MoviesList: {
    screen: MoviesList,
  },
  MovieDetails: {
    screen: MovieDetails,
    // navigationOptions: {
    //   drawerLabel: () => null
    // }
  },
},
{
  initialRouteName: "SignIn",
  contentComponent: CustomDrawerContentComponent,
  drawerOpenRoute: "DrawerOpen",
  drawerCloseRoute: "DrawerClose",
  drawerPosition: "right",
  DrawerToggleRoute: "DrawerToggle"
});

export default createAppContainer(RootDrawerNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover"
  },
  drawerImage: {
    alignSelf:"center",
    height: 150,
    width: 150,
    borderRadius: 75
  }
});