/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  Dimensions,
} from 'react-native';
import {WebView} from 'react-native-webview';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const {height} = Dimensions.get('window');

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <WebView
            source={{uri: 'https://manashreeadvisoryservice.com/'}}
            startInLoadingState={true}
            originWhitelist={['*']}
            style={{height: height}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
