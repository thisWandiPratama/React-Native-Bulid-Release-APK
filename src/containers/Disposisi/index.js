import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Interactable from 'react-native-interactable';
const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height - 75,
};

class Disposisi extends React.Component {
  constructor(props) {
    super(props);
    this._deltaY = new Animated.Value(Screen.height - 100);
    this._deltaX = new Animated.Value(Screen.height - 100);
    this.state = {
      tagMenteri: false,
      tagTerbaru: true,
      tagDiTandai: false,
      modalVisible: false,
      content: [
        {
          id: 3259,
          label: 'Pribudiarta Nur Sitepu',
          title: 'Sub Bagian Penyusunan...',
          NoSeri: '001/DARURAT-SB/1/2021',
          date: '14/08/2021',
          tagTandai: true,
          tagMenteri: true,
          tagTerbaru: true,
        },
        {
          id: 3169,
          label: 'Pribudiarta Nur Sitepu',
          title: 'BADAN NASIONAL ...',
          NoSeri: 'M-508/Sesmen/Biroum...',
          date: '14/08/2021',
          tagTandai: true,
          tagMenteri: true,
          tagTerbaru: true,
        },
        {
          id: 2259,
          label: 'Pribuduarta Nur Sitepu',
          title: 'RAPIMNAS FORUM PSAA LK...',
          NoSeri: '0666/FN.PSAA/XII/2020',
          date: '17/07/2021',
          tagTandai: false,
          tagMenteri: true,
          tagTerbaru: true,
        },
        {
          id: 1553,
          label: 'Pribuduarta Nur Sitepu',
          title: 'YAYASAN LENTERA ANAK...',
          NoSeri: '0666/FN.PSAA/XII/2020',
          date: '17/07/2021',
          tagTandai: false,
          tagMenteri: false,
          tagTerbaru: true,
        },
        {
          id: 1277,
          label: 'Pribuduarta Nur Sitepu',
          title: 'GEBURNUR SULAWESI BARAT',
          NoSeri: '0666/FN.PSAA/XII/2020',
          date: '17/07/2021',
          tagTandai: false,
          tagMenteri: true,
          tagTerbaru: true,
        },
        {
          id: 1344,
          label: 'Pribuduarta Nur Sitepu',
          title: 'GEBURNUR SULAWESI BARAT',
          NoSeri: '0666/FN.PSAA/XII/2020',
          date: '17/07/2021',
          tagTandai: false,
          tagMenteri: false,
          tagTerbaru: true,
        },
      ],
    };
  }

  componentDidUpdate() {
    this.renderContent()
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


  renderContent = () => {
    if (
      this.state.tagTerbaru &&
      this.state.tagMenteri &&
      this.state.tagDiTandai
    ) {
      return this.state.content.map((value, index) => (
        <View
          key={index}
          style={{
            height: 85,
            width: '100%',
            borderBottomWidth: 2,
            borderBottomColor: '#E7EAEF',
            flexDirection: 'row',
          }}>
          <TouchableOpacity onPress={() =>
            this.props.navigation.navigate('DetailDisposisi', {
              nosuratmasuk: value.NoSeri,
            })
          }
            style={{
              height: 85,
              borderBottomWidth: 2,
              borderBottomColor: '#E7EAEF',
              flexDirection: 'row',
            }}
          >
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
              <Text style={{ fontSize: 15, color: '#80878E' }}>{value.NoSeri}</Text>
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
                alignItems:'flex-end'
              }}>
              {value.date}
            </Text>
            {value.tagTandai === true ? (
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
      ));
    }

    if (this.state.tagMenteri && this.state.tagTerbaru) {
      return this.state.content
        .filter((value, index) => value.tagMenteri && value.tagTerbaru === true)
        .map((value, index) => (
          <View
            key={index}
            style={{
              height: 85,
              width: '100%',
              borderBottomWidth: 2,
              borderBottomColor: '#E7EAEF',
              flexDirection: 'row',
              backgroundColor: value.tagMenteri ? '#80C8EE' : 'transparent',
            }}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('DetailDisposisi', {
                  nosuratmasuk: value.NoSeri,
                })
              }
              style={{
                height: 85,
                borderBottomWidth: 2,
                borderBottomColor: '#E7EAEF',
                flexDirection: 'row',
              }}
            >
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
                  alignItems:'flex-end'
                }}>
                {value.date}
              </Text>
              {value.tagTandai === true ? (
                <TouchableOpacity onPress={() => {
                  let checkIndex = index==3 ? 4 : index
                  this.setTagTandai(checkIndex)
                }}>
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
        ));
    }

    if (this.state.tagDiTandai && this.state.tagTerbaru) {
      return this.state.content
        .filter((value, index) => value.tagTandai && value.tagTerbaru === true)
        .map((value, index) => (
          <View
            key={index}
            style={{
              height: 85,
              width: '100%',
              borderBottomWidth: 2,
              borderBottomColor: '#E7EAEF',
              flexDirection: 'row',
              backgroundColor: value.tagMenteri ? '#80C8EE' : 'transparent',
            }}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('DetailDisposisi', {
                  nosuratmasuk: value.NoSeri,
                })
              }
              style={{
                height: 85,
                borderBottomWidth: 2,
                borderBottomColor: '#E7EAEF',
                flexDirection: 'row',
              }}
            >
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
                  alignItems:'flex-end'
                }}>
                {value.date}
              </Text>
              {value.tagTandai === true ? (
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
        ));
    }

