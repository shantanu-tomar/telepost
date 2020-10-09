import React from 'react';
import { StyleSheet } from 'react-native';
import Navigator from './routes/homeStack';
import { AppearanceProvider } from 'react-native-appearance';
import { ThemeManager } from './themes/ThemeManager';


export default function App() {
  return (
    <AppearanceProvider>
      <ThemeManager>
        <Navigator />
      </ThemeManager>
    </AppearanceProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },

});
