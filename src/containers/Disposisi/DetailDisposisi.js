import React from "react";
import { View, Text, Dimensions, TouchableOpacity, ScrollView, Image } from 'react-native'
import Header from '../../components/header'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Swiper from 'react-native-swiper';



class DetailPosisi extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tabDetailSurat: true,
            tabLihatSurat: false,
            tabSiklus: false,
            tabLaporan: false,
            ttileHeader: '',
            count: 0,
            parafrase: true,
        }
    }

    back = () => this.props.navigation.goBack()

    componentDidMount() {
        const { nosuratmasuk } = this.props.route.params
        this.setState({ ttileHeader: `Detail Surat Disposisi ${nosuratmasuk}` })
    }

    renderContent = () => {
            return (
                <Swiper
                loop={false}
                showsPagination={false}
                index={this.state.count}
                onIndexChanged={index => this.setState({count: index})}>
                <View style={{
                    margin: 10,
                    // marginTop: 15,
                    flex: 1
                }}>
                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: '#000',
                        }}
                    >No. Surat</Text>
                    <Text style={{
                        paddingBottom: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: '#DCDDE1'
                    }}>
                        {this.props.route.params.nosuratmasuk}
                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: '#000',
                            paddingTop: 10
                        }}
                    >Tanggal Surat</Text>
                    <Text style={{
                        paddingBottom: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: '#DCDDE1'
                    }}>
                        23 Desember 2020
                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: '#000',
                            paddingTop: 10
                        }}
                    >Tanggal Disposisi</Text>
                    <Text style={{
                        paddingBottom: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: '#DCDDE1'
                    }}>
                        29 Desember 2020
                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: '#000',
                            paddingTop: 10
                        }}
                    >Asal Surat</Text>
                    <Text style={{
                        paddingBottom: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: '#DCDDE1'
                    }}>
                        Sub Bagian Penyusunan Anggaran
                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: '#000',
                            paddingTop: 10
                        }}
                    >Tanggal Diterima</Text>
                    <Text style={{
                        paddingBottom: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: '#DCDDE1'
                    }}>
                        23 Desember 2020
                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: '#000',
                            paddingTop: 10
                        }}
                    >Sifat Surat</Text>
                    <Text style={{
                        paddingBottom: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: '#DCDDE1'
                    }}>
                        Biasa
                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: '#000',
                            paddingTop: 10
                        }}
                    >Perihal</Text>
                    <Text style={{
                        paddingBottom: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: '#DCDDE1'
                    }}>
                        Matriks kegiatan Rentra Tahun 2020-2024
                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: '#000',
                            paddingTop: 10
                        }}
                    >Status</Text>
                    <Text style={{
                        paddingBottom: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: '#DCDDE1'
                    }}>
                        DISPOSISI
                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: '#000',
                            paddingTop: 10
                        }}
                    >Klasifikasi Surat</Text>
                    <Text style={{
                        paddingBottom: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: '#DCDDE1'
                    }}>
                        KP.10 Pembinaan Jabatan Fungsional
                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: '#000',
                            paddingTop: 10
                        }}
                    >Isi Disposisi</Text>
                    <Text style={{
                        paddingBottom: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: '#DCDDE1'
                    }}>
                        -
                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: '#000',
                            paddingTop: 10
                        }}
                    >No. Agenda</Text>
                    <Text style={{
                        paddingBottom: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: '#DCDDE1'
                    }}>
                        3720
                    </Text>
                </View>
            
                <View
                    style={{
                        margin: 20,
                        alignItems: 'center'
                    }}
                >
                    <View
                        style={{
                            height: Dimensions.get('window').height / 4,
                            width: '90%',
                            backgroundColor: '#E9EAEE',
                            borderRadius: 3
                        }}
                    >
                        <View style={{
                            height: Dimensions.get('window').height / 6,
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingTop: 20
                        }}>
                            <Icon name='note' size={25} color='white' />
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                height: Dimensions.get('window').height / 14.5,
                                marginLeft: 10,
                                marginRight: 10,
                                paddingTop: 10
                            }}
                        >
                            <Icon name='picture-as-pdf' size={25} color='red' />
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: '#000',
                                    paddingLeft: 10,
                                    paddingRight: 10
                                }}
                            >{this.props.route.params.nosuratmasuk}.pdf</Text>
                            <TouchableOpacity style={{
                                paddingRight: 10
                            }}>
                                <Icon name='file-download' size={25} color='#81868C' />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icon name='add-to-drive' size={25} color='#81868C' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{
                    margin: 10,
                    marginTop: 15
                }}>
                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: '#000',
                        }}
                    >Surat Disposisi</Text>
                    <Text style={{
                        paddingBottom: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: '#DCDDE1'
                    }}>
                        {this.props.route.params.nosuratmasuk}
                    </Text>
                </View>
              
                <View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <View
                            style={{
                                height: 35,
                                width: Dimensions.get('window').width / 3,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Text style={{
                                fontSize: 14,
                                fontWeight: 'bold',
                                color: '#000',
                                paddingRight: 10
                            }}>Pengirim</Text>
                        </View>
                        <View
                            style={{
                                height: 35,
                                width: Dimensions.get('window').width / 5,
                                justifyContent: 'center',
                            }}
                        >
                            <Text style={{
                                fontSize: 14,
                                fontWeight: 'bold',
                                color: '#000',
                            }}>Tipe</Text>
                        </View>
                        <View
                            style={{
                                height: 35,
                                width: Dimensions.get('window').width / 3,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Text style={{
                                fontSize: 14,
                                fontWeight: 'bold',
                                color: '#000',
                                paddingRight: 10
                            }}>Posisi Surat</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            paddingLeft: 10,
                            paddingRight: 10,
                            backgroundColor: '#80C8EE'
                        }}
                    >
                        <View
                            style={{
                                width: Dimensions.get('window').width / 3,
                            }}
                        >
                            <Text
                                style={{
                                    color: '#000',
                                    fontSize: 12
                                }}
                            >
                                <Text style={{
                                    fontSize: 12,
                                    fontWeight: 'bold',
                                    color: '#000'
                                }}>Prasetyatiningsih</Text>
                                (ANALIS KEPEGAWAIAN AHLI MUDA 5)
                            </Text>
                        </View>
                        <View
                            style={{
                                width: Dimensions.get('window').width / 5,
                                justifyContent: 'flex-start',
                                alignItems: 'center'
                            }}
                        >
                            <View
                                style={{
                                    height: 50,
                                    width: 60,
                                    backgroundColor: '#0275FB',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 8,
                                    marginTop: 20
                                }}
                            >
                                <Icon name='inbox' size={30} color='white' />
                                <Text style={{
                                    fontSize: 13,
                                    color: 'white'
                                }}>INBOX</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                width: Dimensions.get('window').width / 3,
                                justifyContent: 'flex-start',
                            }}
                        >
                            <Text
                                style={{
                                    color: '#000',
                                    fontSize: 12
                                }}
                            >
                                <Text style={{
                                    fontSize: 12,
                                    fontWeight: 'bold',
                                    color: '#000'
                                }}>Tabita Mauliate Ulibasa</Text>
                                (ANALIS KEPEGAWAIAN AHLI MUDA 5)
                            </Text>
                            <Text
                                style={{
                                    color: '#000',
                                    fontSize: 12,
                                    fontWeight: 'bold'
                                }}
                            >
                                Tgl Terima:
                            </Text>
                            <Text
                                style={{
                                    color: '#000'
                                }}
                            >
                                11-08-2021 10:334:04
                            </Text>
                            <Text
                                style={{
                                    color: '#000',
                                    fontSize: 12,
                                    fontWeight: 'bold'
                                }}
                            >
                                Tgl Respon:
                            </Text>
                            <Text
                                style={{
                                    color: '#000'
                                }}
                            >
                                -
                            </Text>
                        </View>
                    </View>
                </View>
                </Swiper>
            )
        }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'white'
                }}
            >
                <Header
                    title={this.state.ttileHeader}
                    backgroundColor='#68B3C8'
                    onpress={this.back}
                    fontSize={14}
                />
                <View
                    style={{
                        flex: 1,
                    }}
                >
                    <View
                        style={{
                            height: 35,
                            width: '100%',
                            flexDirection: 'row'
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => this.setState({
                                count: 0
                            })}
                            style={{
                                height: 35,
                                width: Dimensions.get('window').width / 4,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderBottomWidth: 2,
                                borderBottomColor: this.state.count === 0 === true ? '#68B3C8' : 'transparent'
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 14,
                                    color: this.state.count === 0 === true ? '#68B3C8' : '#717883'
                                }}
                            >
                                Detail Surat
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.setState({
                                count: 1
                            })}
                            style={{
                                height: 35,
                                width: Dimensions.get('window').width / 4,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderBottomWidth: 2,
                                borderBottomColor: this.state.count === 1 ? '#68B3C8' : 'transparent'
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 14,
                                    color: this.state.count === 1 ? '#68B3C8' : '#717883'
                                }}
                            >
                                Lihat Surat
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.setState({
                                count: 2
                            })}
                            style={{
                                height: 35,
                                width: Dimensions.get('window').width / 4,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderBottomWidth: 2,
                                borderBottomColor: this.state.count === 2 ? '#68B3C8' : 'transparent'
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 14,
                                    color: this.state.count === 2 ? '#68B3C8' : '#717883'
                                }}
                            >
                                Siklus
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.setState({
                                count: 3
                            })}
                            style={{
                                height: 35,
                                width: Dimensions.get('window').width / 4,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderBottomWidth: 2,
                                borderBottomColor: this.state.count === 3 ? '#68B3C8' : 'transparent'
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 14,
                                    color: this.state.count === 3 ? '#68B3C8' : '#717883'
                                }}
                            >
                                Laporan
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        height: '100%',
                        backgroundColor: 'white',
                        flex: 1
                    }}>
                        <ScrollView>
                            {this.renderContent()}
                        </ScrollView>
                    </View>
                </View>
            </View>
        )
    }
}

export default DetailPosisi