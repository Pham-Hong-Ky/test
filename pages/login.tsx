import { Text, TouchableOpacity, View } from "react-native";
import Input from "../components/Input";
import ButtonComponent from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../router/router";
import BackButton from "../components/BackButton";



type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Login">;

const Login = () => {
    const navigation = useNavigation<NavigationProp>();

    const handleLogin = () => {
        navigation.navigate("Home");
    };

    return (
            <View style={{ flex: 1, justifyContent: "center" }}>
                <View style={{ left: 0, marginLeft: 15 }}>
                    <Text style={{ fontSize: 25, fontWeight: "bold", paddingBottom: 30 }}>
                        Welcome Back
                    </Text>
                </View>
                <View>
                    <Input title="Email" placeholder="admin@gmail.com" isPassword={false} />
                    <Input title="Password" placeholder="******" isPassword={true} />
                </View>
                <View>
                    <ButtonComponent title="Login" onPress={handleLogin} />
                </View>
                <View style={{ marginTop: 70 }}>
                    <TouchableOpacity onPress={() => { navigation.navigate("Register") }}>
                        <Text style={{ textAlign: "center", color: "blue", fontSize: 15 }}>
                            Don't have an account?
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
    );
};

export default Login;