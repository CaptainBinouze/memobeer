import React from 'react';
import { ScrollView, StyleSheet, StatusBar } from 'react-native';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'New beer',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <StatusBar
          barStyle="dark-content" hidden={false}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#f1f1f1',
  },
});
