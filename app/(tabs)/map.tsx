import { View, StyleSheet, Dimensions } from "react-native";
import MapView, {Marker} from "react-native-maps";
import {Stack} from 'expo-router';

export default function MapScreen() {
    return (
        <>
            <Stack.Screen options={{title: 'Map'}} />
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 6.5244,
                        longitude: 3.3792,
                        latitudeDelta: 0.05,
                        longitudeDelta: 0.05
                    }}
                >
                    <Marker
                        coordinate={{latitude: 6.5244, longitude: 3.3792}}
                        title="Lagos"
                        description="This is a marker in Lagos"
                    />
                </MapView>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});