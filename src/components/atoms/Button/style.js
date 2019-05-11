import { StyleSheet } from 'react-native';
import * as constant from '../../../constants/constant'

export default styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '80%',
        height: constant.BUTTON_HEIGHT,
        borderRadius: constant.BUTTON_HEIGHT / 2,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
