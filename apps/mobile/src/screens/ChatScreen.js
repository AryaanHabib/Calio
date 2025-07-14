// apps/mobile/src/screens/ChatScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  const send = () => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { id: Date.now().toString(), text }]);
    setText('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.bubble}>
            <Text>{item.text}</Text>
          </View>
        )}
      />
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Type a message"
          value={text}
          onChangeText={setText}
        />
        <Button title="Send" onPress={send} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:10 },
  list:      { flex:1 },
  bubble:    { padding:8, backgroundColor:'#eee', borderRadius:4, marginVertical:4 },
  inputRow:  { flexDirection:'row', alignItems:'center' },
  input:     { flex:1, borderWidth:1, borderColor:'#ccc', padding:8, borderRadius:4, marginRight:8 },
});
