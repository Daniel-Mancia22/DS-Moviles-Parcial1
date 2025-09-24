import { StyleSheet, Text, View } from 'react-native';

const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Pantalla de Configuración</Text>
            <Text style={styles.subtext}>Aquí puedes configurar tus preferencias de la aplicación.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },

    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        color: 'tomato',
    },

    subtext: {
        fontSize: 16,
        textAlign: 'center',
        color: '#666',
    },
});

export default SettingsScreen;