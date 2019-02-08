import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import { homeScreenStyles } from '../../styles/Layouts';
import { SubmitButton } from '../buttons';
import { BUTTON_LABELS } from '../../values';


class HomeScreen extends Component {


    render() {
        return (
            <View style={homeScreenStyles.homeContainer}>
                <SubmitButton
                    label={BUTTON_LABELS.START_QUESTIONNAIRE}
                    onPressBtn={this.onPressStartQuestionnaire}
                />
            </View>
        )
    }

    onPressStartQuestionnaire() {
        console.log('Start Questionare');
    }

}


export default HomeScreen;