import React, { useEffect } from 'react';
import IndexLayout from './app/index';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Font from 'expo-font';
import fonts from './app/assets/fonts';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync(fonts);
      } catch (error) {
        console.warn(error);
      } finally {
        await SplashScreen.hideAsync();
      }
    }

    loadFonts();
  }, []);

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <IndexLayout />
    </SafeAreaProvider>
  )
}
