import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons/';
import { useTheme } from '../../themes/ThemeManager';


const ICONS_SIZE = 28;

const Footer = (props) => {
  const { mode, theme, toggle } = useTheme();

  const styles = StyleSheet.create({
    footer: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 60,
      paddingHorizontal: 15,
      backgroundColor: theme.header,
    },
    labelledIcon: {
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    iconsLabel: {
      fontSize: 12,
      color: theme.primaryText,
    }
  });

  return (
    <View style={styles.footer}>
      <MaterialIcons name='menu' size={ICONS_SIZE} color={theme.icons}/>

      <View style={styles.labelledIcon}>
        <MaterialIcons name='chat-bubble' 
          size={ICONS_SIZE} color={theme.icons} onPress={() => toggle() }/>
        <Text style={styles.iconsLabel}>Chats</Text>
      </View>
      <View style={styles.labelledIcon}>
        <MaterialIcons name='star' size={ICONS_SIZE} color={theme.icons}/>
        <Text style={styles.iconsLabel}>Status</Text>
      </View>
      <View style={styles.labelledIcon}>
        <Entypo name='users' size={ICONS_SIZE} color={theme.icons}/>
        <Text style={styles.iconsLabel}>Contacts</Text>
      </View>

      <MaterialCommunityIcons name='dots-vertical' size={ICONS_SIZE} color={theme.icons} />
    </View>
  );
}





export default Footer;