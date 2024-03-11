import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons';

//screens
import Home from "../screens/Home";
import Category from "../screens/Category";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}
                options={{

                    tabBarIcon: () => (
                        <Feather name="home" color='blue' size={24} />
                    ),
                }} />
            <Tab.Screen name="Category" component={Category}
                options={{

                    tabBarIcon: () => (
                        <Feather name="menu" color='blue' size={24} />
                    ),
                }} />
            <Tab.Screen name="Profile" component={Profile}
                options={{

                    tabBarIcon: () => (
                        <Feather name="user" color='blue' size={24} />
                    ),
                }} /> 
        </Tab.Navigator>
    );
};
export default TabRoutes;