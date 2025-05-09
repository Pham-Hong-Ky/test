import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

type Props = {
    name: string;
    cost: number;
    title: string;
    onPress?: () => void;
}

const Product = ({ name, cost, title, onPress }: Props) => {
    return (
        <TouchableOpacity style={{flex: 0.5}} onPress={onPress}>
            <View style={{ flex: 1, height: 120, width: 120, backgroundColor: 'gray', borderRadius: 10, margin: 10 }}>
                <View>
                    <View style={{ height: 20, width: 80, backgroundColor: 'black', borderRadius: 5, position: "absolute", top: 10, left: 10 }} >
                        <Text style={{ color: 'white', textAlign: "center", fontSize: 10, fontWeight: "bold" }}>
                            {title}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{ marginTop: 5, marginLeft: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                        {name}
                    </Text>
                    <Text>
                        {cost}
                    </Text>
                </View>
        </TouchableOpacity>
    )
}


export default Product

