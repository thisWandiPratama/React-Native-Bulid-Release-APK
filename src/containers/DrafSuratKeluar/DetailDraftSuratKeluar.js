import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
} from 'react-native';
import Header from '../../components/header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Swiper from 'react-native-swiper';
import {styles} from './styles';

class DetailSuratMasuk extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabDetailDraft: true,
      tabFileSurat: false,
      tabSiklus: false,
      tabTujuanSurat: false,
      ttileHeader: '',
      modalVisible: false,
      parafrase: true,
      count: 0,
    };
  }

  back = () => this.props.navigation.goBack();

  componentDidMount() {
    const {nosuratmasuk} = this.props.route.params;
    this.setState({ttileHeader: `Detail Draft Surat ${nosuratmasuk}`});
  }

  renderContent = () => {
    return (
      <Swiper
        loop={false}
        showsPagination={false}
        index={this.state.count}
        onIndexChanged={index => this.setState({count: index})}>
        <View
          style={{
            margin: 10,
            marginTop: 15,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: '#000',
            }}>
            No. Surat
          </Text>
          <Text
            style={{
              paddingBottom: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#DCDDE1',
            }}>
            {this.props.route.params.nosuratmasuk}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: '#000',
              paddingTop: 10,
            }}>
            Tanggal Surat
          </Text>
          <Text
            style={{
              paddingBottom: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#DCDDE1',
            }}>
            21 Agustus 2021
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: '#000',
              paddingTop: 10,
            }}>
            No. Agenda
          </Text>
          <Text
            style={{
              paddingBottom: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#DCDDE1',
            }}>
            374
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: '#000',
              paddingTop: 10,
            }}>
            Asal Surat
          </Text>
          <Text
            style={{
              paddingBottom: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#DCDDE1',
            }}>
            ASPIRASI AHLI MUDA 1
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: '#000',
              paddingTop: 10,
            }}>
            Perihal
          </Text>
          <Text
            style={{
              paddingBottom: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#DCDDE1',
            }}>
            test
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: '#000',
              paddingTop: 10,
            }}>
            Lampiran
          </Text>
          <Text
            style={{
              paddingBottom: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#DCDDE1',
            }}>
            -
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: '#000',
              paddingTop: 10,
            }}>
            Jenis Surat
          </Text>
          <Text
            style={{
              paddingBottom: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#DCDDE1',
            }}>
            Surat Biasa
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: '#000',
              paddingTop: 10,
            }}>
            Sifat Surat
          </Text>
          <Text
            style={{
              paddingBottom: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#DCDDE1',
            }}>
            Biasa
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: '#000',
              paddingTop: 10,
            }}>
            Klassifikasi Surat
          </Text>
          <Text
            style={{
              paddingBottom: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#DCDDE1',
            }}>
            PR.01.03 Rencana Strategis(Renstra)
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: '#000',
              paddingTop: 10,
            }}>
            Status
          </Text>
          <Text
            style={{
              paddingBottom: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#DCDDE1',
            }}>
            NUMBERED
          </Text>
          <TouchableOpacity
            onPress={() =>
              this.setState({modalVisible: !this.state.modalVisible})
            }
            style={{
              height: 25,
              width: 130,
              backgroundColor:
                this.state.parafrase === true ? '#717A83' : '#F3BA46',
              justifyContent: 'center',
              marginTop: 10,
              borderRadius: 3,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#000',
                fontWeight: 'bold',
              }}>
              TANDA TANGAN
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            margin: 10,
            marginTop: 15,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: '#000',
            }}>
            Penandatanganan
          </Text>
          <Text
            style={{
              color: '#000',
            }}>
            SEKRETARIAT KEMENTERIAN
          </Text>
          <Text
            style={{
              paddingBottom: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#DCDDE1',
            }}>
            19603241991031001 - Pribudiarta Nur Sitepun
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: '#000',
            }}>
            Approver
          </Text>
          <Text
            style={{
              color: '#000',
            }}>
            SEKRETARIAT KEMENTERIAN
          </Text>
          <Text
            style={{
              paddingBottom: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#DCDDE1',
            }}>
            19603241991031001 - Pribudiarta Nur Sitepun
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: '#000',
            }}>
            Reviewer
          </Text>
          <Text
            style={{
              color: '#000',
            }}>
            SEKRETARIAT KEMENTERIAN
          </Text>
          <Text
            style={{
              paddingBottom: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#DCDDE1',
            }}>
            19603241991031001 - Pribudiarta Nur Sitepun
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: '#000',
            }}>
            Tujuan Internal
          </Text>
          <Text
            style={{
              color: '#000',
            }}>
            DEPUTI BIDANG PERLINDUNGAN KHUSUS ANAK
          </Text>
          <Text
            style={{
              paddingBottom: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#DCDDE1',
            }}>
            19603241991031001 - Nahar
          </Text>
        </View>
        <View
          style={{
            margin: 20,
            alignItems: 'center',
          }}>
          <View
            style={{
              height: Dimensions.get('window').height / 4,
              width: '90%',
              backgroundColor: '#E9EAEE',
              borderRadius: 3,
            }}>
            <View
              style={{
                height: Dimensions.get('window').height / 6,
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: 20,
              }}>
              <Icon name="note" size={25} color="white" />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: Dimensions.get('window').height / 14.5,
                marginLeft: 10,
                marginRight: 10,
                paddingTop: 10,
              }}>
              <Icon name="picture-as-pdf" size={25} color="red" />
              <Text
                style={{
                  fontSize: 12,
                  color: '#000',
                  paddingLeft: 10,
                  paddingRight: 10,
                }}>
                {this.props.route.params.nosuratmasuk}.pdf
              </Text>
              <TouchableOpacity
                style={{
                  paddingRight: 10,
                }}>
                <Icon name="file-download" size={25} color="#81868C" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="add-to-drive" size={25} color="#81868C" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                height: 35,
                width: Dimensions.get('window').width / 3,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: '#000',
                  paddingRight: 10,
                }}>
                Pengirim
              </Text>
            </View>
            <View
              style={{
                height: 35,
                width: Dimensions.get('window').width / 5,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: '#000',
                }}>
                Tipe
              </Text>
            </View>
            <View
              style={{
                height: 35,
                width: Dimensions.get('window').width / 3,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: '#000',
                  paddingRight: 10,
                }}>
                Posisi Surat
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingLeft: 10,
              paddingRight: 10,
              backgroundColor: '#F2F2F2',
            }}>
            <View
              style={{
                width: Dimensions.get('window').width / 3,
              }}>
              <Text
                style={{
                  color: '#000',
                  fontSize: 12,
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: '#000',
                  }}>
                  Prasetyatiningsih
                </Text>
                (ANALIS KEPEGAWAIAN AHLI MUDA 5)
              </Text>
            </View>
            <View
              style={{
                width: Dimensions.get('window').width / 5,
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 20,
                  width: 50,
                  backgroundColor: '#0275FB',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 15,
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    color: 'white',
                    fontWeight: 'bold',
                  }}>
                  DRAFT
                </Text>
              </View>
            </View>
            <View
              style={{
                width: Dimensions.get('window').width / 3,
                justifyContent: 'flex-start',
              }}>
              <Text
                style={{
                  color: '#000',
                  fontSize: 12,
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: '#000',
                  }}>
                  Tabita Mauliate Ulibasa
                </Text>
                (ANALIS KEPEGAWAIAN AHLI MUDA 5)
              </Text>
              <Text
                style={{
                  color: '#000',
                  fontSize: 12,
                  fontWeight: 'bold',
                }}>
                Tgl Terima:
              </Text>
              <Text
                style={{
                  color: '#000',
                }}>
                11-08-2021 10:334:04
              </Text>
              <Text
                style={{
                  color: '#000',
                  fontSize: 12,
                  fontWeight: 'bold',
                }}>
                Tgl Respon:
              </Text>
              <Text
                style={{
                  color: '#000',
                }}>
                -
              </Text>

              <View
                style={{
                  height: 20,
                  width: 55,
                  backgroundColor: '#0275FB',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 15,
                  marginBottom: 10,
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    color: 'white',
                    fontWeight: 'bold',
                  }}>
                  DIBACA
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingLeft: 10,
              paddingRight: 10,
              backgroundColor: 'white',
            }}>
            <View
              style={{
                width: Dimensions.get('window').width / 3,
              }}>
              <Text
                style={{
                  color: '#000',
                  fontSize: 12,
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: '#000',
                  }}>
                  Citra Febianty Luthfi
                </Text>
                (ASPIRASI AHLI MUDA 1)
              </Text>
            </View>
            <View
              style={{
                width: Dimensions.get('window').width / 5,
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 20,
                  width: 50,
                  backgroundColor: '#0275FB',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 15,
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    color: 'white',
                    fontWeight: 'bold',
                  }}>
                  DRAFT
                </Text>
              </View>
            </View>
            <View
              style={{
                width: Dimensions.get('window').width / 3,
                justifyContent: 'flex-start',
              }}>
              <Text
                style={{
                  color: '#000',
                  fontSize: 12,
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: '#000',
                  }}>
                  Pribudiarta Nur Sitepun
                </Text>
                (SEKRETARIAT KEMENTERIAN)
              </Text>
              <Text
                style={{
                  color: '#000',
                  fontSize: 12,
                  fontWeight: 'bold',
                }}>
                Tgl Terima:
              </Text>
              <Text
                style={{
                  color: '#000',
                }}>
                11-08-2021 10:334:04
              </Text>
              <Text
                style={{
                  color: '#000',
                  fontSize: 12,
                  fontWeight: 'bold',
                }}>
                Tgl Respon:
              </Text>
              <Text
                style={{
                  color: '#000',
                }}>
                -
              </Text>

              <View
                style={{
                  height: 20,
                  width: 80,
                  backgroundColor: '#0275FB',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 15,
                  marginBottom: 10,
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    color: 'white',
                    fontWeight: 'bold',
                  }}>
                  NUMBERED
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Swiper>
    );
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <Header
          title={this.state.ttileHeader}
          backgroundColor="#F3BA46"
          onpress={this.back}
          fontSize={14}
        />
        <View
          style={{
            flex: 1,
          }}>
          <View
            style={{
              height: 35,
              width: '100%',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  count: 0,
                })
              }
              style={{
                height: 35,
                width: Dimensions.get('window').width / 4,
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomWidth: 2,
                borderBottomColor:
                  this.state.count === 0 ? '#F3BA46' : 'transparent',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: this.state.count === 0 ? '#F3BA46' : '#717883',
                }}>
                Detail Draft
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  count: 1,
                })
              }
              style={{
                height: 35,
                width: Dimensions.get('window').width / 4,
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomWidth: 2,
                borderBottomColor:
                  this.state.count === 1 ? '#F3BA46' : 'transparent',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: this.state.count === 1 ? '#F3BA46' : '#717883',
                }}>
                Tujuan Surat
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  count: 2,
                })
              }
              style={{
                height: 35,
                width: Dimensions.get('window').width / 4,
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomWidth: 2,
                borderBottomColor:
                  this.state.count === 2 ? '#F3BA46' : 'transparent',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: this.state.count === 2 ? '#F3BA46' : '#717883',
                }}>
                File Surat
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  count: 3,
                })
              }
              style={{
                height: 35,
                width: Dimensions.get('window').width / 4,
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomWidth: 2,
                borderBottomColor:
                  this.state.count === 3 ? '#F3BA46' : 'transparent',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: this.state.count === 3 ? '#F3BA46' : '#717883',
                }}>
                Siklus
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: '100%',
              backgroundColor: 'white',
            }}>
            <ScrollView>{this.renderContent()}</ScrollView>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              this.setState({modalVisible: !this.state.modalVisible});
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                backgroundColor: 'rgba(0,0,0,0.5)',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: '50%',
                  width: '80%',
                  backgroundColor: 'white',
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {this.state.parafrase === true ? (
                  <Icon name="check" size={200} color="#F3BA46" />
                ) : (
                  <Icon name="do-not-disturb" size={200} color="#F3BA46" />
                )}
                <Text
                  style={{
                    color: '#000',
                    fontSize: 14,
                  }}>
                  Masukan kode{' '}
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: '#000',
                      fontSize: 14,
                    }}>
                    Parafrase
                  </Text>
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#000',
                    fontSize: 14,
                    paddingBottom: 50,
                  }}>
                  {this.state.parafrase === true ? 'BERHASIL' : 'GAGAL'}
                </Text>
                <TouchableOpacity
                  style={{
                    height: 30,
                    width: 30,
                    backgroundColor: '#F3BA46',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 20,
                    position: 'absolute',
                    top: -15,
                    right: -10,
                  }}
                  onPress={() => {
                    this.setState({modalVisible: !this.state.modalVisible});
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: '#000',
                      fontSize: 20,
                    }}>
                    X
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}

export default DetailSuratMasuk;