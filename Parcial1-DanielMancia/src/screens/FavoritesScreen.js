import { useNavigation } from '@react-navigation/native';
import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BookItem from '../components/BookItem';
import { useAppContext } from '../contexts/AppContext';

const FavoritesScreen = () => {
    const { favorites, toggleFavorite } = useAppContext();
    const navigation = useNavigation();

    const handlePress = (book) => {
        navigation.navigate('BookDetail', { book });
    };

    const confirmDelete = (book) => {
        Alert.alert(
            'Quitar de Favoritos',
            `¿Seguro que quieres quitar "${book.title}" de tus favoritos?`,
            [
                { text: 'Cancelar', style: 'cancel' },
                { text: 'Sí', onPress: () => toggleFavorite(book) }
            ]
        );
    };

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <TouchableOpacity onPress={() => handlePress(item)} style={styles.bookInfo}>
                <BookItem book={item} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => confirmDelete(item)} style={styles.deleteButton}>
                <Text style={styles.deleteText}>Eliminar</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tus Libros Favoritos</Text>
            {favorites.length === 0 ? (
                <Text style={styles.empty}>No tienes libros en favoritos</Text>
            ) : (
                <FlatList
                    data={favorites}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f5f5', padding: 10 },
    title: { fontSize: 20, fontWeight: 'bold', marginBottom: 15, textAlign: 'center' },
    empty: { textAlign: 'center', color: '#999', marginTop: 20 },

    item: {
        backgroundColor: 'white',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        elevation: 1,
    },

    bookInfo: {
        marginBottom: 10,
    },

    deleteButton: {
        alignSelf: 'flex-end',
        backgroundColor: 'red',
        padding: 8,
        borderRadius: 5,
    },

    deleteText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default FavoritesScreen;