import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppProvider } from './src/contexts/AppContext';

import AboutScreen from './src/screens/AboutScreen';
import BookDetailScreen from './src/screens/BookDetailScreen';
import BookListScreen from './src/screens/BookListScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import HomeScreen from './src/screens/HomeScreen';
import PendingScreen from './src/screens/PendingScreen';
import ReadingScreen from './src/screens/ReadingScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//Stack para la pestaña de Libros
function BookStack({ route }) {
    const { collection } = route.params;

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="BookList"
                component={BookListScreen}
                initialParams={{ collection }}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="BookDetail"
                component={BookDetailScreen}
                options={{ title: 'Detalles del Libro' }}
            />
            <Stack.Screen
                name="Reading"
                component={ReadingScreen}
                options={{ title: 'Leyendo' }}
            />
        </Stack.Navigator>
    );
}

//Tab Navigator para una colección específica
function CollectionTabNavigator({ route }) {
    const { collection } = route.params;

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Libros') iconName = focused ? 'book' : 'book-outline';
                    else if (route.name === 'Favoritos') iconName = focused ? 'heart' : 'heart-outline';
                    else if (route.name === 'Pendientes') iconName = focused ? 'time' : 'time-outline';
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen
                name="Libros"
                component={BookStack}
                initialParams={{ collection }}
                options={{ headerShown: false }}
            />
            <Tab.Screen name="Favoritos" component={FavoritesScreen} />
            <Tab.Screen name="Pendientes" component={PendingScreen} />
        </Tab.Navigator>
    );
}

//Drawer Navigator principal
function DrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    drawerIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
                }}
            />
            <Drawer.Screen
                name="Configuración"
                component={SettingsScreen}
                options={{
                    drawerIcon: ({ color, size }) => <Ionicons name="settings" size={size} color={color} />,
                }}
            />
            <Drawer.Screen
                name="About"
                component={AboutScreen}
                options={{
                    drawerIcon: ({ color, size }) => <Ionicons name="information-circle" size={size} color={color} />,
                }}
            />
        </Drawer.Navigator>
    );
}

export default function App() {
    return (
        <AppProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Main"
                        component={DrawerNavigator}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Collection"
                        component={CollectionTabNavigator}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </AppProvider>
    );
}