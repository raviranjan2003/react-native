import React from 'react';
import {
    Text,
    View,
    useColorScheme,
    StyleSheet
} from 'react-native';

// const AppPro = () => {
//     return (
//         <View>
//             <Text>Hello from AppPro !!</Text>
//         </View>
//     )
// }

function AppPro (){
    const isDark = useColorScheme() === 'dark';
    return (
        <View style={styles.container}>
            <Text style={isDark ? styles.whiteText : styles.darkText}>Hello From AppPro !!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center' 
    },
    whiteText: {
        color: '#ffffff'
    },
    darkText: {
        color: '#000000'
    }
})

export default AppPro;