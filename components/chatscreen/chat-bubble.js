import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { useTheme } from '../../themes/ThemeManager';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Bubble = props => {
  const user = {
    id: 1,
    name: 'Shantanu Tomar'
  };

  const {mode, theme, toggle} = useTheme();

  const styles = StyleSheet.create({
    container: {
      padding: 10
    },
    bubble: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 5,
      position: 'relative',
      width: '90%',
      height: 'auto',
      borderBottomWidth: 3,
      borderRadius: 5,
    },
    bubbleIN: {
      backgroundColor: theme.bubbleIN,
      borderBottomColor: theme.bubbleBorderIN,
    },
    bubbleOUT: {
      backgroundColor: theme.bubbleOUT,
      borderBottomColor: theme.bubbleBorderOUT,
      marginLeft: '10%',
    },
    userImage: {
      width: 40,
      height: 40,
    },
    userImageContainer: {
      
    },
    textContainer: {
      marginHorizontal: 10,
      flexShrink: 1,
      position: 'relative',
    },
    bubbleHead: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10
    },
    text: {
      color: theme.primaryText,
    },
    triangleIN: {
      position: "absolute",
      left: -1.8,
      bottom: -8
    },
    triangleOUT: {
      position: "absolute",
      right: -1.8,
      bottom: -8
    },
    name: {
      fontWeight: 'bold',
      color: theme.primaryText
    },
    timestamp: {
      color: theme.secondaryText,
      fontSize: 10,
    },
    
  });

  if (props.sender.id !== user.id) {
    // INCOMING MESSAGE
    return (
      <View style={styles.container}>
        <View style={{...styles.bubble, ...styles.bubbleIN}}>
          <View style={styles.triangleIN}>
            <MaterialCommunityIcons name="triangle" 
              color={theme.bubbleIN} size={15} style={{transform: [{rotateZ: '90deg'}]}} />
          </View>

          <View style={styles.userImageContainer}>
            <Image source={require('../../assets/images/me.jpg')} style={styles.userImage} />
          </View>

          <View style={styles.textContainer}>
            <View style={styles.bubbleHead}>
              <Text style={styles.name}>{props.sender.name}</Text>
              <Text style={styles.timestamp}>4:30 PM</Text>
            </View>

            <Text style={styles.text}>{props.text}hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
            hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</Text>
          </View>
        </View>
      </View>
    );
  }
  else if (props.sender.id === user.id) {
    // OUTGOING MESSAGE
    return (
      <View style={styles.container}>
        <View style={{...styles.bubble, ...styles.bubbleOUT}}>
          <View style={styles.textContainer}>
            <View style={styles.bubbleHead}>
              <Text style={styles.name}>{props.sender.name}</Text>
              <Text style={styles.timestamp}>4:30 PM</Text>
            </View>

            <Text style={styles.text}>{props.text}hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
            hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</Text>
          </View>

          <View>
            <Image source={require('../../assets/images/me.jpg')} style={styles.userImage} />
          </View>

          <View style={styles.triangleOUT}>
            <MaterialCommunityIcons name="triangle" 
              color={theme.bubbleIN} size={15} style={{transform: [{rotateZ: '-90deg'}]}} />
          </View>
        </View>
      </View>
    );
  }
}

export default Bubble;