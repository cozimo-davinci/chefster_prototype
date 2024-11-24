import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomePage from './screens/HomePage'; // Import HomePage only here
import ProfileScreen from './screens/ProfileScreen'; // Example additional screen
import RecipeRecommender from './screens/RecipeRecommender';
import MealPlanner from './screens/MealPlanner';
import Groups from './screens/Groups';
import Map from './screens/Map';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Account') {
                        iconName = focused ? 'person' : 'person-outline';
                    } else if (route.name === 'Meal Planner') {
                        iconName = focused ? 'calendar' : 'calendar-outline';
                    } else if (route.name === 'Groups') {
                        iconName = focused ? 'people' : 'people-outline';
                    } else if (route.name === 'Recipe Recommender') {
                        iconName = focused ? 'restaurant' : 'restaurant-outline';
                    } else if (route.name === 'Map') {
                        iconName = focused ? 'map' : 'map-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'lime',
                tabBarInactiveTintColor: 'white',
                tabBarStyle: {
                    backgroundColor: 'black',
                    borderTopWidth: 2,
                    borderTopColor: 'lime',
                    paddingTop: 10

                },
                headerShown: false, // Hide header for bottom tabs
            })}
        >
            <Tab.Screen name="Home" component={HomePage} />
            <Tab.Screen name='Meal Planner' component={MealPlanner} />
            <Tab.Screen name='Groups' component={Groups} />
            <Tab.Screen name='Recipe Recommender' component={RecipeRecommender} />
            <Tab.Screen name='Map' component={Map} />
            <Tab.Screen name="Account" component={ProfileScreen}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
