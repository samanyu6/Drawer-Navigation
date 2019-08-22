import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator, createAppContainer} from 'react-navigation'
import Home from './screens/Home';
import {DrawerActions } from 'react-navigation'
import Manager from './screens/Manager'
import Notifications from './screens/Notifications'
import Search from './screens/Search'
import DrawerScreen from './screens/Drawer'
import { black } from 'ansi-colors';

const Tabs = createBottomTabNavigator({
  First: {
    screen: Home
  },
  Manager: {
    screen: Manager
  },
  Notif: {
    screen: Notifications
  },
  Search: {
    screen: Search
  }
}, {
    initialRouteName: 'First',
    tabBarOptions: {
      activeTintColor: '#000',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: '#fff',
      },
      indicatorStyle: {
        backgroundColor: '#000',
      },
    }
  });

const Drawer = createDrawerNavigator({
  Home:{
    screen: Tabs
}
}, {
  // hideStatusBar: true,
  initialRouteName: 'Home',
  contentComponent: DrawerScreen,
  drawerWidth: 300
  });

  const MenuImage = ({navigation}) => {
    if(!navigation.state.isDrawerOpen){
        return <Image source={require('./Styles/back.png')}/>
    }else{
        return <Image source={require('./Styles/menu.png')}/>
    }
}


const navigation = createStackNavigator({
  nav: {
    screen: Drawer
  }
}, {
    initialRouteName:'nav',
    navigationOptions: ({ navigation }) => ({
      headerLeft: 
      <TouchableOpacity  onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())} }>
          <MenuImage style="styles.bar" navigation={navigation}/>
      </TouchableOpacity>,
      headerStyle: {
        backgroundColor: '#333',
        height: '70%'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'black'
      }
    })
  });

class App extends Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    )
  }
}

export default createAppContainer(navigation)