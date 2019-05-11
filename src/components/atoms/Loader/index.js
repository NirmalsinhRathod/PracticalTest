import React from 'react';
import { View, ActivityIndicator, Modal } from 'react-native';
import styles from './style';
import * as COLOR from '../../../constants/colors';

class Loader extends React.Component {
    render() {
        const { isLoading } = this.props;

        // When loader is not active, no need to return whole view. So return with null
        if (!isLoading) return null;

        return (
            <Modal
                animationType='fade'
                transparent={true}
                visible={isLoading}
                onRequestClose={() => {
                    this.onClose()
                }}>
                <View
                    pointerEvents={'auto'}
                    style={styles.loader}
                >
                    <ActivityIndicator
                        size='large'
                        color={COLOR.INDICATOR}
                    />
                </View>
            </Modal>
        );
    }
}
export default Loader;