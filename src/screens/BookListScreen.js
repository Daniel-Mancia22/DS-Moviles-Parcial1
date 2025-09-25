import { FlatList, StyleSheet, View } from 'react-native';
import BookItem from '../components/BookItem';

const BookListScreen = ({ navigation, route }) => {
    const { collection } = route.params;

    const renderItem = ({ item }) => (
        <BookItem
            book={item}
            onPress={() => navigation.navigate('BookDetail', { book: item })}
        />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={collection.books}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },

    list: {
        padding: 10,
    },
});

export default BookListScreen;