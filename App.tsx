import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  View,
} from 'react-native';

export default function App() {
  const [name, setName] = useState('');

  const handlePress = () => {
    if (name.trim() === '') {
      Alert.alert('Hold up 👀', 'Type something first.');
      return;
    }

    Alert.alert('AmariiDoc App Says:', `🔥 ${name} 🔥`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>AmariiDoc Mobile 🔥</Text>
      <Text style={styles.subtitle}>Enter something below:</Text>

      <TextInput
        style={styles.input}
        placeholder="Type here..."
        placeholderTextColor="#aaa"
        value={name}
        onChangeText={setName}
      />

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Show Alert</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0f24',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: '700',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 18,
    color: '#bbb',
    marginBottom: 20,
  },

  input: {
    width: '90%',
    backgroundColor: '#1a2036',
    padding: 15,
    borderRadius: 10,
    color: '#fff',
    fontSize: 18,
    borderColor: '#4e6bff',
    borderWidth: 1,
  },

  button: {
    marginTop: 25,
    backgroundColor: '#4e6bff',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 12,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});
