import { StyleSheet } from 'react-native';

export const homeScreenStyles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export const qnAScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECE5DF',
    },

    questionContainer: {
        alignItems: 'center',
        marginTop: 12
    },

    questionTxt: {
        color: 'black',
        fontSize: 14
    },

    optionContainer: {
        paddingHorizontal: "6%"
    },
    optionGroup: {
        flexDirection: 'row',
        marginTop: "6%"
    }

})