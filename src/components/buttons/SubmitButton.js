import React, { Component } from 'react';
import {
    TouchableOpacity, TouchableNativeFeedback,
    Platform, Text
} from 'react-native';
import { submitButtonStyles } from '../../styles/Buttons';


export default SubmitButton = (props) => {
    const { label, onPressBtn } = props;

    if (Platform.OS === 'ios') {
        return (
            <TouchableOpacity
                onPress={onPressBtn}
                style={[submitButtonStyles.btnConatiner, {}]}>
                <Text style={submitButtonStyles.btnLabel}>
                    {label}
                </Text>
            </TouchableOpacity>
        )
    }

    return (
        <TouchableNativeFeedback
            onPress={onPressBtn}
            style={[submitButtonStyles.btnConatiner, {}]}>
            <Text style={submitButtonStyles.btnLabel}>
                {label}
            </Text>
        </TouchableNativeFeedback>
    )


};


