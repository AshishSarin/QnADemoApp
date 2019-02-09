import React, { Component } from 'react';
import { View, StatusBar, } from 'react-native';
import { SubmitButton } from '../buttons';
import { BUTTON_LABELS } from '../../values';
import { homeScreenStyles } from '../../styles';
import { AppStatusBar } from '../widgets';


class HomeScreen extends Component {


    render() {
        return (
            <View style={homeScreenStyles.homeContainer}>
                <AppStatusBar />
                <SubmitButton
                    label={BUTTON_LABELS.START_QUESTIONNAIRE}
                    onPressBtn={this.onPressStartQuestionnaire.bind(this)}
                />
            </View>
        )
    }

    onPressStartQuestionnaire() {
        const { navigate } = this.props.navigation;
        navigate('QnAScreen');
    }

}


export default HomeScreen;