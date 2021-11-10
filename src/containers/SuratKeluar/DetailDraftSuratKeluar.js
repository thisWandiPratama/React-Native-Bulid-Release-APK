import React from "react";
import { View, Text, Dimensions, TouchableOpacity, ScrollView, Image, Modal } from 'react-native'
import Header from '../../components/header'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles'


class DetailSuratKeluar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tabDetailSurat: true,
            tabFileSurat: false,
            tabTujuanSurat: false,
            ttileHeader: '',
            modalVisible: false,
            parafrase: true
        }
    }

    back = () => this.props.navigation.goBack()

    componentDidMount() {
        const { nosuratmasuk } = this.props.route.params
        this.setState({ ttileHeader: `Detail Surat Keluar ${nosuratmasuk}` })
    }

    renderContent = () => {
        if (this.state.tabDetailSurat === true) {
            return (
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
                        21 Agustus 2021
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
                        374
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
                        ASPIRASI AHLI MUDA 1
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
                        test
                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: '#000',
                            paddingTop: 10
                        }}
                    >Lampiran</Text>
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
                    >Jenis Surat</Text>
                    <Text style={{
                        paddingBottom: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: '#DCDDE1'
                    }}>
                        Nota Dinas
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
                    >Klassifikasi Surat</Text>
                    <Text style={{
                        paddingBottom: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: '#DCDDE1'
                    }}>
                        PR.01.03 Rencana Strategis(Renstra)
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
                        Ditutup
                    </Text>
                </View>
            )
        } else if (this.state.tabTujuanSurat === true) {
            return (
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
                    >Tujuan Internal</Text>
                    <View
                    style={{
                       flexDirection:'row' 
                    }}
                    >
                        <Text
                            style={{
                                color: '#000'
                            }}
                        >1. </Text>
                        <Text
                            style={{
                                paddingBottom: 10,
                                borderBottomWidth: 1,
                                borderBottomColor: '#DCDDE1'
                            }}
                        >
                           DEPUTIH BIDANG PERLINDUNGAN KHUSUS ANAK 1965345647235353
                        </Text>
                    </View>
                </View>
            )
        } else {
            return (
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
                            >B-1119G/Biro..SDM/KA.06.pdf</Text>
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
            )
        }
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
                    backgroundColor='#EB5F3C'
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
                                tabDetailSurat: true,
                                tabTujuanSurat: false,
                                tabFileSurat: false,
                            })}
                            style={{
                                height: 35,
                                width: Dimensions.get('window').width / 4,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderBottomWidth: 2,
                                borderBottomColor: this.state.tabDetailSurat === true ? '#EB5F3C' : 'transparent'
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 14,
                                    color: this.state.tabDetailSurat === true ? '#EB5F3C' : '#717883'
                                }}
                            >
                                Detail Surat
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.setState({
                                tabDetailSurat: false,
                                tabTujuanSurat: true,
                                tabFileSurat: false,
                            })}
                            style={{
                                height: 35,
                                width: Dimensions.get('window').width / 3,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderBottomWidth: 2,
                                borderBottomColor: this.state.tabTujuanSurat === true ? '#EB5F3C' : 'transparent'
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 14,
                                    color: this.state.tabTujuanSurat === true ? '#EB5F3C' : '#717883'
                                }}
                            >
                                Tujuan Surat
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.setState({
                                tabDetailSurat: false,
                                tabTujuanSurat: false,
                                tabFileSurat: true,
                            })}
                            style={{
                                height: 35,
                                width: Dimensions.get('window').width / 3,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderBottomWidth: 2,
                                borderBottomColor: this.state.tabFileSurat === true ? '#EB5F3C' : 'transparent'
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 14,
                                    color: this.state.tabFileSurat === true ? '#EB5F3C' : '#717883'
                                }}
                            >
                                File Surat
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        height: '100%',
                        backgroundColor: 'white'
                    }}>
                        <ScrollView>
                            {this.renderContent()}
                        </ScrollView>
                    </View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            this.setState({ modalVisible: !this.state.modalVisible });
                        }}
                    >
                        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)', alignItems: 'center' }}>
                            <View style={{
                                height: '50%',
                                width: '80%',
                                backgroundColor: 'white',
                                borderRadius: 10,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                {this.state.parafrase === true ? <Icon name='check' size={200} color='#F3BA46' /> : <Icon name='do-not-disturb' size={200} color='#F3BA46' />}
                                <Text
                                    style={{
                                        color: '#000',
                                        fontSize: 14,
                                    }}
                                >Masukan kode <Text
                                    style={{
                                        fontWeight: 'bold',
                                        color: '#000',
                                        fontSize: 14
                                    }}
                                >Parafrase</Text></Text>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        color: '#000',
                                        fontSize: 14,
                                        paddingBottom: 50
                                    }}
                                >{this.state.parafrase === true ? "BERHASIL" : "GAGAL"}</Text>
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
                                        right: -10
                                    }}
                                    onPress={() => {
                                        this.setState({ modalVisible: !this.state.modalVisible });
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                            color: '#000',
                                            fontSize: 20,
                                        }}
                                    >X</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>
            </View>
        )
    }
}

export default DetailSuratKeluar