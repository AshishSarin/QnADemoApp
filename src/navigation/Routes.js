import { createAppContainer, createStackNavigator } from 'react-navigation';
import { HomeScreen, QnAScreen } from '../components/screens';
import { header_color, header_tint_color } from '../styles';
import { SCREEN_TITLES } from '../values';


const AppStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                title: SCREEN_TITLES.HOME_SCREEN
            }
        },

        QnAScreen: {
            screen: QnAScreen,
            navigationOptions: {
                title: SCREEN_TITLES.QA_SCREEN
            }
        }
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerTintColor: header_tint_color,
            headerStyle: {
                backgroundColor: header_color,

            }
        }
    }
);

export default createAppContainer(AppStack);