import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SubmitButton } from '../buttons';
import quesList from '../../data/questions';
import { OptionItem, AppStatusBar } from '../widgets';
import { ResultDialog } from '../dialogs';
import { RESULT_DIALOG_ACTION_LABELS, BUTTON_LABELS } from '../../values';
import { qnAScreenStyles } from '../../styles/Layouts';

class QnAScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            isAnswerCorrect: false,
            qIndex: 0,                                  // this index represents current question
            optionSelected: -1,                        // index of selected option

        }
    }

    render() {
        const { options } = quesList[this.state.qIndex];
        return (
            <View style={qnAScreenStyles.container}>
                <AppStatusBar />
                {this.renderDialog()}
                <ScrollView style={qnAScreenStyles.optionContainer}>
                    {this.renderQuestion()}
                    {this.renderOptions(options)}
                </ScrollView>
                <SubmitButton
                    label={BUTTON_LABELS.CHECK_ANSWER}
                    onPressBtn={this.onPressCheckBtn.bind(this)} />
            </View>
        );
    }

    renderOptions(options) {
        let optionGroups = [];
        let nGroup = (options.length % 2 === 0) ?
            options.length / 2 : (options.length / 2) + 1;
        let optIndex = 0;
        for (let i = 0; i < nGroup; i++) {
            optionGroups[i] = [];
            let optionGroupItem = [];
            for (let j = 0; j < 2 && optIndex < options.length; j++) {
                optionGroupItem.push(
                    <OptionItem
                        key={String(optIndex)}
                        onPress={this.onPressOption.bind(this, optIndex)}
                        optionData={options[optIndex]}
                        isSelected={this.isOptionSelected(optIndex)}
                    />
                );
                optIndex++;
            };
            optionGroups[i].push(optionGroupItem);

        }
        return optionGroups.map((item, index) => {
            return (
                <View
                    key={String(index)}
                    style={qnAScreenStyles.optionGroup}>
                    {item}
                </View>
            );
        })
    }



    renderDialog() {
        return (
            <ResultDialog
                footerLabel={this.getResultDialogAction()}
                onPressDialogBtn={this.onPressDialogClose.bind(this)}
                isVisible={this.state.visible}
                isAnswerCorrect={this.state.isAnswerCorrect}
            />
        )
    }

    renderQuestion() {
        return (
            <View style={qnAScreenStyles.questionContainer}>
                <Text style={qnAScreenStyles.questionTxt}>
                    {this.getQuestionTxt()}
                </Text>
            </View>
        )
    }
    getQuestionTxt = () => {
        return "Q (" + (this.state.qIndex + 1) + "/"
            + quesList.length + ") - "
            + quesList[this.state.qIndex].question
    }

    onPressCheckBtn = () => {
        if (this.state.optionSelected !== -1) {
            let currentQues = quesList[this.state.qIndex];
            let currentOptions = currentQues.options;
            if (currentQues.answer.code ===
                currentOptions[this.state.optionSelected].code) {
                // user's answer is correct
                this.setState(...this.state, {
                    visible: true,
                    isAnswerCorrect: true
                })
            } else {
                this.setState(...this.state, {
                    visible: true,
                    isAnswerCorrect: false
                })
            }
        }
    }


    getResultDialogAction = () => {
        if (!this.state.isAnswerCorrect) {
            return RESULT_DIALOG_ACTION_LABELS.RETRY;
        } else if (this.isOnLastQuestion()) {
            return RESULT_DIALOG_ACTION_LABELS.FINISH;
        }
        return RESULT_DIALOG_ACTION_LABELS.NEXT;
    }

    onPressDialogClose = () => {
        if (this.state.isAnswerCorrect) {
            if (this.isOnLastQuestion()) {
                // user is on last question 
                // navigate back to home screen
                this.setState({
                    ...this.state,
                    visible: false,
                }, () => {

                    this.props.navigation.goBack();
                });

            } else {
                this.setState({
                    ...this.state,
                    visible: false,
                    optionSelected: -1,
                    qIndex: this.state.qIndex + 1
                });
            }
        } else {
            this.setState({
                ...this.state,
                visible: false,
                isAnswerCorrect: false,
                optionSelected: -1,
            });
        }
    }

    isOptionSelected = (optionIndex) => {
        return optionIndex === this.state.optionSelected;
    }

    isOnLastQuestion = () => {
        return this.state.qIndex === quesList.length - 1;
    }

    onPressOption = (optionIndex) => {
        this.setState({
            ...this.state,
            optionSelected: optionIndex
        })
    }
}


export default QnAScreen;