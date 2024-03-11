import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons';

//screens
import Home from "../screens/Home";
import Category from "../screens/Category";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
    return (
        <Tab.Navigator 
        screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: '#EEF',
            },

        }}
        >

            <Tab.Screen name="Home" component={Home}
                options={{

                    tabBarIcon: ({focused}) => (
                        <Feather name="home" color={focused ? "#131313" : "D6D6D6" } size={24} />
                    ),
                    tabBarLabel: "Home",
                    tabBarActiveTintColor: "#131313",
                    tabBarInactiveTintColor: "#777",
                   
                }} 
                />


            <Tab.Screen name="Category" component={Category}
                options={{

                    tabBarIcon: ({focused}) => (
                        <Feather name="menu" color={focused ? "#131313" : "D6D6D6" } size={24} />
                    ),
                    tabBarLabel: "Categoria",
                    tabBarActiveTintColor: "#131313",
                    tabBarInactiveTintColor: "#777",
                }} />


            <Tab.Screen name="Profile" component={Profile}
                options={{

                    tabBarIcon: ({focused}) => (
                        <Feather name="user" color={focused ? "#131313" : "D6D6D6" } size={24} />
                    ),
                    tabBarLabel: "Perfil",
                    tabBarActiveTintColor: "#131313",
                    tabBarInactiveTintColor: "#777",
                }} /> 
        </Tab.Navigator>
    );
};
export default TabRoutes;