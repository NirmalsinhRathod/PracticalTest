import { StyleSheet } from 'react-native';
import * as COLOR from '../../constants/colors'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLOR.MAIN_BG_COLOR
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20
    },
    text: {
        fontSize: 30
    }
});