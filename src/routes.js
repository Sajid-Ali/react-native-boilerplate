import { createStackNavigator } from "react-navigation";
import LoginScreen from "./containers/screens/LoginScreen";

export default createStackNavigator({
  SignInScreen: { screen: LoginScreen, },
}, {
    headerMode: null
  }
);



// export const createRootNavigator = () => {
//   console.log('..................');
//   return createStackNavigator(
//     {
//       SignedOut: {
//         screen: SignedOut
//       },
//     },
//     {
//       headerMode: "none",
//       initialRouteName: "SignedOut",
//
//       transitionConfig: () => ({
//         screenInterpolator: (sceneProps) => {
//           //     // Disable the transition animation when resetting to the home screen.
//           //     // if (
//           //     //   sceneProps.index === 0 &&
//           //     //   sceneProps.scene.route.routeName !== 'SignedIn' &&
//           //     //   sceneProps.scenes.length > 2
//           //     // ) return null
//
//           //     // // Otherwise, use the usual horizontal animation.
//           //     // return CardStackStyleInterpolator.forHorizontal(sceneProps)
//         },
//       })
//     }
//   );
// };
