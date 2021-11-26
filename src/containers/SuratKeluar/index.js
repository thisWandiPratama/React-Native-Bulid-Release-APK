import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  Animated,
  StyleSheet,
} from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Interactable from 'react-native-interactable';
const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height - 75,
};

class SuratKeluar extends React.Component {
  constructor(props) {
    super(props);
    this._deltaY = new Animated.Value(Screen.height - 100);
    this._deltaX = new Animated.Value(Screen.height - 100);
    this.state = {
      tagTelahDitandai: false,
      tagTerbaru: true,
      modalVisible: false,
      content: [
        {
          id: 476,
          label: 'Subbagian Tata Usaha',
          title: 'Undangan Meeting Video Con..',
          NoSeri: 'B-1119G/Biroum&SDM/KA.06...',
          date: '14/08/2021',
          tagTerbaru: true,
          tagTelahDitandai: false,
        },
        {
          id: 454,
          label: 'ASIPIRASI AHLI MUDA 1',
          title: 'Pelaksanaan Kerjasama den...',
          NoSeri: 'ND-51/Setmen/KL.01/03/2021',
          date: '14/08/2021',
          tagTerbaru: true,
          tagTelahDitandai: true,
        },
        {
          id: 445,
          label: 'Subbagian Tata Usaha',
          title: 'Permohonan Perubahan Ala..',
          NoSeri: '135/FSRP-P/1/2021',
          date: '17/07/2021',
          tagTerbaru: true,
          tagTelahDitandai: false,
        },
        {
          id: 435,
          label: 'ASIPIRASI AHLI MUDA 1',
          title: 'Permintaan Identifikasi dan...',
          NoSeri: 'ND-51/Setmen/KL.01/03/2021',
          date: '14/08/2021',
          tagTerbaru: true,
          tagTelahDitandai: true,
        },
        {
          id: 426,
          label: 'Subbagian Tata Usaha',
          title: 'Undangan Meeting video con..',
          NoSeri: '135/FSRP-P/1/2021',
          date: '17/07/2021',
          tagTerbaru: true,
          tagTelahDitandai: false,
        },
        {
          id: 411,
          label: 'ASIPIRASI AHLI MUDA 1',
          title: 'Permintaan Identifikasi dan...',
          NoSeri: 'ND-51/Setmen/KL.01/03/2021',
          date: '14/08/2021',
          tagTerbaru: true,
          tagTelahDitandai: true,
        },
      ],
    };
  }

  setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };


  setTagTandai = (indexParam) => {
    let elementIndex = this.state.content.findIndex((element, index) => index == indexParam)
    let newContent = [...this.state.content]
    newContent[elementIndex] = { ...newContent[elementIndex], tagTandai: !newContent[elementIndex].tagTandai }
    console.log(newContent)
    this.setState({ content: newContent })
  }


  setTagTandai = (indexParam) => {
    let elementIndex = this.state.content.findIndex((element, index) => index == indexParam)
    let newContent = [...this.state.content]
    newContent[elementIndex] = { ...newContent[elementIndex], tagTelahDitandai: !newContent[elementIndex].tagTelahDitandai }
    console.log(newContent)
    this.setState({ content: newContent })
  }
  renderContent = () => {
    return this.state.content.map((value, index) => {
      switch (true) {
        case this.state.tagTerbaru === value.tagTerbaru &&
          value.tagTerbaru === true:
          return (
            <View
              key={index}
              style={{
                height: 85,
                width: '100%',
                borderBottomWidth: 2,
                borderBottomColor: '#E7EAEF',
                flexDirection: 'row',
                backgroundColor: 'white',
              }}>
              <TouchableOpacity onPress={() =>
                this.props.navigation.navigate('DetailSuratKeluar', {
                  nosuratmasuk: value.NoSeri,
                })
              }
                style={{
                  height: 85,
                  borderBottomWidth: 2,
                  borderBottomColor: '#E7EAEF',
                  flexDirection: 'row',
                  backgroundColor: 'white',
                }}>
                <View
                  style={{
                    width: 60,
                    height: 85,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold' }}>
                    {value.id}
                  </Text>
                </View>
                <View
                  style={{
                    height: 85,
                    width: 212,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#000',
                      fontWeight: 'bold',
                    }}>
                    {value.label}
                  </Text>
                  <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#000' }}>
                    {value.title}
                  </Text>
                  <Text style={{ fontSize: 15, color: '#80878E' }}>
                    {value.NoSeri}
                  </Text>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    paddingBottom: 10,
                  }}>
                  {value.date}
                </Text>
                {value.tagTelahDitandai === true ? (
                  <TouchableOpacity onPress={() => this.setTagTandai(index)}>
                    <Image
                      source={{
                        uri: 'https://i.ibb.co/cQwJxpx/office-push-pin.png',
                      }}
                      style={{ height: 25, width: 25 }}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => this.setTagTandai(index)}>
                    <Image
                      source={{ uri: 'https://i.ibb.co/1bcvkCQ/pin.png' }}
                      style={{ height: 25, width: 25 }}
                    />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          );
          break;
        case this.state.tagTelahDitandai === value.tagTelahDitandai &&
          value.tagTelahDitandai === true:
          return (
            <View
              key={index}
              style={{
                height: 85,
                width: '100%',
                borderBottomWidth: 2,
                borderBottomColor: '#E7EAEF',
                flexDirection: 'row',
                backgroundColor: 'white',
              }}>
              <TouchableOpacity onPress={() =>
                this.props.navigation.navigate('DetailSuratKeluar', {
                  nosuratmasuk: value.NoSeri,
                })
              }
                style={{
                  height: 85,
                  borderBottomWidth: 2,
                  borderBottomColor: '#E7EAEF',
                  flexDirection: 'row',
                  backgroundColor: 'white',
                }}>
                <View
                  style={{
                    width: 60,
                    height: 85,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold' }}>
                    {value.id}
                  </Text>
                </View>
                <View
                  style={{
                    height: 85,
                    width: 212,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#000',
                      fontWeight: 'bold',
                    }}>
                    {value.label}
                  </Text>
                  <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#000' }}>
                    {value.title}
                  </Text>
                  <Text style={{ fontSize: 15, color: '#80878E' }}>
                    {value.NoSeri}
                  </Text>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    paddingBottom: 10,
                  }}>
                  {value.date}
                </Text>
                {value.tagTelahDitandai === true ? (
                  <TouchableOpacity onPress={() => this.setTagTandai(index)}>
                    <Image
                      source={{
                        uri: 'https://i.ibb.co/cQwJxpx/office-push-pin.png',
                      }}
                      style={{ height: 25, width: 25 }}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => this.setTagTandai(index)}>
                    <Image
                      source={{ uri: 'https://i.ibb.co/1bcvkCQ/pin.png' }}
                      style={{ height: 25, width: 25 }}
                    />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          );
          break;
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.boxTitle}>
            <Text style={styles.titleHeader}>Daftar Surat Keluar</Text>
            <View style={styles.boxIconTitle}>
              <Icon name="help" size={25} color="white" />
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Notifikasi', {
                    tagDiskusi: false,
                    tagSuratMasuk: false,
                    tagSuratKeluar: true,
                    tagSuratCC: false,
                  })
                }>
                <Icon name="notifications" size={25} color="white" />
                <View style={styles.customBadge} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <View style={styles.labelName}>
            <Icon name="mail" size={80} color="#EB5F3C" />
            <View style={styles.boxCount}>
              <Text style={styles.count}>9</Text>
              <Text style={styles.desCount}>Belum dibaca</Text>
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <View style={styles.boxTag}>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  tagTelahDitandai: !this.state.tagTelahDitandai,
                  tagTerbaru:
                    this.state.tagTerbaru === true &&
                      this.state.tagTerbaru === false
                      ? false
                      : !this.state.tagTerbaru,
                })
              }
              style={[
                styles.listTag,
                {
                  backgroundColor:
                    this.state.tagTelahDitandai === true
                      ? '#EB5F3C'
                      : 'transparent',
                },
              ]}>
              <Text
                style={{
                  fontSize: 11,
                  color:
                    this.state.tagTelahDitandai === true ? 'white' : '#EB5F3C',
                  fontWeight: 'bold',
                }}>
                Telah ditandai
              </Text>
            </TouchableOpacity>
            <View
              style={[
                styles.listTag,
                {
                  backgroundColor:
                    this.state.tagTerbaru === true ? '#EB5F3C' : 'transparent',
                },
              ]}>
              <Text
                style={{
                  fontSize: 11,
                  color: this.state.tagTerbaru === true ? 'white' : '#EB5F3C',
                  fontWeight: 'bold',
                }}>
                Terbaru
              </Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                this.setState({ modalVisible: !this.state.modalVisible })
              }
              style={[
                styles.listTag,
                {
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              ]}>
              <Text style={{ fontSize: 11, color: '#EB5F3C' }}>Filter</Text>
              <View
                style={{
                  height: 18,
                  width: 18,
                  backgroundColor: '#EB5F3C',
                  marginLeft: 7,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 3,
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    color: 'white',
                    fontWeight: 'bold',
                  }}>
                  2
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 40,
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottomColor: '#E7EAEF',
              borderBottomWidth: 2,
            }}>
            <TextInput
              placeholder="Cari Surat Keluar"
              style={{ paddingLeft: 50 }}
            />
            <View style={{ paddingRight: 15 }}>
              <Icon name="search" size={25} color="#727982" />
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <ScrollView>{this.renderContent()}</ScrollView>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}>
          <View style={styless.panelContainer} pointerEvents={'box-none'}>
            <Animated.View
              pointerEvents={'box-none'}
              style={[
                styless.panelContainer,
                {
                  backgroundColor: 'black',
                  opacity: this._deltaY.interpolate({
                    inputRange: [0, Screen.height - 100],
                    outputRange: [0.5, 0],
                    extrapolateRight: 'clamp',
                  }),
                },
              ]}
            />
            <Interactable.View
              verticalOnly={true}
              snapPoints={[{ y: 0 }, { y: Screen.height - 400 }, { y: Screen.height - 300 }]}
              boundaries={{ top: -300 }}
              initialPosition={{ y: Screen.height - 300 }}
              animatedValueY={this._deltaY}
              animatedValueX={this._deltaX}>
              <TouchableWithoutFeedback
                onPress={() => this.setState({ modalVisible: false })}>
                <View style={{ height: '10%' }} />
              </TouchableWithoutFeedback>
              <View style={styless.panel}>
                <View style={styless.panelHeader}>
                  <View style={styless.panelHandle} />
                </View>
                <View
                  style={{
                    margin: 19,
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: '#000',
                    }}>
                    Filter
                  </Text>

                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                      color: '#000',
                      paddingTop: 20,
                    }}>
                    Urutkan
                  </Text>
                  <TouchableOpacity
                    style={[
                      styles.listTag,
                      {
                        backgroundColor:
                          this.state.tagTerbaru === true
                            ? '#EB5F3C'
                            : 'transparent',
                        marginLeft: 0,
                        marginTop: 5,
                      },
                    ]}>
                    <Text
                      style={{
                        fontSize: 11,
                        color:
                          this.state.tagTerbaru === true ? 'white' : 'white',
                        fontWeight: 'bold',
                      }}>
                      Terbaru
                    </Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                      color: '#000',
                      paddingTop: 20,
                    }}>
                    Tampilkan
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <TouchableOpacity
                      style={[
                        styles.listTag,
                        { backgroundColor: 'transparent' },
                      ]}>
                      <Text
                        style={{
                          fontSize: 11,
                          color: '#EB5F3C',
                          fontWeight: 'bold',
                        }}>
                        Telah ditandai
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Interactable.View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default SuratKeluar;

const styless = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef',
  },
  panelContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  panel: {
    height: Screen.height + 300,
    padding: 20,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    shadowOpacity: 0.4,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#459FED',
    alignItems: 'center',
    marginVertical: 10,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  photo: {
    width: Screen.width - 40,
    height: 225,
    marginTop: 30,
  },
  map: {
    height: Screen.height,
    width: Screen.width,
  },
});
