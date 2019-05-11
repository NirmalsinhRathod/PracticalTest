import { StyleSheet } from 'react-native';
import * as COLOR from '../../constants/colors'
import * as CONSTANT from '../../constants/constant';

export default styles = StyleSheet.create({
    mainKeyboardView: {
        height: '100%',
        width: '100%',
        backgroundColor: 'red',
    },
    container: {
        width: '100%', height: '100%',
        backgroundColor: COLOR.MAIN_BG_COLOR
    },
    keyboardView: {
        width: CONSTANT.SCREEN_WIDTH,
        height: CONSTANT.SCREEN_HEIGHT,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainSignup: {
        marginTop: 10,
        flexDirection: 'row',
        height: 30,
        backgroundColor: 'transparent',
        alignItems: 'center'
    },
    signClick: {
        backgroundColor: 'transparent',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textField: {
        width: '80%',
        height: 40,
        backgroundColor: 'white',
        marginBottom: 10
    }
});
