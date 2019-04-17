import { createStackNavigator } from "react-navigation";
import LoginScreen from "./containers/screens/LoginScreen";
import SignUpScreen from "./containers/screens/SignUpScreen";

export default createStackNavigator({
  SignInScreen: { screen: LoginScreen },
  SignUpScreen: { screen: SignUpScreen },
}, {
    headerMode: null,
  });
