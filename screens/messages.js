import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Bubble from '../components/chatscreen/chat-bubble';
import { useTheme } from '../themes/ThemeManager';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';


const ICON_SIZE = 35;

const Messages = ({ navigation }) => {

  const [messages, setMessages] = useState([
    { 
      sender: {id: 1, name: 'Shantanu Tomar'}, recepient: {id: 2, name: 'Jane Doe'},
      text: 'Hey Jane! How are you doing today ?', id: '1' 
    },
    { 
      sender: {id: 2, name: 'Jane Doe'}, recepient: {id: 1, name: 'Shantanu Tomar'},
      text: "Hey Shantanu! I'm spiffing !", id: '2'
    },
  ]);

  const {mode, theme, toggle} = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.chatBackground,
      height: '100%',
      position: 'relative',
    },
    listContainer: {
      height: '100%',
      paddingBottom: 70,
    },
    inputContainer: {
      position: 'absolute',
      bottom: 0,
      flexDirection: 'row',
      height: 50,
      width: '100%',
      backgroundColor: theme.header,
      alignContent: 'center',
      paddingVertical: 7,
    },
    textInput: {
      flex: 1,
      fontSize: 17,
      backgroundColor: 'white',
      paddingHorizontal: 5, 
    },
    inputIcon: {
      paddingHorizontal: 5,
      color: theme.icons
    }
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <FlatList
            keyExtractor={(item) => item.id}
            data={messages}
            renderItem={({item}) => (
            
              <Bubble {...item} />
            )}
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name="attach-file" size={ICON_SIZE} style={styles.inputIcon} />
          <TextInput placeholder="Enter message" style={styles.textInput} />
          <MaterialIcons name="timer" size={ICON_SIZE} style={styles.inputIcon} />
          <FontAwesome name="smile-o" size={ICON_SIZE} style={styles.inputIcon} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Messages;