import React from "react";
import { View, Text, Dimensions, TouchableOpacity, ScrollView, Image } from 'react-native'
import Header from '../../components/header'
import Icon from 'react-native-vector-icons/MaterialIcons';


class NotifikasiSuratMasuk extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tagDiskusi: true,
            tagSuratMasuk: false,
            tagSuratKeluar: false,
            tagSuratCC: false,
            ttileHeader: ''
        }
    }

    back = () => this.props.navigation.goBack()

    componentDidMount() {
        const { tagDiskusi, tagSuratMasuk, tagSuratKeluar, tagSuratCC } = this.props.route.params
        this.setState({
            tagDiskusi: tagDiskusi,
            tagSuratMasuk: tagSuratMasuk,
            tagSuratKeluar: tagSuratKeluar,
            tagSuratCC: tagSuratCC,
        })
    }


    renderContent = () => {
        if (this.state.tagDiskusi === true) {
            return (
                <View style={{
                    margin: 10,
                    marginTop: 15
                }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: 'bold',
                                color: '#000',
                            }}
                        >Diskusi : Test Diskusi</Text>
                        <Text
                            style={{
                                color: '#727981',
                                fontSize: 12
                            }}
                        >15/08/2021</Text>
                    </View>
                    <Text style={{
                        paddingBottom: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: '#DCDDE1',
                        color: 'rgba(0,0,0,0.8)'
                    }}>
                        Pengirim : AMBARWATI
                    </Text>
                </View>
            )
        } else if (this.state.tagSuratMasuk === true) {
            return (
                <View style={{
                    margin: 10,
                    marginTop: 15
                }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: 'bold',
                                color: '#000',
                            }}
                        >Surat Masuk : 90/PR.01.04.08/8/2021-test</Text>
                        <Text
                            style={{
                                color: '#727981',
                                fontSize: 12
                            }}
                        >15/08/2021</Text>
                    </View>
                    <Text style={{
                        paddingBottom: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: '#DCDDE1',
                        color: 'rgba(0,0,0,0.8)'
                    }}>
                        Asal : ANALISIS KEPEGAWAIAN AHLI MUDA 5
                    </Text>
                </View>
            )
        } else if (this.state.tagSuratKeluar === true) {
            return (
                <View style={{
                    margin: 10,
                    marginTop: 15
                }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: 'bold',
                                color: '#000',
                            }}
                        >Draf Approved : Test</Text>
                        <Text
                            style={{
                                color: '#727981',
                                fontSize: 12
                            }}
                        >15/08/2021</Text>
                    </View>
                    <Text style={{
                        paddingBottom: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: '#DCDDE1',
                        color: 'rgba(0,0,0,0.8)'
                    }}>
                        To : WATI AMBAR
                    </Text>
                </View>
            )
        } else {
            return (
                <View style={{
                    margin: 10,
                    marginTop: 15
                }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: 'bold',
                                color: '#000',
                            }}
                        >CC Surat : B-165D/PR.01.02/08.2021-Test</Text>
                        <Text
                            style={{
                                color: '#727981',
                                fontSize: 12
                            }}
                        >15/08/2021</Text>
                    </View>
                    <Text style={{
                        paddingBottom: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: '#DCDDE1',
                        color: 'rgba(0,0,0,0.8)'
                    }}>
                        Asal : ARSIP ARIS AHLI MUDA 1
                    </Text>
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
                    title="Notifikasi"
                    backgroundColor='#2496F3'
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
                            height: 60,
                            width: '100%',
                            flexDirection: 'row'
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => this.setState({
                                tagDiskusi: true,
                                tagSuratMasuk: false,
                                tagSuratKeluar: false,
                                tagSuratCC: false
                            })}

                            style={{
                                height: 60,
                                width: Dimensions.get('window').width / 4,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderBottomWidth: 2,
                                borderBottomColor: this.state.tagDiskusi === true ? '#C43832' : 'transparent'
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingTop: 5
                                }}
                            >
                                <Icon name='question-answer' size={30} color={this.state.tagDiskusi === true ? '#2496F3' : '#717A83'} />
                                <View
                                    style={{
                                        height: 20,
                                        width: 20,
                                        backgroundColor: '#EB453D',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: 10
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: 'white',
                                            fontSize: 14,
                                            fontWeight: 'bold'
                                        }}
                                    >1</Text>
                                </View>
                            </View>
                            <Text
                                style={{
                                    fontSize: 14,
                                    color: this.state.tagDiskusi === true ? '#2496F3' : '#717A83',
                                }}
                            >
                                Diskusi
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.setState({
                                tagDiskusi: false,
                                tagSuratMasuk: true,
                                tagSuratKeluar: false,
                                tagSuratCC: false

                            })}
                            style={{
                                height: 60,
                                width: Dimensions.get('window').width / 4,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderBottomWidth: 2,
                                borderBottomColor: this.state.tagSuratMasuk === true ? '#C43832' : 'transparent'
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingTop: 5
                                }}
                            >
                                <Icon name='inbox' size={30} color={this.state.tagSuratMasuk === true ? '#2496F3' : '#717A83'} />
                                <View
                                    style={{
                                        height: 20,
                                        width: 20,
                                        backgroundColor: '#EB453D',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: 10
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: 'white',
                                            fontSize: 14,
                                            fontWeight: 'bold'
                                        }}
                                    >1</Text>
                                </View>
                            </View>
                            <Text
                                style={{
                                    fontSize: 14,
                                    color: this.state.tagSuratMasuk === true ? '#2496F3' : '#717A83'
                                }}
                            >
                                Surat Masuk
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.setState({
                                tagDiskusi: false,
                                tagSuratMasuk: false,
                                tagSuratKeluar: true,
                                tagSuratCC: false

                            })}
                            style={{
                                height: 60,
                                width: Dimensions.get('window').width / 4,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderBottomWidth: 2,
                                borderBottomColor: this.state.tagSuratKeluar ===
                                    true ? '#C43832' : 'transparent'
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingTop: 5
                                }}
                            >
                                <Icon name='mail' size={30} color={this.state.tagSuratKeluar === true ? '#2496F3' : '#717A83'} />
                                <View
                                    style={{
                                        height: 20,
                                        width: 20,
                                        backgroundColor: '#EB453D',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: 10
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: 'white',
                                            fontSize: 14,
                                            fontWeight: 'bold'
                                        }}
                                    >1</Text>
                                </View>
                            </View>
                            <Text
                                style={{
                                    fontSize: 14,
                                    color: this.state.tagSuratKeluar === true ? '#2496F3' : '#717A83'
                                }}
                            >
                                Surat Keluar
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.setState({
                                tagDiskusi: false,
                                tagSuratMasuk: false,
                                tagSuratKeluar: false,
                                tagSuratCC: true

                            })}
                            style={{
                                height: 60,
                                width: Dimensions.get('window').width / 4,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderBottomWidth: 2,
                                borderBottomColor: this.state.tagSuratCC ===
                                    true ? '#C43832' : 'transparent'
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingTop: 5
                                }}
                            >
                                <Icon name='closed-caption' size={30} color={this.state.tagSuratCC === true ? '#2496F3' : '#717A83'} />
                                <View
                                    style={{
                                        height: 20,
                                        width: 20,
                                        backgroundColor: '#EB453D',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: 10
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: 'white',
                                            fontSize: 14,
                                            fontWeight: 'bold'
                                        }}
                                    >1</Text>
                                </View>
                            </View>
                            <Text
                                style={{
                                    fontSize: 14,
                                    color: this.state.tagSuratCC === true ? '#2496F3' : '#717A83'
                                }}
                            >
                                Surat CC
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
                </View>
            </View>
        )
    }
}

export default NotifikasiSuratMasuk