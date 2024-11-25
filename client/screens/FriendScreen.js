import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const FriendsScreen = () => {
    const [friendRequests, setFriendRequests] = useState([
        // Sample data for demonstration
        { id: "1", name: "Alice Johnson", email: "alice@example.com", image: "" },
        { id: "2", name: "Bob Smith", email: "bob@example.com", image: "" },
        { id: "3", name: "Charlie Brown", email: "charlie@example.com", image: "" },
    ]);

    const handleAccept = (id) => {
        setFriendRequests((prevRequests) =>
            prevRequests.filter((request) => request.id !== id)
        );
    };

    const handleDecline = (id) => {
        setFriendRequests((prevRequests) =>
            prevRequests.filter((request) => request.id !== id)
        );
    };

    return (
        <View style={styles.container}>
            {friendRequests.length > 0 && (
                <Text style={styles.title}>Your Friend Requests</Text>
            )}
            {friendRequests.map((item, index) => (
                <View key={index} style={styles.requestContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.email}>{item.email}</Text>
                    <View style={styles.actions}>
                        <Text
                            style={[styles.actionButton, styles.acceptButton]}
                            onPress={() => handleAccept(item.id)}
                        >
                            Accept
                        </Text>
                        <Text
                            style={[styles.actionButton, styles.declineButton]}
                            onPress={() => handleDecline(item.id)}
                        >
                            Decline
                        </Text>
                    </View>
                </View>
            ))}
            {friendRequests.length === 0 && (
                <Text style={styles.noRequests}>You have no friend requests.</Text>
            )}
        </View>
    );
};

export default FriendsScreen;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginHorizontal: 12,
        backgroundColor: "#f9f9f9",
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    requestContainer: {
        padding: 15,
        marginVertical: 5,
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
    },
    email: {
        fontSize: 14,
        color: "gray",
        marginBottom: 10,
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    actionButton: {
        fontSize: 14,
        fontWeight: "bold",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        textAlign: "center",
        overflow: "hidden",
    },
    acceptButton: {
        backgroundColor: "#007bff",
        color: "white",
    },
    declineButton: {
        backgroundColor: "#ff4d4d",
        color: "white",
    },
    noRequests: {
        fontSize: 16,
        textAlign: "center",
        color: "gray",
        marginTop: 20,
    },
});