import React from 'react'
import { Text, View } from 'react-native'
import { useTheme } from './ThemeManager'

export const ThemeSettings = (props) => {
  const { mode, theme, toggle } = useTheme();
  
   return(
      <View>
        <Text style={{ color: theme.primaryText }}>
           Current Theme: {mode}
        </Text>
        <Text style={{ color: theme.primaryText }} onPress={() => toggle()}>
           Toggle Theme
         </Text>
      </View>
   );
}
          
export default ThemeSettings;