import './global.css';

import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import Navigation from './src/navigators';

import { persistor, store } from '~/store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
