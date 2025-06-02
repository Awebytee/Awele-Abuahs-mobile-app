import {Tabs} from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'

function TabIcon({ name,color}: {name: any, color: string }) {
  return <FontAwesome name={name} size={20} color={color} />;
}

export default function Layout() {
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: '#d63384',
      tabBarInactiveTintColor: '#999' ,
    }}
    >
      <Tabs.Screen
      name="index"
      options={{
        title: 'Welcome',
        tabBarIcon: ({color}) => (
          <FontAwesome name="home" size={20} color={color} />
        ),
      }}
      />
      <Tabs.Screen
      name="profile"
      options={{
        title: 'Profile',
        tabBarIcon: ({color}) => (
          <FontAwesome name="user" size={20} color={color} />
        ),
      }}
      />
      <Tabs.Screen
      name="api"
      options={{
        title: 'API Data',
        tabBarIcon: ({color}) => (
          <FontAwesome name= "cloud-download" size={20} color={color} />
        ),
      }}
      />
      <Tabs.Screen
      name="company"
      options={{
        title: 'Company',
        tabBarIcon: ({color}) => (
          <FontAwesome name= "building" size={20} color={color} />
        ),
      }}
      />
      <Tabs.Screen
      name="map"
      options={{
        title: 'Map',
        tabBarIcon: ({color}) => (
          <FontAwesome name="map" size={20} color={color} />
        ),
      }}
      />
    </Tabs>
  );
}