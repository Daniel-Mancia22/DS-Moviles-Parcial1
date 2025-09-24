import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    const [pending, setPending] = useState([]);
    const [readBooks, setReadBooks] = useState([]);

    const toggleFavorite = (book) => {
        const exists = favorites.some((item) => item.id === book.id);
        if (exists) {
            setFavorites(favorites.filter((item) => item.id !== book.id));
        } else {
            setFavorites([...favorites, book]);
        }
    };

    const togglePending = (book) => {
        const exists = pending.some((item) => item.id === book.id);
        if (exists) {
            setPending(pending.filter((item) => item.id !== book.id));
        } else {
            setPending([...pending, book]);
        }
    };

    const toggleReadStatus = (book) => {
        const exists = readBooks.some((item) => item.id === book.id);
        if (exists) {
            setReadBooks(readBooks.filter((item) => item.id !== book.id));
        } else {
            setReadBooks([...readBooks, book]);
        }
    };

    return (
        <AppContext.Provider value={{
            favorites,
            pending,
            readBooks,
            toggleFavorite,
            togglePending,
            toggleReadStatus
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);