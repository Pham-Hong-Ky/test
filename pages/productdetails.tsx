import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../router/router';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../components/BackButton';
import ButtonComponent from '../components/Button';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ProductDetails'>;

const productdetails = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleDonate = () => {
    navigation.navigate('Payment');
  };

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 40 }}>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 30 }}>
        <BackButton onPress={() => navigation.goBack()} />
        <Image
          source={require('../asset/image/image.jpg')}
          style={{ width: '100%', height: 250, borderRadius: 20, marginTop: 20 }}
        />
        <View style={{ marginTop: 15 }}>
          <View
            style={{
              backgroundColor: '#1c6e4a',
              alignSelf: 'flex-start',
              paddingHorizontal: 12,
              paddingVertical: 4,
              borderRadius: 12,
              marginBottom: 10,
            }}>
            <Text style={{ color: 'white' }}>Environment</Text>
          </View>

          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
            Tree Cactus Imitation
          </Text>

          <Text style={{ fontSize: 14, }}>
            Lộc ăn cứt
          </Text>
        </View>

        <View style={{ marginTop: 20, top: 100 }}>
          <ButtonComponent title="Donate" onPress={handleDonate} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default productdetails;
