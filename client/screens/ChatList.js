import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { TouchableOpacity } from 'react-native';

const ChatList = () => {
    const navigation = useNavigation();
    const [users, setUsers] = useState([
        // Sample data to simulate users
        { id: "1", name: "Alice Johnson", lastMessage: "Hey there!" },
        { id: "2", name: "Bob Smith", lastMessage: "How are you doing?" },
        { id: "3", name: "Diet Together", lastMessage: "Check out this picture I found!" },
    ]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "Chefster",
            headerLeft: null, // Or remove this line if not needed
            headerRight: () => (
                <View style={styles.headerIcons}>
                    <Ionicons
                        onPress={() => navigation.navigate("Chats")}
                        name="chatbox-ellipses-outline"
                        size={24}
                        color="black"
                    />
                    <MaterialIcons
                        onPress={() => navigation.navigate("Friends")}
                        name="people-outline"
                        size={24}
                        color="black"
                    />
                </View>
            ),
            headerStyle: {
                backgroundColor: "#f9f9f9",
                marginTop: 15,
            },
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>


                {/* <Image
                    source={require('../assets/chefster_logo_white_caption.png')}
                    style={{ width: 300, height: 300, marginTop: -50 }} /> */}
                <View style={styles.captionContainer}>
                    <Text style={styles.captionText}>Chats</Text>
                </View>


                <TouchableOpacity style={{ marginTop: 30 }} onPress={() => navigation.navigate("Diet Together")}>
                    {users.map((user, index) => (
                        <View key={index} style={styles.userContainer}>
                            <Text style={styles.userName}>{user.name}</Text>
                            <Text style={styles.lastMessage}>{user.lastMessage}</Text>
                        </View>
                    ))}
                </TouchableOpacity>


            </ScrollView>
        </View>
    );
};

export default ChatList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        padding: 10,
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: "bold",
    },
    headerIcons: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    userContainer: {
        padding: 15,
        marginVertical: 5,
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        width: 350,
    },
    userName: {
        fontSize: 16,
        fontWeight: "bold",
    },
    lastMessage: {
        fontSize: 14,
        color: "gray",
        marginTop: 5,
    },
    captionContainer: {
        width: '100%',
        backgroundColor: '#1c1c1c',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
        marginTop: -150,
    },
    captionText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'lime',
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 4,

    },
});