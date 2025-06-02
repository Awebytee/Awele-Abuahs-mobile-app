import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import {Stack} from 'expo-router';

export default function WelcomeScreen() {
  return (
    <>
    <Stack.Screen options = {{ title: 'Welcome'}} />
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Hi, I'm Awele🌼</Text>
      <Image
      source={require('../../assets/images/homeimage.jpg')}
      style={styles.image}
      />
      <Text style={styles.subtitle}>Welcome to my app! Use the tabs below to explore.</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>What's Inside:</Text>
        <Text style={styles.sectionItem}>🌸Profile - Update your info</Text>
        <Text style={styles.sectionItem}>🛸API- View remote data</Text>
        <Text style={styles.sectionItem}>🏢Companies - See email list</Text>
        <Text style={styles.sectionItem}>🗺️Map - Visual navigator</Text>
      </View>
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffe4f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize:28,
    fontWeight: 'bold',
    color: '#d63384',
    marginBottom: 12,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 3,
    borderColor: '#ff66a3',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#444', 
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginTop: 30,
    backgroundColor: '#fff0f5',
    borderRadius: 10,
    padding: 15,
    width: '100%',
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#c2185b',
    marginBottom: 10,
  },
  sectionItem: {
    fontSize: 14,
    color: '#c2185b',
    marginBottom: 5,
  },
});