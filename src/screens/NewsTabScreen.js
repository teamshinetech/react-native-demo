/**
 * Created by zhuhuiping on 2017/7/5.
 */
import React , { Component }from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import Home from './home';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    KeyboardAvoidingView,
    View
} from  'react-native';


class NewsTabScreen extends React.Component{

    render() {
        return (
            <Provider store={store}>
                <Home/>
            </Provider>
            // <View style={styles.container}>
            //     <KeyboardAvoidingView behavior="padding" style={styles.container}>
            //         <TextInput
            //             underlineColorAndroid={'#ffffff'}
            //             placeholder="这里是一个简单的输入框"
            //             style={styles.textInput} />
            //     </KeyboardAvoidingView>
            // </View>
        );
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    textInput: {
        borderRadius: 5,
        borderWidth: 1,
        height: 140,
        paddingHorizontal: 10,
    },
});

export default NewsTabScreen;