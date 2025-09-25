import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const CollectionItem = ({ collection, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={collection.image} style={styles.image} />
            <Text style={styles.name}>{collection.name}</Text>
            <Text style={styles.count}>{collection.books.length} libros</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 8,
        padding: 10,
        alignItems: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },

    image: {
        width: 120,
        height: 160,
        borderRadius: 8,
        marginBottom: 8,
    },

    name: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 4,
    },

    count: {
        fontSize: 12,
        color: '#666',
    },
});

export default CollectionItem;