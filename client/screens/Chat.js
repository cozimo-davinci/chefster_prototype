import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    KeyboardAvoidingView,
    TextInput,
    Pressable,
    Image,
    TouchableOpacity,
} from "react-native";
import React, { useState, useRef } from "react";
import { Feather, Ionicons, Entypo } from "@expo/vector-icons";
import EmojiSelector from "react-native-emoji-selector";
import { useNavigation } from '@react-navigation/native';

const Chat = () => {
    const navigation = useNavigation();
    const [showEmojiSelector, setShowEmojiSelector] = useState(false);
    const [messages, setMessages] = useState([
        { id: "1", type: "text", text: "Hey everyone!", sender: "Alice", time: "10:00 AM" },
        { id: "2", type: "text", text: "Hi Alice, how are you?", sender: "Bob", time: "10:01 AM" },
        { id: "3", type: "text", text: "I'm doing great, thanks! What about you?", sender: "Alice", time: "10:02 AM" },
        { id: "4", type: "image", imageUri: require('../assets/in_chat_picture.jpg'), sender: "Charlie", time: "10:05 AM" },
        { id: "5", type: "text", text: "Check out this picture I found!", sender: "Charlie", time: "10:06 AM" },
    ]);
    const [message, setMessage] = useState("");
    const scrollViewRef = useRef(null);

    const scrollToBottom = () => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollToEnd({ animated: false });
        }
    };

    const handleContentSizeChange = () => {
        scrollToBottom();
    };

    const handleSend = () => {
        if (message.trim()) {
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    id: Math.random().toString(),
                    type: "text",
                    text: message.trim(),
                    sender: "You",
                    time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                },
            ]);
            setMessage("");
        }
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1, backgroundColor: "#F0F0F0" }}>
            {/* Header with Group Name and Menu */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.groupName}>Diet Together</Text>
                </TouchableOpacity>

                <Pressable onPress={() => navigation.navigate("GroupOverview")}>
                    <Feather name="menu" size={24} color="black" style={styles.menuIcon} />
                </Pressable>
            </View>

            <ScrollView
                ref={scrollViewRef}
                contentContainerStyle={{ flexGrow: 1 }}
                onContentSizeChange={handleContentSizeChange}
            >
                {messages.map((item, index) => {
                    const isYou = item.sender === "You";
                    return (
                        <View
                            key={index}
                            style={[
                                styles.messageContainer,
                                isYou ? styles.userMessage : styles.otherMessage,
                            ]}
                        >
                            {!isYou && <Text style={styles.sender}>{item.sender}</Text>}
                            {item.type === "text" && <Text style={styles.messageText}>{item.text}</Text>}
                            {item.type === "image" && (
                                <Image source={item.imageUri} style={styles.image} />
                            )}
                            <Text style={styles.time}>{item.time}</Text>
                        </View>
                    );
                })}
            </ScrollView>

            <View style={styles.inputContainer}>
                <Entypo
                    onPress={() => setShowEmojiSelector(!showEmojiSelector)}
                    style={{ marginRight: 5 }}
                    name="emoji-happy"
                    size={24}
                    color="black"
                />
                <TextInput
                    value={message}
                    onChangeText={(text) => setMessage(text)}
                    style={styles.input}
                    placeholder="Type Your message..."
                />
                <Pressable onPress={handleSend} style={styles.sendButton}>
                    <Text style={styles.sendButtonText}>Send</Text>
                </Pressable>
            </View>

            {showEmojiSelector && (
                <EmojiSelector
                    onEmojiSelected={(emoji) => setMessage((prev) => prev + emoji)}
                    style={{ height: 250 }}
                />
            )}
        </KeyboardAvoidingView>
    );
};

export default Chat;

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 15,
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        marginTop: 30
    },
    groupName: {
        fontSize: 18,
        fontWeight: "bold",
    },
    menuIcon: {
        padding: 5,
    },
    messageContainer: {
        padding: 10,
        marginVertical: 5,
        borderRadius: 7,
        maxWidth: "80%",
    },
    userMessage: {
        alignSelf: "flex-end",
        backgroundColor: "#DCF8C6",
    },
    otherMessage: {
        alignSelf: "flex-start",
        backgroundColor: "white",
    },
    sender: {
        fontWeight: "bold",
        marginBottom: 5,
    },
    messageText: {
        fontSize: 14,
    },
    time: {
        fontSize: 10,
        color: "gray",
        textAlign: "right",
        marginTop: 5,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 7,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderTopWidth: 1,
        borderTopColor: "#dddddd",
        backgroundColor: "#fff",
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 20,
        paddingHorizontal: 10,
        marginRight: 10,
        marginLeft: 10,
    },
    sendButton: {
        backgroundColor: "black",
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 20,
    },
    sendButtonText: {
        color: "white",
        fontWeight: "bold",
    },
});