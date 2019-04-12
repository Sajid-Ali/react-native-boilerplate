import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { connect } from 'react-redux';
import Button from "../../components/common/Button";
import FormTextInput from "../../components/common/FormTextInput";
import strings from "../../config/strings";
// import imageLogo from "../assets/images/logo.png";
import colors from "../../config/colors";
import { loginAction } from '../../actions/loginActions'
import * as selector from '../../selectors/loginSelectors';

class LoginScreen extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleEmailChange = email => {
    this.setState({ email: email });
  };

  handlePasswordChange = password => {
    this.setState({ password: password });
  };

  handleLoginPress = () => {
    const { email, password } = this.state;
    this.props.navigation.navigate('SignUpScreen');
    if (email && password) {
      // this.props.loginAction({ email, password });
    }
  };

  render () {
    console.log(this.props);
    return (
      <View style={styles.container}>
        {/*<Image source={imageLogo} style={styles.logo} />*/}
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
            secureTextEntry={true}
          />
          <Button label={strings.LOGIN} onPress={this.handleLoginPress} />
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
    justifyContent: "space-between"
  },
  logo: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center"
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%"
  }
});

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => {
  return {
    // loginAction: data => dispatch(loginAction(data))
  }
};

export default LoginScreen;
