/* eslint-disable */
import React from "react";
import { StyleSheet, View, Alert, AsyncStorage } from "react-native";
import { connect } from "react-redux";

import Button from "../../components/common/Button";
import FormTextInput from "../../components/common/FormTextInput";
import strings from "../../config/strings";
// import imageLogo from "../assets/images/logo.png";
import colors from "../../config/colors";
import { loginRequest } from "../../actions/loginActions";
import * as selectors from "../../selectors/loginSelectors";
import { toJS } from "../../components/common/toJS";

import Biometrics from 'react-native-biometrics'

class LoginScreen extends React.Component {
  state = {
    email: "peter@klaven",
    password: "cityslicka",
  };

  handleEmailChange = (email) => {
    this.setState({ email });
  };

  handlePasswordChange = (password) => {
    this.setState({ password });
  };

  handleLoginPress = () => {
    const { email, password } = this.state;
    if (email && password) {
      this.props.loginAction({
        email,
        password
      });
    }
  };

  handleTouchLogin = () => {
    Biometrics.isSensorAvailable()
      .then((biometryType) => {
        if (biometryType === Biometrics.TouchID) {
          Biometrics.createKeys('Confirm fingerprint')
            .then((publicKey) => {
              console.log(publicKey);
              return Alert.alert('Touch Details',
                `Public Key: ${publicKey}`,
                [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: true },
              );

            })
        } else {
          console.log('Biometrics not supported')
        }
      })
  };

  componentWillReceiveProps (nextProps) {
    const { data } = nextProps.user;
    const { navigation } = this.props;
    if (data && data.token) {
      navigation.navigate("SignUpScreen");
    }
  }

  render () {
    console.log(this.props);
    return (
      <View style={styles.container}>
        {/* <Image source={imageLogo} style={styles.logo} /> */}
        <View style={styles.form}>
          <FormTextInput
            value={this.state.email}
            onChangeText={this.handleEmailChange}
            placeholder={strings.EMAIL_PLACEHOLDER}
          />
          <FormTextInput
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            placeholder={strings.PASSWORD_PLACEHOLDER}
            secureTextEntry
          />
          <Button label={strings.LOGIN} onPress={this.handleLoginPress} />
          <Button label={strings.TOUCH_LOGIN} onPress={this.handleTouchLogin} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center",
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%",
  },
});

const mapStateToProps = state => ({
  user: selectors.makeSelectLoginUser()(state),
});

const mapDispatchToProps = dispatch => ({
  loginAction: data => dispatch(loginRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(toJS(LoginScreen));
