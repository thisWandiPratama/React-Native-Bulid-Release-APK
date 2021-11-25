import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity,
  Dimensions,
  Animated,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Interactable from 'react-native-interactable';
const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height - 75,
};

class DraftSuratKeluar extends React.Component {
  constructor(props) {
    super(props);
    this._deltaY = new Animated.Value(Screen.height - 100);
    this._deltaX = new Animated.Value(Screen.height - 100);
    this.state = {
      tagVerifikasi: false,
      tagApproved: false,
      tagTandaTangan: false,
      tagAll: true,
      tagTerbaru: true,
      modalVisible: false,
      content: [
        {
          id: 930,
          label: 'Rahasia',
          title: 'GUBERNUR SUMATERA SELATAN',
          NoSeri: '001/DARURAT-SB/1/2021',
          date: '14/08/2021',
          tagTandai: false,
          tagVerifikasi: false,
          tagApproved: true,
          tagTandaTangan: false,
        },
        {
          id: 188,
          label: 'Penting',
          title: 'GUBERNUR SULAWESI BARAT',
          NoSeri: '001/DARURAT -SB/1/2021',
          date: '14/08/2021',
          tagTandai: false,
          tagVerifikasi: true,
          tagApproved: false,
          tagTandaTangan: true,
        },
        {
          id: 179,
          label: 'Rahasia',
          title: 'FARID SR & PARTNERS',
          NoSeri: '135/FSRP-P/1/2021',
          date: '17/07/2021',
          tagTandai: true,
          tagVerifikasi: false,
          tagApproved: true,
          tagTandaTangan: false,
        },
        {
          id: 239,
          label: 'Rahasia',
          title: 'FARID SR & PARTNERS',
          NoSeri: '135/FSRP-P/1/2021',
          date: '17/07/2021',
          tagTandai: true,
          tagVerifikasi: false,
          tagApproved: false,
          tagTandaTangan: false,
        },
        {
          id: 165,
          label: 'Biasa',
          title: 'RAPIMNAS FORUM PSAA LKSA',
          NoSeri: '066/FN.PSAA/XII/2020',
          date: '17/06/2021',
          tagTandai: false,
          tagVerifikasi: false,
          tagApproved: false,
          tagTandaTangan: true,
        },
        {
          id: 161,
          label: 'Segera',
          title: 'YAYASAN LENTERA ANAK(LENTER..',
          NoSeri: '002/YLA/26-02/1/2021',
          date: '14/05/2021',
          tagTandai: false,
          tagVerifikasi: false,
          tagApproved: true,
          tagTandaTangan: true,
        },
        {
          id: 382,
          label: 'Rahasia',
          title: 'FARID SR & PARTNERS',
          NoSeri: '135/FSRP-P/1/2021',
          date: '17/07/2021',
          tagTandai: true,
          tagVerifikasi: false,
          tagApproved: false,
          tagTandaTangan: false,
        },
        {
          id: 138,
          label: 'Penting',
          title: 'GUBERNUR SULAWESI BARAT',
          NoSeri: '001/DARURAT -SB/1/2021',
          date: '14/08/2021',
          tagTandai: false,
          tagVerifikasi: true,
          tagApproved: true,
          tagTandaTangan: false,
        },
      ],
    };
  }

  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };

  renderContent = () => {
    return this.state.content.map((value, index) => {
      switch (true) {
        case this.state.tagAll === true:
          return (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('DetailDraftSuratKeluar', {
                  nosuratmasuk: value.NoSeri,
                })
              }
              key={index}
              style={{
                height: 85,
                width: '100%',
                borderBottomWidth: 2,
                borderBottomColor: '#E7EAEF',
                flexDirection: 'row',
                backgroundColor:
                  value.tagVerifikasi === true
                    ? '#83D1F5'
                    : value.tagApproved === true
                    ? '#82CA9C'
                    : value.tagTandaTangan === true
                    ? '#F8C689'
                    : 'white',
              }}>
              <View
                style={{
                  width: 60,
                  height: 85,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 18, color: '#000', fontWeight: 'bold'}}>
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
                <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000'}}>
                  {value.title}
                </Text>
                <Text style={{fontSize: 15, color: '#80878E'}}>
                  {value.NoSeri}
                </Text>
              </View>
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
                {value.tandai === true ? (
                  <Image
                    source={{
                      uri: 'https://i.ibb.co/cQwJxpx/office-push-pin.png',
                    }}
                    style={{height: 25, width: 25}}
                  />
                ) : (
                  <Image
                    source={{uri: 'https://i.ibb.co/1bcvkCQ/pin.png'}}
                    style={{height: 25, width: 25}}
                  />
                )}
              </View>
            </TouchableOpacity>
          );
          break;
        case this.state.tagVerifikasi === value.tagVerifikasi &&
          value.tagVerifikasi === true:
          return (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('DetailDraftSuratKeluar', {
                  nosuratmasuk: value.NoSeri,
                })
              }
              key={index}
              style={{
                height: 85,
                width: '100%',
                borderBottomWidth: 2,
                borderBottomColor: '#E7EAEF',
                flexDirection: 'row',
                backgroundColor:
                  value.tagVerifikasi === true ? '#83D1F5' : 'white',
              }}>
              <View
                style={{
                  width: 60,
                  height: 85,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 18, color: '#000', fontWeight: 'bold'}}>
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
                <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000'}}>
                  {value.title}
                </Text>
                <Text style={{fontSize: 15, color: '#80878E'}}>
                  {value.NoSeri}
                </Text>
              </View>
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
                {value.tandai === true ? (
                  <Image
                    source={{
                      uri: 'https://i.ibb.co/cQwJxpx/office-push-pin.png',
                    }}
                    style={{height: 25, width: 25}}
                  />
                ) : (
                  <Image
                    source={{uri: 'https://i.ibb.co/1bcvkCQ/pin.png'}}
                    style={{height: 25, width: 25}}
                  />
                )}
              </View>
            </TouchableOpacity>
          );
          break;
        case this.state.tagApproved === value.tagApproved &&
          value.tagApproved === true:
          return (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('DetailDraftSuratKeluar', {
                  nosuratmasuk: value.NoSeri,
                })
              }
              key={index}
              style={{
                height: 85,
                width: '100%',
                borderBottomWidth: 2,
                borderBottomColor: '#E7EAEF',
                flexDirection: 'row',
                backgroundColor:
                  value.tagApproved === true ? '#82CA9C' : 'white',
              }}>
              <View
                style={{
                  width: 60,
                  height: 85,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 18, color: '#000', fontWeight: 'bold'}}>
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
                <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000'}}>
                  {value.title}
                </Text>
                <Text style={{fontSize: 15, color: '#80878E'}}>
                  {value.NoSeri}
                </Text>
              </View>
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
                {value.tagTandai === true ? (
                  <Image
                    source={{
                      uri: 'https://i.ibb.co/cQwJxpx/office-push-pin.png',
                    }}
                    style={{height: 25, width: 25}}
                  />
                ) : (
                  <Image
                    source={{uri: 'https://i.ibb.co/1bcvkCQ/pin.png'}}
                    style={{height: 25, width: 25}}
                  />
                )}
              </View>
            </TouchableOpacity>
          );
          break;
        case this.state.tagTandaTangan === value.tagTandaTangan &&
          value.tagTandaTangan === true:
          return (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('DetailDraftSuratKeluar', {
                  nosuratmasuk: value.NoSeri,
                })
              }
              key={index}
              style={{
                height: 85,
                width: '100%',
                borderBottomWidth: 2,
                borderBottomColor: '#E7EAEF',
                flexDirection: 'row',
                backgroundColor:
                  value.tagTandaTangan === true ? '#F8C689' : 'white',
              }}>
              <View
                style={{
                  width: 60,
                  height: 85,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 18, color: '#000', fontWeight: 'bold'}}>
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
                <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000'}}>
                  {value.title}
                </Text>
                <Text style={{fontSize: 15, color: '#80878E'}}>
                  {value.NoSeri}
                </Text>
              </View>
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
                {value.tagTandai === true ? (
                  <Image
                    source={{
                      uri: 'https://i.ibb.co/cQwJxpx/office-push-pin.png',
                    }}
                    style={{height: 25, width: 25}}
                  />
                ) : (
                  <Image
                    source={{uri: 'https://i.ibb.co/1bcvkCQ/pin.png'}}
                    style={{height: 25, width: 25}}
                  />
                )}
              </View>
            </TouchableOpacity>
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
            <Text style={styles.titleHeader}>Draft Surat Keluar</Text>
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
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <View style={styles.labelName}>
            <Icon name="inbox" size={80} color="#F3BA46" />
            <View style={styles.boxCount}>
              <Text style={styles.count}>18</Text>
              <Text style={styles.desCount}>Belum dibaca</Text>
            </View>
          </View>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <View style={styles.boxTag}>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  tagVerifikasi: !this.state.tagVerifikasi,
                  tagApproved: false,
                  tagTandaTangan: false,
                  tagAll:
                    this.state.tagApproved === true ||
                    (this.state.tagTandaTangan && this.state.tagAll === false)
                      ? false
                      : !this.state.tagAll,
                })
              }
              style={[
                styles.listTag,
                {
                  backgroundColor:
                    this.state.tagVerifikasi === true
                      ? '#F3BA46'
                      : 'transparent',
                },
              ]}>
              <Text
                style={{
                  fontSize: 11,
                  color:
                    this.state.tagVerifikasi === true ? 'white' : '#F3BA46',
                  fontWeight: 'bold',
                }}>
                Verifikasi
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  tagVerifikasi: false,
                  tagApproved: !this.state.tagApproved,
                  tagTandaTangan: false,
                  tagAll:
                    this.state.tagVerifikasi === true ||
                    (this.state.tagTandaTangan && this.state.tagAll === false)
                      ? false
                      : !this.state.tagAll,
                })
              }
              style={[
                styles.listTag,
                {
                  backgroundColor:
                    this.state.tagApproved === true ? '#F3BA46' : 'transparent',
                },
              ]}>
              <Text
                style={{
                  fontSize: 11,
                  color: this.state.tagApproved === true ? 'white' : '#F3BA46',
                  fontWeight: 'bold',
                }}>
                Approved
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  tagVerifikasi: false,
                  tagApproved: false,
                  tagTandaTangan: !this.state.tagTandaTangan,
                  tagAll:
                    this.state.tagVerifikasi === true ||
                    (this.state.tagApproved && this.state.tagAll === false)
                      ? false
                      : !this.state.tagAll,
                })
              }
              style={[
                styles.listTag,
                {
                  backgroundColor:
                    this.state.tagTandaTangan === true
                      ? '#F3BA46'
                      : 'transparent',
                },
              ]}>
              <Text
                style={{
                  fontSize: 11,
                  color:
                    this.state.tagTandaTangan === true ? 'white' : '#F3BA46',
                  fontWeight: 'bold',
                }}>
                Tanda Tangan
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({modalVisible: !this.state.modalVisible})
              }
              style={[
                styles.listTag,
                {
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              ]}>
              <Text style={{fontSize: 11, color: '#F3BA46'}}>Filter</Text>
              <View
                style={{
                  height: 18,
                  width: 18,
                  backgroundColor: '#F3BA46',
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
              placeholder="Cari Draft Surat Keluar"
              style={{paddingLeft: 50}}
            />
            <View style={{paddingRight: 15}}>
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
              snapPoints={[{y: 0}, {y: Screen.height - 400}, {y: Screen.height - 300}]}
              boundaries={{top: -300}}
              initialPosition={{y: Screen.height - 300}}
              animatedValueY={this._deltaY}
              animatedValueX={this._deltaX}>
              <TouchableWithoutFeedback
                onPress={() => this.setState({modalVisible: false})}>
                <View style={{height: '10%'}} />
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
                            ? '#F3BA46'
                            : 'transparent',
                        marginLeft: 0,
                        marginTop: 5,
                      },
                    ]}>
                    <Text
                      style={{
                        fontSize: 11,
                        color:
                          this.state.tagApproved === true ? 'white' : 'white',
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
                        {backgroundColor: 'transparent'},
                      ]}>
                      <Text
                        style={{
                          fontSize: 11,
                          color: '#F3BA46',
                          fontWeight: 'bold',
                        }}>
                        Telah ditandai
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                      color: '#000',
                      paddingTop: 20,
                    }}>
                    Draft Surat Keluar
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      width: '100%',
                      flexWrap: 'wrap',
                    }}>
                    <TouchableOpacity style={[styles.listTag, {width: 80}]}>
                      <Text
                        style={{
                          fontSize: 11,
                          color: '#F3BA46',
                          fontWeight: 'bold',
                        }}>
                        Verifikasi
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.listTag, {width: 80}]}>
                      <Text
                        style={{
                          fontSize: 11,
                          color: '#F3BA46',
                          fontWeight: 'bold',
                        }}>
                        Approved
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.listTag, {width: 80}]}>
                      <Text
                        style={{
                          fontSize: 11,
                          color: '#F3BA46',
                          fontWeight: 'bold',
                        }}>
                        Tanda Tangan
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

export default DraftSuratKeluar;

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
      shadowOffset: {width: 0, height: 0},
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
  