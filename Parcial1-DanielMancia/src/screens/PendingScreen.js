import { useNavigation } from '@react-navigation/native';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BookItem from '../components/BookItem';
import { useAppContext } from '../contexts/AppContext';

const PendingScreen = () => {
    const { pending, readBooks, toggleReadStatus } = useAppContext();
    const navigation = useNavigation();

    const handlePress = (book) => {
        navigation.navigate('BookDetail', { book });
    };

    const getStatus = (book) => {
        return readBooks.some(item => item.id === book.id) ? 'Leído' : 'Pendiente';
    };

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <TouchableOpacity onPress={() => handlePress(item)} style={styles.bookInfo}>
                <BookItem book={item} />
            </TouchableOpacity>
            <View style={styles.statusRow}>
                <Text style={[
                    styles.status,
                    getStatus(item) === 'Leído' ? styles.statusRead : styles.statusPending
                ]}>
                    {getStatus(item)}
                </Text>
                <TouchableOpacity
                    onPress={() => toggleReadStatus(item)}
                    style={styles.toggleButton}
                >
                    <Text style={styles.toggleText}>
                        {getStatus(item) === 'Pendiente' ? 'Marcar como Leído' : 'Marcar como Pendiente'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tus Libros Pendientes</Text>
            {pending.length === 0 ? (
                <Text style={styles.empty}>No tienes libros pendientes</Text>
            ) : (
                <FlatList
                    data={pending}
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

    statusRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    status: {
        fontSize: 14,
        fontWeight: 'bold',
        padding: 5,
        borderRadius: 5,
    },

    statusPending: {
        backgroundColor: '#ffcc00',
        color: '#333',
    },

    statusRead: {
        backgroundColor: 'green',
        color: 'white',
    },

    toggleButton: {
        backgroundColor: 'tomato',
        padding: 8,
        borderRadius: 5,
    },

    toggleText: {
        color: 'white',
        fontSize: 12,
    },
});

export default PendingScreen;