import { useNavigation } from "@react-navigation/native";
import { FlatList, Image, StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import BackButton from "../components/BackButton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../router/router";
import Product from "../components/Product";

// type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">; // stack
// type NavigationProp = DrawerNavigationProp<DrawerParamList, 'Home'>; // drawer

const Home = () => {
    // const navigation = useNavigation<NavigationProp>();
    const navigation = useNavigation<any>();
    const handleProductPress = () => {
        navigation.navigate("ProductDetails");
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Text style={{ fontSize: 16, color: 'blue' }}>☰ Open Menu</Text>
            </TouchableOpacity>
            <View style={{ left: 0 }}>
                <BackButton onPress={() => navigation.goBack()} />
            </View>
            <View style={styles.header}>
                <Text style={{ fontSize: 20 }}>
                    Hello,
                </Text>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                    Azzahri A.
                </Text>
            </View>
            <View style={{ alignItems: "center", marginBottom: 20 }}>
                <Image style={{ borderRadius: 50, height: 200, width: 300, borderWidth: 1 }} source={require("../asset/image/image.jpg")} />
            </View>
            <View style={{ marginBottom: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
                    Select Category
                </Text>
                <FlatList
                    data={categoryData}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <View style={{ backgroundColor: 'blue', borderRadius: 20, padding: 10, marginRight: 10, width: 140 }}>
                            <Text style={{ fontSize: 16, fontWeight: "bold", marginRight: 20, textAlign: "center", color: "white" }}>
                                {item.name}
                            </Text>
                        </View>
                    )}
                />
            </View>
            <FlatList
                data={productData}
                numColumns={2}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Product
                        name={item.name}
                        cost={item.cost}
                        title={item.title}
                        onPress={handleProductPress}
                    />
                )}
            />

        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 30,
        marginVertical: 50,
    },
    header: {
        right: 0,
        marginBottom: 20,
    },
});

const productData = [
    { id: 1, name: "Product 1", cost: 100, title: "New" },
    { id: 2, name: "Product 2", cost: 200, title: "Sale" },
    { id: 3, name: "Product 3", cost: 300, title: "Best Seller" },
    { id: 5, name: "Product 4", cost: 400, title: "Top Rated" },
    { id: 6, name: "Product 4", cost: 400, title: "Top Rated" },
    { id: 7, name: "Product 4", cost: 400, title: "Top Rated" },
    { id: 8, name: "Product 4", cost: 400, title: "Top Rated" },

];

const categoryData = [
    { id: 1, name: "Highlight" },
    { id: 2, name: "Lifestyle" },
    { id: 3, name: "Sale" },
    { id: 4, name: "Best Seller" },
    { id: 5, name: "Top Rated" },
]
