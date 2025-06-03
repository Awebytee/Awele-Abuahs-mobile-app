import {useEffect, useState } from "react";
import {View, Text, ActivityIndicator, StyleSheet, FlatList} from 'react-native';
import {Stack} from 'expo-router';

type User = {
    email: string;
    company: {
        name: string;
    };
};

export default function CompanyScreen() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fake-json-api.mock.beeceptor.com/users')
        .then((res) => res.json())
        .then((data) => {
            setUsers(data);
            setLoading(false);
        })
        .catch((error) => {
            console.error('Error fetching company data:', error);
            setLoading(false);
        });
}, []);

return (
     <>
        <Stack.Screen options={{ title: 'Companies'}} />
         <View style={styles.container}>
             <Text style={styles.title}>Company & Email List</Text>
             {loading ? (
                 <ActivityIndicator size="large" color="#d63384" />
              ) : (
                <FlatList
                data={users}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <View style={styles.card}>
                        <Text style={styles.company}>{item.company?.name || 'N/A'}</Text>
                        <Text style={styles.email}>{item.email}</Text>
                    </View>
                )}
              />
             )}
        </View>
     </>
 );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffe4f0',
        padding: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 12,
        textAlign: 'center',
        color: '#d63384',
    },
    card: {
        backgroundColor: '#fff0f5',
        borderRadius: 10,
        padding: 12,
        marginBottom: 10,
    },
    company: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#c2185b',
    },
    email: {
        fontSize: 14,
        color: '#555',
    },
});