import { Image, ImageSourcePropType, Text, View, StyleSheet } from "react-native";

type Props = {
    imgUrl: ImageSourcePropType;
};

const AvartarComponent = ({ imgUrl }: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Image source={imgUrl} style={styles.avatar} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        padding: 7,
    },
    avatarContainer: {
        width: 75,
        height: 75,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "blue",
        padding: 5, 
        justifyContent: "center",
    },
    avatar: {
        width: 65,
        height: 65,
        borderRadius: 50,
    },
});

export default AvartarComponent;