    if (this.state.tagTerbaru) {
      return this.state.content
        .filter((value, index) => value.tagTerbaru)
        .map((value, index) => (
          <View
            key={index}
            style={{
              height: 85,
              width: '100%',
              borderBottomWidth: 2,
              borderBottomColor: '#E7EAEF',
              flexDirection: 'row',
              backgroundColor: value.tagMenteri ? '#80C8EE' : 'transparent',
            }}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('DetailDisposisi', {
                  nosuratmasuk: value.NoSeri,
                })
              }
              style={{
                height: 85,
                borderBottomWidth: 2,
                borderBottomColor: '#E7EAEF',
                flexDirection: 'row',
              }}
            >
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
                  alignItems:'flex-end'
                }}>
                {value.date}
              </Text>
              {value.tagTandai === true ? (
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
        ));
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.boxTitle}>
            <Text style={styles.titleHeader}>Disposisi</Text>
            <View style={styles.boxIconTitle}>
              <Icon name="help" size={25} color="white" />
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Notifikasi', {
                    tagDiskusi: false,
                    tagSuratMasuk: false,
                    tagSuratKeluar: false,
                    tagSuratCC: true,
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
            <Icon name="inbox" size={80} color="#68B3C8" />
            <View style={styles.boxCount}>
              <Text style={styles.count}>116</Text>
              <Text style={styles.desCount}>Belum dibaca</Text>
            </View>
          </View>
        </View>
        <Text
          style={{
            paddingTop: 40,
            paddingBottom: 10,
            textAlign: 'center',
            fontSize: 14,
            color: '#000',
          }}>
          <Text
            style={{
              fontSize: 14,
              color: '#000',
              fontWeight: 'bold',
            }}>
            80 sudah
          </Text>{' '}
          ditindak lanjuti |{' '}
          <Text
            style={{
              fontSize: 14,
              color: '#000',
              fontWeight: 'bold',
            }}>
            36 belum
          </Text>{' '}
          ditindak lanjuti
        </Text>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <View style={styles.boxTag}>
            <TouchableOpacity
              onPress={() =>
                this.setState({ tagMenteri: !this.state.tagMenteri })
              }
              style={[
                styles.listTag,
                {
                  backgroundColor:
                    this.state.tagMenteri === true ? '#68B3C8' : 'transparent',
                },
              ]}>
              <Text
                style={{
                  fontSize: 11,
                  color: this.state.tagMenteri === true ? 'white' : '#68B3C8',
                  fontWeight: 'bold',
                }}>
                Tag Meteri
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.listTag,
                {
                  backgroundColor:
                    this.state.tagTerbaru === true ? '#68B3C8' : 'transparent',
                },
              ]}>
              <Text
                style={{
                  fontSize: 11,
                  color: this.state.tagTerbaru === true ? 'white' : '#68B3C8',
                  fontWeight: 'bold',
                }}>
                Terbaru
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({ tagDiTandai: !this.state.tagDiTandai })
              }
              style={[
                styles.listTag,
                {
                  backgroundColor:
                    this.state.tagDiTandai === true ? '#68B3C8' : 'transparent',
                },
              ]}>
              <Text
                style={{
                  fontSize: 11,
                  color: this.state.tagDiTandai === true ? 'white' : '#68B3C8',
                  fontWeight: 'bold',
                }}>
                Telah ditandai
              </Text>
            </TouchableOpacity>
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
              <Text style={{ fontSize: 11, color: '#68B3C8' }}>Filter</Text>
              <View
                style={{
                  height: 18,
                  width: 18,
                  backgroundColor: '#68B3C8',
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
            <TextInput placeholder="Cari Disposisi" style={{ paddingLeft: 50 }} />
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
            this.setState({ modalVisible: !this.state.modalVisible });
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
              snapPoints={[
                { y: 0 },
                { y: Screen.height - 400 },
                { y: Screen.height - 300 },
              ]}
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
                            ? '#68B3C8'
                            : 'transparent',
                        marginLeft: 0,
                        marginTop: 5,
                      },
                    ]}>
                    <Text
                      style={{
                        fontSize: 11,
                        color:
                          this.state.tagTerbaru === true ? 'white' : '#68B3C8',
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
                      onPress={() =>
                        this.setState({ tagDiTandai: !this.state.tagDiTandai })
                      }
                      style={[
                        styles.listTag,
                        {
                          backgroundColor:
                            this.state.tagDiTandai === true
                              ? '#68B3C8'
                              : 'transparent',
                        },
                      ]}>
                      <Text
                        style={{
                          fontSize: 11,
                          color:
                            this.state.tagDiTandai === true
                              ? 'white'
                              : '#68B3C8',
                          fontWeight: 'bold',
                        }}>
                        Telah ditandai
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        this.setState({ tagMenteri: !this.state.tagMenteri })
                      }
                      style={[
                        styles.listTag,
                        {
                          backgroundColor:
                            this.state.tagMenteri === true
                              ? '#68B3C8'
                              : 'transparent',
                        },
                      ]}>
                      <Text
                        style={{
                          fontSize: 11,
                          color:
                            this.state.tagMenteri === true
                              ? 'white'
                              : '#68B3C8',
                          fontWeight: 'bold',
                        }}>
                        Tag Meteri
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
                    Disposisi
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      width: '100%',
                      flexWrap: 'wrap',
                    }}>
                    <TouchableOpacity style={[styles.listTag, { width: 120 }]}>
                      <Text
                        style={{
                          fontSize: 11,
                          color: '#68B3C8',
                          fontWeight: 'bold',
                        }}>
                        Unduk dipergunakan
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.listTag, { width: 140 }]}>
                      <Text
                        style={{
                          fontSize: 11,
                          color: '#68B3C8',
                          fontWeight: 'bold',
                        }}>
                        Tanggapan/diedarkan{' '}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.listTag, { width: 100 }]}>
                      <Text
                        style={{
                          fontSize: 11,
                          color: '#68B3C8',
                          fontWeight: 'bold',
                        }}>
                        Untuk Diketahui
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.listTag, { width: 110 }]}>
                      <Text
                        style={{
                          fontSize: 11,
                          color: '#68B3C8',
                          fontWeight: 'bold',
                        }}>
                        Untuk Diselesaikan
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.listTag, { width: 100 }]}>
                      <Text
                        style={{
                          fontSize: 11,
                          color: '#68B3C8',
                          fontWeight: 'bold',
                        }}>
                        Laporan/Laporkan
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.listTag, { width: 100 }]}>
                      <Text
                        style={{
                          fontSize: 11,
                          color: '#68B3C8',
                          fontWeight: 'bold',
                        }}>
                        Untuk Mewakilkan
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.listTag, { width: 120 }]}>
                      <Text
                        style={{
                          fontSize: 11,
                          color: '#68B3C8',
                          fontWeight: 'bold',
                        }}>
                        Untuk Mendampingi
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

export default Disposisi;

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
