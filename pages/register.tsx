
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Input from '../components/Input';
import ButtonComponent from '../components/Button';
import { RootStackParamList } from '../router/router';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import BackButton from '../components/BackButton';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Register">;

const Register = () => {
    const navigation = useNavigation<NavigationProp>();

    const handleLogin = () => {
        navigation.navigate("Home");
    };

    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <View style={{ position: "absolute", top: 100, left: 0 }}>
                <BackButton onPress={() => { navigation.goBack() }} />
            </View>
            <View style={{ left: 0, marginLeft: 15 }}>
                <Text style={{ fontSize: 25, fontWeight: "bold", paddingBottom: 30 }}>
                    Hello and Welcome!
                </Text>
            </View>
            <View>
                <Input title="First & Last Name" placeholder='Admin' isPassword={false} />
                <Input title="Email" placeholder="admin@gmail.com" isPassword={false} />
                <Input title="Password" placeholder='******' isPassword={true} />
            </View>
            <View>
                <ButtonComponent title="Register" onPress={handleLogin} />
            </View>
        </View>
    );
}

export default Register