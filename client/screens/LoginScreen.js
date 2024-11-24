import { Text, View, StyleSheet, ScrollView, KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Pressable } from 'react-native';


export default function LoginScreen({ navigation }) {

    function handleLogin() {
        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <ScrollView>
                    <View>
                        <Image
                            source={require('../assets/chefster_logo_white_caption.png')}
                            style={{ width: 300, height: 300, marginTop: 70 }}
                            resizeMode="contain"
                        />
                    </View>
                    {/* <View style={{ marginTop: 20, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: "#4A55A2", fontSize: 17, fontWeight: 600 }}>Sign In</Text>
                        <Text style={{ color: 'white', fontSize: 17, fontWeight: 600, marginTop: 15 }}>Sign In to Your Account</Text>
                    </View> */}

                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Email</Text>
                        <TextInput placeholder='Enter your email' style={
                            {
                                color: 'gray',
                                backgroundColor: 'white',
                                padding: 10,
                                borderRadius: 20,
                                marginTop: 10,
                                width: 300,
                                height: 50,

                            }} />
                    </View>


                    <View style={{ marginTop: 30 }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Password</Text>
                        <TextInput placeholder='Enter your password' style={
                            {
                                color: 'gray',
                                backgroundColor: 'white',
                                padding: 10,
                                borderRadius: 20,
                                marginTop: 10,
                                width: 300,
                                height: 50

                            }} />
                    </View>

                    <TouchableOpacity style={{
                        backgroundColor: 'red',
                        marginTop: 40,
                        padding: 10,
                        borderRadius: 20,
                        width: 125,
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: 80,
                        elevation: 3
                    }} onPress={() => handleLogin()}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Sign In</Text>
                    </TouchableOpacity>

                    <Pressable onPress={() => navigation.navigate('Register')}>
                        <Text style={{
                            color: 'white',
                            marginTop: 25,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginLeft: 40,
                            fontWeight: '500',
                            fontSize: 15
                        }}>
                            Don't have an account? <Text style={{ color: 'red', fontWeight: 'bold' }}>Sign Up</Text>
                        </Text>
                    </Pressable>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'black',
        alignItems: 'center',

    },

});