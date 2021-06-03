import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import SearchScreen from './src/SearchScreen';
import ResultsScreen from './src/ResultsScreen';

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
    screen: SearchScreen
  },
  Results: {
    screen: ResultsScreen
  }
},
  {
    initialRouteName: "Search"
  }
);

const AppContainer = createAppContainer(AppNavigator);
