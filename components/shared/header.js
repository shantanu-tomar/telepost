import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons/';
import { useTheme } from '../../themes/ThemeManager';


const ICON_SIZE = 28;

export default function Header(props) {
  const { mode, theme, toggle } = useTheme();

  const styles = StyleSheet.create({
    header: {
      width: '100%',
      height: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
      backgroundColor: theme.header, 
      borderBottomColor: theme.border,
      borderBottomWidth: 2,
    },
    headerText: {
      fontWeight: 'bold',
      fontSize: 20,
      letterSpacing: 1,
      color: theme.primaryText,
    },
    headerIconsRight: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingRight: 5,
    },
    icon: {
      marginLeft: 15,
    }
  });


  const setIcons = (routeName) => {
    if (routeName == 'Home') {
      return (
        <View style={styles.headerIconsRight}>
          <MaterialIcons name='search' size={ICON_SIZE} 
            color={theme.icons} style={styles.icon} />

          <MaterialCommunityIcons name='dots-vertical' size={ICON_SIZE} 
            color={theme.icons} style={styles.icon} />
        </View>
      );
    }
    else if (routeName == 'Messages') {
      return (
        <View style={styles.headerIconsRight}>
          <MaterialIcons name='videocam' size={ICON_SIZE} 
            color={theme.icons} style={styles.icon} />
          
          <MaterialIcons name='phone' size={ICON_SIZE} 
            color={theme.icons} style={styles.icon} />

          <MaterialCommunityIcons name='dots-vertical' size={ICON_SIZE} 
            color={theme.icons} style={styles.icon} />
        </View>
      );
    }
  };
  

  return (
    <View style={styles.header}>
      
      <View>
        <Text style={styles.headerText}>
          {props.title}
        </Text>
      </View>
      
      {setIcons(props.routeName)}
    </View>
  );
}
