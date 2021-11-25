import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import Header from '../../components/header';
import Icon from 'react-native-vector-icons/MaterialIcons';

class LupaPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      email: 'contoh@gmail.com',
    };
  }

  back = () => this.props.navigation.goBack();

  render() {
    return (
      <View style={styles.container}>
        <Header
          onpress={this.back}
          title="Lupa Password"
          backgroundColor="#2496F3"
        />
        <View style={styles.content}>
          <Text style={styles.title1}>Temukan akun anda</Text>
          <View
            style={{
              width: '80%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.destitle1}>
              Masukan alamat email yang terhubung dengan akun anda
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              value={this.state.email}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid="transparent"
              onChangeText={email => this.setState({email})}
            />
          </View>
          <TouchableOpacity
            style={styles.btnLanjutkan}
            onPress={() => this.setState({modal: !this.state.modal})}>
            <Text style={styles.btnTitle}>Lanjutkan</Text>
          </TouchableOpacity>
        </View>

        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modal}>
          <TouchableWithoutFeedback onPress={() => this.setState({modal: false})}>
            <View style={[styles.container1]}>
              <View style={styles.modalContainer}>
                <Text style={{textAlign: 'center', fontSize: 15}}>
                  {' '}
                  {this.state.email === 'contoh@gmail.com' ? (
                    <Text>
                      Sebuah email telah dikirimkan ke{' '}
                      <Text style={{fontWeight: 'bold'}}>
                        {this.state.email}
                      </Text>
                    </Text>
                  ) : (
                    <Text>
                      Email tersebut{' '}
                      <Text style={{fontWeight: 'bold'}}>tidak terdaftar</Text>
                      di dalam sistem
                    </Text>
                  )}{' '}
                </Text>
                <TouchableOpacity
                  onPress={() => this.setState({modal: !this.state.modal})}
                  style={styles.btnModalClose}>
                  <Icon name="close" size={27} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    );
  }
}

export default LupaPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container1: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    borderColor: '#EBEBEB',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderWidth: 1,
    width: '90%',
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  title1: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#000',
    marginTop: 5,
    marginBottom: 10,
  },
  destitle1: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  btnLanjutkan: {
    height: 40,
    width: 120,
    backgroundColor: '#1D74BA',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
  },
  btnTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  modalContainer: {
    height: 110,
    width: '80%',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnModalClose: {
    height: 27,
    width: 27,
    backgroundColor: '#1D74BA',
    borderRadius: 20,
    position: 'absolute',
    right: -10,
    top: -10,
  },
});
