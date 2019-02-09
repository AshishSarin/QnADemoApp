import React from 'react';
import {
    TouchableOpacity, Text,
} from 'react-native';
import { submitButtonStyles } from '../../styles';


export default SubmitButton = (props) => {
    const { label, onPressBtn } = props;


    return (
        <TouchableOpacity
            onPress={onPressBtn}
            style={[submitButtonStyles.btnConatiner, {}]}>
            <Text style={submitButtonStyles.btnLabel}>
                {label}
            </Text>
        </TouchableOpacity>
    );

};


