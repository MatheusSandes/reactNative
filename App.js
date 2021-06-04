import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import SearchScreen from './src/SearchScreen';
import ResultsScreen from './src/ResultsScreen';
import TracksScreen from './src/TracksScreen'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <AppContainer />;
  };
}

const AppNavigator = createStackNavigator({
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      headerShown: false,
    }
  },
  Results: {
    screen: ResultsScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'black'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  },
  Tracks: {
    screen: TracksScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'black'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
},
  {
    initialRouteName: "Search"
  }
);

const AppContainer = createAppContainer(AppNavigator);
