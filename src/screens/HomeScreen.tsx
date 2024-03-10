import { View } from "react-native";
import Header from "../component/Header";
import ListCategory from "../component/ListCategory";
import LisProduct from "./LisProduct";

const HomeScreen = () => {
    return (
        <View style={{ paddingHorizontal: 15 }}>
            <Header />
            <ListCategory/>
            <LisProduct/>
        </View>
    );
};

export default HomeScreen;
