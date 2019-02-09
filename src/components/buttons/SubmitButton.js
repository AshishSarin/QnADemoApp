import React, { Component } from 'react';
import {
    TouchableOpacity, TouchableNativeFeedback,
    Platform, Text, View
} from 'react-native';
import { submitButtonStyles } from '../../styles/Buttons';


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


