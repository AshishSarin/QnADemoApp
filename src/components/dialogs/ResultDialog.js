import React, { Component } from 'react';
import { Text, Image, } from 'react-native';
import { SubmitButton } from '../buttons';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { resultDialogStyles } from '../../styles/Dialogs';
import { RESULT_TEXT } from '../../values';

export default class ResultDialog extends Component {

    render() {

        const { onPressDialogBtn, footerLabel,
            isVisible, isAnswerCorrect,
        } = this.props;

        let resultImage = isAnswerCorrect ?
            require('../../images/result_correct.png') :
            require('../../images/result_wrong.png');

        return (
            <Dialog
                footer={<SubmitButton label={footerLabel}
                    onPressBtn={onPressDialogBtn} />}
                visible={isVisible}
            >
                <DialogContent style={resultDialogStyles.container}>
                    <Image style={resultDialogStyles.resultImg} source={resultImage} />

                    <Text style={resultDialogStyles.resultText}>
                        {isAnswerCorrect ? RESULT_TEXT.PREFIX_CORRECT : RESULT_TEXT.PREFIX_WRONG}
                    </Text>
                    <Text style={resultDialogStyles.resultText}>
                        {isAnswerCorrect ? RESULT_TEXT.CORRECT : RESULT_TEXT.WRONG}
                    </Text>
                </DialogContent>
            </Dialog >

        )
    }
}