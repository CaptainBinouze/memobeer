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
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content" hidden={false}
        />
          <View style={styles.welcomeContainer}>
            <Image
              source={require('../assets/images/bottles.png')}
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.helpContainer}>
            <Text style={styles.helpLinkText}>WELCOME TO YOUR</Text>
            <TouchableOpacity style={styles.helpLink}>
              <Text style={styles.titleBeer}>BEER MEMORY</Text>
            </TouchableOpacity>

            <View style={styles.hrUnder}>
              <Text></Text>
            </View>
          </View>

          <View style={styles.designed}>
            <Text style={styles.textDesigned}>Designed by <Text style={styles.bold}>Tarplu Inc.</Text></Text>
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
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 0.5,
  },
  welcomeImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 30,
    alignItems: 'center',
    flex: 0.4,
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 16,
    color: '#202020',
  },
  titleBeer: {
    fontSize: 28,
    color: '#202020',
  },
  hrUnder: {
    backgroundColor: '#e6ac00',
    height: 2,
    width: 120,
  },
  designed: {
    bottom: 0,
    flex: 0.05,
  },
  textDesigned: {
    textAlign: 'center',
    fontSize: 14,
  },
  bold: {
    fontWeight: 'bold',
  }
});
