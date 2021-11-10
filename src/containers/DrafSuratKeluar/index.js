import React from 'react'
import { View, Text, TextInput, Image, ScrollView, Modal, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons';


class DraftSuratKeluar extends React.Component {

    constructor(props) {
        super(props)
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
                    tagTandaTangan: false
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
                    tagTandaTangan: true
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
                    tagTandaTangan: false
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
                    tagTandaTangan: false
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
                    tagTandaTangan: true
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
                    tagTandaTangan: true
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
                    tagTandaTangan: false
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
                    tagTandaTangan: false
                }
            ]
        }
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    renderContent = () => {
        return this.state.content.map((value, index) => {
            switch (true) {
                case this.state.tagAll===true:
                    return (
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailDraftSuratKeluar', { nosuratmasuk: value.NoSeri })} key={index} style={{
                            height: 85,
                            width: '100%',
                            borderBottomWidth: 2,
                            borderBottomColor: '#E7EAEF',
                            flexDirection: 'row',
                            backgroundColor: value.tagVerifikasi===true ? '#83D1F5' : value.tagApproved===true ? '#82CA9C' : value.tagTandaTangan===true ? '#F8C689' : 'white' 
                        }}>
                            <View style={{ width: 60, height: 85, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold' }}>{value.id}</Text>
                            </View>
                            <View
                                style={{
                                    height: 85,
                                    width: 212,
                                    justifyContent: 'center',
                                }}
                            >
                                <Text style={{
                                    fontSize: 15,
                                    color: '#000',
                                    fontWeight: 'bold'
                                }}>{value.label}</Text>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#000' }}>{value.title}</Text>
                                <Text style={{ fontSize: 15, color: '#80878E' }}>{value.NoSeri}</Text>
                            </View>
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Text style={{
                                    paddingBottom: 10
                                }}>{value.date}</Text>
                                {value.tandai === true ?
                                    <Image source={{ uri: 'https://i.ibb.co/cQwJxpx/office-push-pin.png' }} style={{ height: 25, width: 25 }} />
                                    :
                                    <Image source={{ uri: 'https://i.ibb.co/1bcvkCQ/pin.png' }} style={{ height: 25, width: 25 }} />
                                }
                            </View>
                        </TouchableOpacity>
                    )
                    break;
                case this.state.tagVerifikasi === value.tagVerifikasi && value.tagVerifikasi === true:
                    return (
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailDraftSuratKeluar', { nosuratmasuk: value.NoSeri })} key={index} style={{
                            height: 85,
                            width: '100%',
                            borderBottomWidth: 2,
                            borderBottomColor: '#E7EAEF',
                            flexDirection: 'row',
                            backgroundColor: value.tagVerifikasi===true ? '#83D1F5' : 'white' 
                        }}>
                            <View style={{ width: 60, height: 85, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold' }}>{value.id}</Text>
                            </View>
                            <View
                                style={{
                                    height: 85,
                                    width: 212,
                                    justifyContent: 'center',
                                }}
                            >
                                <Text style={{
                                    fontSize: 15,
                                    color: '#000',
                                    fontWeight: 'bold'
                                }}>{value.label}</Text>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#000' }}>{value.title}</Text>
                                <Text style={{ fontSize: 15, color: '#80878E' }}>{value.NoSeri}</Text>
                            </View>
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Text style={{
                                    paddingBottom: 10
                                }}>{value.date}</Text>
                                {value.tandai === true ?
                                    <Image source={{ uri: 'https://i.ibb.co/cQwJxpx/office-push-pin.png' }} style={{ height: 25, width: 25 }} />
                                    :
                                    <Image source={{ uri: 'https://i.ibb.co/1bcvkCQ/pin.png' }} style={{ height: 25, width: 25 }} />
                                }
                            </View>
                        </TouchableOpacity>
                    )
                    break;
                case this.state.tagApproved === value.tagApproved && value.tagApproved === true:
                    return (
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailDraftSuratKeluar', { nosuratmasuk: value.NoSeri })} key={index} style={{
                            height: 85,
                            width: '100%',
                            borderBottomWidth: 2,
                            borderBottomColor: '#E7EAEF',
                            flexDirection: 'row',
                            backgroundColor: value.tagApproved===true ? '#82CA9C' :  'white' 
                        }}>
                            <View style={{ width: 60, height: 85, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold' }}>{value.id}</Text>
                            </View>
                            <View
                                style={{
                                    height: 85,
                                    width: 212,
                                    justifyContent: 'center',
                                }}
                            >
                                <Text style={{
                                    fontSize: 15,
                                    color: '#000',
                                    fontWeight: 'bold'
                                }}>{value.label}</Text>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#000' }}>{value.title}</Text>
                                <Text style={{ fontSize: 15, color: '#80878E' }}>{value.NoSeri}</Text>
                            </View>
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Text style={{
                                    paddingBottom: 10
                                }}>{value.date}</Text>
                                {value.tagTandai === true ?
                                    <Image source={{ uri: 'https://i.ibb.co/cQwJxpx/office-push-pin.png' }} style={{ height: 25, width: 25 }} />
                                    :
                                    <Image source={{ uri: 'https://i.ibb.co/1bcvkCQ/pin.png' }} style={{ height: 25, width: 25 }} />
                                }
                            </View>
                        </TouchableOpacity>
                    )
                    break;
                case this.state.tagTandaTangan === value.tagTandaTangan && value.tagTandaTangan === true:
                    return (
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailDraftSuratKeluar', { nosuratmasuk: value.NoSeri })} key={index} style={{
                            height: 85,
                            width: '100%',
                            borderBottomWidth: 2,
                            borderBottomColor: '#E7EAEF',
                            flexDirection: 'row',
                            backgroundColor: value.tagTandaTangan===true ? '#F8C689' : 'white' 
                        }}>
                            <View style={{ width: 60, height: 85, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold' }}>{value.id}</Text>
                            </View>
                            <View
                                style={{
                                    height: 85,
                                    width: 212,
                                    justifyContent: 'center',
                                }}
                            >
                                <Text style={{
                                    fontSize: 15,
                                    color: '#000',
                                    fontWeight: 'bold'
                                }}>{value.label}</Text>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#000' }}>{value.title}</Text>
                                <Text style={{ fontSize: 15, color: '#80878E' }}>{value.NoSeri}</Text>
                            </View>
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Text style={{
                                    paddingBottom: 10
                                }}>{value.date}</Text>
                                {value.tagTandai === true ?
                                    <Image source={{ uri: 'https://i.ibb.co/cQwJxpx/office-push-pin.png' }} style={{ height: 25, width: 25 }} />
                                    :
                                    <Image source={{ uri: 'https://i.ibb.co/1bcvkCQ/pin.png' }} style={{ height: 25, width: 25 }} />
                                }
                            </View>
                        </TouchableOpacity>
                    )
                    break;
            }

        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.boxTitle}>
                        <Text style={styles.titleHeader}>Draft Surat Keluar</Text>
                        <View style={styles.boxIconTitle}>
                            <Icon name='help' size={25} color='white' />
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Notifikasi', {
                                tagDiskusi: false,
                                tagSuratMasuk: false,
                                tagSuratKeluar: true,
                                tagSuratCC: false,
                            })}>
                                <Icon name='notifications' size={25} color='white' />
                                <View style={styles.customBadge} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.labelName}>
                        <Icon name='inbox' size={80} color='#F3BA46' />
                        <View style={styles.boxCount}>
                            <Text style={styles.count}>18</Text>
                            <Text style={styles.desCount}>Belum dibaca</Text>
                        </View>
                    </View>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.boxTag}>
                        <TouchableOpacity onPress={() => this.setState({
                            tagVerifikasi: !this.state.tagVerifikasi,
                            tagApproved: false,
                            tagTandaTangan: false,
                            tagAll: this.state.tagApproved===true || this.state.tagTandaTangan && this.state.tagAll===false ? false : !this.state.tagAll
                        })} style={[styles.listTag, { backgroundColor: this.state.tagVerifikasi === true ? '#F3BA46' : 'transparent' }]}>
                            <Text style={{ fontSize: 11, color: this.state.tagVerifikasi === true ? 'white' : '#F3BA46', fontWeight: 'bold' }}>Verifikasi</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({
                            tagVerifikasi: false,
                            tagApproved: !this.state.tagApproved,
                            tagTandaTangan: false,
                            tagAll: this.state.tagVerifikasi===true || this.state.tagTandaTangan && this.state.tagAll===false ? false : !this.state.tagAll
                        })} style={[styles.listTag, { backgroundColor: this.state.tagApproved === true ? '#F3BA46' : 'transparent' }]}>
                            <Text style={{ fontSize: 11, color: this.state.tagApproved === true ? 'white' : '#F3BA46', fontWeight: 'bold' }}>Approved</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({
                            tagVerifikasi: false,
                            tagApproved: false,
                            tagTandaTangan: !this.state.tagTandaTangan,
                            tagAll: this.state.tagVerifikasi===true || this.state.tagApproved && this.state.tagAll===false ? false : !this.state.tagAll
                        })} style={[styles.listTag, { backgroundColor: this.state.tagTandaTangan === true ? '#F3BA46' : 'transparent' }]}>
                            <Text style={{ fontSize: 11, color: this.state.tagTandaTangan === true ? 'white' : '#F3BA46', fontWeight: 'bold' }}>Tanda Tangan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ modalVisible: !this.state.modalVisible })} style={[styles.listTag, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                            <Text style={{ fontSize: 11, color: '#F3BA46' }}>Filter</Text>
                            <View style={{
                                height: 18,
                                width: 18,
                                backgroundColor: '#F3BA46',
                                marginLeft: 7,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 3
                            }}>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        color: 'white',
                                        fontWeight: 'bold'
                                    }}
                                >2</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        height: 40,
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottomColor: '#E7EAEF',
                        borderBottomWidth: 2,
                    }}>
                        <TextInput
                            placeholder='Cari Draft Surat Keluar'
                            style={{ paddingLeft: 50 }}
                        />
                        <View style={{ paddingRight: 15 }}>
                            <Icon name='search' size={25} color='#727982' />
                        </View>
                    </View>
                </View>
                <View style={{
                    flex: 1,
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
                        this.setModalVisible(!this.state.modalVisible);
                    }}
                >
                    <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <View style={{
                            height: '50%',
                            width: '100%',
                            backgroundColor: 'white',
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            padding: 10
                        }}>
                            <View
                                style={{
                                    width: '100%',
                                    height: 20,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <View
                                    style={{
                                        height: 8,
                                        width: 50,
                                        backgroundColor: '#9FA6B0',
                                        borderRadius: 10
                                    }}
                                />
                            </View>
                            <View
                                style={{
                                    margin: 19
                                }}
                            >
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    color: '#000'
                                }}>Filter</Text>

                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: 15,
                                        color: '#000',
                                        paddingTop: 20
                                    }}
                                >Urutkan</Text>
                                <TouchableOpacity style={[styles.listTag, { backgroundColor: this.state.tagTerbaru === true ? '#F3BA46' : 'transparent', marginLeft: 0, marginTop: 5 }]}>
                                    <Text style={{ fontSize: 11, color: this.state.tagApproved === true ? 'white' : 'white', fontWeight: 'bold' }}>Terbaru</Text>
                                </TouchableOpacity>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: 15,
                                        color: '#000',
                                        paddingTop: 20
                                    }}
                                >Tampilkan</Text>
                                <View
                                    style={{
                                        flexDirection: 'row'
                                    }}
                                >
                                    <TouchableOpacity style={[styles.listTag, { backgroundColor: 'transparent' }]}>
                                        <Text style={{ fontSize: 11, color:'#F3BA46', fontWeight: 'bold' }}>Telah ditandai</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: 15,
                                        color: '#000',
                                        paddingTop: 20
                                    }}
                                >Draft Surat Keluar</Text>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        width: '100%',
                                        flexWrap: 'wrap'
                                    }}
                                >
                                    <TouchableOpacity style={[styles.listTag, { width: 80 }]}>
                                        <Text style={{ fontSize: 11, color: '#F3BA46', fontWeight: 'bold' }}>Verifikasi</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.listTag, { width: 80 }]}>
                                        <Text style={{ fontSize: 11, color: '#F3BA46', fontWeight: 'bold' }}>Approved</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.listTag, { width: 80 }]}>
                                        <Text style={{ fontSize: 11, color: '#F3BA46', fontWeight: 'bold' }}>Tanda Tangan</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

export default DraftSuratKeluar
