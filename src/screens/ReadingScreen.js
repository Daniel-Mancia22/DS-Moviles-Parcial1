import { ScrollView, StyleSheet, Text, View } from 'react-native';

const ReadingScreen = ({ route }) => {
    const { book } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{book.title}</Text>
            <Text style={styles.author}>{book.author}</Text>
            <ScrollView style={styles.contentContainer}>
                <Text style={styles.content}>{book.content}</Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },

    author: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
        color: '#666',
    },

    contentContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 15,
        elevation: 2,
    },

    content: {
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'justify',
    },
});

export default ReadingScreen;