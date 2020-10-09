import React, { useState } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import OneToOneChat from '../components/homescreen/OneToOneChat';
import Footer from '../components/shared/footer';
import { useTheme } from '../themes/ThemeManager';


const Home = ({ navigation }) => {
  const { mode, theme, toggle } = useTheme();

  const [chats, setChats] = useState([
    {user: 'Shantanu Tomar', lastMsg: 'FIRST MESSAGE', id: '1'},
    {user: 'Shantanu Tomar', lastMsg: 'Hey how are you doing today ?', id: '2'},
    {user: 'Shantanu Tomar', lastMsg: 'Hey how are you doing today ?', id: '3'},
    {user: 'Shantanu Tomar', lastMsg: 'Hey how are you doing today ?', id: '4'},
    {user: 'Shantanu Tomar', lastMsg: 'Hey how are you doing today ?', id: '5'},
    {user: 'Shantanu Tomar', lastMsg: 'Hey how are you doing today ?', id: '6'},
    {user: 'Shantanu Tomar', lastMsg: 'Hey how are you doing today ?', id: '7'},
    {user: 'Shantanu Tomar', lastMsg: 'Hey how are you doing today ?', id: '8'},
    {user: 'Shantanu Tomar', lastMsg: 'Hey how are you doing today ?', id: '9'},
    {user: 'Shantanu Tomar', lastMsg: 'Hey how are you doing today ?', id: '10'},
    {user: 'Shantanu Tomar', lastMsg: 'Hey how are you doing today ?', id: '11'},
    {user: 'Shantanu Tomar', lastMsg: 'Hey how are you doing today ?', id: '12'},
    {user: 'Shantanu Tomar', lastMsg: 'Hey how are you doing today ?', id: '13'},
    {user: 'Shantanu Tomar', lastMsg: 'Hey how are you doing today ?', id: '14'},
    {user: 'Shantanu Tomar', lastMsg: 'LAST MESSAGE', id: '15'},
  ]);

  const styles = StyleSheet.create({
    container: {
      position: 'relative',
      maxHeight: '100%',
      overflow: 'hidden',
    },
    listContainer: {
      paddingTop: 0,
      paddingHorizontal: 5,
      backgroundColor: 'white',
      marginBottom: 60,
      backgroundColor: theme.body,
    },
  });

  const goToChat = (chat) => {
    // navigation.setOptions({ title: chat.user })
    navigation.navigate('Messages', chat);
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={chats}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => goToChat(item)}>
              <OneToOneChat user={item.user} lastMsg={item.lastMsg} />
            </TouchableOpacity>
          )}
        />
      </View>

      <Footer />
    </View>
  );
}

export default Home;