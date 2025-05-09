import { Image, ImageSourcePropType, View, Text, StyleSheet } from "react-native";
import AvartarComponent from "./avatarcomponent";

type Props = {
    imgUrl: ImageSourcePropType;
    name: string;
    adress: string;
    like: number;
    comment: number;
    share: number;
}

const PostComponent = ({ imgUrl, name }: Props) => {
    return (
        <View>
            <View>
                <AvartarComponent imgUrl={imgUrl} />
                <Text>
                    {name}
                </Text>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({

});