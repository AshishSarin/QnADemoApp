import React from 'react';
import { Text, Image, } from 'react-native';
import { SubmitButton } from '../buttons';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { RESULT_TEXT } from '../../values';
import { resultDialogStyles } from '../../styles';

export default ResultDialog = (props) => {

    const { onPressDialogBtn, footerLabel,
        isVisible, isAnswerCorrect,
    } = props;

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

    );

}