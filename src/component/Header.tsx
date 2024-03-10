import { Image, StyleSheet, Text, View } from "react-native";

const Header = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.icon}>☰</Text>
            </View>
            <View>
                <Text style={styles.title}>Trang Chủ</Text>
                
            </View>
            
            <View>
                <Image source={require('../assets/book.png')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
    
        color: '#FF0000',
        fontWeight: '700',
        fontSize: 16,
        textTransform: 'uppercase',
    },
    icon: {
    
        fontSize: 24,
        marginLeft: 15,



    },
});

export default Header;
