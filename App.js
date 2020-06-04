import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/searchScreen';
import ShowScreen from './src/screens/resultShowScreen';
import InfoScreen from './src/screens/infoScreen';

const navigator = createStackNavigator({
  Search:SearchScreen,
  Show:ShowScreen,
  Info:InfoScreen
},{
  intitialRouteName:'Search',
  defaultNavigationOptions:{
    title:'Restaurant Finder' 
  }
});

export default createAppContainer(navigator);
