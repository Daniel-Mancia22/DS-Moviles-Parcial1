import { Image, StyleSheet, Text, View } from 'react-native';

const AboutScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/ft1.jpg')}
                style={styles.profileImage}
            />
            <Text style={styles.name}>Daniel Mancia</Text>
            <Text style={styles.email}>dmancia23@gmail.com</Text>
            <Text style={styles.version}>Versión 1.0.0</Text>
            <Text style={styles.description}>
                Esta aplicación fue desarrollada como parte del primer examen parcial
                de la materia Desarrollo de Aplicaciones para Dispositivos Móviles.
            </Text>
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

    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
        borderWidth: 3,
        borderColor: 'tomato',
    },

    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333',
    },

    email: {
        fontSize: 16,
        color: '#666',
        marginBottom: 10,
    },

    version: {
        fontSize: 14,
        color: 'tomato',
        marginBottom: 20,
        fontWeight: 'bold',
    },

    description: {
        fontSize: 16,
        textAlign: 'center',
        color: '#555',
        lineHeight: 24,
    },
});

export default AboutScreen;