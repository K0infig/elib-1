import React, {Component} from "react";
import { StyleSheet, Text, View } from 'react-native';

export default class Transaction extends Component{
  render(){
    return (
      <View style={styles.container}>
        <Text>This is Transaction Screen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4287f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
