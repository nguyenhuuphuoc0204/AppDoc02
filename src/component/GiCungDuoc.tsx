import React from "react";
import { Text, View } from "react-native";

type GiCungDuocProps = {
    title: string;
}

const GiCungDuoc = ({ title }: GiCungDuocProps) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent:'space-between',paddingVertical:15 }}>
            <View>
                <Text>{title}</Text>
            </View>
            <View>
                <Text>Chữ màu đen</Text>
            </View>
        </View>
    );
}

export default GiCungDuoc;
