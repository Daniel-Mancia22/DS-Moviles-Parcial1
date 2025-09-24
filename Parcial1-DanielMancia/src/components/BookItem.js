import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const BookItem = ({ book, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={book.cover} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.author}>{book.author}</Text>
                <Text style={styles.description} numberOfLines={2}>
                    {book.description}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 8,
        marginBottom: 10,
        overflow: 'hidden',
        elevation: 2,
    },

    image: {
        width: 80,
        height: 120,
    },

    info: {
        flex: 1,
        padding: 10,
        justifyContent: 'space-between',
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    author: {
        fontSize: 14,
        color: '#666',
        marginVertical: 5,
    },

    description: {
        fontSize: 12,
        color: '#888',
    },
});

export default BookItem;