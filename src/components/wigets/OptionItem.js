import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, } from 'react-native';
import CardView from 'react-native-cardview';
import { ScrollView } from 'react-native-gesture-handler';
import { SubmitButton } from '../buttons';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import quesList from '../../data/questions';
import { getImage, images } from '../../utils/ImageUtils';
import { optionItemStyles } from '../../styles/Widgets';


export default class OptionItem extends Component {
    render() {

        const { optionData, isSelected, onPress } = this.props

        let image = getImage(optionData.imgCd)
        // console.warn(image);
        let tickImage = isSelected ? require('../../images/selected_option.png') : {}
        let itemBorderWidth = isSelected ? 2 : 0;
        return (
            <CardView
                cornerOverlap={false}
                style={optionItemStyles.card}
                cardElevation={2}
                cardMaxElevation={2}
                cornerRadius={5}
            >

                <TouchableOpacity
                    onPress={onPress}
                    style={[optionItemStyles.container, { borderWidth: itemBorderWidth }]}
                >
                    <Image
                        source={tickImage}
                        style={optionItemStyles.selectionIndicator} />
                    <Image
                        source={image ? image.uri : {}}
                        style={optionItemStyles.optionImg} />
                    <View style={optionItemStyles.valueContainer}>
                        <Text style={optionItemStyles.value}>{optionData.value}</Text>
                    </View>
                </TouchableOpacity>
            </CardView>
        );
    }

}