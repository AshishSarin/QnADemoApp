import { StyleSheet } from 'react-native';

export const optionItemStyles = {
    card: {
        height: 180,
        width: "44%",
        marginLeft: "4%",
        backgroundColor: 'white',
        marginBottom: 2,
    },

    container: {
        borderColor: 'red',
        height: 180
    },

    selectionIndicator: {
        position: 'absolute',
        height: 16, width: 16,
        zIndex: 4,
        backgroundColor: 'white',
        marginTop: 10,
        marginLeft: 10,
        borderRadius: 8,
    },

    optionImg: {
        width: "100%",
        height: 150,
    },

    valueContainer: {
        justifyContent: 'center',
        paddingLeft: 8, height: 30
    },

    value: {
        color: 'black'
    }

}