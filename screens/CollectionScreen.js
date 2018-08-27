import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';

export default class CollectionScreen extends React.Component {
  static navigationOptions = {
    title: 'Memories',
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content" hidden={false}
        />
        <View>
          <Text>YO</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
