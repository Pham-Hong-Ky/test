import { Button, StyleSheet, Text, TouchableOpacity, View, } from "react-native"


type Props = {
    title: string,
    onPress: () => void
}

const ButtonComponent = ({ title, onPress }: Props) => {
    return (
        <View style={{flex: 1, alignItems: 'center'}}>

        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
        </View>
    )
}

export default ButtonComponent

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        borderRadius: 50,
        height: 45,
        width: 230,
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
})