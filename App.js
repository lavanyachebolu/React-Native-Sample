/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, NativeModules, requireNativeComponent} from 'react-native';
import Ajax from './ios/src/ajax'
import fetchInitialDeals from './ios/src/ajax'
import DealList from './ios/src/components/DealList'
import DealDetail from './ios/src/components/DealDetail'
import { StackNavigator } from 'react-navigation'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

var progressView = NativeModules.progressView;
var calendarView = NativeModules.calendarView;
const data = Ajax;
// const App = StackNavigator ({MainView : {screen: DealList}});
export default class App extends Component {
  state = {
    details: [],
    currentDealsId: null,
  }
  setCurrentDeal = (DealId) => {
    this.setState({
      currentDealsId: DealId
    });
  }
 async componentDidMount(){
   const deals = await data.fetchInitialDeals();
   console.log(deals);
   this.setState({
       details : deals,
   })
   alert(progressView);
  }
  currentDeal(){
    return this.state.details.find(
       (deals) => deals.key === this.state.currentDealsId
    )
  }
  render() {
    if(this.state.currentDealsId)
    {
        return <DealDetail imagedata={this.currentDeal()}/>
    }
    if(this.state.details.length > 0)
    {
        return <DealList deals={this.state.details} onItemPress={this.setCurrentDeal}/>
    }
    return (
      <View style={styles.container}>
      {
        // this.state.details.length > 0 ? <DealList deals={this.state.details} onItemPress={this.setCurrentDeal}/> :
       <Text style={styles.welcome}>BakeSale</Text>
       
         
      }
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
});
