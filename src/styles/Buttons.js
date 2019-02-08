import { StyleSheet } from 'react-native';
import { app_primary_color, app_btn_label_color } from './Colors';

export const submitButtonStyles = StyleSheet.create({
    btnConatiner: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 56,
        paddingHorizontal: 24,
        backgroundColor: app_primary_color
    },

    btnLabel: {
        color: app_btn_label_color,
        fontSize: 16,
        fontWeight: 'bold'
    }
});