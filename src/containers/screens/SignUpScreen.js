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

class SignUpScreen extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  handleEmailChange = email => {
    this.setState({ email: email });
  };

  handlePasswordChange = password => {
    this.setState({ password: password });
  };

  handleLoginPress = () => {
    const { email, password } = this.state;
    if (email && password) {
      // this.props.loginAction({ email, password });
    }
  };

  render () {
    console.log(this.props, '/////////////');
    return (
      <View style={styles.container}>
        {/*<Image source={imageLogo} style={styles.logo} />*/}
        <View style={styles.form}>
          <FormTextInput
            value={this.state.first_name}
            onChangeText={this.handleEmailChange}
            placeholder={strings.FIRST_NAME_PLACEHOLDER}
          />
          <FormTextInput
            value={this.state.last_name}
            onChangeText={this.handleEmailChange}
            placeholder={strings.LAST_NAME_PLACEHOLDER}
          />
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
          <FormTextInput
            value={this.state.confirm_password}
            onChangeText={this.handlePasswordChange}
            placeholder={strings.CONFIRM_PASSWORD_PLACEHOLDER}
            secureTextEntry={true}
          />
          <Button label={strings.SIGNUP} onPress={this.handleLoginPress} />
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

const mapStateToProps = state => {
  return {
    list: state.user.data
  }
};

const mapDispatchToProps = dispatch => {
  return {
    add: (name) => {
      dispatch(console.log(name))
    }
  }
};

export default connect()(SignUpScreen)
