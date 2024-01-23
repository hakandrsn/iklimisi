import React from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';

import {store} from './redux/store';
import {Router} from './routes';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={styles.flex}>
      <Provider store={store}>
        <Router />
      </Provider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default App;
