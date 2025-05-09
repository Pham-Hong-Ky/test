import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../router/router';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import BackButton from '../components/BackButton';
import ButtonComponent from '../components/Button';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Payment'>;

const Payment = () => {
    console.log("Loojc anw cuts")
    const navigation = useNavigation<NavigationProp>();
    return (
    <View>
        <View style={{ top: 50, left: 20 }}>
            <BackButton onPress={() => navigation.goBack()} />
        </View>
        
        <View style={{ top: 500 }}>
            <ButtonComponent title="Confirm Payment" onPress={() => {console.log("Lộc ăn cứt")}} />
        </View>
    </View>
  )
}

export default Payment