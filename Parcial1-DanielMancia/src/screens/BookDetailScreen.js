import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAppContext } from '../contexts/AppContext';

const BookDetailScreen = ({ navigation, route }) => {
    const { book } = route.params;
    const { favorites, pending, readBooks, toggleFavorite, togglePending, toggleReadStatus } = useAppContext();

    const [isFavorite, setIsFavorite] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const [isRead, setIsRead] = useState(false);

    useEffect(() => {
        setIsFavorite(favorites.some(item => item.id === book.id));
        setIsPending(pending.some(item => item.id === book.id));
        setIsRead(readBooks.some(item => item.id === book.id));
    }, [favorites, pending, readBooks]);

    const handleFavorite = () => {
        toggleFavorite(book);
        Alert.alert(
            isFavorite ? 'Removido de favoritos' : 'Agregado a favoritos',
            `El libro "${book.title}" ha sido ${isFavorite ? 'removido' : 'agregado'} a tus favoritos`
        );
    };

    const handlePending = () => {
        togglePending(book);
        Alert.alert(
            isPending ? 'Removido de pendientes' : 'Agregado a pendientes',
            `El libro "${book.title}" ha sido ${isPending ? 'removido' : 'agregado'} a tus pendientes`
        );
    };

    const handleReadNow = () => {
        navigation.navigate('Reading', { book });
    };

    return (
        <ScrollView style={styles.container}>
            <Image source={book.cover} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.author}>{book.author}</Text>
                <Text style={styles.description}>{book.description}</Text>

                <View style={styles.buttons}>
                    <TouchableOpacity
                        style={[styles.button, isFavorite ? styles.favoriteActive : styles.favoriteInactive]}
                        onPress={handleFavorite}
                    >
                        <Ionicons name={isFavorite ? 'heart' : 'heart-outline'} size={24} color="white" />
                        <Text style={styles.buttonText}>
                            {isFavorite ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, isPending ? styles.pendingActive : styles.pendingInactive]}
                        onPress={handlePending}
                    >
                        <Ionicons name={isPending ? 'time' : 'time-outline'} size={24} color="white" />
                        <Text style={styles.buttonText}>
                            {isPending ? 'Quitar de Pendientes' : 'Agregar a Pendientes'}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, styles.readButton]}
                        onPress={handleReadNow}
                    >
                        <Ionicons name="book" size={24} color="white" />
                        <Text style={styles.buttonText}>Leer Ahora</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f5f5' },
    image: { width: '100%', height: 300, resizeMode: 'cover' },
    details: { flex: 1, padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
    author: { fontSize: 18, color: '#666', marginBottom: 15 },
    description: { fontSize: 16, color: '#333', marginBottom: 20, lineHeight: 22 },
    buttons: { marginTop: 20 },

    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 8,
        marginBottom: 15,
    },

    favoriteActive: { backgroundColor: 'red' },
    favoriteInactive: { backgroundColor: 'tomato' },
    pendingActive: { backgroundColor: 'orange' },
    pendingInactive: { backgroundColor: 'darkorange' },
    readButton: { backgroundColor: 'green' },

    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    },
});

export default BookDetailScreen;