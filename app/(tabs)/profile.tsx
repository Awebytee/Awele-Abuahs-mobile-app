import { useState } from "react";
import {View, Text, TextInput, StyleSheet, Button, Alert, ScrollView} from 'react-native';
import {Stack} from 'expo-router';

export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [hobby, setHobby] = useState('');

  const handlesubmit = () => {
    Alert.alert('Profile Updated', `Name: ${name}\nAge: ${age}\nHobby: ${hobby}`);
  };

  return (
    <>
    <Stack.Screen options={{title: 'Profile'}} />
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Update Your Profile</Text>

      <Text style={styles.label}>Your Name</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g Awele"
        value={name}
        onChangeText={setName}
       />

      <Text style={styles.label}>Your Age</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g 20, 2000"
        value={age}
        onChangeText={setAge}
        />

      <Text style={styles.label}>Your Hobby</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g Drawing, Singing"
        value={hobby}
        onChangeText={setHobby}
        />

        <View style={styles.buttonContainer}>
          <Button title="Save" color="#d63384" onPress={handlesubmit} />
        </View>
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffe4f0',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#d63384',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    color: '#c2185b',
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#ffb6c1',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
  },
  buttonContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
});