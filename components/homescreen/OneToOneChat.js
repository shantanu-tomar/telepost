import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { useTheme } from '../../themes/ThemeManager';
import { AntDesign } from '@expo/vector-icons';


const OneToOneChat = props => {
  const { mode, theme, toggle } = useTheme();

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 5,
      paddingVertical: 3,
      flexDirection: 'row',
    },
    textContainer: {
      width: '100%',
      marginLeft: 5,
      paddingVertical: 10,
      paddingRight: 10,
      borderBottomColor: theme.divider,
      borderBottomWidth: 1,
      justifyContent: 'center',
      position: 'relative',
    },
    chatName: {
      fontSize: 17,
      color: theme.primaryText,
      fontWeight: 'bold',
    },
    timestamp: {
      position: 'absolute',
      top: 10,
      right: 60,
      color: theme.secondaryText,
      fontSize: 12,
    },
    lastMsg: {
      color: theme.secondaryText,
      // marginTop: 10,
    },
    image: {
      width: 45,
      height: 45,
      marginRight: 5
    }
  });

  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center'}}>
        <Image source={require('../../assets/images/me.jpg')} style={styles.image}/>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.chatName}>{props.user}</Text>
        <Text style={styles.timestamp}>4:30 PM</Text>
        <Text style={styles.lastMsg}>
          <AntDesign name="caretright" color={theme.secondaryText} />
          {props.lastMsg}
        </Text>
      </View>
    </View>
  );
}


export default OneToOneChat;